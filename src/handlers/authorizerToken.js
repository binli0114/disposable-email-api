const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");
const keySets = require("./keys.json");

const handler = async event => {
	console.log("authorizer token====>");
	console.log(JSON.stringify(event, undefined, 2));
	let Unauthorized = false;
	if (!event.authorizationToken) {
		Unauthorized = true;
	}
	const tokenParts = event.authorizationToken.split(" ");
	const tokenValue = tokenParts[1];

	if (!(tokenParts[0].toLowerCase() === "bearer" && tokenValue)) {
		// no auth token!
		//return "Unauthorized";
		Unauthorized = true;
	}
	if (Unauthorized) {
		console.log("Unauthorized");
		return {
			statusCode: 401,
			body: "Unauthorized"
		};
	}
	console.log(`token value: ${tokenValue}`);

	try {
		const { x5t } = jwtDecode(tokenValue, { header: true });
		console.log(`x5t: ${x5t}`);
		const foundKey = keySets.keys.find(keySet => {
			return keySet.x5t === x5t;
		});
		if (foundKey) {
			const x5c = foundKey.x5c[0];
			const cert = `-----BEGIN CERTIFICATE-----\n${x5c}\n-----END CERTIFICATE-----`;
			const verified = jwt.verify(tokenValue, cert);
			console.log(`verified: ${JSON.stringify(verified)}`);
			if (verified) {
				return generatePolicy("me", "Allow", event.methodArn);
			}
		}
	} catch (e) {
		return {
			statusCode: 500,
			body: "Server side error"
		};
	}

	return {
		statusCode: 401,
		body: "Unauthorized"
	};
};

const generatePolicy = function (principalId, effect, resource) {
	// Required output:
	const authResponse = {};
	authResponse.principalId = principalId;
	if (effect && resource) {
		const policyDocument = {};
		policyDocument.Version = "2012-10-17"; // default version
		policyDocument.Statement = [];
		const statementOne = {};
		statementOne.Action = "execute-api:Invoke"; // default action
		statementOne.Effect = effect;
		statementOne.Resource = resource;
		policyDocument.Statement[0] = statementOne;
		authResponse.policyDocument = policyDocument;
	}
	// Optional output with custom properties of the String, Number or Boolean type.
	authResponse.context = {
		stringKey: "stringval",
		numberKey: 123,
		booleanKey: true
	};
	return authResponse;
};

module.exports = {
	handler
};

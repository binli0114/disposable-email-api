const handler = async event => {
	console.log("authorizer====>");
	console.log(JSON.stringify(event, undefined, 2));
	const { accountId, requestId } = event.queryStringParameters;

	const condition = {};
	condition.IpAddress = {};
	console.log(`accountId:${accountId}  requestId:${requestId}`);
	if (accountId === "binli" && requestId === "abc123") {
		console.log("verified!");
		return generatePolicy("me", "Allow", event.methodArn);
	} else {
		return "Unauthorized";
	}
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

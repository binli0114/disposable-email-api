const { isRequestorHasAddress } = require("../services/dynamodb");
const { getSessionTimeDiffInMins } = require("../utils");

const getStatus = async event => {
	console.log(JSON.stringify(event, undefined, 2));
	const { pathParameters } = event;
	const { requestId } = pathParameters;

	if (requestId) {
		const foundItem = await isRequestorHasAddress(requestId);
		if (foundItem && foundItem.ttl) {
			const expiredIn = getSessionTimeDiffInMins(foundItem.ttl);
			const message = "email address already exists";
			return {
				statusCode: 200,
				body: JSON.stringify({
					message,
					address: foundItem.address,
					expiredIn
				})
			};
		}
	}

	return {
		statusCode: 200,
		body:
			"There is no valid email address, please click the [Create] button to create a new email address"
	};
};

module.exports = {
	getStatus
};

const {
	createEmailAddress,
	createSession,
	isRequestorHasAddress
} = require("../services/dynamodb");
const { getSessionTimeDiffInMins, getRequestIdFromContext } = require("../utils");
const main = async event => {
	const { body } = event;
	const { emailAddress, activityId, context } = JSON.parse(body);
	const requestId = getRequestIdFromContext(context);
	let message;

	if (requestId) {
		const foundItem = await isRequestorHasAddress(requestId);
		if (foundItem && foundItem.ttl) {
			const expiredIn = getSessionTimeDiffInMins(foundItem.ttl);
			message = "email address already exists";
			return {
				statusCode: 200,
				body: JSON.stringify({
					message,
					address: foundItem.address,
					expiredIn
				})
			};
		}
		if (emailAddress) {
			await createEmailAddress(emailAddress, activityId, requestId, context);
			message = "email address created";
			const sessionId = await createSession();

			return {
				statusCode: 200,
				body: JSON.stringify({
					message,
					sessionId
				})
			};
		}
	}

	return {
		statusCode: 400,
		body: "Invalid Request"
	};
};

module.exports = {
	main
};

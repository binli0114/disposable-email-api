const { isAddressExist, createEmailAddress, createSession } = require("../services/dynamodb");
const main = async event => {
	const { body } = event;
	const { emailAddress } = JSON.parse(body);

	if (emailAddress) {
		const emailExists = await isAddressExist(emailAddress);
		let message;
		if (emailExists) {
			message = "email address already exists";
		} else {
			await createEmailAddress(emailAddress);
			message = "email address created";
		}
		const sessionId = await createSession();

		return {
			statusCode: 200,
			body: JSON.stringify({
				message,
				sessionId
			})
		};
	}
	return {
		statusCode: 400,
		body: "Invalid Request"
	};
};

module.exports = {
	main
};

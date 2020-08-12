const { createEmailAddress } = require("../src/services/dynamodb");

(async () => {
	const emailAddress = "test@happyeme.com";
	await createEmailAddress(emailAddress);
})();

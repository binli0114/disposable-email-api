const { main } = require("../src/handlers/createEmail");
const context = require("../mocks/conversationContext.json");
(async () => {
	const body = {
		emailAddress: "test3@happyeme.com",
		activityId: "12345",
		context
	};
	const event = {
		body: JSON.stringify(body)
	};
	const result = await main(event);
	console.log(JSON.stringify(result, undefined, 2));
})();

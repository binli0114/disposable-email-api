const event = require("./authTokenEvent.json");
const { handler } = require("../src/handlers/authorizerToken");

(async () => {
	const res = await handler(event);
	console.log(JSON.stringify(res, undefined, 2));
})();

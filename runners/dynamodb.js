const { getSessionCount } = require("../src/services/dynamodb");
//const moment = require("moment");
(async () => {
	//const emailAddress = "test@happyeme.com";
	await getSessionCount();

	// const ttl = await isRequestorHasAddress("abc123");
	// if (ttl) {
	// 	const end = moment(ttl);
	// 	const duration = moment.duration(end.diff(Date.now()));
	// 	const minutes = duration.asMinutes();
	// 	console.log(`${minutes} to expired`);
	// }
})();

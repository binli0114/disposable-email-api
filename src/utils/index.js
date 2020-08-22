const moment = require("moment");

const getSessionTimeDiffInMins = ttl => {
	const end = moment(ttl);
	const duration = moment.duration(end.diff(Date.now()));
	return Math.round(duration.asMinutes());
};
const getRequestIdFromContext = context => {
	const activity = context["_activity"];
	const { from } = activity;
	const { id } = from;
	return id;
};
module.exports = {
	getSessionTimeDiffInMins,
	getRequestIdFromContext
};

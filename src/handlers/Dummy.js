const handler = async event => {
	console.log(JSON.stringify(event, undefined, 2));
	const responseBody = {
		email: "bin.li@conformity.com"
	};
	return {
		statusCode: 200,
		body: JSON.stringify(responseBody)
	};
};

module.exports = {
	handler
};

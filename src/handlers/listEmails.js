// eslint-disable-next-line no-unused-vars
const listEmails = async event => {
	return {
		statusCode: 200,
		body: JSON.stringify(["test1@happyeme.com", "test2@happyeme.com"])
	};
};

module.exports = {
	listEmails
};

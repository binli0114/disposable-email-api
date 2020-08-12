const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const awsConfig = () => {
	let config = { region: process.env.AWS_REGION };
	if (process.env.DYNAMODB_ENDPOINT_OVERRIDE && process.env.ENVIRONMENT !== "production") {
		config = {
			region: "localhost",
			endpoint: process.env.DYNAMODB_ENDPOINT_OVERRIDE
		};
	}
	return config;
};

const get = async params => {
	AWS.config.update(awsConfig());
	const docClient = new AWS.DynamoDB.DocumentClient({
		apiVersion: "2012-08-10"
	});
	return docClient.get(params).promise();
};

const put = async params => {
	AWS.config.update(awsConfig());
	const docClient = new AWS.DynamoDB.DocumentClient({
		apiVersion: "2012-08-10"
	});
	return docClient.put(params).promise();
};
const isAddressExist = async address => {
	const TableName = process.env.addressesTableName;
	const params = {
		TableName,
		Key: { address }
	};
	const { Item } = await get(params);
	if (Item) {
		const { ttl } = Item;
		if (ttl > Date.now()) {
			return true;
		}
	}
	return false;
};

const createEmailAddress = async address => {
	const mailboxTTL = parseInt(process.env.mailboxTTL || 3600);
	const ttl = moment().add(mailboxTTL, "seconds").unix();
	const TableName = process.env.addressesTableName;
	const params = {
		TableName,
		Item: {
			address,
			ttl
		}
	};
	return put(params);
};

const createSession = async () => {
	const sessionId = uuidv4();
	const sessionTTL = parseInt(process.env.sessionTTL || 600);
	const ttl = moment().add(sessionTTL, "seconds").unix();
	const TableName = process.env.sessionsTableName;
	const params = {
		TableName,
		Item: {
			sessionId,
			ttl
		}
	};
	await put(params);
	return sessionId;
};
module.exports = {
	get,
	put,
	isAddressExist,
	createEmailAddress,
	createSession
};

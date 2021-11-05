const { getSessionTimeDiffInMins } = require("../src/utils");
const moment = require("moment");
describe("utils", () => {
	describe("getSessionTimeDiffInMins", () => {
		it("should return 10 ", () => {
			const ttl = moment().add(600, "seconds").unix();
			const diff = getSessionTimeDiffInMins(ttl);
			expect(diff).toBe(10);
		});
	});
});

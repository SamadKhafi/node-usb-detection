var Promise = require('bluebird');

module.exports = function(time = 0) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

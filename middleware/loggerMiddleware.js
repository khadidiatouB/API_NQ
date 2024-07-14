const fs = require("fs");

const LoggerMiddleware = (req, res, next) => {
	console.log(`Logged  ${req.url} ${req.method} -- ${new Date()}`);
	console.log(`Tested ✅`);

	// Log dans un fichier, agent client
	const logMessage = `Logged ${req.method}  ${
		req.url
	}  -- ${new Date()} -- Agent: ${req.headers["user-agent"]} \r
	\n`;

	fs.appendFile("log.txt", logMessage, (err) => {
		if (err) {
			console.error(`Error writing to log file: ${err.message}`);
		} else {
			console.log("Saved!");
		}
	});

	// Pour passer au middleware suivant
	next();
};

module.exports = LoggerMiddleware;

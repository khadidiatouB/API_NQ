const swaggerJSDoc = require("swagger-jsdoc");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Nom de votre API",
			version: "1.0.0",
			description: "Description de votre API",
		},
	},
	apis: ["./routes/*.js"], // Spécifiez ici le chemin vers vos fichiers de routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

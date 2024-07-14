const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
	const token = req.headers["authorization"];

	if (!token) {
		return res.status(401).json({ error: "Access denied. No token provided." });
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: "Token invalide" });
		}

		// Ajoute les informations du token décodé à la requête
		req.user = decoded;
		next();
	});
};

module.exports = { verifyToken };

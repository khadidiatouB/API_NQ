const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
	const payload = {
		id: user.id,
		username: user.username,
	};

	return jwt.sign(payload, secret, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
	const token = req.headers["authorization"];

	if (!token) {
		return res.status(401).send("Access denied. No token provided.");
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
exports.refreshToken = (req, res) => {
	// Générer un nouveau token JWT à partir de l'ancien token
};

//
module.exports = { generateToken, verifyToken };

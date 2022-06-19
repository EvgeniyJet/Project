const { Trust } = require('../models/models');

class TrustController {

	async getOne(req, res) {
		const { id } = req.query;
		const Trust = await Trust.findByPk(id) || { message: 'user is not defined' };
		return res.send(trust)
	}

	async getAll(req, res) {
		const Trusted = await Trust.findAll();
		return res.send(trusted)
	}
}

module.exports = new TrustController();
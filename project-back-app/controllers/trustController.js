const { Trust } = require('../models/models');

class TrustController {

	async getAll(req, res) {
		const trusted = await Trust.findAll();
		return res.send(trusted)
	}
}

module.exports = new TrustController();
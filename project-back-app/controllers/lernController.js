const { Lern } = require('../models/models');

class LernController {

	async getAll(req, res) {
		const learning = await Lern.findAll();
		return res.send(learning)

	}
}

module.exports = new LernController();
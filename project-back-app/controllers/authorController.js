const { AuthorsBook } = require('../models/models');

class AuthorController {

	async getAll(req, res) {
		const authors = await AuthorsBook.findAll();
		return res.send(authors)

	}
}

module.exports = new AuthorController();
const { Author } = require('../models/models');

class AuthorController {

	async getOne(req, res) {
		const { id } = req.query;
		const author = await Author.findByPk(id) || { message: 'user is not defined' };
		return res.send(author)
	}

	async getAll(req, res) {
		const authors = await Author.findAll();
		return res.send(authors)
	}
}

module.exports = new AuthorController();
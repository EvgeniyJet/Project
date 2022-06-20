const { Article } = require('../models/models');

class ArticleController {

	async getAll(req, res) {
		const articles = await Article.findAll();
		return res.send(articles)

	}
}

module.exports = new ArticleController();
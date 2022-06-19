const express = require('express');
require('dotenv').config();
require('./models/models');

const cors = require('cors');
const authorRouter = require('./routes/authorRouter');

const sequelize = require('./db');
const { AuthorsBook } = require('./models/models');
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/author', authorRouter);

// app.get('/', async (req, res) => {
// 	const authors = await AuthorsBook.findAll();
// 	console.log(authors);
// 	res.send(authors)
// })

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log('Server started...')
		})
	} catch (err) {
		console.log(err);
	}
}
start();




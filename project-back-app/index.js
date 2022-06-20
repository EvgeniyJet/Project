const express = require('express');
require('dotenv').config();
require('./models/models');

const cors = require('cors');
const authorRouter = require('./routes/authorRouter');
const articleRouter = require('./routes/articleRouter');
const lernRouter = require('./routes/lernRouter');
const trustRouter = require('./routes/trustRouter');

const sequelize = require('./db');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/author', authorRouter);
app.use('/api/article', articleRouter);
app.use('/api/lern', lernRouter);
app.use('/api/trust', trustRouter);


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




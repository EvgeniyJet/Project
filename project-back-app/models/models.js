const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const { INTEGER, STRING, TEXT } = DataTypes;

const AuthorsBook = sequelize.define('AuthorsBook', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	nameBook: { type: STRING, allowNull: false },
	linkBook: { type: STRING, allowNull: false },
	price: { type: STRING, allowNull: false },
	bookDesc: { type: STRING, allowNull: false }
});

const Article = sequelize.define('Article', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: STRING, allowNull: false },
	body: { type: STRING, allowNull: false },
	data: { type: STRING, allowNull: false },
	linkIMG: { type: STRING, allowNull: false }
});

const Trust = sequelize.define('Trust', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	linkLogo: { type: STRING, allowNull: false },
	nameComp: { type: STRING, allowNull: false },
	descComp: { type: STRING, allowNull: false }
});

const Lern = sequelize.define('Lern', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	number: { type: INTEGER, allowNull: false },
	desc: { type: STRING, allowNull: false }
});



module.exports = { Article, AuthorsBook, Trust, Lern }
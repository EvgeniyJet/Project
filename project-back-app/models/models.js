const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const { INTEGER, TEXT } = DataTypes;

const AuthorsBook = sequelize.define('AuthorsBook', {
	linkBook: { type: TEXT, allowNull: false },
	nameBook: { type: TEXT, allowNull: false },
	price: { type: TEXT, allowNull: false },
	bookDesc: { type: TEXT, allowNull: false },
	id: { type: INTEGER, primaryKey: true, autoIncrement: false }
}, {
	freezeTableName: true
});

const Article = sequelize.define('Article', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: TEXT, allowNull: false },
	body: { type: TEXT, allowNull: false },
	data: { type: TEXT, allowNull: false },
	linkIMG: { type: TEXT, allowNull: false }
}, {
	freezeTableName: true
});

const Trust = sequelize.define('Trust', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: false },
	linkLogo: { type: TEXT, allowNull: false },
	nameComp: { type: TEXT, allowNull: false },
	descComp: { type: TEXT, allowNull: false }
}, {
	freezeTableName: true
});

const Lern = sequelize.define('Lern', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	numbers: { type: TEXT, allowNull: false },
	desc: { type: TEXT, allowNull: false }
}, {
	freezeTableName: true
});



module.exports = { Article, AuthorsBook, Trust, Lern }
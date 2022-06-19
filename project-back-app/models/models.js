const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const { INTEGER, STRING, TEXT } = DataTypes;

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
	title: { type: STRING, allowNull: false },
	body: { type: STRING, allowNull: false },
	data: { type: STRING, allowNull: false },
	linkIMG: { type: STRING, allowNull: false }
}, {
	freezeTableName: true
});

const Trust = sequelize.define('Trust', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	linkLogo: { type: STRING, allowNull: false },
	nameComp: { type: STRING, allowNull: false },
	descComp: { type: STRING, allowNull: false }
}, {
	freezeTableName: true
});

const Lern = sequelize.define('Lern', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	number: { type: INTEGER, allowNull: false },
	desc: { type: STRING, allowNull: false }
}, {
	freezeTableName: true
});



module.exports = { Article, AuthorsBook, Trust, Lern }
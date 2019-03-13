'use strict';
module.exports = (sequelize, DataTypes) => {
	const AuthorsBook = sequelize.define(
		'AuthorsBook',
		{
			authorId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			bookId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{ paranoid: true },
	);
	AuthorsBook.associate = function(models) {
		// associations can be defined here
	};
	return AuthorsBook;
};

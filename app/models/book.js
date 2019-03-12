'use strict';
module.exports = (sequelize, DataTypes) => {
	const Book = sequelize.define(
		'Book',
		{
			name: { type: DataTypes.STRING, allowNull: false },
			volume: { type: DataTypes.STRING, allowNull: false },
			description: { type: DataTypes.TEXT, allowNull: false },
			imgURL: DataTypes.STRING,
			maxQuantity: {
				type: DataTypes.INTEGER,
				defaultValue: 5,
				validate: { min: 0 },
			},
			availableQuantity: {
				type: DataTypes.INTEGER,
				defaultValue: 5,
				validate: { min: 0 },
			},
		},
		{ paranoid: true },
	);
	Book.associate = (models) => {
		Book.belongsToMany(models.Author, {
			as: 'authors',
			through: 'AuthorsBooks',
			foreignKey: 'bookId',
		});
	};
	return Book;
};

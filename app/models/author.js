'use strict';
module.exports = (sequelize, DataTypes) => {
	const Author = sequelize.define(
		'Author',
		{
			firstName: { type: DataTypes.STRING, allowNull: false },
			lastName: { type: DataTypes.STRING, allowNull: false },
		},
		{ paranoid: true },
	);
	Author.associate = (models) => {
		Author.belongsToMany(models.Book, {
			as: 'books',
			through: 'AuthorsBooks',
			foreignKey: 'authorId',
		});
	};

	return Author;
};

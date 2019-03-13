'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('AuthorsBooks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			authorId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'authors',
					key: 'id',
				},
			},
			bookId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'books',
					key: 'id',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deletedAt: {
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('AuthorsBooks');
	},
};

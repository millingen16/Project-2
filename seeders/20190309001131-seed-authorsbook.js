'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'AuthorsBooks',
			[
				{
					authorId: 1,
					bookId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 2,
					bookId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 3,
					bookId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 4,
					bookId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 5,
					bookId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 6,
					bookId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 7,
					bookId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 8,
					bookId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 9,
					bookId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 10,
					bookId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 11,
					bookId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 12,
					bookId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 13,
					bookId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 14,
					bookId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 15,
					bookId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 16,
					bookId: 16,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 17,
					bookId: 17,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 18,
					bookId: 18,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 19,
					bookId: 19,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					authorId: 20,
					bookId: 20,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('AuthorsBooks', null, {});
	},
};

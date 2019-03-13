'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Authors',
			[
				{
					firstName: 'Kristina',
					lastName: 'McMorris',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Louisa',
					lastName: 'Morgan',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Alyssa',
					lastName: 'Sheinmel',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Heidi',
					lastName: 'Perks',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Julia',
					lastName: 'Kelly',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Delia',
					lastName: 'Owens',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Michelle',
					lastName: 'Obama',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Jessica',
					lastName: 'Townsend',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Kerri',
					lastName: 'Maniscalco',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'J.P',
					lastName: 'Smith',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Nicholas',
					lastName: 'Sparks',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Mechthild',
					lastName: 'Glaser',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Natasha',
					lastName: 'Ngan',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Kristin',
					lastName: 'Harmel',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Pam',
					lastName: 'Jenoff',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Veronique',
					lastName: 'Petit',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Greer',
					lastName: 'Hendricks',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Megan',
					lastName: 'Miranda',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Liz',
					lastName: 'Kessler',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Tara',
					lastName: 'Westover',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Authors', null, {});
	},
};

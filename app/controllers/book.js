const Book = require('../models').Book,
	Author = require('../models').Author,
	Op = require('sequelize').Op;

module.exports = {
	list() {
		return Book.findAll({
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((books) => books)
			.catch((error) => error);
	},

	getByTerm(term) {
		return Book.findAll({
			where: { name: { [Op.like]: '%' + term + '%' } },
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((books) => books)
			.catch((error) => error);
	},

	getById(id) {
		return Book.findById(id, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => book)
			.catch((error) => error);
	},

	add(newBook) {
		return Book.create({
			name: newBook.name,
			volume: newBook.volume,
			description: newBook.description,
			imgURL: newBook.imgURL,
			maxQuantity: newBook.maxQuantity,
			availableQuantity: newBook.availableQuantity,
		})
			.then((newBook, book) => {
				Author.findById(book.id).then((author) => {
					if (!author) {
						book.addAuthor(newBook.author);
					}
					return book;
				});
			})
			.catch((error) => error);
	},

	addAuthor(id) {
		return Book.findById(id, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return null;
				}
				Author.findById(id).then((author) => {
					if (!author) {
						return null;
					}
					book.addAuthor(author);
					return book;
				});
			})
			.catch((error) => error);
	},
	update(id, currentBook) {
		return Book.findById(id, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return null;
				}
				return book
					.update({
						name: currentBook.name,
						volume: currentBook.volume,
						description: currentBook.description,
						imgURL: currentBook.imgURL,
						maxQuantity: currentBook.maxQuantity,
						availableQuantity: currentBook.availableQuantity,
					})
					.then((book) => book)
					.catch((error) => error);
			})
			.catch((error) => error);
	},

	delete(id) {
		return Book.findById(id)
			.then((book) => {
				if (!book) {
					return null;
				}
				return book
					.destroy()
					.then(() => {
						msg: 'Book Deleted';
					})
					.catch((error) => error);
			})
			.catch((error) => error);
	},
};

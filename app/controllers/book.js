<<<<<<< HEAD
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
=======
const Book = require('../models').Book,
	Author = require('../models').Author;

module.exports = {
	list(req, res) {
		return Book.findAll({
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((books) => {
				console.log(JSON.stringify(books));

				res.status(200).render('viewBook', { books });
			})
			.catch((error) => {
				res.status(400).send(error);
			});
	},

	getById(req, res) {
		return Book.findById(req.params.id, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return res.status(404).send({
						message: 'Book Not Found',
					});
				}
				return res.status(200).send(book);
			})
			.catch((error) => res.status(400).send(error));
	},

	add(req, res) {
		return Book.create({
			name: req.body.name,
			volume: req.body.volume,
			description: req.body.description,
			imgURL: req.body.imgURL,
			maxQuantity: req.body.maxQuantity,
			availableQuantity: req.body.availableQuantity,
		})
			.then((book) => res.status(201).send(book))
			.catch((error) => res.status(400).send(error));
	},

	addAuthor(req, res) {
		return Book.findById(req.body.bookId, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return res.status(404).send({
						message: 'Book Not Found',
					});
				}
				Author.findById(req.body.bookId).then((author) => {
					if (!author) {
						return res.status(404).send({
							message: 'Author Not Found',
						});
					}
					book.addAuthor(author);
					return res.status(200).send(book);
				});
			})
			.catch((error) => res.status(400).send(error));
	},
	update(req, res) {
		return Book.findById(req.params.id, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return res.status(404).send({
						message: 'Book Not Found',
					});
				}
				return book
					.update({
						name: req.body.name,
						volume: req.body.volume,
						description: req.body.description,
						imgURL: req.body.imgURL,
						maxQuantity: req.body.maxQuantity,
						availableQuantity: req.body.availableQuantity,
					})
					.then(() => res.status(200).send(book))
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},

	delete(req, res) {
		return Book.findById(req.params.id)
			.then((book) => {
				if (!book) {
					return res.status(400).send({
						message: 'Book Not Found',
					});
				}
				return book
					.destroy()
					.then(() => res.status(204).send())
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},
};
>>>>>>> 93ec6d8d424fcd8adfe20ecfa9d7e372529365a8

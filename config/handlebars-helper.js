const register = function(Handlebars) {
	const helpers = {
		ifeq: function(a, b, options) {
			if (a === b) {
				return options.fn(this);
			}
			return options.inverse(this);
		},
		join: function(array, sep, options) {
			//console.log(JSON.stringify(array));
			if (array) {
				return array
					.map(function(item) {
						return options.fn(item);
					})
					.join(sep);
			}
		},
		ifCond: function(v1, operator, v2, options) {
			switch (operator) {
				case '==':
					return v1 == v2 ? options.fn(this) : options.inverse(this);
				case '===':
					return v1 === v2 ? options.fn(this) : options.inverse(this);
				case '!=':
					return v1 != v2 ? options.fn(this) : options.inverse(this);
				case '!==':
					return v1 !== v2 ? options.fn(this) : options.inverse(this);
				case '<':
					return v1 < v2 ? options.fn(this) : options.inverse(this);
				case '<=':
					return v1 <= v2 ? options.fn(this) : options.inverse(this);
				case '>':
					return v1 > v2 ? options.fn(this) : options.inverse(this);
				case '>=':
					return v1 >= v2 ? options.fn(this) : options.inverse(this);
				case '&&':
					return v1 && v2 ? options.fn(this) : options.inverse(this);
				case '||':
					return v1 || v2 ? options.fn(this) : options.inverse(this);
				default:
					return options.inverse(this);
			}
		},
	};

	if (Handlebars && typeof Handlebars.registerHelper === 'function') {
		// register helpers
		for (let prop in helpers) {
			Handlebars.registerHelper(prop, helpers[prop]);
		}
	} else {
		// just return helpers object if we can't register helpers here
		return helpers;
	}
};

module.exports.register = register;
module.exports.helpers = register(null);

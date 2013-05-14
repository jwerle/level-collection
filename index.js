/**
 * Module Dependencies
 */
var draft   = require('draft')
  , isArray = Array.isArray

/**
 * Exports
 */
module.exports = collection;

/**
 * CHecks whether a given input is in an array
 *
 * @api private
 * @param {Array} array
 * @param {Mixed} needle
 */
function inArray (array, needle) {
  return !!~array.indexOf(needle);
}

/**
 * Creates a collection based on a model from a defined schema
 *
 * @api public
 * @param {Function|Object} descriptor (optional)
 */
function collection (descriptor) {
	var Model, schema, collectionSchema, collectionModel, collectionInstance
	if (typeof descriptor === 'function') {
		Model = descriptor
	}
	else if (typeof descriptor === 'object') {
		if (descriptor instanceof draft.Schema) {
			Model = descriptor.createModel();
		}
		else {
			schema = new draft.Schema(descriptor);
			Model = schema.createModel();
		}
	}

	if (Model === undefined) {
		collectionSchema = new draft.Schema({collection: []})
	}
	else if (typeof Model === 'function') {
		collectionSchema = new draft.Schema({collection: [Model]})
	}
	else {
		throw new Error("Unable to build collection schema. Invalid descriptor or unknown error occured.");
	}

	collectionModel = collectionSchema.createModel();
	collectionInstance = new collectionModel();
	return collectionInstance.collection;	
}
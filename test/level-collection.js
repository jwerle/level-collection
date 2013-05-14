describe('collection', function () {
	var collection = require('../')
		,	assert = require('assert')

	it("Should create an untyped collection", function () {
		var col = collection()
		col.push('foo');
		assert.ok(col.pop() === 'foo');
		col.push(0);
		assert.ok(col.pop() === 0);
		col.push(true);
		assert.ok(col.pop() === true)
		col.push(new Date);
		assert.ok(col.pop() instanceof Date)
		assert.ok(!col.length)
	});

	it("Should create a typed collection", function () {
		var col = collection(Date)
		col.push('foo');
		assert.ok(!col.length);
		col.push(123);
		assert.ok(!col.length);
		col.push(true);
		assert.ok(!col.length);
		col.push({});
		assert.ok(!col.length);
		col.push([]);
		assert.ok(!col.length);
		col.push(new Date);
		assert.ok(col.pop() instanceof Date);
		assert.ok(!col.length);
	});
});
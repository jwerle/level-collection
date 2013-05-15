level-collection
=====

<img src="http://mattyfund.org/files/2011/12/cartoon-kids-e1348687182543.jpg" alt="collection" style="width: 400px;"/>

Collections based on [draft](https://github.com/jwerle/draft) for LevelDB and like interfaces

[![Build Status](https://travis-ci.org/jwerle/level-collection.png?branch=master)](https://travis-ci.org/jwerle/level-collection)
[![browser support](https://ci.testling.com/jwerle/level-collection.png)](https://ci.testling.com/jwerle/level-collection)

# level-collection

## install

*nodejs*

```sh
$ npm install level-collection --save
```

*component*

```sh
$ component install jwerle/level-collection
```

*bower*

```sh
$ bower install level-collection
```

*browser*

```html
<script type="text/javascript" src="https://raw.github.com/jwerle/level-collection/master/level-collection.min.js"></script>
```

## usage

Creating a collection is super simple and it utilizes the power of [draft](https://github.com/jwerle/draft). Your collections can be typed using any constructor, even ones generated from `draft` or from [level-model](https://github.com/jwerle/level-model)

All collections will pass array validation, but they are not *true* arrays. The methods inherited from `Array` are:

```js
concat, every, filter, forEach, indexOf, join, lastIndexOf, map, pop,
push, reduce, reduceRight, reverse, shift, slice, some, sort, splice,
toString, unshift, valueOf 
```

See more about [Arrays on MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array)

So if you know how to use arrays you already know how to use collections.

```js
var collection = require('level-collection')
// will accept any data type
var generic = collection();

generic.push(123); // will work
generic.push('456'); // will work

// will accept only instances of User
var users = collection(User);

users.push(123); // will not work
users.push(new User(data)); // will work

// will accept only instances of Post
var posts = collection(Post);

posts.push(new User(data)); // will not work
posts.push(new Post(data)); // will work

// will accept only instances of Date
var dates = collection(Date);

dates.push(new Post(data)); // will not work
dates.push(new Date()); // will work
```

## api

### LevelCollection

Generic LevelCollection constructor

*Inherits from [Array](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array)*

#### extending collection prototype

You can easily extend the LevelCollection prototype directly

*example*

```js
var LevelCollection = require('level-collection').LevelCollection

LevelCollection.prototype.first = function () {
	return this[0];
};

LevelCollection.prototype.last = function () {
	return this.length? this[this.length - 1] : this.first();
};
```

## license

MIT
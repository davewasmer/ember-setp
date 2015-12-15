# ember-setp

It's like `mkdir -p`, but for `Ember.Object`.

## Installation

```sh
$ ember install ember-setp
```

## Usage

Just import and use like you would a regular `Ember.set()` call:

```js
import setp from 'ember-setp';

let book = Ember.Object.create();

// setp will create the intermediate objects (in this case, the `author` object)
setp(book, 'author.firstName', 'Dave');

console.log(get(book, 'author'));  //  { firstName: 'Dave' }
```

`setp()` also handles arrays, and will create intermediate arrays for you as well:

```js
import setp from 'ember-setp';

let book = Ember.Object.create();

// setp will create the intermediate objects (in this case, the `author` object)
setp(book, 'reviews.0.summary', 'It was a great book!');

console.log(get(book, 'reviews'));  //  [ { summary: 'It was a great book!' } ]
```

## Implementation

`setp()` will step through each segment of the path you are trying to set (i.e. for `'book.author.firstName'`, it will step through `book` and `author`). If that segment doesn't exist (technically, is `null` or `undefined`), it will create an empty object at that intermediate path. If any segment is a number, it assumes it is an array index. If no array exists at that path, one will be created.

**Caveats**: there's two big caveats to using `setp()`:

* Your property names can't have `.` in them. That's _proabably_ a really bad idea anyway. `setp()` will treat a property with `.` in it as a nested property.
* You can't use numeric property names (i.e. just `'3'` as a property name). Another probably bad idea anyway, but `setp()` will confuse it for an array.

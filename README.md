# schema-props

**JSON Schema** is a vocabulary that allows you to **annotate** and **validate** JSON documents.

`schema-props` allows you to **annotate** conveniently and programmatically.

It is inspired by [`typed-props`](https://github.com/rumkin/typed-props).



# Installation

Install from NPM:

```bash
npm install schema-props
```

`schema-props` can be then imported as a Node.js module:

```javascript
const Schema = require('schema-props');
```



# Usage

`schema-props` is implemented as a simple `class` named `SchemaProps`.

You construct the class as normal:

```javascript
const mySimpleSchema = new Schema();
```


But some static getter methods exist for the different types, which will generate a `new SchemaProps` and assign the type automatically:
```javascript
const schemaWithNullType = Schema.Null;
const schemaWithBooleanType = Schema.Boolean;
const schemaWithObjectType = Schema.Object;
const schemaWithArrayType = Schema.Array;
const schemaWithNumberType = Schema.Number;
const schemaWithStringType = Schema.String;
const schemaWithIntegerType = Schema.Integer;
```


The API is designed so that you can chain together methods/getters to create your JSON Schema in a convenient way:

```javascript
const example = Schema.Object.Title('An object with two properties').Properties(['page', 'content']);
```

`example` is now an instance of SchemaProps with our settings and can be turned into JSON: (`JSON.stringify(example, null, '\t')`)

```json
{
	"type": "object",
	"title": "An object with two properties",
	"properties": [
		"page",
		"content"
	]
}
```



# Documentation

Full documentation is a work in progress, but will effectively match the same as the JSON Schema.



# Roadmap

For the future I am planning of a way to **validate** arbritray JavaScript objects against SchemaProps.
The validation should indicate the nature and location of one or more failures.


# Contact

If you have any specific ideas or needs, please feel free to fork this repository and/or contact me:

- [@Nexii](https://twitter.com/Nexii)
- [File an issue](../../issues/new)
- [Fork this repository](../../fork)






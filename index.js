// TODO: Check against what is expected from JSON Schema specification: http://json-schema.org/latest/json-schema-validation.html

class SchemaProps {
	constructor(raw) {
		Object.assign(this, raw);
	}
	
	Title(title) { this.title = title; return this }
	Description(description) { this.description = description; return this }
	Default(value) { this.default = value; return this }
	Examples(examples) { this.examples = examples; return this }
	
	Type(type) { // type is string or array of strings
		if(!(this && this instanceof SchemaProps)) return new SchemaProps().Type(type);
		
		if(!this.type) this.type = type;
		else
		{
			if(!Array.isArray(this.type)) this.type = [this.type];
			
			if(Array.isArray(type)) type.forEach(t => this.Type(t));
			else if(!this.type.includes(type)) this.type.push(type);
		}
		
		return this;
	}
	
	static get Null() { return new SchemaProps().Type('null') }
	static get Boolean() { return new SchemaProps().Type('boolean') }
	static get Object() { return new SchemaProps().Type('object') }
	static get Array() { return new SchemaProps().Type('array') }
	static get Number() { return new SchemaProps().Type('number') }
	static get String() { return new SchemaProps().Type('string') }
	static get Integer() { return new SchemaProps().Type('integer') }
	
	get Null() { return this.Type('null') }
	get Boolean() { return this.Type('boolean') }
	get Object() { return this.Type('object') }
	get Array() { return this.Type('array') }
	get Number() { return this.Type('number') }
	get String() { return this.Type('string') }
	get Integer() { return this.Type('integer') }
	
	Required(required) {
		if(!required)
		{
			delete this.required;
			return this;
		}
		
		else if(!this.required) this.required = [];
		Array.from(arguments).forEach(key => {
			if(!this.required.includes(key)) this.required.push(key);
		});
		
		return this;
	}
	
	Properties(properties) { this.properties = properties; return this }
	MaxProperties(max) { this.maxProperties = max; return this }
	MinProperties(min) { this.minProperties = min; return this }
	
	Dependencies(dependencies) { this.dependencies = dependencies; return this }
	
	Items(items) { this.items = items; return this }
	MaxItems(max) { this.maxItems = max; return this }
	MinItems(min) { this.minItems = min; return this }
	UniqueItems(unique) { this.uniqueItems = unique; return this }
	Contains(contains) { this.contains = contains; return this }
	
	MaxLength(max) { this.maxLength = max; return this }
	MinLength(min) { this.minLength = min; return this }
	
	Enum(enumeration) {
		if(arguments.length === 1 && Array.isArray(enumeration))
		{
			this.enum = enumeration;
		}
		
		else
		{
			this.enum = Array.from(arguments);
		}
		return this;
	}
	Const(constant)  { this.const = constant; return this }
	AllOf(allOf)  { this.allOf = allOf; return this }
	AnyOf(anyOf)  { this.anyOf = anyOf; return this }
	OneOf(oneOf) { this.oneOf = oneOf; return this }
	Not(not) { this.not = not; return this }
}


module.exports = SchemaProps;

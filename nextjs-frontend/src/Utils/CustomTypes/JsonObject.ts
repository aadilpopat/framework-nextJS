type JsonObject = {
	[key: string]:
		| string
		| number
		| boolean
		| JsonObject
		| null
		| Array<JsonObject>;
};

export default JsonObject;

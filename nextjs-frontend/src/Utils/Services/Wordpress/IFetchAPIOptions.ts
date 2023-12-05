import JsonObject from '@/Utils/CustomTypes/JsonObject';

interface IFetchAPIOptions {
	variables: JsonObject;
	revalidate: false | number;
}

export default IFetchAPIOptions;

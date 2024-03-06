import HttpMethod from "./HttpMethod";
import { HTTP_SUCCESS_STATUS } from "./ResponseStatus";

import type ErrorResponse from "./ErrorResponse";

interface Fetch {
	path: string | RequestInfo;
	body?: any;
	method?: HttpMethod;
	mode?: RequestMode;
	extraHeaders?: any;
}

interface PetitionI extends Omit<Fetch, "extraHeaders" | "method"> {
	headers?: any;
}

const parseError = async (response: Response): Promise<ErrorResponse> => {
	let error: ErrorResponse;
	try {
		const errorJson = await response.json();
		error = {
			status: response.status,
			error: errorJson.errorCode,
			message: errorJson.error || "",
		};
	} catch (e) {
		error = {
			status: response.status,
			error: response.statusText,
			message: "",
		};
	}

	return error;
};

const createResponse = async (response: Response): Promise<any> => {
	const responseStatus = response.status;
	let result: any;
	if (!HTTP_SUCCESS_STATUS.includes(responseStatus)) {
		const responseData = await parseError(response);
		throw responseData;
	}
	try {
		result = await response.json();
	} catch (e) {
		result = response;
	}
	return result;
};

const fetchRequest = ({
	path,
	body,
	method,
	mode,
	extraHeaders,
}: Fetch): Promise<any> =>
	new Promise((resolve, reject) => {
		const sendInformation = body
			? {
					method: method,
					body: JSON.stringify(body),
			  }
			: {};
		fetch(path, {
			mode: mode || "cors",
			headers: {
				...extraHeaders,
			},
			...sendInformation,
		})
			.then((response) => {
				return createResponse(response);
			})
			.then(resolve)
			.catch(reject);
	});

export const get = ({ path, headers, mode }: PetitionI) =>
	fetchRequest({ path, extraHeaders: headers, mode });

export const post = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.POST,
		extraHeaders: headers,
		mode,
	});

export const put = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.PUT,
		extraHeaders: headers,
		mode,
	});

export const patch = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.PATCH,
		extraHeaders: headers,
		mode,
	});

export const delet = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.DELETE,
		extraHeaders: headers,
		mode,
	});

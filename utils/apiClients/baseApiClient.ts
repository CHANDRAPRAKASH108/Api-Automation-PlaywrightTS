import { APIRequestContext, APIResponse } from "playwright";
import { HttpMethod } from "../../enum/frameworkEnum";
import { config } from "../../config/config";
import { getDefaultHeaders } from "../helpers/baseHelper";

export async function apiClient(request: APIRequestContext,
    endpoint: string,
    method: HttpMethod,
    authToken: string,
    additionalHeaders?: Record<string, string>,
    queryParam?: Record<string, string>,
    requestBody?: unknown
): Promise<APIResponse> {
    const fullUrl = config.apiConfig.apiBaseUrl + endpoint;
    const response = await request[method](fullUrl, {
        headers: {
            ... await getDefaultHeaders(authToken),
            ...additionalHeaders
        },
        params: queryParam,
        data: requestBody
    });
    console.log(
        `API Request for ${fullUrl}`,
        `Method: ${method}`,
        `Param: ${queryParam}`,
        `Payload: ${requestBody}`,
        `Header: ${additionalHeaders}`
    )
    console.log(`Logging API Response ${fullUrl}`);
    return response;
}
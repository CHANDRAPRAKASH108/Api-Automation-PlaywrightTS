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
    console.log(`api client ${config.apiConfig.apiBaseUrl}`)
    const response = await request[method](config.apiConfig.apiBaseUrl + endpoint, {
        headers: {
            ... await getDefaultHeaders(authToken),
            ...additionalHeaders
        },
        params: queryParam,
        data: requestBody
    });
    console.log(`Logging API Response ${endpoint}`);
    console.log(await response.json());
    return response;
}
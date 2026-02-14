import { APIRequestContext, APIResponse } from "playwright";
import { apiClient } from "../apiClients/baseApiClient";
import { HttpMethod } from "../../enum/frameworkEnum";
import { expect } from "playwright/test";
import {AnySchema, Ajv as schemaValidator} from "ajv";
import { json } from "node:stream/consumers";

export async function getDefaultHeaders(token: string) {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
}

export async function getRequest(request: APIRequestContext,
    endpoint: string,
    token: string,
    additionalHeaders?: Record<string, string>,
    queryParam?: Record<string, string>
): Promise<APIResponse> {
    return await apiClient(request, endpoint,
        HttpMethod.GET, token,
        additionalHeaders,
        queryParam,
        undefined
    )
}

export async function expect200Response(response: APIResponse) {
    expect(response.status()).toBe(200)
}

export async function validateResponseSchema(responseBody: unknown, schemaObj: AnySchema) {
    const schemaValObj = new schemaValidator();
    const validate = schemaValObj.compile(schemaObj);
    const valid = validate(responseBody)
    if(!valid){
        throw new Error(JSON.stringify(validate.errors, null, 2))
    }
}
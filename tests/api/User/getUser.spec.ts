import { USER_ENDPOINT } from "../../../utils/constants/endpointConstant";
import { expect200Response, getRequest, validateResponseSchema } from "../../../utils/helpers/baseHelper";
import { test } from "../../fixture/baseFixture";
import userSchema from "../../../utils/json-schema/users-schema.json"
import { queryDB } from "../../../db/dbManager";
import { queryUser } from "../../../db/sqlScript";

test("Fetch All Users", { tag: '@regression' }, async ({ request, authToken, databasePool }) => {
    const response = await getRequest(request, USER_ENDPOINT, authToken, undefined, {
        'page': '1',
        'limit': '10'
    })
    await expect200Response(response);
    const responseBody = await response.json();
    await validateResponseSchema(responseBody.data, userSchema);
    const dbResult = await queryDB(databasePool, queryUser());
    console.log(dbResult)
})
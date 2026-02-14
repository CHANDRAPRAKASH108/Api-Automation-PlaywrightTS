import { USER_ENDPOINT } from "../../../utils/constants/endpointConstant";
import { expect200Response, getRequest } from "../../../utils/helpers/baseHelper";
import { test } from "../../fixture/baseFixture";

test("Fetch All Users", { tag: '@regression' }, async ({ request, authToken }) => {
    const response = await getRequest(request, USER_ENDPOINT, authToken, undefined, {
        'page': '1',
        'limit': '10'
    })
    await expect200Response(response);
})
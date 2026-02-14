import { test as base, request as PlaywrightRequest } from "playwright/test";
import { getValidToken } from "../../utils/apiClients/authApiClient";


export const test = base.extend<
    {},
    {
        authToken: string
    }
>({
    authToken: [
        async ({ }, use, workerInfo) => {
            console.log(`Generating bearer token ${workerInfo}`)
            await use(await getValidToken())
        }, {
            scope: 'worker'
        }
    ]
})
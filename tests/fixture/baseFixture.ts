import { test as base, request as PlaywrightRequest } from "playwright/test";
import { getValidToken } from "../../utils/apiClients/authApiClient";
import { Pool } from "mysql2/promise";
import { closeConnection, createConnection, queryDB } from "../../db/dbManager";


export const test = base.extend<
    {},
    {
        authToken: string,
        databasePool: Pool
    }
>({
    authToken: [
        async ({ }, use, workerInfo) => {
            console.log(`Generating bearer token ${workerInfo.workerIndex}`)
            await use(await getValidToken())
        }, {
            scope: 'worker'
        }
    ],
    databasePool: [
        async({}, use, workerInfo) => {
            console.log(`Setting up database connection for worker - ${workerInfo.workerIndex}`)
            const dbPool = await createConnection();
            await use(dbPool)
            await closeConnection(dbPool)
        },
        {
            scope: "worker"
        }
    ]
})
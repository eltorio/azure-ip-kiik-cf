import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getIpInfo, parseIpHeader } from "../common/azure-ip.js";


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const forwarded = typeof req.headers['x-forwarded-for'] != "undefined" ? req.headers['x-forwarded-for'] : "89.5.1.9:53940, 20.124.165.191:60364"
    const hisIp = parseIpHeader(forwarded);
    const data = await getIpInfo(hisIp)
    context.res = {
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    };

};

export default httpTrigger;
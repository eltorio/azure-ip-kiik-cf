export interface IpApiResponse {
    ip: string
    network: string
    version: string
    city: string
    region: string
    region_code: string
    country: string
    country_name: string
    country_code: string
    country_code_iso3: string
    country_capital: string
    country_tld: string
    continent_code: string
    in_eu: boolean
    postal: string
    latitude: number
    longitude: number
    timezone: string
    utc_offset: string
    country_calling_code: string
    currency: string
    currency_name: string
    languages: string
    country_area: number
    country_population: number
    asn: string
    org: string
}

export function parseIpHeader(header: string): string {
    const IPREGEX = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
    const parsed = header.split(',');
    const ipMatch = parsed[0].match(IPREGEX)
    return ipMatch[0]
}

export function getIpInfo(ip: string): Promise<IpApiResponse> {
    const url = `https://ipapi.co/${ip}/json/`
    //console.log(url)
    return new Promise<IpApiResponse>((resolve) => {
        fetch(url)
            .then((response) => { 
                //console.log(response);
                response.json().then((data) => {
                    resolve(data as IpApiResponse)
                });
             })
    })
}
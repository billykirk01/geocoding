/*
Usage:
    export WEATHER_API_KEY=<your api key>
    const data = await getLocationInfo("95683");
*/
export async function getLocationInfo(query: string) {
    const apiKey = Deno.env.get("WEATHER_API_KEY");
    if (!apiKey) {
        return {error: "API Key is required"};
    }

    const url = new URL("http://api.positionstack.com/v1/forward");
    url.searchParams.append("access_key", apiKey);
    url.searchParams.append("query", query);
    return (await fetch(url)).json();
}


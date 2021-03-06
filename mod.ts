import { GeocodeResponse } from "./types.ts";

export class Geocoder {
  constructor(private apiKey: string) {}

  /** Forward geocode a query string
        const geocoder = new Geocoder(apiKey);
        const results = await geocoder.forward("95683");
  */
  async forward(query: string) {
    const url = new URL("http://api.positionstack.com/v1/forward");
    url.searchParams.append("access_key", this.apiKey);
    url.searchParams.append("query", query);
    const results = await (await fetch(url)).json() as GeocodeResponse;
    return results.data;
  }
}

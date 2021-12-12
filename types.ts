export interface GeocodeResponse {
  data: Result[];
}
export interface Result {
  latitude: number;
  longitude: number;
  label: string;
  name: string;
  type: string;
  number: string;
  street: string;
  postal_code: string;
  confidence: number;
  region: string;
  region_code: string;
  administrative_area?: null;
  neighbourhood: string;
  country: string;
  country_code: string;
  map_url: string;
}

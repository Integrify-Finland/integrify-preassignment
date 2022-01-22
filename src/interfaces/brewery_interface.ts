export interface BreweryApi {
  id: string,
  name: string,
  brewery_type: string,
  street: string,
  address_2: string,
  address_3: string,
  city: string,
  state: string,
  county_province: string,
  postal_code: number,
  country: string,
  longitude: number,
  latitude: number,
  phone: number,
  website_url: string,
  updated_at: number,
  created_at: number
}

export default BreweryApi;
import { CityNames, FetchParamsType } from "./Types";

export async function request<TResponse>(url: string): Promise<TResponse> {
  const response = await fetch(url);
  const data = await response.json();
  return data as TResponse;
}

export async function fetchEntity<TType>(p: FetchParamsType): Promise<TType> {
  const city = CityNames[p.city as keyof typeof CityNames];
  const origin = generateOriginURL(city);
  const url = `${origin}/${p.type}${
    p.id ? "/" + p.id : p.queryParam ? p.queryParam : ""
  }`;
  return await request<TType>(url);
}

export const generateOriginURL = (city: string) => {
  const url = `https://${city}.museum-digital.de/json`;
  return url;
};

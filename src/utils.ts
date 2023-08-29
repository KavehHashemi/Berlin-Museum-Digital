export async function request<TResponse>(url: string): Promise<TResponse> {
  const response = await fetch(url);
  const data = await response.json();
  return data as TResponse;
}

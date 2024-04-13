export class HttpClient {
  private readonly baseUrl: string;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`);
    return await response.json();
  }

  public async post(url: string, body: unknown) {
    const searchParams = new URLSearchParams();

    for (const key in body) {
      searchParams.append(key, body[key]);
    }

    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: searchParams
    });

    return await response.json();
  }
}

class CardService {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  private async sendRequest(
    method?: string,
    route?: string,
    data?: any,
  ): Promise<any> {
    const url = `${this.baseUrl}${route}`;
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status} - ${response.statusText}`,
        );
      }
      return response.json();
    } catch (error: any) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async getCards(): Promise<any> {
    return this.sendRequest('GET', '/cards/');
  }
  async getCardId(cardId: string): Promise<any> {
    return this.sendRequest('GET', `/cards/${cardId}`);
  }

  async addCard(cardData: any): Promise<any> {
    return this.sendRequest('POST', '/cards', cardData);
  }

  async updateCard(cardId: string, cardData: any): Promise<any> {
    return this.sendRequest('PUT', `/cards/${cardId}`, cardData);
  }

  async deleteCard(cardId: string): Promise<any> {
    return this.sendRequest('DELETE', `/cards/${cardId}`);
  }
}

export default CardService;

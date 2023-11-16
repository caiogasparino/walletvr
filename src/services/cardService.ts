import axios from 'axios';

class CardService {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  private async sendRequest(
    method: string,
    route: string,
    data?: any,
  ): Promise<any> {
    const url = `${this.baseUrl}${route}`;
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.request({
        method,
        url,
        headers,
        data,
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error(
          `HTTP error: ${response.status} - ${response.statusText}`,
        );
      }

      return response.data;
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

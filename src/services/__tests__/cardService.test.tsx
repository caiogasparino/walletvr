// CardService.test.ts
import {CardService} from '@Services';
import axios from 'axios';

jest.mock('axios');

describe('CardService', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    mockedAxios.request.mockReset();
    expect(mockedAxios.request.mockReset()).toMatchSnapshot();
  });

  it('should fetch cards successfully', async () => {
    const cards = [{id: '1', name: 'Card 1'}];

    mockedAxios.request.mockResolvedValueOnce({data: cards, status: 200});

    const cardService = new CardService();

    const result = await cardService.getCards();

    expect(result).toEqual(cards);

    expect(mockedAxios.request).toHaveBeenCalledWith({
      method: 'GET',
      url: 'http://localhost:3000/cards/',
      headers: {'Content-Type': 'application/json'},
    });
  });
});

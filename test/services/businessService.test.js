import BusinessService from 'Services/businessService';

describe('businessService', () => {
  const mockHttp = {
    get() {
      return new Promise(resolve =>
        resolve({
          data: {
            businesses: [
              {
                categories: [],
                id: 'safd345',
                location: {},
                name: 'Sea Food Restaurant',
                phone: '+639177216372',
                rating: 5,
              },
            ],
          },
        })
      );
    },
  };

  test('should return data on calling search', async () => {
    const service = new BusinessService();
    service.$http = mockHttp;
    const response = await service.search({ latitude: '', longitude: '' });
    const expected = [
      {
        categories: [],
        id: 'safd345',
        location: {},
        name: 'Sea Food Restaurant',
        phone: '+639177216372',
        rating: 5,
      },
    ];
    expect(response).toEqual(expected);
  });
});

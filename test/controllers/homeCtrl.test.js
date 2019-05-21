import HomeCtrl from 'Controllers/homeCtrl';

const mockBusinessService = {
  search() {
    return new Promise(resolve => resolve([{ name: 'Sea Food Restaurant' }]));
  },
};

describe('homeCtrl', () => {
  test('should have a style property on controller', () => {
    const controller = new HomeCtrl(mockBusinessService);
    expect(controller).toHaveProperty('style');
  });

  test('shouldcall search method $onInit', () => {
    const controller = new HomeCtrl(mockBusinessService);
    const mockGeolocation = {
      getCurrentPosition(callback) {
        callback({ latitude: 37.786882, longitude: -122.399972 });
      },
    };

    controller.search = jest.fn();

    global.navigator.geolocation = mockGeolocation;
    controller.$onInit();
    expect(controller.search.mock.calls.length).toBe(1);
  });

  test('should set businesses property on calling setBusinesses', () => {
    const controller = new HomeCtrl(mockBusinessService);
    controller.setBusinesses([{ name: 'Sea Food Restaurant' }]);
    const expected = [{ name: 'Sea Food Restaurant' }];
    expect(controller.businesses).toEqual(expected);
  });

  test('should update businesses property on calling search method', async () => {
    const controller = new HomeCtrl(mockBusinessService);
    await controller.search({
      coords: { latitude: 37.786882, longitude: -122.399972 },
    });
    const expected = [{ name: 'Sea Food Restaurant' }];
    expect(controller.businesses).toEqual(expected);
  });
});

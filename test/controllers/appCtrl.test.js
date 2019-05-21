import angular from 'angular';
import 'angular-mocks';
import controllerModule from 'Controllers';

describe('appCtrl', () => {
  let controller;

  beforeEach(angular.mock.module(controllerModule));

  beforeEach(
    angular.mock.inject($controller => {
      controller = $controller('AppCtrl');
    })
  );

  test('should have a style property on controller', () => {
    expect(controller).toHaveProperty('style');
  });
});

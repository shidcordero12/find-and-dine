import angular from 'angular';
import BusinessService from './businessService';

export default angular
  .module('services', [])
  .service('businessService', BusinessService).name;

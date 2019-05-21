import angular from 'angular';
import business from './business';

export default angular
  .module('components.business', [])
  .component('business', business).name;

import angular from 'angular';
import HomeCtrl from './homeCtrl';
import AppCtrl from './appCtrl';

export default angular.module('controller', [])
.controller('AppCtrl', AppCtrl)
.controller('HomeCtrl', HomeCtrl)
.name;

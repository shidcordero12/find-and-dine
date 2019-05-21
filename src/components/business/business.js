import template from './business.html';
import controller from './businessCtrl';
import './style.scss';

export default {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    name: '<',
    imageSrc: '<',
  },
};

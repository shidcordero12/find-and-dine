import style from '../sass/app.scss';

export default class AppCtrl {
  constructor() {
    'ngInject';

    this.style = style;
  }

  $onInit() {}
}

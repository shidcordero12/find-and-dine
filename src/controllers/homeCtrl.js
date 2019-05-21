import style from '../sass/home.scss';

export default class HomeCtrl {
  constructor(businessService) {
    'ngInject';

    this.businessService = businessService;
    this.businesses = [];
    this.style = style;
  }

  $onInit() {
    navigator.geolocation.getCurrentPosition(this.search);
  }

  setBusinesses(data) {
    this.businesses = data;
  }

  search({ coords }) {
    this.businessService.search(coords).then(this.setBusinesses);
  }
}

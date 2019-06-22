import style from '../sass/home.scss';

export default class HomeCtrl {
  constructor(businessService) {
    'ngInject';

    this.businessService = businessService;
    this.businesses = [];
    this.style = style;
  }

  $onInit() {
    navigator.geolocation.getCurrentPosition(this.search.bind(this), this.errorSearch);
  }

  setBusinesses(data) {
    this.businesses = data;
  }

  search({ coords }) {
    this.businessService.search(coords).then(this.setBusinesses.bind(this));
  }

  errorSearch() {
    alert('GPS is needed to access this page. Please enable it.');
  }
}

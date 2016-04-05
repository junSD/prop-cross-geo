export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('property', {
      url: '/property',
      templateUrl : 'app/property/property.html',
      controller: "PropertyController",
      controllerAs: 'property'
    })
  .state('houses', {
    url: '/houses',
    templateUrl: 'app/houses/houses.html',
    controller: 'HousesController',
    controllerAs: 'houses'
  })
  .state('favorites', {
    url: '/favorites',
    templateUrl: 'app/favorites/favorites.html',
    controller: 'FavoritesController',
    controllerAs: 'favorites'
  });

  $urlRouterProvider.otherwise('/');
}

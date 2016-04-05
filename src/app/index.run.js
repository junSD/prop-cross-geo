export function runBlock ($log, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.listings = [];

  const listingsHere = $rootScope.$on('listings_here', function(event, data) {
    $log.debug("Event is ON", event);
    $rootScope.listings = data.listings;
  });
}

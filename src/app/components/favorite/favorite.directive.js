export function FavoriteDirective() {
  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/favorite/favorite.html',
    scope: {
      favorite: '='
    },
    bindToController: true,
    controller: FavoriteController,
    controllerAs: 'vm'
  }
  return directive;
}

class FavoriteController {

}

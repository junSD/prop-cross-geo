/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import {PropertyController} from  '../app/property/property.controller';
import GoComponent from '../app/components/go/go.component';
import {HousesController} from '../app/houses/houses.controller';
import {HouseDirective} from '../app/components/house/house.directive';

import {FavoritesController} from '../app/components/favorites/favorites.controller';
import {FavoriteDirective} from '../app/components/favorite/favorite.directive';
import {FavoritesService} from '../app/components/FavoritesService/favorites.service';


import { NestoriaAPI } from '../app/components/nestoriaAPI/nestoria.service';
import { GeolocationService } from '../app/components/geolocation/geolocation.service';

angular.module('propertycross', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributorService)
    .service('webDevTec', WebDevTecService)
    .service('NestoriaAPI', NestoriaAPI)
    .controller('MainController', MainController)
    .controller('PropertyController', PropertyController)
    .controller('HousesController', HousesController)
    .controller('FavoritesController', FavoritesController)

    .directive('acmeNavbar', NavbarDirective)
    .directive('acmeMalarkey', MalarkeyDirective)
    .directive('acmeHouse', HouseDirective)
    .directive('acmeFavorite', FavoriteDirective)

    .component('acmeGo', GoComponent)
    .service('GeolocationService', GeolocationService)
    .service('FavoritesService', FavoritesService)
;

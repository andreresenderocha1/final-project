import angular from 'angular'

import './config/app.templates'
import '@uirouter/angularjs'

import layoutModule from './layout/index'
import servicesModule from './services/index'

import {editState, homeState, userDetailState} from './config/app.states'
import homeComponent from "./home/home.component";
import cardComponent from "./card/card.component";
import userDetailComponent from "./user-detail/user-detail.component";
import editComponent from "./edit/edit.component";


var myApp = angular.module("myApp",[
    'ui.router',
    'templates',
    'layoutModule',
    'servicesModule'

])


myApp.component("edit",editComponent)
myApp.component("home",homeComponent)
myApp.component("card",cardComponent)
myApp.component("userDetail",userDetailComponent)

myApp.config(['$uiRouterProvider',function($uiRouter){
    const $urlService = $uiRouter.urlService;
    $urlService.rules.otherwise({state: 'home'})
    var $stateRegistry = $uiRouter.stateRegistry;

    $stateRegistry.register(homeState)
    $stateRegistry.register(userDetailState)
    $stateRegistry.register(editState)

}])


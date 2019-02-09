import angular from 'angular'
import userService from "./user.service";

var servicesModule = angular.module('servicesModule',[])


servicesModule.service("userService",userService)

export default servicesModule
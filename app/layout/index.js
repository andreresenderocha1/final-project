import angular from 'angular'

import headerMenuComponent from './header-menu.component'
import footerComponent from './footer.component'

var layoutModule = angular.module('layoutModule',[])

layoutModule.component("headerMenu",headerMenuComponent)
layoutModule.component("footer",footerComponent)

export default layoutModule
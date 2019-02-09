import homeCtrl from "./home.controller";

var homeComponent = {
    bindings: {},
    templateUrl: 'home/home.template.html',
    controllerAs: '$ctrl',
    controller: ["userService",homeCtrl]
}

export default homeComponent

//     ["userService",function(userService){
//     this.userList = userService.getList()
// }]
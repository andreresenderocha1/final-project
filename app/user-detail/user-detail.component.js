import userDetailCtrl from './user-detail.controller'

var userDetailComponent = {
    bindings: {
        $transition$: '<'
    },
    templateUrl: 'user-detail/user-detail.template.html',
    controllerAs: '$ctrl',
    controller: ["userService",userDetailCtrl]
}

export default userDetailComponent
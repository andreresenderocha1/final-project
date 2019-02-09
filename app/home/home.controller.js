function homeCtrl(userService){
    'ngInject'

    this.userList = userService.getList()
}

export default homeCtrl
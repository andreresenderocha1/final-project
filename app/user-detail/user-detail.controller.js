function userDetailCtrl(userService){
    'ngInject'

    this.$onInit = ()=> {
        this.userId = this.$transition$.params().id;
        this.user = userService.getUserById(+this.userId)
    }




}
export default userDetailCtrl
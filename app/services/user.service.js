function userService(){

    this.userList = [
        {id: 1, name: 'Andre', age: 32},
        {id: 2, name: 'Daniel', age: 27},
        {id: 3, name: 'Aline', age: 15},
    ]

    this.getList = function(){
        return this.userList
    }

    this.getUserById = function(id){
        return this.userList.find(val=>val.id==id)
    }
}

export default userService
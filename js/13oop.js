


class User3 {
    _userid ='';//protected속성으로 선언
    _name ='';
    #password ='';//private속성으로 선언
    _email = '';
    constructor(userid,password ,name,email) {
        this._userid =userid;
        this.#password  =password;
        this._name =name;
        this._email =email;
    }

}

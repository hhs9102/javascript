//node promis
// api라고 가정한다.
class UserStorage{
    login (id, pw) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(id === 'hsham' && pw==='hsham'){
                    console.log("hsham 로그인 성공")
                    resolve(id)
                }else{
                    reject(new Error("not matched user info"))
                }
            }, 1000)
        })
    }
    getRole (id) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(id === 'hsham'){
                    resolve("admin")
                }else{
                    reject("not allowed")
                }
            }, 1000)
        })
    }
}

function doLogin () {
    let userStorage = new UserStorage(); //example api

    //login call
    userStorage.login('hsham','hsham')
        .then(userStorage.getRole)
        .then(role => console.log(`${role} 권한을 받았습니다.`))
        .catch(error => console.log(error))
}

doLogin()

//node async.js
class UserStorage{
    async login (id, pw) {
        await delay(1000);
        if(id === 'hsham' && pw==='hsham'){
            console.log("hsham 로그인 성공")
            return id
        }else{
            return new Error("not matched user info");
        }
    }

    async getRole (id) {
        delay(1000);
        if(id === 'hsham'){
            return "admin"
        }else{
            return "not allowed"
        }
    }
}
async function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

function doLogin () {
    let userStorage = new UserStorage();

    //login call
    userStorage.login('hsham','hsham')
        .then(userStorage.getRole)
        .then(role => console.log(`${role} 권한을 받았습니다.`))
        .catch(error => console.log(error))
}

doLogin()

import * as urls from './WebUrls'
class UserService
{
    saveUser = (data)=>{
        return fetch(urls.REGISTER_USER,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    loginUser = (data)=>{
        return fetch(urls.LOGIN_USER,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default new UserService()
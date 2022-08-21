import id from "shortid";

const S = {
    UserSession : 'UserSession'
}

const dataExample = {
    // goods : [],
    user_id : id()
}


export default {
   get : function(){return JSON.parse(sessionStorage.getItem(S.UserSession))},
   set : data => sessionStorage.setItem(S.UserSession, JSON.stringify(data)),
   setGoods : function(data){return  sessionStorage.setItem(S.UserSession, JSON.stringify({...this.get(), goods : data}))},
   creatSession : () => sessionStorage.setItem(S.UserSession, JSON.stringify(dataExample)),
}
const Storage=2  //保留天数;
//设置cookie
function setCookie(cookieName,cookieValue){
    let date=new Date();
    date.setTime(date.getTime()+(Storage*24*60*60*1000))//24*60*60*1000 === 24小时
    let expires="expires="+date.toGMTString();
    document.cookie=cookieName+"="+cookieValue+";"+expires;

}
//获取 cookie
function getCookie(cookieName){
    const data=document.cookie.split('='); //  document.cookie-> CookieName=CookieValue;
    if(data.includes( cookieName )){
        return data[1];
    }
    return ''
}
//确认cookie是否存在
function checkCookie(){
    const data=document.cookie //  document.cookie-> CookieName=CookieValue;

    if(data != ''){
        return true;
    }
    return false
}

export { setCookie , checkCookie }

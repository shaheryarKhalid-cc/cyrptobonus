//check local storage for session token. if no token redirect back to login page.
$(document).ready((user_session()));
{
    console.log('user-session is in session')
}
function user_session(){
    debugger;
    //the following code checkes whether the entered userid and password are matching*/
    let usernameid = sessionStorage.getItem("username");
    let passwordtoken = sessionStorage.getItem("password");

    if(passwordtoken == null)
    {
        window.location.href = "pg_login.html";
        console.log('no user found for auth');
    }
    $("#UserName").text(usernameid);
    
}
const Logout = document.querySelector("#Logout");
Logout.addEventListener("click",function()
{
    debugger;
    sessionStorage.removeItem("username", null);
    sessionStorage.removeItem("password", null);
    window.location.href = "pg_login.html";
});


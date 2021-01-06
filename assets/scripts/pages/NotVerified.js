var config = {
	apiKey: "AIzaSyAvv46zU1dyOA62HkIUYp22dDDRKA6Y8qg",
	authDomain: "bonusprod.firebaseapp.com",
	projectId: "bonusprod",
};
firebase.initializeApp(config);
console.log(firebase);
var firestore = firebase.firestore();
const docRef = firestore.collection('users');
var token="";
let usernameid = sessionStorage.getItem("username");
let passwordtoken = sessionStorage.getItem("password");

const Verification = document.querySelector("#Verification");
Verification.addEventListener("click",function(){

    var query = docRef.where("Email", "==",usernameid).where("pass","==",passwordtoken);
	query.get().then(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
            token=doc.data().SecurityTocken;
            SendMail();
            alert("Mail Sent Check Mail Box");
            window.open("pg_login.html");
        });
    });
});
function SendMail()
{
	debugger;
	Email.send({
		SecureToken : "f9251806-385f-48ca-bef2-75ac644f957a",
		To : usernameid,
		From : "info@ec2token.com",
		Subject : "Crypto Bonus Verification",
		Body : "Verify Your Mail using this link<br>bonusprod.uc.r.appspot.com/Verification.html?"+token
	}).then(
	  message => alert(message)
	);

	debugger;

}

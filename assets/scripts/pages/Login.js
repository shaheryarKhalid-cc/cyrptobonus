var config = {
    apiKey: "AIzaSyA7xXaE7i6nwnSylad4CHn3S_58XpqMPgI",
    authDomain: "cyrptobonus-demo-9f0ed.firebaseapp.com",
    projectId: "cyrptobonus-demo-9f0ed",
};
firebase.initializeApp(config);
console.log(firebase);
var firestore = firebase.firestore();

const docRef = firestore.collection('users');

const USerid = document.querySelector("#userid");
const passwrd = document.querySelector("#pswrd");
const Login = document.querySelector("#Login");
 
Login.addEventListener("click",function()
{
	debugger;
	const user=USerid.value;
	const LogPass=passwrd.value;
	var s=Validation();
	if(s=="0")
	{
		debugger;
		return;
	}
	debugger;
    var query = docRef.where("Email", "==",user).where("pass","==",LogPass);
	query.get().then(function (querySnapshot) {
		
		$("#useridS").text("Wrong Email or Password");
		querySnapshot.forEach(function (doc) {
			//document.querySelector("#useridS").text="Wrong Email or Password";
			if (doc.empty) {
				alert("No Such Document");
				console.log("No such document!");
			}else{
				
				$("#useremailS").text("");
				console.log("Document data:", doc.data());
				sessionStorage.removeItem("username", null);
				sessionStorage.removeItem("password", null);
				sessionStorage.setItem("username", user);
				sessionStorage.setItem("password", LogPass);
				window.location.href = "index.html";	
				//window.open("index.html");
			}
    	//  console.log(doc.id, ' => ', doc.data("FName"));
     	//  var docID=doc.id;
        //  alert(docID);			
        });
    }).catch(function(error) {
		console.log("Error getting document:", error);
	});
});
function Validation()
{
	debugger;
	var s="";
	var mailfrmt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(USerid.value.match(mailfrmt))
	{

	}
	else{
		$("#useridS").text("Invalid Email");
		s="0";
	}
	return s;
}
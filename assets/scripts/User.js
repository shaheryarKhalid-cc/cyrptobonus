
var config = {
    apiKey: "AIzaSyA7xXaE7i6nwnSylad4CHn3S_58XpqMPgI",
    authDomain: "cyrptobonus-demo-9f0ed.firebaseapp.com",
    projectId: "cyrptobonus-demo-9f0ed",
};
firebase.initializeApp(config);
console.log(firebase);
var firestore = firebase.firestore();


const docRef = firestore.collection('users');
//////////////////Signup/////////

const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const useremail = document.querySelector("#useremail");
const password = document.querySelector("#password");
const sButton = document.querySelector("#saveButton");
var token="";
	
sButton.addEventListener("click", function() 
{
	debugger;
	const FName = firstname.value;
	const LName = lastname.value;
	const mmail = useremail.value;
	const Pass = password.value;
	var s=Validate();
	if(s=="0")
	{
		debugger;
		return;
	}
	 token=makeid();
	debugger;
	//console.log(textToSave);
	docRef.add({
		first: FName,
		Last: LName, 
		Email: mmail,
		pass: Pass,
		SecurityTocken:token,
		Verification:"0"
	}).then(function () {
		console.log("User Signed up Successfully");
		SendMail()
		debugger;
		sessionStorage.removeItem("username", null);
		sessionStorage.removeItem("password", null);
		sessionStorage.setItem("username", mmail);
		sessionStorage.setItem("password", Pass);
		window.location.href = "index.html";
	}).catch(function (error){
		console.log("got an error", error);
	});
});
function makeid() {
	debugger;
	length=20;
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }
function SendMail()
{
	debugger;
	Email.send({
		SecureToken : "f9251806-385f-48ca-bef2-75ac644f957a",
		To : useremail.value,
		From : "info@ec2token.com",
		Subject : "Crypto Bonus Verification",
		Body : "Verify Your Mail using this link<br>http://ec2token.com/Verification.html?"+token
	}).then(
	  message => alert(message)
	);

	debugger;

}
function Validate(){
	debugger;
	var s="";
	firstnamec=firstname.value.length;
	if(firstname.value==""||firstnamec<3)
	{
		$("#firstnameS").text("Invalid First Name");
		s="0";
	}
	lastnamec=lastname.value.length;
	if(lastname.value==""||lastnamec<3)
	{
		$("#lastnameS").text("Invalid Last Name");
		s="0";
	}
	useremailc=useremail.value.length;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(useremail.value.match(mailformat))
	{
		
	}else{
		$("#useremailS").text("Invalid Email");
		s="0";
	}
	passwordc=password.value.length;
	if(password.value==""||passwordc<=5)
	{
		$("#passwordS").text("Password must be five characters long");
		s="0";
	}
	return s;
	
}
/////////////////////////////////Login///////////////////

//////////////Signup Function//////////////////////

// 	query.get().then(function (querySnapshot) {
// 		querySnapshot.forEach(function (doc) {
			
// 			console.log(doc.id, ' => ', doc.data("FName"));
			
// 			// if(doc.exists)
// 			// {
// 			// 	var docID=doc.id;
// 			// 	alert(docID);				
// 			// }else{
// 			// 	alert("No Data Found");
// 			// }
// 		});
// 	});
	
	
// 	// docRef.add({
// 	// 	FName: user,
//     //     Pass: LogPass
//     // }).then(function () {
//     //     console.log("Status Saved");
//     // }).catch(function (error){
//     //     console.log("got an error", error);
//     // });
// });
 





//   firebase.initializeApp
//   ({
// 	apiKey: "AIzaSyA7xXaE7i6nwnSylad4CHn3S_58XpqMPgI",
// 	authDomain: "cyrptobonus-demo-9f0ed.firebaseapp.com",
// 	projectId: "cyrptobonus-demo-9f0ed",
// 	storageBucket: "cyrptobonus-demo-9f0ed.appspot.com",
// 	messagingSenderId: "629238088067",
// 	appId: "1:629238088067:web:2591e42f4e1de37fcbb6b6",
// 	measurementId: "G-MSKLDT4NW6"
//   });
	/*apiKey: "AIzaSyA7xXaE7i6nwnSylad4CHn3S_58XpqMPgI",
    authDomain: "cyrptobonus-demo-9f0ed.firebaseapp.com",
    projectId: "cyrptobonus-demo-9f0ed",
    storageBucket: "cyrptobonus-demo-9f0ed.appspot.com",
    messagingSenderId: "629238088067",
    appId: "1:629238088067:web:b35e71292a13eb15cbb6b6",
    measurementId: "G-Y9KSQPZ26D"*/
	/*apiKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDr2B08gYT9Bb0n\nTDT2MJdHqhYCgZTxUAXlh65XspZ5kzDhKptvlajwnWdx+U3lyKiCqO9winen5urj\n0H8Ssw2OBqNC0xCAGz0/HeozdvCmZ5z109mFz6lzuL6RzlNpjdmWkeUuP27wzZW3\nUasmxzoay7603HOnX4/N9Tlo7GJ9yGCvECFmBiynVcXLLGY45ywndTtntMffB8jI\nZPQ6uuypWmuUA86K2d2AWl2M1OaTnUM+nj1vd4TW7BF6QlcrQ8YwQCLenHMN8pf3\n9YgMVfYLw1dTcHClklq++Ja9I1XI6iHOYNc13GUaicz/c2FVQCvVDKs/ePeXCg1G\nZNQUmVvlAgMBAAECggEANlWHQsnKFCrOza9qYi+Gor2GLZSh9khL23n7Sfv8W8zz\nzWQuBDKUBb8VtnXLov0sCVIXO7PC5l02Tz7ZD7tNi6Nu2HXczs63uQNQ0gN8ZLHp\nQN9KNWBGt0DgMqI4qFBESUKabKGzkumiLOY1So1KjyLScEN7p5tF+5qb29bdyAFB\nQSOo/wwEEeh5sPkus0nMkHOedUtwbNx8ddqd7dOtyY0/VDmqm5Kso3NOcMv0O9nA\ncAI8Lz+53LIiqsSTJokKZ+JcB2GOUPB3orhtesgzjL0zkjIwvb+Ptdp1LRtqgZpb\ngklq8eE60exM5RCrGNR0KDnU5m/RhixsCclcfGgSgQKBgQD10Vgcwbc/oFXxnE1H\nCIHPzY3plAAEmnLKOCHyhFStD/7xKkY2WCQC6h7NpHbKZ/DiLERiY3tuB0OV2h31\n5oOI54kYHt6DF0SpMEEfWLRdU4qEvDHJU1FTCnSOXnENanzy/A/heOZZep6Az1yz\nP3CN5pzkMf2a2d72DjqRtwiCQQKBgQD1nQKgtCCecNEW/Ooy/k0rAcZx3ZNqmEzp\nbnFqxvIrmtT05hdO2GSeB142Uo1Y2TpzkvIceB5r+HpmkZT0y4RhLgOsTcIhZZ0C\nkn9yFTkYYsEfCR7qDvqH0i9KGsfBM17pwGd5AFAtMZJjEBfDLXrS1DclBeQC3gut\nZ/jqJHNopQKBgQCB8oIG6a0KuKLWT89WTrv482wi33dG97LZDeV8Q9JTjpIyQSvO\nzLd0xvkzss6NX3cqyUX5USfN2Y8z55NRC+Pa+rMxihgM6r8ERZsXjBgFAgXG94nG\nKQJjyLInFOvksLeO6AspIXV8NeMWqwgRReclTJUB2R98vdIs9walQ0H/QQKBgFZs\nDMSnHOMjJy9DhtSyjkyXr0/Ze0mClW19owLDRer56/zQCVuA4MaKKShMG9grd1m7\nVt2Vln6/S7JTf2ozQj0/h6NVKP2/V2PUUGu/8/sUpIdbGjmZU6X+2wzkJ21fugHd\n5Yq6BXwheTTKMNJIanNMoKqyS+yGXO2DLB6W/NTRAoGAFmHM60vCd0V4hPUT33IZ\nKz+ewgu7Y9NeZtGhzcFoVtatDpANmqUmfwhdTEUcGf6x4iBB5Ys1DfLIIyHWb0AQ\nW0WN5m2T6qcqxfQVpZCZsqGvcOx5w8eywmzIv1Kc9xyK4asWNulddTCUgi48L9a7\n7/D1J393rOXgTMvzKsfsmag=\n-----END PRIVATE KEY-----\n',
	authDomain: 'https://accounts.google.com/o/oauth2/auth',
	projectId: 'cyrptobonus-demo'*/
  //type: "service_account",
  //project_id: "cyrptobonus-demo",
 // private_key_id: "9f1647716ffef9f134ee6c899e645c96abc32f76",
  //private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDr2B08gYT9Bb0n\nTDT2MJdHqhYCgZTxUAXlh65XspZ5kzDhKptvlajwnWdx+U3lyKiCqO9winen5urj\n0H8Ssw2OBqNC0xCAGz0/HeozdvCmZ5z109mFz6lzuL6RzlNpjdmWkeUuP27wzZW3\nUasmxzoay7603HOnX4/N9Tlo7GJ9yGCvECFmBiynVcXLLGY45ywndTtntMffB8jI\nZPQ6uuypWmuUA86K2d2AWl2M1OaTnUM+nj1vd4TW7BF6QlcrQ8YwQCLenHMN8pf3\n9YgMVfYLw1dTcHClklq++Ja9I1XI6iHOYNc13GUaicz/c2FVQCvVDKs/ePeXCg1G\nZNQUmVvlAgMBAAECggEANlWHQsnKFCrOza9qYi+Gor2GLZSh9khL23n7Sfv8W8zz\nzWQuBDKUBb8VtnXLov0sCVIXO7PC5l02Tz7ZD7tNi6Nu2HXczs63uQNQ0gN8ZLHp\nQN9KNWBGt0DgMqI4qFBESUKabKGzkumiLOY1So1KjyLScEN7p5tF+5qb29bdyAFB\nQSOo/wwEEeh5sPkus0nMkHOedUtwbNx8ddqd7dOtyY0/VDmqm5Kso3NOcMv0O9nA\ncAI8Lz+53LIiqsSTJokKZ+JcB2GOUPB3orhtesgzjL0zkjIwvb+Ptdp1LRtqgZpb\ngklq8eE60exM5RCrGNR0KDnU5m/RhixsCclcfGgSgQKBgQD10Vgcwbc/oFXxnE1H\nCIHPzY3plAAEmnLKOCHyhFStD/7xKkY2WCQC6h7NpHbKZ/DiLERiY3tuB0OV2h31\n5oOI54kYHt6DF0SpMEEfWLRdU4qEvDHJU1FTCnSOXnENanzy/A/heOZZep6Az1yz\nP3CN5pzkMf2a2d72DjqRtwiCQQKBgQD1nQKgtCCecNEW/Ooy/k0rAcZx3ZNqmEzp\nbnFqxvIrmtT05hdO2GSeB142Uo1Y2TpzkvIceB5r+HpmkZT0y4RhLgOsTcIhZZ0C\nkn9yFTkYYsEfCR7qDvqH0i9KGsfBM17pwGd5AFAtMZJjEBfDLXrS1DclBeQC3gut\nZ/jqJHNopQKBgQCB8oIG6a0KuKLWT89WTrv482wi33dG97LZDeV8Q9JTjpIyQSvO\nzLd0xvkzss6NX3cqyUX5USfN2Y8z55NRC+Pa+rMxihgM6r8ERZsXjBgFAgXG94nG\nKQJjyLInFOvksLeO6AspIXV8NeMWqwgRReclTJUB2R98vdIs9walQ0H/QQKBgFZs\nDMSnHOMjJy9DhtSyjkyXr0/Ze0mClW19owLDRer56/zQCVuA4MaKKShMG9grd1m7\nVt2Vln6/S7JTf2ozQj0/h6NVKP2/V2PUUGu/8/sUpIdbGjmZU6X+2wzkJ21fugHd\n5Yq6BXwheTTKMNJIanNMoKqyS+yGXO2DLB6W/NTRAoGAFmHM60vCd0V4hPUT33IZ\nKz+ewgu7Y9NeZtGhzcFoVtatDpANmqUmfwhdTEUcGf6x4iBB5Ys1DfLIIyHWb0AQ\nW0WN5m2T6qcqxfQVpZCZsqGvcOx5w8eywmzIv1Kc9xyK4asWNulddTCUgi48L9a7\n7/D1J393rOXgTMvzKsfsmag=\n-----END PRIVATE KEY-----\n",
  //client_email: "firestorebonusadmin@cyrptobonus-demo.iam.gserviceaccount.com",
  //client_id: "108143630415035368510",
  //auth_uri: "https://accounts.google.com/o/oauth2/auth",
  //token_uri: "https://oauth2.googleapis.com/token",
  //auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  //client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firestorebonusadmin%40cyrptobonus-demo.iam.gserviceaccount.com"

  //firebase.initializeApp(firestore);
//   firebase.analytics();
  //var db = firebase.firestore();

//	alert("db Connected");
	//var s=db.collection("ZZZZZZZZZZ").where("email"=="mark.smith@ec2token.com");
  /*function regis()
  {

	debugger;
	var FName = document.getElementById("firstname").v alue;
	var LName = document.getElementById("lastname").value;
  }*/
// async function register(event)
// { debugger;
// 	var FName =  this.firstname.value;
// 	var LName = this.lastname.value;
// 	var Email = this.useremail.value;
// 	var password = this.pswrd.value;
// 	//var ema=db.collection("aapilots").doc('keith birdsall');
// 	//var userId = firebase.auth().currentUser.uid;
// 	firebase.database().ref("aapilots").add({
// 		firstname: String(FName),
//         lastname: String(LName),
//         email: String(Email),
//         password: String(password)
// 	  });
// 	db.collection('asas').set({
// 		firstname: FName,
//         lastname: LName,
//         email: Email,
//         password: password
// 	})
// 	.then(function(docRef) {
// 		console.log("Document written with ID: ", docRef.id);
// 	})
// 	.catch(function(error) {
// 		console.error("Error adding document: ", error);
// 	});
//     // Obtain a document reference.
//     const document = firebase.doc('bonusapp/User');
// 	// Enter new data into the document.
// 	debugger;
   // await document.set({
 //	});
    //console.log('Entered new data into the document');
    // Update an existing document.
    //await document.update({
    //password: '123',
    //});
    //console.log('Updated an existing document');

    // Read the document.
    //const doc = await document.get();
    //console.log(doc);

    // Delete the document.
    //await document.delete();
    //console.log('Deleted the document');
//}

/*function signUp(){
		debugger;
		var FName = document.getElementById("FName").value;
		var LName = document.getElementById("LName").value;
    		var Email = document.getElementById("Email").value;
		var AddressLine1 = document.getElementById("AddressLne1").value;
		var AddressLine2 = document.getElementById("AddressL2").value;
		var City = document.getElementById("City").value;
		var State = document.getElementById("State").value;
		var Zip = document.getElementById("Zip").value;
		var Country = document.getElementById("Country").value;
		var PHAreaCode = document.getElementById("PHAreaCode").value;
		var PhNo = document.getElementById("PhNo").value;
		
		const promise = auth.createUserWithEmailAndZip(Email.value, Zip.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}*/

  

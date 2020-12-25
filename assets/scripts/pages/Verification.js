var config = {
    apiKey: "AIzaSyA7xXaE7i6nwnSylad4CHn3S_58XpqMPgI",
    authDomain: "cyrptobonus-demo-9f0ed.firebaseapp.com",
    projectId: "cyrptobonus-demo-9f0ed",
};
firebase.initializeApp(config);
console.log(firebase);
var firestore = firebase.firestore();
const docRef = firestore.collection('users');
debugger;
var s=window.location.href;
var j=s.replace("http://ec2token.com/Verification.html?", "");
	var query = docRef.where("SecurityTocken", "==",j);
	query.get().then(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
			//document.querySelector("#useridS").text="Wrong Email or Password";
			if (doc.empty) {
				console.log("No such document!");
			}else{
                //doc.data().first;
				sessionStorage.setItem("username", doc.data().Email);
				sessionStorage.setItem("password", doc.data().pass);
				alert("Security Tocken::::"+doc.data().SecurityTocken);
				alert("Doc ID:::"+ doc.id);
				firestore.collection("users").doc(doc.id).set({
					first:doc.data().first,
					Last:doc.data().Last,
					Email:doc.data().Email,
					pass:doc.data().pass,
					SecurityTocken:doc.data().SecurityTocken,
					Verification:"1",
				})
				.then(function() {
					console.log("Document successfully written!");
					window.location.href = "index.html";
				})
				.catch(function(error) {
					console.error("Error writing document: ", error);
				});
			}	
        });
    }).catch(function(error) {
		console.log("Error getting document:", error);
	});
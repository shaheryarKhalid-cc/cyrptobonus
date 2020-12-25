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
    var query = docRef.where("FName", "==",user).where("Pass","==",LogPass);
    query.get().then(function (querySnapshot) {
        if (querySnapshot.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        // querySnapshot.forEach(function (doc) {
            
        //     // console.log(doc.id, ' => ', doc.data("FName"));
        //     // var docID=doc.id;
        //     // alert(docID);			
        // });
    });
});
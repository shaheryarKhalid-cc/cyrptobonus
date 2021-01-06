//load the document build the page
var config = {
	apiKey: "AIzaSyAvv46zU1dyOA62HkIUYp22dDDRKA6Y8qg",
	authDomain: "bonusprod.firebaseapp.com",
	projectId: "bonusprod",
};
firebase.initializeApp(config);
console.log(firebase);
var firestore = firebase.firestore();
const docRef = firestore.collection('users');
var usernameid = sessionStorage.getItem("username");
var passwordtoken = sessionStorage.getItem("password");
const Updatees = document.querySelector("#Update");
//////////////////Checking for Verification//////////////
var query1 = docRef.where("Email", "==",usernameid).where("pass","==",passwordtoken);
debugger;
	query1.get().then(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
			//document.querySelector("#useridS").text="Wrong Email or Password";
			if (doc.empty) {
				alert("No Such Document");
				console.log("No such document!");
			}else{
				if(doc.data().Verification=="0")
				{
					window.location.href = "NotVerified.html"
				}
				// $("#useremailS").text("");
				// console.log("Document data:", doc.data());
				// sessionStorage.setItem("username", user);
				// sessionStorage.setItem("password", LogPass);
				// window.location.href = "index.html";	
				//window.open("index.html");
			}
    	//  console.log(doc.id, ' => ', doc.data("FName"));
     	//  var docID=doc.id;
        //  alert(docID);			
        });
    }).catch(function(error) {
		console.log("Error getting document:", error);
	});
//////////////////Setting Values for Edit/////////
sets.addEventListener("click",function(){
	debugger;

	var query = docRef.where("Email", "==",usernameid).where("pass","==",passwordtoken);
	query.get().then(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
			if (doc.empty) {
				alert("No Such Document");
				console.log("No such document!");
			}else{
				
				document.querySelector("#first_name").value=doc.data().first;
				document.querySelector("#last_name").value=doc.data().Last;
				document.querySelector("#email").value=doc.data().Email;
				document.querySelector("#UserInfo").value=doc.data().Email;
				document.querySelector("#password").value=doc.data().pass;
				document.querySelector("#wallet").value=doc.data().SecurityTocken;
				document.querySelector("#MemberID").value=doc.id;
				$("#Update").prop( "disabled", false );
			//	$( "#x" ).prop( "disabled", false );
				console.log("First Name:", doc.data().first);				
				console.log("Password:", doc.data().pass);
				console.log("Last Name:", doc.data().Last);
				console.log("Email:", doc.data().Email);
				debugger;
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
/////////Set Values///////////////
// const docRef = firestore.collection('users');
// var query = docRef.where("FName", "==",user).where("Pass","==",LogPass);
// 	query.get().then(function (querySnapshot) {
// 		querySnapshot.forEach(function (doc) {
// 			if (doc.empty) {
// 				alert("No Such Document");
// 				console.log("No such document!");
// 			}else{
// 				console.log("Document data:", doc.data());
// 				sessionStorage.setItem("username", user);
// 				sessionStorage.setItem("password", LogPass);
// 				window.location.href = "index.html";
// 				//window.open("index.html");
// 			}
//     	//  console.log(doc.id, ' => ', doc.data("FName"));
//      	//  var docID=doc.id;
//         //  alert(docID);			
//         });
//     }).catch(function(error) {
// 		console.log("Error getting document:", error);
// 	});


// $(document).ready((initializeHome()));
// {
//     $.ajax({
//         //url: "http://127.0.0.1:8000/kanbandemo?/getprojectlists",
//         url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/getprojectlists",
//         type: "get",
//         dataType: "json",
//         success: function (data) {
//             console.log(data);
//             initializeProjectList(data);
//         },
//         error: function (data) {
//             alert("Server has failed to respond")
//         }
//     });
// }
// //function below
// function initializeHome() {
//     console.log("loading Home page");
// }

// function initializeProjectList(data) {
//     //let tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
//     //let newRow = tbodyRef.insertRow();
//     //let newCell = newRow.insertCell();
//     let messageArray = data;
//     let index = 0;
//     let rowNumber = 0;
//     let rowID = 0;
//     while (index < messageArray.length) {
//         let htmlString = `
//         <tr id="${rowID += 1}">
//                     <th scope="row">${rowNumber += 1}</th>
//                     <td class="row-data">${messageArray[index]}</td>
//                     <td><input type="button" class="btn btn-primary" value="Open Project" onclick="show()" /></td>
//         </tr>
//         `
//         console.log(messageArray[index]);
//         index += 1;
//         $("#projectlist").append(htmlString);
//     }
//     //initializeHome(mydata);
// }
// //function used for the home page
// function show() {
//     let rowId = event.target.parentNode.parentNode.id;
//     //this gives id of tr whose button was clicked
//     let data = document.getElementById(rowId).querySelectorAll(".row-data");
//     //returns array of all elements with
//     //"row-data" class within the row with given id
//     let ProjectName = data[0].innerHTML;
//     //var age = data[1].innerHTML;
//     //alert(ProjectName);
//     console.log('https://kanban.ec2token.com/kanban.html?name=' + ProjectName);
//     let url = 'https://kanban.ec2token.com/kanban.html?name=' + ProjectName;
//     window.location = url;

//     //initializeBoards(ProjectName);
//     //let queryString = window.location.search;
//     //let urlParams = new URL(queryString);
//     //alert(urlParams.getAll('index'));
//     //console.log(urlParams.getAll('index'));
// }
// // Submit form with name function add project.
// function add_project()
// {
//     var project = document.getElementById("project").value;
//     document.getElementById("form_id").submit();
//     let vars = project;
//     createProject(vars);
//     console.log(vars);

// }
// function createProject(vars)
// {
//     $.ajax({
//         //url: "http://127.0.0.1:8000/kanbandemo?/addproject",
//         url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/addproject",
//         type: "post",
//         dataType: "json",
//         data: JSON.stringify({projectname: vars}),
//         success: function (data) {
//             console.log('creating a project post');
//         },
//         error: function (data) {
//             alert("Server has failed to respond")
//         }
//     });
// }
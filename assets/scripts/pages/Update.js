const firstname = document.querySelector("#first_name");
const lastname = document.querySelector("#last_name");
const useremail = document.querySelector("#email");
const password = document.querySelector("#password");

const Sectoken = document.querySelector("#wallet");
const docID = document.querySelector("#MemberID");
const Update = document.querySelector("#Update");
Update.addEventListener("click",function(){
	debugger;
	var s=Validate();
	if(s=="0")
	{
		return;
	}
    const FName = firstname.value;
	const LName = lastname.value;
	const Email = useremail.value;
	const Pass = password.value;

	//console.log(textToSave);
	const DID=docID.value;
	firestore.collection("users").doc(DID).set({
		first: FName,
		Last: LName, 
		Email: Email,
		pass: Pass,
		SecurityTocken:Sectoken.value,
		Verification:"1"
	}).then(function () {
		console.log("Status Saved");
	}).catch(function (error){
		console.log("got an error", error);
    });
    $("#Update").prop( "disabled", false );


});
function Validate(){
	debugger;
	var s="1";
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
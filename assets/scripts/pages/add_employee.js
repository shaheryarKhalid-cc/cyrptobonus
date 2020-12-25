$(document).ready((initializEmployeeList()));
{
    $.ajax({
        //url: "http://127.0.0.1:8000/kanbandemo?/getuserlist",
        url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/getuserlist",
        type: "get",
        dataType: "json",
        success: function (data) {
            //console.log(data);
            initializeEmployeeTable(data);
        },
        error: function (data) {
            alert("Server has failed to respond")
        }
    });
}
//function below
function initializEmployeeList() {
    console.log("loading Employee List");
}

function initializeEmployeeTable(data) {
    let messageArray = data['employees'];
    /*for (let s of messageArray) {
        console.log(s);*/
    let index = 0;
    let rowNumber = 0;
    let rowID = 0;
    while (index < messageArray.length) {
        console.log(messageArray[index]);
        console.log(rowID);
        let htmlString = `
        <tr id="${rowID += 1}">
                    <th scope="row">${rowNumber += 1}</th>
                    <td class="row-data">${messageArray[index]['firstname']}</td>
                    <td class="row-data">${messageArray[index]['lastname']}</td>
                    <td class="row-data">${messageArray[index]['email']}</td>
                    <td style="display:none" class="row-data">${messageArray[index]['username']}</td>
                    <td style="display:none" class="row-data">${messageArray[index]['password']}</td>
                    <td style="display:none" class="row-data">${messageArray[index]['employmenttype']}</td>
                    <td style="display:none" class="row-data">${messageArray[index]['jobtitle']}</td>
                    <td><input type="button" class="btn btn-sm btn-primary" onclick="deleteEmployee()" value="Remove" /></td>
        </tr>
        `
        console.log(messageArray[index]);
        index += 1;
        $("#userlist").append(htmlString);
    }
}

function add_employee()
{
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var employmenttype = document.getElementById("employmenttype").value;
    var jobtitle = document.getElementById("jobtitle").value;
    document.getElementById("form_employee").submit();
    createEmployee(firstname, lastname, email, username, password, employmenttype, jobtitle);

}
function createEmployee(firstname, lastname, email, username, password, employmenttype, jobtitle)
{
    $.ajax({
        //url: "http://127.0.0.1:8000/kanbandemo?/employee",
        url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/employee",
        type: "post",
        dataType: "json",
        data: JSON.stringify({firstname: firstname, lastname: lastname, email: email, username: username, password: password,
        employmenttype: employmenttype, jobtitle: jobtitle}),
        success: function (data) {
            console.log('Adding A new User Complete');
        },
        error: function (data) {
            console.log("Server has failed to respond to add user");
        }
    });
}
function deleteEmployee() {
    let rowId = event.target.parentNode.parentNode.id;
    let data = document.getElementById(rowId).querySelectorAll(".row-data");
    var str = [];
    for(var i = 0; i < data.length; i++) {
        str = data[i];
        console.log(str);
    }
}
//variables
//version Alpha

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let router = urlParams.get('name');
console.log(router);


let cardBeignDragged;
let dropzones = document.querySelectorAll('.dropzone');
let priorities;
let cards = document.querySelectorAll('.kanbanCard');
let dataColors = [
    {color:"yellow", title:"backlog"},
    {color:"green", title:"to do"},
    {color:"blue", title:"in progress"},
    {color:"purple", title:"qa"},
    {color:"red", title:"done"}
];
let dataCards = {
    config:{
        maxid:0
    },
    cards:[]
};
let theme="light";

let homepage = [];

//initialize the page note it refreshes on everything

$(document).ready(()=> {
    console.log('im at the start reload page !!!');
    $("#loadingScreen").addClass("d-none");
    theme = localStorage.getItem('@kanban:theme');
    if (theme) {
        $("body").addClass(`${theme === "light" ? "" : "darkmode"}`);
    }
    initializeBoards();
    {
        $.ajax({
            //url: "http://127.0.0.1:8000/kanbandemo?/readcard",
            url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/readcard",
            type: "post",
            dataType: "json",
            data: JSON.stringify((router)),
            success: function (data) {
                if (data) {
                    dataCards = (data);
                    initializeComponents(dataCards);
                    //initializeHome();
                    console.log(router);
                }
            },
            error: function (data) {
                alert("Server has failed to respond")
            },
        });
    }

    initializeCards();
    $('#add').click(() => {
        const title = $('#titleInput').val() !== '' ? $('#titleInput').val() : null;
        const description = $('#descriptionInput').val() !== '' ? $('#descriptionInput').val() : null;
        const time = $('#timeInput').val() !== '' ? $('#timeInput').val() : null;
        const user = $('#employeeInput').val() !== '' ? $('#employeeInput').val() : null;
        $('#titleInput').val('');
        $('#descriptionInput').val('');
        $('#timeInput').val('');
        $('#employeeInput').val('');
        if (title && description) {
            let id = dataCards.config.maxid + 1;
            const newCard = {
                id,
                title,
                description,
                time,
                user,
                position: "green",
                priority: false
            }

            dataCards.cards.push(newCard);
            dataCards.config.maxid = id;
            let postdataid = dataCards.config;
            let postdatacard = newCard;
            save(postdataid, postdatacard);
            appendComponents(newCard);
            initializeCards();
            console.log('in adding new card');
        }
    });
    boardtitle();
});
    /*$("#theme-btn").click((e) => {
        e.preventDefault();
        $("body").toggleClass("darkmode");
        if (theme) {
            localStorage.setItem("@kanban:theme", `${theme === "light" ? "darkmode" : ""}`)
        } else {
            localStorage.setItem("@kanban:theme", "darkmode")
        }
});*/
function boardtitle() {
    let htmlString = `
        <h4 class="text-center">${router}</h4>
        `
    $("#project_title").append(htmlString)
}
function initializeBoards() {
    dataColors.forEach(item => {
        let htmlString = `
        <div class="board">
            <h4 class="text-center">${item.title.toUpperCase()}</h4>
            <div class="dropzone" id="${item.color}">
                
            </div>
        </div>
        `
        $("#boardsContainer").append(htmlString);
    });

    let dropzones = document.querySelectorAll('.dropzone');
    dropzones.forEach(dropzone=>{
        dropzone.addEventListener('dbcrud', dbcrud);
        dropzone.addEventListener('crudCard', crudCard);
        dropzone.addEventListener('dbcrudleft', dbcrudleft);
        dropzone.addEventListener('crudCardleft', crudCardleft);
    });

}

function initializeCards(){
    cards = document.querySelectorAll('.kanbanCard');

    cards.forEach(card=>{
        card.addEventListener('dbcrud', dbcrud);
        card.addEventListener('crudCard', crudCard);
        card.addEventListener('dbcrudleft', dbcrudleft);
        card.addEventListener('crudCardleft', crudCardleft);
    });
}
function initializeComponents(dataArray){
    //create all the stored cards and put inside of the todo area
    dataArray.cards.forEach(card=>{
        appendComponents(card);
    });
return false;
}
function appendComponents(card) {
    //creates new card inside of the todo area
    let htmlString = `
        <div id=${card.id.toString()} class="kanbanCard ${card.position}" draggable="true">
            <div class="content">               
                <h4 class="title">${card.title}</h4>
                <p class="description">${card.description}</p>
                <p class="time">${card.time}</p>
                <p class="user">${card.user}</p>
            </div>
            <form class="row mx-auto justify-content-between">
                <button class="invisibleBtn">
                    <span class="material-icons priority" onclick="crudCardleft(${card.id.toString()})">
                        arrow_left
                    </span>
                </button>
                <button class="invisibleBtn">
                    <span class="material-icons delete" onclick="deleteCard(${card.id.toString()})">
                         cancel
                    </span>
                </button>
                <button class="invisibleBtn">
                    <span class="material-icons priority" onclick="crudCard(${card.id.toString()})">
                        arrow_right
                    </span>
                </button>
                <button class="invisibleBtn" id="editcardbtn">
                    <span class="material-icons priority" onclick="cardedit(${card.id.toString()})">
                        add_comment
                    </span>
                </button>
            </form>
        </div>
    `
    $(`#${card.position}`).append(htmlString);
    priorities = document.querySelectorAll(".priority");
}
//Drag functions
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//page function to load and pass data to other functions
function cardedit(id) {
    $("#id03").modal();
    dataCards.cards.forEach(card => {
        if (card.id === id) {
            let index = dataCards.cards.indexOf(card);
            dataCards.cards.splice(index, 1);
            //Parsing card data
            let description = (card['description']);
            obj = (id);
            obj1 = (description);
            document.getElementById("descriptionInput-01").innerHTML =
                obj1;
            console.log(obj1);
            }
        });
}
function cardeditpopup() {
    console.log('testing snip code');
    //$("#id03").modal();
    //event.preventDefault();
    //if (event.preventDefault()) {
        //console.log('still trying');
    //} else {
        //$("#id03").modal();
    //}
}

//all save and deletes are in the below functions

function togglePriority(event){
    event.target.classList.toggle("is-priority");
    dataCards.cards.forEach(card=>{
        if(event.target.id.split('-')[1] === card.id.toString()){
            card.priority=card.priority?false:true;
        }
    });
}
function crudCard(id){
    dataCards.cards.forEach(card=>{
        if(card.id === id){
            let index = dataCards.cards.indexOf(card);
            console.log(card);
            console.log("i'm at crudCard right");
            dataCards.cards.splice(index, 1);
            dbcrud(card);
        }
    });
    event.preventDefault();
}
function dbcrud(card){
    $.ajax({
        //url: "http://127.0.0.1:8000/kanbandemo?/curd",
        url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/crud",
        type: "post",
        dataType: 'json',
        data: JSON.stringify({cdata: card, pdata: router}),
        success: function (data) {
            console.log(data);
            console.log('trying to reload properly right !!!');
            location.reload();
        },
        error: function (data) {
            alert("Server has failed to respond")
        }
    });
    event.preventDefault();
}
function crudCardleft(id){
    dataCards.cards.forEach(card=>{
        if(card.id === id){
            let index = dataCards.cards.indexOf(card);
            console.log(card);
            console.log("i'm at crudCard left!!!");
            dataCards.cards.splice(index, 1);
            dbcrudleft(card);
        }
    });
    event.preventDefault();
}
function dbcrudleft(card) {
    $.ajax({
        //url: "http://127.0.0.1:8000/kanbandemo?/backcardleft",
        url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/backcardleft",
        type: "post",
        dataType: 'json',
        data: JSON.stringify({cdata: card, pdata: router}),
        //data: data('@kb:data', JSON.stringify(dataCards)),
        success: function (data) {
            console.log('trying to reload properly left!!!');
            location.reload();
        },
        error: function (data) {
            alert("Server has failed to respond")
        }
    });
    event.preventDefault();
}
function deleteCard(id){
    dataCards.cards.forEach(card=>{
        if(card.id === id){
            let index = dataCards.cards.indexOf(card);
            console.log(card);
            console.log("i'm at deleteCard");
            dataCards.cards.splice(index, 1);
            dbremove(card);
        }
    });
    event.preventDefault();
}
function dbremove(card){
    $.ajax({
        //url: "http://127.0.0.1:8000/kanbandemo?/deletecard",
        url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/deletecard",
        type: "post",
        dataType: 'json',
        data: JSON.stringify({cdata: card, pdata: router}),
        //data: data('@kb:data', JSON.stringify(dataCards)),
        success: function (data) {
            console.log("card removed!");
            location.reload();
        },
        error: function (data) {
            alert("Server has failed to respond")
        }
    });
    event.preventDefault();
}
function presavecard(id){
    dataCards.cards.forEach(card=>{
        if(card.id === id){
            let index = dataCards.cards.indexOf(card);
            console.log(card);
            console.log("i'm at deleteCard");
            dataCards.cards.splice(index, 1);
            save(card);
        }
    });
}
function save(config, cards) {
    console.log(config);
    console.log(cards);
    $.ajax({
        //url: "http://127.0.0.1:8000/kanbandemo?/insertcard",
        url: "https://us-east1-kanban-demo-294721.cloudfunctions.net/kanbandemo?/insertcard",
        type: "post",
        dataType: 'json',
        data: JSON.stringify({config, cards, router}),
        //data: data('@kb:data', JSON.stringify(dataCards)),
        success: function (data) {
            console.log("card saved !!");
            console.log(data);
        },
        error: function (data) {
            alert("Server has failed to respond");
        }
    })
}

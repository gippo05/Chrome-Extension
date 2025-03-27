let saveButton = document.getElementById('input-btn');
let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

saveButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads();
});


function renderLeads(){
let lisItems = [];
for (let i = 0; i < myLeads.length; i++){
    lisItems += "<li>" + myLeads[i]
}
ulEl.innerHTML = lisItems;
}

let renderTwice = twiceLeads();

function twiceLeads(){
    for (let i = 0; i < 3; i++){
        
    }
}
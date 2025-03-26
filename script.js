let saveButton = document.getElementById('input-btn');
let myLeads = [];
const inputEl = document.getElementById('input-el');

saveButton.addEventListener("click", function(){
    console.log("Clicked!");
    myLeads.push(inputEl.value);
});
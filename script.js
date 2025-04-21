let saveButton = document.getElementById('input-btn');
let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

saveButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
});


function renderLeads(){
let lisItems = [];
for (let i = 0; i < myLeads.length; i++){
    lisItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li> 
        `
        
}
ulEl.innerHTML = lisItems;
}

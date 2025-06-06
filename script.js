let saveButton = document.getElementById('input-btn');
let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteButton = document.getElementById('delete-btn')
const saveTabButton = document.getElementById('tab-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


function render(leads){
    let lisItems = [];
    for (let i = 0; i < leads.length; i++){
        lisItems += `
                <li>
                    <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                    </a>
                </li> 
            `
            
    }
    ulEl.innerHTML = lisItems;
    }
    
saveTabButton.addEventListener('click', () =>{
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads)
       })
})

saveButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

deleteButton.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})




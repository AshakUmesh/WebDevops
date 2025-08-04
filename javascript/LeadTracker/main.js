let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

deleteBtn.addEventListener("click", function () {
    myLeads = [];
    localStorage.clear();
    ulEl.innerHTML = "";
});

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const url = tabs[0].url;
        myLeads.push(url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    });
});

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromStorage) {
    myLeads = leadsFromStorage;
    renderLeads();
}

// Add new lead on button click
saveBtn.addEventListener("click", function () {
    const input = inputEl.value.trim();
    if (input) {
        myLeads.push(input);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    }
});

function renderLeads() {
    let innerUl = "";
    for (let i = 0; i < myLeads.length; i++) {
        innerUl += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = innerUl;
}

import { createChildWindow } from "./main.js";

const clients = [
    {clientName: "Judy", dogName: "Bella", phoneNumber: "514-475-2574", dogBreed: "shih tzu", specialNotes: ""},
    {clientName: "Robert", dogName: "Tuukka", phoneNumber: "514-979-3184", dogBreed: "Cockapoo", specialNotes: ""}
];

function loadTableData(data) {

    const table = document.getElementById("tableBody");
    let tableHTML = "";

    data.forEach(client => {
        tableHTML += `
        <tr>
            <td>${client.clientName}</td>
            <td>${client.dogName}</td>
            <td>${client.phoneNumber}</td>
            <td>${client.dogBreed}</td>
        </tr>
        `;
    });

    table.innerHTML = tableHTML;
}

document.getElementById("addClient").addEventListener(onclick, createChildWindow(window))


function addClient() {

    

}

loadTableData(clients);
const clients = [
    {clientName: "Judy", dogName: "Bella", phoneNumber: "514-475-2574", dogBreed: "shih tzu"},
    {clientName: "Robert", dogName: "Tuukka", phoneNumber: "514-979-3184", dogBreed: "Cockapoo"}
];

function loadTableData(data) {

    const table = document.getElementById("tableBody");
    let tableHTML = "";

    data.forEach(clients => {
        tableHTML += `
        <tr>
            <td>${clients.clientName}</td>
            <td>${clients.dogName}</td>
            <td>${clients.phoneNumber}</td>
            <td>${clients.dogBreed}</td>
        </tr>
        `;
    });

    table.innerHTML = tableHTML;
}

loadTableData(clients);
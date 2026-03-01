const clients = [
    {clientName: "Judy", dogName: "Bella", phoneNumber: "514-475-2574", dogBreed: "shih tzu", specialNotes: ""},
    {clientName: "Robert", dogName: "Tuukka", phoneNumber: "514-979-3184", dogBreed: "Cockapoo", specialNotes: ""},
    {clientName: "Joyce", dogName: "Kobi", phoneNumber: "514-233-5899", dogBreed: "Aussie Doodle", specialNotes: ""},
    {clientName: "Natalie", dogName: "Adam", phoneNumber: "514-893-3425, 514-883-6630", dogBreed: "Bichon Mix", specialNotes: ""},
    {clientName: "Chris", dogName: "Teramsu", phoneNumber: "514-928-3907", dogBreed: "Cocker", specialNotes: ""},
    {clientName: "Alsha", dogName: "Candes", phoneNumber: "514-516-4569", dogBreed: "Portie", specialNotes: ""}
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

document.addEventListener("DOMContentLoaded", () => {
  loadTableData(clients);

  document
    .getElementById("addClient")
    .addEventListener("click", () => {
      window.api.openAddClient();
    });
});

function addClient() {

    

}
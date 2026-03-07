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

export async function initClientsPage(){
    const clients = await window.api.getClients();

    loadTableData(clients);

    document
      .getElementById("addClient")
      .addEventListener("click", async () => {

        const newClient = {
            clientName: "New Client",
            dogName: "Dog",
            phoneNumber: "",
            dogBreed: "",
            specialNotes: ""
        }

        clients.push(newClient);

        await window.api.saveClients(clients);

        loadTableData(clients);
      });
}
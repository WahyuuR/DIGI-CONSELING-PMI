// script.js
fetch(
  "https://api.mockfly.dev/mocks/38f1b312-d4fb-https://664ad45aa300e8795d431aae.mockapi.io/Data_Pengunjung/Data_Pengunjung-88f3-19bd47c6f37e/Data_Pengunjung"
)
  .then((response) => response.json())
  .then((data) => {
    function populateTable(data) {
      const tableBody = document.querySelector("#table1 tbody");
      tableBody.innerHTML = "";
      data.forEach((entry) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${entry.CreateAt}</td>
                    <td>${entry.Name}</td>
                    <td>${entry.No_telfon}</td>
                    <td><span class="badge ${
                      entry.status === "Active" ? "bg-success" : "bg-danger"
                    }">${entry.status}</span></td>
                `;
        tableBody.appendChild(row);
      });
    }
    populateTable(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

const fetchButton = document.getElementById("section-data__fetch-button");

const tableBody = document.querySelector(".section-data__table-body");

const MemberModel = {
  id: "string",
  name: "string",
  age: 1,
  email: "string",
};

const createTableRow = (...cells) => {
  const row = document.createElement("tr");

  for (const cell of cells) {
    const td = document.createElement("td");
    td.innerHTML = cell;
    row.appendChild(td);
  }

  return row;
};

const fetchData = async () => {
  const response = await fetch(
    "https://express-deploy-vercel.vercel.app/members"
  );

  /**
   * @type {MemberModel[]}
   */
  const members = await response.json();

  for (const { id, name, age, email } of members) {
    tableBody.appendChild(createTableRow(id, name, age, email));
  }
};

fetchButton.addEventListener("click", fetchData);

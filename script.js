const fetchButton = document.getElementById("fetch-data");

const printField = document.querySelector(".print-data");

const fetchData = async () => {
  const response = await fetch(
    "https://express-deploy-vercel.vercel.app/members"
  );
  const data = response.json();
  console.log(data);
};

fetchButton.addEventListener("click", fetchData);

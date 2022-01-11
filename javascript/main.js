/* -----------Button to drivers 2020 Json--------------  */
document.getElementById("btn1").onclick = function () {
  // access to json
  let url = "/drivers2020.JSON";
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
  // data to table (index)
  const showData = (data) => {
    let body = "";
    for (let i = 0; i < data.length; i++) {
      body += `<tr>
	  <td>${data[i].permanentNumber}</td>
	  <td>${data[i].givenName}</td>
	  <td>${data[i].familyName}</td>
	  <td>${data[i].dateOfBirth}</td>
	  <td>${data[i].nationality}</td>
	  
	  </tr> `;
    }

    document.getElementById("data").innerHTML = body;
  };
};

/* -----------Button to drivers 2021 Json--------------  */
document.getElementById("btn2").onclick = function () {
  // access to json
  let url = "/drivers2021.JSON";
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
  // data to table (index)
  const showData = (data) => {
    let body = "";
    for (let i = 0; i < data.length; i++) {
      body += `<tr>
	  <td>${data[i].permanentNumber}</td>
	  <td>${data[i].givenName}</td>
	  <td>${data[i].familyName}</td>
	  <td>${data[i].dateOfBirth}</td>
	  <td>${data[i].nationality}</td>
	  
	  </tr> `;
    }

    document.getElementById("data").innerHTML = body;
  };
};

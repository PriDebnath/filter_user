let input = document.getElementById("input");

let ul = document.getElementById("ul");

let userData = [];

let getData = async () => {
  try {
    let res = await fetch("https://randomuser.me/api?results=50");
    let data = await res.json();
 ul.innerHTML =''
    let { results } = data;
    results.forEach((user) => {
      let li = document.createElement("li");

      li.innerHTML = `
        <img src=${user.picture.thumbnail} alt='not found' />
  <div class='user-info' >
  <h3>${user.name.first} ${user.name.last}</h3>
  <h4>${user.location.city},${user.location.state}</h4></div>`;

      ul.appendChild(li); 
        userData.push(li);
    });

 

    console.log(userData);
  } catch (err) {
    console.log(err);
  }
};

getData();



input.addEventListener("input", (event) => {
  let inputValue = event.target.value;
  console.log(inputValue);
  userData.filter((user) => {
   if( user.innerText.toLowerCase() .includes(inputValue)){
     user.classList.remove('hide')
   }else{
    user.classList.add('hide')
   }
  });

})


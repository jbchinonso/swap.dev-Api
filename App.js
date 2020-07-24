class User{
    constructor(){

    }
}

// HTTP Request Using the Fecth Api
const members = () =>{
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => populate(data.results))
    .catch(err => console.log(err))
}

// function to populate Frontend app with list of Users
const populate = (data)=>{
    const warriors = document.querySelector('.warriors');
    data.forEach(element => {
        warriors.innerHTML += `<div class="warrior-cabin">
        <div class="warrior">
          <img src="./images/warrior.jpg" />
        </div>
        <p>${element.name}</p>
      </div>`
    });
}
members();

//displaying of user information when a user's name is Clicked;
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click',()=>{
    modal.style.visibility = 'Hidden'
})

modal.addEventListener('click', (e)=>{
    if(e.target === modal) modal.style.visibility = 'Hidden'
})
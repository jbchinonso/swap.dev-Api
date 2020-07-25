class User{
    constructor(name, height, gender){
        this.name = name;
        this.height = height;
        this.gender = gender;
        this.userDetail = document.querySelector('.warrior-detail');
    }

    ShowDetail(){
        const modal = document.getElementById('modal');
        this.userDetail.innerHTML = `<p>Name : ${this.name}</p>
        <p>Height : ${this.height}</p>
        <p>Gender : ${this.gender}</p>`;

        modal.style.visibility = 'visible';
         
    }
}

// HTTP Request Using the Fecth Api
const members = () =>{
    fetch('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => populate(data.results))
    .catch(err => console.log(err))
}

// function to populate Frontend app with list of Users
const populate = (data)=>{
    const warriors = document.querySelector('.warriors');
    data.forEach((element,index) => {
        warriors.innerHTML += 
        `<div class="warrior-cabin" id = ${index} data-height = ${element.height} data-gender = ${element.gender} onclick='displayInfo(${index})'>
        <div class="warrior">
          <img src="./images/warrior${index}.jpg" />
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

//show user information when username is clicked
const displayInfo = (id)=>{
    const fighter = document.getElementById(id);
    const name = fighter.textContent;
    const height = fighter.getAttribute('data-height');
    const gender = fighter.getAttribute('data-gender');
    const user = new User(name, height, gender);
    user.ShowDetail();
}

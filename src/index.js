const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    toyFormTag.addEventListener('submit', () =>{
      event.preventDefault()
      let toyName = event.target.name.value
      let toyImage = event.target.image.value
      let toyObj = {
        name: toyName, 
        image: toyImage,
        likes: 0
      }
      addNewToy(toyObj)
      .then((toy) => {
        debugger
        divToyCollectionTag.innerHTML = createToyCard(toy) + divToyCollectionTag.innerHTML
   })})
    }
  else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!

const createToyCard = (toyObj) => {
  return ` <div class="card">
            <h2>${toyObj.name}</h2>
            <img src=${toyObj.image} class="toy-avatar" />
            <p>${toyObj.likes} Likes </p>
            <button class="like-btn">Like <3</button>
          </div>`
}

const divToyCollectionTag = document.getElementById("toy-collection")

fetch("http://localhost:3000/toys")
  .then((response) => {
    return response.json()
  })
  .then((toys) => {
    toys.forEach(toyObject => {
      divToyCollectionTag.innerHTML += createToyCard(toyObject)
    })
  })

const toyFormTag = document.querySelector("form.add-toy-form")

const addNewToy = (toyObj) => {
return fetch("http://localhost:3000/toys", {
method: "POST", 
headers: 
{
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(toyObj)
})
.then(response => response.json())
}

// do a query selector for the "like" button, which should represent the particular div that we are trying to update 

const likeButton = document 

// make an update function using a PATCH request 

// update the DOM with new information
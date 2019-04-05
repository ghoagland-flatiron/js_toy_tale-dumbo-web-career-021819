const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})
const toyCard = (toyObject) => {
  return `<div class="card">
    <h2>${toyObject.name}</h2>
    <img src=${toyObject.image} class="toy-avatar" />
    <p>${toyObject.likes} Likes </p>
    <button class="like-btn">Like <3</button>
  </div>`
}

const toyDivTag = document.getElementById('toy-collection');
// OR HERE!
const toyUrl = fetch('http://localhost:3000/toys')
.then((response) => {
  return response.json()
}).then((toysObject) => {
  toysObject.forEach((toyObject) => {
  console.log(toyObject);
  toyDivTag.innerHTML += toyCard(toyObject)
})})

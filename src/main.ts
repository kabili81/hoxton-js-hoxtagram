// Instructions
// - Dynamically render the posts using the card HTML portion that you'll find commented in the index.html
// - Render the comments for the posts and the likes, too. (note the heart button is useless. For now 😉)
// - Try to use the same CSS classes to achieve the desired look

// Tips
// - Make some requests to your server and inspect the response, so you can check the data structure before start coding
// - Feel free to use hardcoded values to take care of the visuals, before connecting your front end to the server
// - Help yourselves by building helper functions, a la getImages() 

// Challenge 1
// Add a navigation bar that renders the user icon and name. Make sure the info for it comes from the server 

// Challenge 2
// When a user clicks the image - show a modal with more information (creative freedom on what information is shown here) 


// solution goes here




function card() {
    // find the section i want to add stiff to 
    // clear it

    // render each image from state
//     <article class="image-card">
//     <h2 class="title">Title of image goes here</h2>
//     <img src="./assets/image-placeholder.jpg" class="image" />
//     <div class="likes-section">
//       <span class="likes">0 likes</span>
//       <button class="like-button">♥</button>
//     </div>
//     <ul class="comments">
//       <li>Get rid of these comments</li>
//       <li>And replace them with the real ones</li>
//       <li>From the server</li>
//     </ul>
//   </article>

let articleEl = document.createElement('article')
articleEl.className = 'image-card'

let h2El = document.createElement('h2')
h2El.className = 'title'
h2El.textContent = ''

let imgEl = document.createElement('img')
imgEl.className = 'image'
imgEl.src = './assets/image-placeholder.jpg'

let divEl = document.createElement('div')
divEl.className = 'likes-section'

let spanEl = document.createElement('span')
spanEl.className = 'likes'
spanEl.textContent = '0 likes'

let buttonEl = document.createElement('button')
buttonEl.className = 'like-button'
buttonEl.textContent = '♥'

let ulEl = document.createElement('ul')
ulEl.className = 'comments'

let liEl = document.createElement('li')
liEl.textContent = 'Get rid of these comments'

let li2El = document.createElement('li')
li2El.textContent = 'And replace them with the real ones'

let li3El = document.createElement('li')
li3El.textContent = 'From the server'

let theul = document.querySelector('.image-container')
theul?.appendChild(articleEl)
articleEl.append(h2El, imgEl, divEl, spanEl, buttonEl, ulEl, liEl, li2El, li3El)
divEl.append(spanEl, buttonEl)
ulEl.append(liEl, li2El, li3El)
}

card()
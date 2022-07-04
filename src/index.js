 //This is what a post looks like
 
//   {
//      "id": 1,
//      "title": "Coder dog",
//      "likes": 7,
//      "image": "./assets/coder-dog.png",
//      "comments": [
//        {
//          "id": 1,
//          "content": "What a cute dog!",
//          "imageId": 1
//        },
//        {
//          "imageId": 1,
//          "content": "Funny dog!!",
//          "id": 4
//        },
//        {
//          "imageId": 1,
//          "content": "Hes a good boy!!",
//          "id": 5
//        }
//      ]
//    },


let images = [
        {
            "id": 1,
            "title": "Coder dog",
            "likes": 7,
            "image": "./assets/coder-dog.png",
            "comments": [
              {
                "id": 1,
                "content": "What a cute dog!",
                "imageId": 1
              },
              {
                "imageId": 1,
                "content": "Funny dog!!",
                "id": 4
              },
              {
                "imageId": 1,
                "content": "Hes a good boy!!",
                "id": 5
              }
            ]
          },
    ]


function card(img) {
    let articleEl = document.createElement('article')
    articleEl.className = 'image-card'

    let h2El = document.createElement('h2')
    h2El.className = 'title'
    h2El.textContent = img.title 

    let imgEl = document.createElement('img')
    imgEl.className = 'image'
    imgEl.src = img.image

    let divEl = document.createElement('div')
    divEl.className = 'likes-section'

    let spanEl = document.createElement('span')
    spanEl.className = 'likes'
    spanEl.textContent = img.likes

    let buttonEl = document.createElement('button')
    buttonEl.className = 'like-button'
    buttonEl.textContent = '♥'

    let ulEl = document.createElement('ul')
    ulEl.className = 'comments'

    let liEl = document.createElement('li')
    liEl.textContent = img.content
    
    let theul = document.querySelector('.image-container')
    theul?.appendChild(articleEl)
    articleEl.append(h2El, imgEl, divEl, spanEl, buttonEl, ulEl, liEl)
    divEl.append(spanEl, buttonEl)
    ulEl.append(liEl)
}

for(let img of images){
    card(img)
}
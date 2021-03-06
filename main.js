// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById("modal")
modal.className = "hidden"

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  //ELEMENTS FROM DOM
  const hearts = document.querySelectorAll(".like-glyph")
 

  //BUILDING DOM FUNCTIONALITY

  //EVENT HANDLERS
  function handleLike(e) {
    mimicServerCall()
      .then(resp => {
        console.log(resp)
        let heart = e.target
        heart.className = "activated-heart"
        if (heart.innerHTML == EMPTY_HEART) {
          heart.innerHTML = FULL_HEART;
          heart.className = "activated-heart"
        } else {
          heart.innerHTML = EMPTY_HEART;
          heart.className = ""
        }
      })
      .catch(error => {
        modal.className = ""
        modal.innerText = error
        setTimeout(() => {
          modal.className = "hidden"
        }, 5000)
      })


  }
  //EVENT LISTENERS
  hearts.forEach(heart => {
    heart.addEventListener("click", handleLike)
  })

  //FUNCTION CALLS

});
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

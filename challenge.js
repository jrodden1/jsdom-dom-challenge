let count = 0 

const counter = document.querySelector("#counter")
const pauseButton = document.querySelector("#pause")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const heartButton = document.querySelector("#heart")
const commentForm = document.getElementsByTagName("form")[0]
const commentInputText = document.querySelector("#comment")
const commentsList = document.querySelector("#list")
const likesList = document.querySelector(".likes")

function timerIncrement() {
   count++
   counter.innerText = count
   console.log(count)
}

function timerDecrement() {
   count--
   counter.innerText = count
   console.log(count)
}

let likedNumbers = []

function addHeartedNumberToList() {
   function addLike() {
      const likedNum = captureHeartedNumber()
      const foundNumber = likedNumbers.find(obj => obj.number == likedNum)

      if(foundNumber) {
         //increment that object's "times" value 
         foundNumber.times++
         existingLi = document.getElementById(`${foundNumber.number}`)
         existingLi.textContent = `${foundNumber.number} liked ${foundNumber.times} times`
      } else {
   //    else, if I don't find the number then add a new object to the array with the number and times attribs
         const newLikedNum = {
            number: likedNum,
            times: 1
         }
         likedNumbers.push(newLikedNum)
         
         const newListItem = createHeartedNumberListItem()
         newListItem.textContent = `${newLikedNum.number} liked ${newLikedNum.times} time`
         newListItem.id = `${newLikedNum.number}`
         likesList.appendChild(newListItem)
      }
   }   

   addLike()

}





function captureHeartedNumber() {
   return count 
}

function createHeartedNumberListItem() {
   let li = document.createElement("li")
   return li
}

function addComment(event) {
   event.preventDefault()
   // debugger
   const newCommentText = commentInputText.value
   const newCommentElement = document.createElement("p")
   newCommentElement.textContent = newCommentText
   commentsList.appendChild(newCommentElement)
   console.log("New child element added to comment list")
   commentInputText.value = ""
}



document.addEventListener("DOMContentLoaded", function() {
   let timerId = setInterval(timerIncrement, 1000)
   pauseButton.addEventListener("click", pauseAll)
   plusButton.addEventListener("click", timerIncrement)
   minusButton.addEventListener("click", timerDecrement)
   heartButton.addEventListener("click", addHeartedNumberToList)
   commentForm.addEventListener("submit", addComment)

   let paused = false

   function pauseAll() {
      /* Requirements still need to be added:
         - disable all the other buttons (i think I can add an attribute of disabled to the button)
         - change pause button text to "resume"
         - bonus - dim everything?? 
      */
      if (paused == false) {
         clearInterval(timerId)
         paused = true
         pauseButton.textContent = "resume"
         disableAllButtons()      
      } else {
         paused = false 
         pauseButton.textContent = "pause"
         enableAllButtons()
         resumeTimer()
      }
   }

   function resumeTimer() {
      timerId = setInterval(timerIncrement, 1000)
   }

   function disableAllButtons() {
      plusButton.disabled = true
      minusButton.disabled = true
      heartButton.disabled = true
   }

   function enableAllButtons() {
      plusButton.disabled = false
      minusButton.disabled = false
      heartButton.disabled = false
   }
});






//Initial function runs upon loading
$(function () {
  let events0 = localStorage.getItem("events0")
  let events1 = localStorage.getItem("events1")
  let events2 = localStorage.getItem("events2")
  let events3 = localStorage.getItem("events3")
  let events4 = localStorage.getItem("events4")
  let events5 = localStorage.getItem("events5")
  let events6 = localStorage.getItem("events6")
  let events7 = localStorage.getItem("events7")
  let events8 = localStorage.getItem("events8")
  let events9 = localStorage.getItem("events9")
  let events10 = localStorage.getItem("events10")
  let events11 = localStorage.getItem("events11")
  let events12 = localStorage.getItem("events12")

  //sets events into array
  let events = [events0, events1, events2, events3, events4, events5, events6, events7, events8, events9, events10, events11, events12]

  //write the events to the screen
  writeEvents(events)

  //initializes the save button via clickEvent
  $(".saveBtn").each(function() {
    $(this).on("click", saveEvent)
  })

  //styles the hour block properly
  compareHour()

  //shows the current date
  displayDate()
});


//display the current date and time
function displayDate() {
  let date = $("#date")
  date.text(" ")
  let today = dayjs().format("MMM DD YYYY  HH:mm:ss")
  date.text(today)
}


function compareHour() {
  let blocks = $(".time-block")
  let currentHour = dayjs().format("HH")

  blocks.each(function() {
    if ($(this).data("block")+5 > currentHour) {
      $(this).addClass("future")
    }

    if ($(this).data("block")+5 < currentHour) {
      $(this).addClass("past")
    }

    if ($(this).data("block")+5 == currentHour) {
      $(this).addClass("present")
    }
  })
}

//Saves the event with the corresponding save button clicked
function saveEvent(e) {
  let dataBlock = $(this).data("button")
  let textElement = $(this).siblings(".description")
  let currentEvent = textElement.val()
  localStorage.setItem(`events${dataBlock}`, currentEvent)
}

function writeEvents(events) {
  let textEls = $(".description")
  for (let i=0; i<textEls.length; i++){
    //to write an event when not undefined
    if(events[i] !== undefined)  {
    textEls[i].value = events[i]
    }
  }
}

setInterval(function() {
  compareHour()
  displayDate()
    
}, 1000)

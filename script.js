const messages = ['Are you Sure?🤨', 'Really Sure?', 'Are you positive???', 'Pookie Please', ' Think about it', 'If you say no, Ill be very sad', 'Ill be very very sad', 'Ill be very very very sad', 'Ill be very very very very sad', 'Okay fine Ill stop asking', 'Just kidding, PLEASE SAY YES', 'Ill be very very very very very sad', 'Youre breaking my heart😭']

let index = 0;

const no_button = document.querySelector('.no');
const yes_button = document.querySelector('.yes');
const audio = document.querySelector("audio");

let scaleIndex = 10;

yes_button.addEventListener('click', ()=> {
   document.querySelector('.container').classList.add('invisible');
   document.querySelector('.hi').classList.remove('invisible');
   if (audio.paused) {
      audio.volume = 1;
      audio.play();
    } 
})

no_button.addEventListener('click', ()=> {
   changeMessage();
   changeSize();
   if (audio.paused) {
      audio.volume = 1;
      audio.play();
    } 
});

function changeSize() {
   yes_button.style.width = scaleIndex +'rem';
   yes_button.style.height = scaleIndex + 'rem';
   scaleIndex += 5;
}

function changeMessage() {
   no_button.innerText = messages[index];
   if (index == messages.length - 1) {
      index = 0;
   } else {
      index++
   }
}

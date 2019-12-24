// initilize GitHub class
const github = new GitHub;

//initilize UI class
const ui = new UI;

// search input

const searchUser = document.getElementById('searchUser');

// search input event listener

searchUser.addEventListener('keyup',(e)=>{
  // get input text
  const userText = e.target.value;
  if(userText!==''){
    // make http call
    github.getUser(userText)
    // .then(data=>{
    //   // show profile
    //   ui.showProfile(data.profile);
    // })
  } else {
    ui.clearProfile();
  }
})
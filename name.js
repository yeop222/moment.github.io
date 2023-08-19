const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");

const helloWord = ["Have a nice day!", "How are you?","I hope you to be happy", "It's Okay", "Hey!!"];

const helllo =  helloWord[Math.floor(Math.random()*helloWord.length)];

const HIDDEN = "hidden";
const USERNAME = "username";

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    paintGreetings(username);
}

function paintGreetings(n) {

    greeting.innerText = `${helllo} ${n}`;
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}   else {
    paintGreetings(savedUsername);
}
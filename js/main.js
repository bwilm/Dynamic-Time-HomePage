//Dom Elements;

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

const showAmPm = true;

//Show Time

function showTime() {

    let today = new Date();

    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();

    //set am or pm 
    const amPm = hour >= 12 ? 'PM' : 'AM';
    // 12 hour format
    hour = hour % 12 || 12;
    //Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000)
}

//Add zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background

function setBgGreet() {
    let today = new Date();
    hour = today.getHours();

    if (hour < 12) {
        //Morning

        document.body.style.backgroundImage = "url('../img/mahanakhon.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    } else if (hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('../img/bkk2.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    } else {
        //evening
        document.body.style.backgroundImage = "url('../img/bkk1.jpg')";
        greeting.textContent = 'Good Evening';
    }
}

function getName() {

    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//set Name 
function setName(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
}
//get focus 
function getFocus() {

    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
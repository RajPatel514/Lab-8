
// Click button
document.getElementById('singleClick').addEventListener('click', function () {
    alert('Great job!');
});

// Double click button
document.getElementById('doubleClick').addEventListener('dblclick', function () {
    alert('Great job again!');
});

// Hovering event
var hoverMe = document.getElementById('hoverMe');
hoverMe.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'yellow';
});
hoverMe.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'transparent';
});

// Keypress Event
document.addEventListener('keypress', function (event) {
    console.log(`Character: ${event.charCode}`);
    console.log(`Character pressed: ${String.fromCharCode(event.charCode)}`);
});

// Form Event
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formEvent');
    form.addEventListener('submit', function (event) {
        console.log('Form submitted');
        event.preventDefault();
        alert(`You would like to go to: ${trip.value}`);
    })
});

// Focus Event
function handleFocus() {
    document.getElementById('trip').style.background = 'lightgreen';
}

// Blur Event
const tripInput = document.getElementById('trip');
function handleBlur() {
    document.getElementById('trip').style.background = 'pink';
    if (tripInput.value === '') {
        tripInput.placeholder = 'Field cannot be left blank';
    }
}


// Event Delegation - List items
const list = document.getElementById('gamesList');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        alert(event.target.textContent + ', Great choice!');
        event.target.style.backgroundColor = 'aquamarine';
    }
});

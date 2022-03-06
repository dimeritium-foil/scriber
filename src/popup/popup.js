// Get the button
let button = document.getElementById("toggle_button");
// Get the output text
let text = document.getElementById("text");

button.addEventListener("click", toggle);

let button_state;
restore_button_state();
console.log("restored", button_state);

text.classList.toggle("text-visible");
button.classList.toggle("button-active");

function toggle() {
    text.classList.toggle("text-visible");
    button.classList.toggle("button-active");
    button_state = !button_state;
    save_button_state();
    console.log(button_state);
} 

function save_button_state() {
    browser.storage.sync.set({
        state: button_state
    });
}

function restore_button_state() {
    var storageItem = browser.storage.managed.get('state');
    storageItem.then((res) => {
        button_state = res.state;
        console.log(res.state);
    });
}

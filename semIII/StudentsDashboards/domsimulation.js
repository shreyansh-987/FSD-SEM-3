import { EventEmitter } from 'events';

class Button extends EventEmitter {}

const myButton = new Button();

myButton.on('click', () => {
    console.log("Button clicked!");
});

myButton.on('mouseover', () => {
    console.log("Mouse over button!");
});

myButton.emit('click');
myButton.emit('mouseover');



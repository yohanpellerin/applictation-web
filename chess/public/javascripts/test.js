var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value,5);

    }
});

socket.on('chat message', function(msg,tg) {
    var item = document.createElement('li');
    item.textContent = msg;
    item.textContent+=tg;
    messages.appendChild(item);
    input.value=msg;

});
var input;
var time;
var i = 1;
var notif = '<h3>Set your notification time</h3><input id ="timeset"><button onclick="set()" id ="set">Set</button>';


$('#notif').html(notif);

$('#add').click(function() {
    input = $('#task').val();
    $('#dolist').append(`<li>${input}<button onclick="deleteThis(this)" class="del ${i}">X</button></li>`);
    $('#task').val('');
    i++;
});

function set() {
    time = $('#timeset').val();
    $('#notif').html('<h3>' + time + '</h3><button onclick="reset()"id ="reset">X</button>');
};

function reset() {
    $('#notif').html(notif);
};

function deleteThis(a) {
    console.log(a);
    $(a).parent().remove();
};


// request permission on page load
/*
document.addEventListener('DOMContentLoaded', function () {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
});

function notifyMe() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.'); 
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('Notification title', {
            icon: '',
            body: "Fill out your to do plan for the day!",
        });

        notification.onclick = function () {
            window.open("");      
        };

    }

}
*/

//update this with your $form selector
var form_id = "contactForm";

var data = {
    "access_token": "er956uxw694dn2rpecqpvhet"
};

function onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = $("#" + form_id + " [id='sendMessageButton']");

function send() {
    sendButton.val('Sending…');
    sendButton.prop('disabled',true);

    var subject = $("#" + form_id + " [id='name']").val();
    var email = $("#" + form_id + " [id='email']").val();
    var message = $("#" + form_id + " [id='message']").val();
    data['subject'] = subject;
    data['email'] = email;
    data['text'] = message;

    $.post('https://postmail.invotes.com/send',
        data,
        onSuccess
    ).fail(onError);

    return false;
}

sendButton.on('click', send);

var $form = $("#" + form_id);
$form.submit(function( event ) {
    event.preventDefault();
});
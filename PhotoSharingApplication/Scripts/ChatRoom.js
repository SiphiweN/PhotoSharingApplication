

$(function ()
{
    var chat = $.connection.chatHub;

    chat.client.addMessage = function (name, message)
    {
        var encodedName = $('<div />').text(name).html();

        var encodedMessage = $('<div />').text(message).html();

        var listItem = '<li>' + encodedName + ' : ' + encodedMessage + '</li>';

        $('#discussion').append(listItem);

    };

    $('#chat-message').focus();

    $.connection.hub.start().done(function ()
    {
        chat.server.join(photoid).done(function ()
        {
            $('#sendmessage').click(function () {
                chat.server.send(username, photoid, $('#chat-message').val());

                $('#chat-message').val(' ').focus();
            });
        });
    });
});
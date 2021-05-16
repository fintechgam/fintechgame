var connection = {};
$(function() {
    connection = new signalR.HubConnectionBuilder().withUrl("/memberHub").configureLogging(signalR.LogLevel.Information).build();
    connection.on("connect", (user, message) => {
        const encodedMsg = user + " says " + message;
        console.log(encodedMsg);
    });
    connection.on("server_time", (msg) => {
        $("#servertime").html(msg);
    });
    connection.start().catch(function(err) {
        return console.error(err.toString());
    });
    async function start() {
        try {
            await connection.start();
            console.log('connected');
        } catch (err) {
            console.log(err);
            setTimeout(() => start(), 5000);
        }
    };
    connection.onclose(async () => {
        await start();
    });
})
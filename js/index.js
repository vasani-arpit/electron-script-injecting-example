var webview = document.getElementById("webview");

// When everything is ready, trigger the events without problems
webview.addEventListener("dom-ready", function () {
    // Show devTools if you want
    //webview.openDevTools();
    console.log("DOM-Ready, triggering events !");

    // Aler the scripts src of the website from the <webview>
    webview.send("request");

    // alert-something
    webview.send("alert-something", "Hey, i'm alerting this.");

    // change-text-element manipulating the DOM
    webview.send("change-text-element", {
        id: "myelementID",
        text: "My text"
    });
});

// Process the data from the webview
webview.addEventListener('ipc-message', function (event) {
    console.log(event);
    console.info(event.channel);
});
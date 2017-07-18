var status = "hidden";

function toggleText() {
    // var text="Here is some text that I want added to the HTML file";

    if (status == "hidden") {
        document.getElementById("textArea").style.display = "initial";
        document.getElementById("toggleButton").innerText = "Hide Text";
        status = "visible";
    } else if (status == "visible") {
        document.getElementById("textArea").style.display = "none";
        document.getElementById("toggleButton").innerText = "See Text";
        status = "hidden";
    }
}

function goEnglish() {
    window.location.href = "english.html";
}

function goSpanish() {
    window.location.href = "spanish.html";
}


function showContent(id) {

    var content = document.getElementById(id);

    if (content.style.display === "block") {

        content.style.display = "none";

    } else {

        content.style.display = "block";

    }
}

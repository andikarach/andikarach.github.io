
$(document).ready(function () {
    checkActiveURL()
});


$(function () {
    $("#header").load("navbar.html");
    $("#footer").load("footer.html");
    checkActiveURL()
});

function checkActiveURL() {
    if (window.location.href.indexOf("index.html") > -1) {
        $('#index').addClass('active');
    } else if (window.location.href.indexOf("resume.html") > -1) {
        $('#resume').addClass('active');
    } else if (window.location.href.indexOf("skill.html") > -1) {
        $('#skill').addClass('active');
    } else if (window.location.href.indexOf("portfolio.html") > -1) {
        $('#portfolio').addClass('active');
    } else if (window.location.href.indexOf("contact.html") > -1) {
        $('#contact').addClass('active');
    }
}
document.getElementById("discover_new").addEventListener("click", function () {
    window.location.href="blog.html";
});

document.getElementById("clear_history").addEventListener("click", function () {
    document.getElementById("history").innerHTML = "";
})
function randomColors() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor((Math.random() * 16)).toString(16);
    }
    return color;

}
document.getElementById("color_change").addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor=randomColors();

})
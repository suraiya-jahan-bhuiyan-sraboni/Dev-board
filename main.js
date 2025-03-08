
document.getElementById("discover_new").addEventListener("click", function () {
    window.location.href = "blog.html";
});

document.getElementById("clear_history").addEventListener("click", function () {
    document.getElementById("history").innerHTML = "";
})

//random background color changing
function randomColors() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor((Math.random() * 16)).toString(16);
    }
    return color;
}
document.getElementById("color_change").addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = randomColors();
})

//current date
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
document.getElementById("week_day").innerText = days[today.getDay()];
document.getElementById("date").innerHTML = months[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();

//board update 
let task_assign = document.getElementById("task_assign")
let task_done = document.getElementById("task_done")
var task = 0;

function completeTask(button) {
    let problem=button.closest(".parent").querySelector("h1").innerText;
    document.getElementById("history").innerHTML += `
            <p class="p-3 my-4 bg-[#f4f7ff] rounded-lg text-sm text-gray-500">
                        You have Complete The Task
            <span>${problem}</span>
                at <span>
                ${today.toLocaleTimeString("en-US", {
                    timeZone: "Asia/Dhaka",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true
                })}
                </span>
                    </p>`
    button.disabled = true;
    button.style.backgroundColor = "grey";
    task_assign.innerText = parseInt(task_assign.innerText) - 1;
    task_done.innerText = parseInt(task_done.innerHTML) + 1;
    task++;
    if (task < 6) {
        alert("Board Update sucessfully!");
    } else if (task == 6) {
        alert("Board Update sucessfully!");
        alert("congrats!!!! you have completed all the current task");
    }
}
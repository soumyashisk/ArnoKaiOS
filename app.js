const template = document.getElementById("win");
const icon = document.getElementById("icon");
const apps = document.getElementById("apps");

let desktop = document.getElementById("desktop");

icon.onclick = () => {
    createWindow("App", "https://blockaway.net/");
};

function createWindow(title, url) {

    const clone = template.content.cloneNode(true);
    const window = clone.querySelector(".window");
    const minBtn = clone.querySelector(".min");
    const maxBtn = clone.querySelector(".max");
    const closeBtn = clone.querySelector(".close");
    const iframe = clone.querySelector(".content");
    const titleEl = clone.querySelector(".app-title");

    titleEl.textContent = title;
    iframe.src = url;

    let maximized = false;

    const taskBtn = document.createElement("div");
    taskBtn.className = "task-app active";
    taskBtn.innerText = title;
    apps.appendChild(taskBtn);

    taskBtn.onclick = () => {
        if (window.style.display === "none") {
            window.style.display = "block";
            taskBtn.classList.add("active");
        } else {
            window.style.display = "none";
            taskBtn.classList.remove("active");
        }
    };

    minBtn.onclick = () => {
        window.style.display = "none";
        taskBtn.classList.remove("active");
    };

    maxBtn.onclick = () => {
        maximized = !maximized;
        window.classList.toggle("maximized", maximized);
    };

    closeBtn.onclick = () => {
        window.remove();
        taskBtn.remove();
    };

    desktop.appendChild(clone);
}

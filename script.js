// ================= ALERT =================
function showMessage(name) {
    alert("You selected: " + name);
}

// ================= MAIN MODAL =================
function openModal(title, text) {

    let image = "";
    let link = "";

    if (title === "Netflix UI") {
        image = "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4";
        link = "https://www.netflix.com";
    }

    if (title === "Food App UI") {
        image = "https://images.unsplash.com/photo-1504674900247-0877df9cc836";
        link = "https://www.zomato.com";
    }

    if (title === "Shopping UI") {
        image = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f";
        link = "https://www.amazon.in";
    }

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = text;
    document.getElementById("modal-img").src = image;

    document.getElementById("modal-btn").onclick = function () {
        window.open(link, "_blank");
    };

    document.getElementById("modal").style.display = "flex";
    document.body.classList.add("modal-open");
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-open");
}

// ================= AUTH =================
let mode = "login";

function openAuth(type) {
    mode = type;

    document.getElementById("authModal").style.display = "flex";

    // ✅ FIX: change heading dynamically
    document.getElementById("auth-title").innerText =
        type === "login" ? "Login" : "Sign Up";
}

function closeAuth() {
    document.getElementById("authModal").style.display = "none";
}

function submitAuth() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Fill all fields");
        return;
    }

    if (mode === "login") {
        alert("Login Successful");
    } else {
        alert("Account Created");
    }

    closeAuth();
}

// ================= CLOSE LOGIC =================

// click outside
window.onclick = function (event) {
    let modal = document.getElementById("modal");
    let auth = document.getElementById("authModal");

    if (event.target === modal) closeModal();
    if (event.target === auth) closeAuth();
};

// ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
        closeAuth();
    }
});
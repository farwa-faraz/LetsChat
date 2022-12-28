function adding_user()
{
    user = document.getElementById("user").value;
    localStorage.setItem("user", user);
    window.location = "LetsChat_room.html"
}
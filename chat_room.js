function logout(){
    window.location = "index.html";
}
function AddRoom(){
    room_name = document.getElementById("nomeDaSala").value;

    firebase.datebase().red("/").child(room_name).update({
        purpose : "Adicionando nome da Sala"
    });

    localStorage.setItem("room_name", room_name);

    window.location = ""
}
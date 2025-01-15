const signupButton = document.getElementById("signup");
let currentViewId = null;

window.onload = async function(){
    changeView("home");
}

function signup(){
    alert("Función no disponible actualmente");
}

function changeView(id){
    if (id !== currentViewId){
        previousViewId = currentViewId;
        try{
            let newView = document.getElementById(id+"_view");
            let newViewHeader = document.getElementById(id+"_header");
            newView.style.display = "flex";
            newViewHeader.style.textDecoration = "underline";

            currentViewId = id;

            let previousView = document.getElementById(previousViewId+"_view");
            let previousViewHeader = document.getElementById(previousViewId+"_header");
            previousView.style.display = "none";
            previousViewHeader.style = "";
        }
        catch(e){}
    }
}
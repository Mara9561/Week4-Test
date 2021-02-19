function change(){ 
    let elements=document.querySelectorAll("input[type='text']");
    let button=document.querySelector("input[type=submit]");
    button.disabled="";

    for(let i=0;i<elements.length;i++){
        if (elements[i].value=="") {
        button.disabled="disabled";
        break;
        }
    }
}

function unsubscrive() {
    let name=document.getElementById("nome").value;
    let button=document.querySelector("input[type=submit]");
    try{
        if(button.value=="Unsubscribe") {
            localStorage.removeItem(name);
            button.value="Subscribe";
            return name;
        }
        else{
            localStorage.setItem(name, name);
            button.value="Unsubscribe"; 
        }
    }
    catch (e){
        document.getElementById("debug").innerHTML = "<strong>Impossibile salvare</strong>"
    }
}

function benvenuto(){
    if(localStorage.length>0) { 
        let name=unsubscrive();
        let nome=localStorage.key(name);
        alert("Benvenuto/a "+nome+"!");
    }
}

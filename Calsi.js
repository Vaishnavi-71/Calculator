function dis(btn) {
    let d = document.getElementById("res");
    d.value += btn.textContent;
}

function clr(){
    document.getElementById("res").value="";
}

function cal() {
    let d = document.getElementById("res");
    if(d.value !== "") {
        d.value = eval(d.value);
    }
}
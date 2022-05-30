function kgFunc(){
    let value = document.forms['kgform']['kg'].value;
    let kilogram = value * 1000;
    document.getElementById("demo").innerText = kilogram;
    return false;
}
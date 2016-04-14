var a,b,vysledok;

function setValues()
{
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
}

function scitanie()
{
    setValues();
    vysledok = a + b;
    alert("Výsledok po sčítaní " + vysledok);
}

function odcitanie()
{
    setValues();
    vysledok = a - b;
    alert("Výsledok po odčítaní " + vysledok);
}

function nasobenie()
{
    setValues();
    vysledok = a * b;
    alert("Výsledok po násobení " + vysledok);
}

function delenie()
{
    setValues();
    vysledok = a / b;
    alert("Výsledok po delení " + vysledok);
}

function priklad_premenne()
{
    var cislo = 5;
    var veta = "Toto je veta.";
    var pi = 3.14;
    alert("Premenna cislo je: " + cislo + "\n" +
            "Premenna veta je: " + veta + "\n" +
            "Premenna pi je: " + pi + "\n");
}

function renderCasu() {

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    setTimeout('renderCasu()',1000);

    var hodiny = document.getElementById('clockDisplay');
    hodiny.textContent = h + ":" + m + ":" + s + " ";
    hodiny.innerText = h + ":" + m + ":" + s + " ";
}   

renderCasu();

function nahodne()
{
    alert(Math.floor(Math.random()*100+1));
} 


document.getElementById("caseList").onchange = function () {
    var img = document.getElementById("caseimage");
    img.src = this.value;
}

document.getElementById("cpuList").onchange = function () {
    var img = document.getElementById("cpuimage");
    img.src = this.value;
}

document.getElementById("motherList").onchange = function () {
    var img = document.getElementById("motherimage");
    img.src = this.value;
}

document.getElementById("ramList").onchange = function () {
    var img = document.getElementById("ramimage");
    img.src = this.value;
}

document.getElementById("storageList").onchange = function () {
    var img = document.getElementById("storageimage");
    img.src = this.value;
}

document.getElementById("psuList").onchange = function () {
    var img = document.getElementById("psuimage");
    img.src = this.value;
}

document.getElementById('calculate').addEventListener('click', function () { 
    var cost = 0;
    
    switch (document.getElementById("caseList").value){
        case 'nzxtmidi.png':
            cost+=110;
            break;
        case 'bequiet.png':
            cost+=97;
            break;
        case 'coolermaster.png':
            cost+=68;
            break;
        case 'nzxtmini.png':
            cost+=122;
            break;

    }

    switch (document.getElementById("cpuList").value){
        case 'ryzen5.png':
            cost+=180;
            break;
        case 'ryzen7.png':
            cost+=260;
            break;
        case 'intel5.png':
            cost+=150;
            break;
        case 'intel7.png':
            cost+=295;
            break;

    }
    switch (document.getElementById("motherList").value){
        case 'b450.png':
            cost+=70;
            break;
        case 'z490.png':
            cost+=140;

    }

    switch (document.getElementById("ramList").value){
        case 'gskill.png':
            cost+=85;
            break;
        case 'corsair.png':
            cost+=195;

    }

    switch (document.getElementById("storageList").value){
        case 'hdd.png':
            cost+=30;
            break;
        case 'ssd.png':
            cost+=155;

    }

    switch (document.getElementById("psuList").value){
        case 'corspsu.png':
            cost+=46;
            break;
        case 'thermaltake.png':
            cost+=55;
            break;
        case 'bqpsu.png':
            cost+=68;
            break;

    }

    if(document.getElementById("OS").checked){
        cost+=30;
    }
    if(document.getElementById("Prebuilt").checked){
        cost+=50;
    }
    if(document.getElementById("Shipping").checked){
        cost+=40;
    }

    document.querySelector('span').innerHTML = cost+' €';
});
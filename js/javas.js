
function enter(d1, d2, d3, d4) {

    let trr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    let tbdyy = document.getElementById("Tbdy");

    let label1 = document.createElement("label");
    let label2 = document.createElement("label");
    let label3 = document.createElement("label");
    let label4 = document.createElement("img");
    let btn1 = document.createElement("button");
    btn1.textContent = "delete";


    label1.textContent = d1;
    label2.textContent = d2;
    label3.textContent = d3;
    label4.src = d4;


    td1.appendChild(label1);
    td2.appendChild(label2);
    td3.appendChild(label3);
    td4.appendChild(label4);
    td5.appendChild(btn1)

    trr.appendChild(td1);
    trr.appendChild(td2);
    trr.appendChild(td3);
    trr.appendChild(td4);
    trr.appendChild(td5);

    tbdyy.appendChild(trr);
}

function send() {
    let arr = [];
    let elemnts = [];

    if (localStorage.getItem("saveArr")) {
        arr = JSON.parse(localStorage.getItem("saveArr"));
    }

    elemnts[0] = document.getElementById("inp1");
    elemnts[1] = document.getElementById("inp2");
    elemnts[2] = document.getElementById("inp3");
    elemnts[3] = document.getElementById("inp4");

    var obj = {
        name: elemnts[0].value,
        price: elemnts[1].value,
        catigorey: elemnts[2].value,
        image: elemnts[3].value
    }
    elemnts[0].value = '';
    elemnts[1].value = '';
    elemnts[3].value = '';
    if (!(isNaN(obj.price)) && checkName(obj.name)) {
        arr.push(obj);
        localStorage.setItem("saveArr", JSON.stringify(arr));
        enter(obj.name, obj.price, obj.catigorey, obj.image);
    }
    else alert("Enter Valid Name Or Price");

}
function show() {
    let arr1 = [];
    if (localStorage.getItem("saveArr")) {
        arr1 = JSON.parse(localStorage.getItem("saveArr"));
    }
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
        let da1 = arr1[i].name;
        let da2 = arr1[i].price;
        let da3 = arr1[i].catigorey;
        let da4 = arr1[i].image;
        enter(da1, da2, da3, da4);
    }
}
show();


//helping func 
function checkName(name) {
    if (name.length < 3)
        return false;
    var letters = /^[A-Za-z]+$/;
    if (name.match(letters))
        return true;
    return false;
}
// let btnn=document.getElementById("btndel");
// btnn.onclick = del();
// function del(name, price, catig, image) {
//    let arr1 = [];
//    if (localStorage.getItem("saveArr"))
//        arr1 = JSON.parse(localStorage.getItem("saveArr"));
//    for (let i = 0; i < arr1.length; i++) {
//        if (arr1[i].name == name && arr1[i].price == price && arr1[i].catigorey == catig && arr1[i].image == image)
//             if (arr1[i + 1] != null)
//                 arr1[i] = arr1[i + 1];
//    }
//    localStorage.setItem("saveArr", JSON.stringify(arr1));
//}
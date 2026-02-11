console.log("~ Created by Yantram Devs. in 2025");
console.log("Yantram Devs. is running by Abhi Talati");

function openadd(){
    window.open("../add/add.html");
}
// adding daynamic divs to homepage
let sinppetgrid = document.getElementById(`snippet-grid`);

// getting local storage from device

const rawdata = localStorage.getItem("Data");
const realdata = JSON.parse(rawdata);

if(localStorage.getItem("Data")){
    // console.log("works");
    for(let i = 0 ; i < realdata.length ; i++){
        // console.log(realdata[i].tittle);
        let code = realdata[i].code;
        let tittle = realdata[i].tittle;
        let tags = realdata[i].tags;
        let lang = realdata[i].lang;

        // adding divs dynamically 
        let newdiv = document.createElement(`div`);
        newdiv.className = "snippet-card";
        newdiv.id = `card${i+1}`;

        sinppetgrid.appendChild(newdiv);

        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");

        h3.innerText = tittle;
        p1.innerText = `Language: ${lang}`;
        p2.innerText = `Tags: ${tags}`;

        newdiv.appendChild(h3);
        newdiv.appendChild(p1);
        newdiv.appendChild(p2);


    }
}
else{

//making notice para to show when card is not there 

    let impcard = document.createElement(`div`);
    impcard.className = "msg";

    let notice = document.createElement(`p`);
    notice.innerText = "Add some snippet to show here";

    impcard.appendChild(notice);
    document.querySelector(`main`).appendChild(impcard);
}

let snippetcard = document.querySelectorAll(".snippet-card");

snippetcard.forEach(snippetcard => {
    snippetcard.addEventListener(`click` , () => {
        let card_id = snippetcard.id;
        let index = Number(card_id.charAt(card_id.length - 1));

        console.log(card_id);
        console.log(index);
        getdata(index);
    })
})

function getdata(index){
    let realid = index - 1 ;
    const rawdata = localStorage.getItem("Data");
    const realdata = JSON.parse(rawdata);
    const code = realdata[realid].code;
    const tittle = realdata[realid].tittle;
    const tags = realdata[realid].tags;
    const lang = realdata[realid].lang;


    function addDatatomodal(){

        const Dtittle  = document.getElementById("Dtittle");
        const Dcode = document.getElementById("DcodeShow");
        const Dtags = document.getElementById("Dtags");
        const Dlang = document.getElementById("Dlang");

        Dtittle.textContent = tittle;
        Dcode.textContent = code;
        Dtags.textContent = tags;
        Dlang.textContent = lang;

    }
    addDatatomodal();
    showmodal();

    // copying code when clickin on copy code button
    const copybtn = document.getElementById("copysnipp");
    function codetocopy(){
        console.log(code);
    }
    copybtn.onclick=()=>{
        codetocopy();
        navigator.clipboard.writeText(code);
        alert("Code copied sucessfully!");
    }

}

// making data modal visible or invisible

function showmodal(){
    const modalcont = document.querySelector(".modalcontainer");
    modalcont.style.removeProperty('display');
    modalcont.style.display = 'flex';
}

document.querySelector(`#closedil`).onclick = () => {
    const modalcont = document.querySelector(".modalcontainer");
    modalcont.style.removeProperty('display');
}

// width and all shit 

const body = document.querySelector(`body`);

if(body.offsetWidth <= 824){
    document.querySelector(`#addSnippetBtn`).innerText = "+";
}


// clearing the localstorage 

function clearsnipp(){
    localStorage.clear();
    window.location.reload();
}
console.log("~ Created by YD in 2025")

// taking all inputs as variable

let tittle = document.getElementById("tittle");
let lang = document.getElementById("langs");
let code = document.getElementById("code");
let tags = document.getElementById("tags");
const save = document.getElementById("saveBtn");
const cancle= document.getElementById("cancelBtn");

save.onclick = ()=>{
    // console.log(tittle.value , lang.value , tags.value);
    checkdata();
    setTimeout(() => {
        window.close();
    }, 4000);
}

cancle.onclick = () => {
    window.close();
}

function checkdata(){
    if(localStorage.getItem("Data")){
        const rawdata =localStorage.getItem("Data");
        const realdata = JSON.parse(rawdata);

        console.log(realdata);

        let length = realdata.length;
        let lastindex = length - 1;

        console.log(lastindex);
        console.log(realdata[lastindex] );

        const newdata = {c_id : length + 1 , tittle : tittle.value , code : code.value , tags : tags.value, lang : lang.value}

        realdata.push(newdata);
        console.log(newdata);
        console.log(realdata);

        const nextdata = JSON.stringify(realdata);
        localStorage.clear();
        localStorage.setItem("Data" , nextdata);

        // for(let i = 0 ; i <= length ; i++){
        //     console.log(realdata[i]);
        // }
    }
    else{
        console.log("no data so we need to add DATA to localstorage");

        const Data = [];
        const fstdata = {c_id : 1 , tittle : tittle.value , code : code.value , tags : tags.value, lang : lang.value};

        Data.push(fstdata);
        console.log(Data);
        console.log(fstdata);

        const localdata = JSON.stringify(Data);
        localStorage.setItem("Data" , localdata);
    }

    
}

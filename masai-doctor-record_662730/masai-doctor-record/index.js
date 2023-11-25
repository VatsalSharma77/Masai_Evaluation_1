let form = document.querySelector('form');
let doc_name = document.getElementById('name');
let id = document.getElementById('doctor_id');
let specs = document.getElementById('specialization');
let exp = document.getElementById('experience');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let tbody = document.querySelector('tbody')

let data =[];

form.addEventListener('submit',function(e){
    e.preventDefault();
    let obj ={};
    obj.input1=doc_name.value;
    obj.input2=id.value;
    obj.input3=specs.value;
    obj.input4=exp.value;
    obj.input5=email.value;
    obj.input6=mobile.value;
    if (exp.value > 5){
        obj.input7= "Senior";
    }
    else if (exp.value > 2 && exp.value < 5){
        obj.input7= "Junior";
    }
    else if (exp.value <= 1){
        obj.input7= "Traniee";
    }
    data.push(obj);
    tbody.innerHTML="";

    data.map(function(ele)
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let btn=document.createElement('button');
        td1.innerText=ele.input1;
        td2.innerText=ele.input2;
        td3.innerText=ele.input3;
        td4.innerText=ele.input4;
        td5.innerText=ele.input5;
        td6.innerText=ele.input6;
        td7.innerText = ele.input7;
        btn.innerText= "Delete";
        btn.style.background='red';
        td8.append(btn);
        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(row);
        btn.addEventListener('click',function(){
            row.innerHTML = null;
        })
    })
    

})

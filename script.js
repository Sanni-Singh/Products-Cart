const total = document.querySelector('#total');
const inputBox = document.querySelector("#inputBox")
const addBtn = document.querySelector("#add")
const inputNum = document.querySelector("#inputNum")
const product = document.querySelector(".product")
const cart = document.querySelector(".cart")

const def = document.querySelector('#def');


function randomColorGen(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}

function updateValue(ele, item) {
    if(ele === 'add'){
        item.innerText = Number(item.innerText) + 1;
    }
    else if(ele === 'sub'){
        item.innerText = Number(item.innerText) - 1;
    }
    else {
        item.style.display= "none"
        
    }
}
addBtn.addEventListener('click',()=>{
    if(inputBox.value === "" || inputNum.value ==="") {
        addBtn.animate([
            {transform: 'translateX(4px)'},
            {transform: 'translateX(0)'},
            {transform: 'translateX(4px)'},
            {transform: 'translateX(0)'}
        ], {
            duration: 200,
            easing: 'ease-in-out',
            iterations: 4
        });
        return;
    }
    let div = document.createElement('div');
    div.className = "prod p1";
    let h4 = document.createElement('h4');
    h4.innerText = inputBox.value;
    div.appendChild(h4);
    let p = document.createElement('p');
    p.innerText = inputNum.value;
    div.appendChild(p);
    let div2 = document.createElement('div');
    div2.className = "button p1";
    let p1 = document.createElement('p');
    p1.id = "p1Minus";
    p1.innerText = "-";
    div2.appendChild(p1);

    let p2 = document.createElement('p');
    p2.id = "prize";
    p2.innerText = "1";
    div2.appendChild(p2);

    let p3 = document.createElement('p');
    p3.id = "p1Add";
    p3.innerText = "+";
    div2.appendChild(p3);
    div.appendChild(div2);
    
    
    product.appendChild(div);
    if(product.innerText !==""){
        def.style.display = "none"
    }
    

    let cartDiv = document.createElement('div')
    cartDiv.className = "caro";
    let h3 = document.createElement('h3')
    h3.innerText = inputBox.value
    cartDiv.appendChild(h3)
    let cartP= document.createElement('p')
    let span1 = document.createElement('span')
    span1.innerText = p2.innerText;
    cartP.appendChild(span1)
    let span2 = document.createElement('span')
    span2.innerText = ` x ${inputNum.value}`
    cartP.appendChild(span2)
    cartDiv.appendChild(cartP)
    cartDiv.style.backgroundColor = randomColorGen();
    // cartDiv.style.color = randomColorGen();
    cart.appendChild(cartDiv);

    total.innerText = Number(total.innerText) + Number(inputNum.value)

    p3.addEventListener('click',()=>{
        p2.innerText = Number(p2.innerText) + 1;
        updateValue('add' , span1)
        total.innerText = Number(total.innerText) +  Number(p.innerText);

    })
    p1.addEventListener('click',()=>{
        if(Number(p2.innerText > 1)) {
            p2.innerText = Number(p2.innerText) - 1;
            updateValue('sub', span1)
            total.innerText = Number(total.innerText) -  Number(p.innerText);
            
            
        }
        else {
            div.style.display = "none";
            updateValue('none', cartDiv);
            total.innerText = Number(total.innerText) -  Number(p.innerText);
        }
    })
    
    inputBox.value = ""
    inputNum.value = ""
    

})

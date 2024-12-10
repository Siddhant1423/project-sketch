const headingDiv = document.createElement("div");
headingDiv.id = "heading";
const heading = document.createElement("h1");
heading.textContent = "Etch-a-Sketch";
const btn = document.createElement("button");
btn.textContent = "Change grid size";
btn.id = "btn-resize";

document.body.prepend(headingDiv);
headingDiv.appendChild(heading)
headingDiv.appendChild(btn)

const div = document.querySelector("#container");

for(let i = 0 ; i < 16*16 ; i++){
    const divBlock = document.createElement("div");
    divBlock.className = "tiles";
    
    div.appendChild(divBlock);
    divBlock.addEventListener('mouseover',(event)=>{
        event.target.style.backgroundColor = "blueviolet";
    });
}

const getNumber = () => {
    let num = prompt('Enter your desired grid size here ( size < 100 ) :');
    console.log(num)

    let oldBlock = document.querySelectorAll(".tiles")
    oldBlock.forEach(block =>{
        block.remove();
    })
    

    for(let i = 0 ; i < num*num ;i++){
        const newBlock = document.createElement("div");
        let boxSize = (560 / num) - 2; 
        newBlock.style.height = newBlock.style.width = (boxSize) +'px';
        newBlock.className = "tiles";
        div.appendChild(newBlock);
        
        newBlock.addEventListener('mouseover',(event)=>{
            event.target.style.backgroundColor = "blueviolet";
        });
       } 
}


resizeBtn = document.querySelector("#btn-resize");
resizeBtn.addEventListener('click',getNumber);


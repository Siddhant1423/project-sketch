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
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);
        event.target.style.backgroundColor = "#"+randomColor ;

    });
}

const getNumber = () => {
    while(true){
        let num = prompt('Enter your desired grid size here ( size < 100 ) :');
        if (num < 100){
            return num;
        }else {
            alert("grid size should be less than 100")
        }
    }
}
const ChangeSize = () =>{
    let number = getNumber();
    console.log(number);
    let oldBlock = document.querySelectorAll(".tiles")
    oldBlock.forEach(block =>{
        block.remove();
    })
    for(let i = 0 ; i < number*number ;i++){
        const newBlock = document.createElement("div");
        let boxSize = (560 / number) - 2; 
        newBlock.style.height = newBlock.style.width = (boxSize) +'px';
        newBlock.className = "tiles";
        div.appendChild(newBlock);
        
        newBlock.addEventListener('mouseover',(event)=>{
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            console.log(randomColor);
            event.target.style.backgroundColor = "#"+randomColor;
        });
       } 
}


resizeBtn = document.querySelector("#btn-resize");
resizeBtn.addEventListener('click',ChangeSize);


const headingDiv = document.createElement("div");
headingDiv.id = "heading";
const heading = document.createElement("h1");
heading.textContent = "Etch-a-Sketch";
const btn = document.createElement("button");
btn.textContent = "Change grid size"
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

resizeBtn = document.querySelector("#btn-resize");
resizeBtn.addEventListener('click',()=>{
    let num = prompt('Enter your desired grid size here ( size < 100 ) :');
})
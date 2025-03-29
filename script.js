let no = document.getElementById("no");
let yes = document.getElementById("yes");
let frame = document.getElementById("frame");



const pageWidth  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const pageHeight = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

no.addEventListener("click",function(event){
    if(frame.childElementCount==4){
        frame.removeChild(no)
    }
    
    // var pos = no.getBoundingClientRect()
    // let x = pos.left + window.scrollX
    // let y = pos.left + window.scrollY

    document.body.appendChild(no)
    no.style.position = "absolute"
    let x = Math.floor(Math.random() * (pageWidth - 73));
    let y = Math.floor(Math.random() * (pageHeight - 45));
    console.log(x,y);
    
    no.style.left = `${x}px`
    no.style.top = `${y}px`
    //console.log(window.screen.height,window.screen.width);
    let height = window.screen.height
    let width = window.screen.width
    
})

yes.addEventListener("click", function(event){
    frame.innerHTML = "";
    document.body.removeChild(no)
    let img = document.createElement("img");
    img.style.borderRadius = "20px"
    img.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDg4aG41NmNpaGV6NWtzZnozcnljODhlc3p2enZ4NHQ4aGlnNWJ3ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yL558PFPKeCtFxkiUi/giphy.gif';
    frame.appendChild(img);
})


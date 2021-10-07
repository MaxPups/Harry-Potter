const data = [
    { 
      img: "./image/hermiona1.png",
      name: "    Hermione Granger",
      actor: " Emma Watson",
      gender: "female", 
      house: "Gryffindor",
      wandCore: "dragon heartstring",
      alive:"yes"     
    },
    {
    img: "./image/malfoy.png",
    name: "  Draco Malfoy",
    actor: "Tom Felton",
    gender: "male", 
    house: "Slytherin",
    wandCore: "unicorn tail-hair",
    alive:"yes"},

    {
    img: "./image/hermiona2.png",
    name: "    Hermione Granger",
    actor: " Emma Watson",
    gender: "female", 
    house: "Gryffindor",
    wandCore: "dragon heartstring",
    alive:"yes"     }
   
]
   
function renderSearch(){
    data.map(i=>{
        let cards = document.createElement("div");
        cards.setAttribute("heart", "one");
        cards.innerHTML = `<figure>
        <img src="${i.img}" alt="">
        <div class="card-info">
            <span>${i.name}</span>
            <p>Actor: ${i.actor}</p>
            <p>Male: ${i.gender}</p>
            <p>House: ${i.house}</p>
            <p>Wand core: ${i.wandCore}</p>
            <p>Alives: ${i.alive}</p>
        </div>
        <button>
        <svg width="24" height="23" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 1.97108C18.6567 -4.87192 35.3007 7.10258 11.9997 22.5001C-11.3013 7.10408 
         5.34267 -4.87192 11.9997 1.97108Z" 
         //>
        </svg>
        </button>
        </figure>`;
        document.querySelector(".result-search").append(cards);
    })
}
renderSearch();

let blockCard = document.querySelector(".result-search")
blockCard.addEventListener('click', (i)=>{
if(i.target.tagName === "BUTTON"){
    if(i.target.classList.contains('like')){
        i.target.classList.remove("like");
        i.target.childNodes[1].childNodes[1].style.fill = "red";
        i.target.parentNode.parentNode.removeAttribute("like"); 
    }
    // это условие отбирает цвет
    else {
        i.target.classList.add("like");
        i.target.childNodes[1].childNodes[1].style.fill = "black";
        i.target.parentNode.parentNode.setAttribute("like", "one");
    }
    // начинать с этого условия
    
    
}});
// 
// 
// 
const likeElem= [];

var elem = document.querySelector(".result-search").children

function arrayLike (){
    for(let i = 0; i<elem.length; i++){
            if(elem[i].hasAttribute("like")){
            likeElem.push(elem[i]);
            }
         }
}





var blockLikes = document.querySelector('.result-like');
function renderLike(){
likeElem.map(()=>{
for(let i = 0; i < likeElem.length; i++){
var newCard = likeElem[i];
blockLikes.appendChild(newCard);
}
// renderSearch();
})};






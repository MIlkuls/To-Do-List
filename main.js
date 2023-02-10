let button = document.querySelector(".button");
let write = document.querySelector(".write");
let info = document.querySelector(".info");

let array =[]

if(localStorage.getItem("note")){
    array = JSON.parse(localStorage.getItem("note"))
    createGoalsList(array,info)
}

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let newGoal = write.value;
    if(newGoal){
        if(newGoal.length >21){
            newGoal = `${newGoal.substring(0,22)}...`
        }
        array.push(newGoal);
        createGoalsList(array, info);
    }

 localStorage.setItem("note",JSON.stringify(array));
})

function createGoalsList(goal,parent){
    parent.innerHTML = '';
 
     goal.forEach((elem,i)=>{
         parent.innerHTML += `<li class="promo__interactive-item">${i+1} ${elem}
     </li>`
     })
 
     document.querySelectorAll('.promo__interactive-item').forEach((btn,i)=>{
          btn.addEventListener('click',()=>{
             btn.remove();
             array.splice(i,1);
 
           createGoalsList(goal,parent);
          })
     })
     localStorage.setItem("note",JSON.stringify(array));
 }
 createGoalsList(array, info)

           
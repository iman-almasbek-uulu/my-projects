// Кнопка открыть проекты 
let btnShowProjects = document.querySelectorAll(".btn"); //Кнопка для показа проектов
let projectItems = document.querySelectorAll(".project_item"); // проекты
let projectAdd = document.querySelectorAll(".add_project"); 
let closeProject = document.querySelectorAll(".close");

for (let i = 0; i <  btnShowProjects.length; i++) {
    btnShowProjects[i].addEventListener("click", () => {
        projectAdd[i].style.display = "block";
    })
    closeProject[i].addEventListener("click", () => {
        projectAdd[i].style.display = "none";
    })

}

// Скрипты на проект todo

// Функция для добавление to do в complect 
function addToComplete() {
    let addBtnInComplete = document.querySelectorAll(".add_complete");
    let listCompleteToDo = document.querySelector(".complete_to-do");

    addBtnInComplete.forEach(item => {
        item.addEventListener("click", () => {
            let newCompleteToDoItem = item.parentNode;
            newCompleteToDoItem.firstElementChild.remove();
            newCompleteToDoItem.classList.add("complete");
            listCompleteToDo.appendChild(newCompleteToDoItem);
        })
    })
}
addToComplete();

// функция для Удаление to do 
function removeBtnToDoItem() {
    let removeBtnItem = document.querySelectorAll(".remove_to-do-item");
    removeBtnItem.forEach(item => {
        item.addEventListener("click", () => {
            item.parentNode.remove();
        })
    })
}
removeBtnToDoItem();

let inputToDo = document.querySelector(".input_to-do");             //input чтобы написать какой список дел
let addBtnToDo = document.querySelector(".add-btn");                //кнопка для добавление написанной в input на список дел 
let listToDo = document.querySelector(".list_to-do");               //переменная список дел 
let listToDoItem = document.querySelectorAll(".list_to-do-item");   //переменные в списке дел

// код на добавление в to do в список дел
addBtnToDo.addEventListener("click", () => {
    inputToDo.value = inputToDo.value.trim();
    if (inputToDo.value === "") {
        inputToDo.style.border = "1px solid red";
    }else {
        let inputToDoSave = inputToDo.value; // чтобы сохранить в input
        listToDo.innerHTML += `
        <li class="list_to-do-item"> 
        <span class="img-container add_complete"><img src="./img/free-icon-check-758835.png" alt=""></span>
        <span>${inputToDoSave} </span>  <span class="img-container  remove_to-do-item">
            <img src="./img/free-icon-remove-1103721.png" alt="">
        </span> 
        </li>
        `;
        inputToDo.value = "";
    
    }

    // Удаление to do
    removeBtnToDoItem();

    // Добавление в complete 
    addToComplete();

})

// Скрипты на проект калькулятор ______________________________________________________
let i = "iman";
console.log(i.substring(0,i.length -1))
const calcShowResHistory = document.querySelector(".calc_show-res-history");
const calcShowResCurrent = document.querySelector(".calc_show-res-current");
let calcInputBtns = document.querySelectorAll(".calc_input-btn");

calcInputBtns.forEach(item => {
    item.addEventListener("click", () => {
        if (calcShowResCurrent.innerHTML === "0" || calcShowResCurrent.innerHTML[0] === "=") {
            calcShowResCurrent.innerHTML = "";
        }else if (calcShowResCurrent.innerHTML.indexOf('/') > -1
                || calcShowResCurrent.innerHTML.includes("**")
                || calcShowResCurrent.innerHTML.includes("++")
                || calcShowResCurrent.innerHTML.includes("--")
        ) {
            calcShowResCurrent.innerHTML.substring(0,calcShowResCurrent.innerHTML.length - 1);
            console.log(999)
        }
        console.log(calcShowResCurrent.innerHTML.indexOf('1'));
        switch (item.innerHTML) {
            case "c":
                calcShowResCurrent.innerHTML = calcShowResCurrent.innerHTML.substring(0,calcShowResCurrent.innerHTML.length - 1)
              
                break;
            case "ce":
                calcShowResCurrent.innerHTML = "";
                calcShowResHistory.innerHTML = "";
                break;
            case "=":
                calcShowResHistory.innerHTML = calcShowResCurrent.innerHTML;
                let resCurrentCalc = eval(calcShowResCurrent.innerHTML);
                calcShowResCurrent.innerHTML = "=" + resCurrentCalc;
                break;
        
            default:
                calcShowResCurrent.innerHTML += item.innerHTML;
                break;
        }
    })

})

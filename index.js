import { menuArray  } from "./data.js"


const items = document.querySelector(".items")

console.log(items)

function render(){
    let text = ""

    menuArray.forEach((item)=> {
        const {name , price , emoji} = item
        const ingredients = item.ingredients.join(" ")
        text += `
        <li class="item">
            <div class="image">${emoji}</div>
            <div class="item-details">
                <h3>${name}</h3>
                <p>${ingredients}</p>
                <p><span>$${price}</span></p>
            </div>
            <button class="add-btn">+</button>
        </li>
        `
    })

    items.innerHTML = text

}

render()
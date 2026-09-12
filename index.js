import { menuArray  } from "./data.js"

let total = 0
const items = document.querySelector(".items")
const billList = document.querySelector(".bill-list")
const order =[]

document.addEventListener('click', function(e){
    if(e.target.dataset.id){
        //addItem(e.target.dataset.id , Number(e.target.dataset.price) )

        addOrderToArr(e.target.dataset.id , e.target.dataset.price 
            , e.target.dataset.name
        )
    }
})
// function addItem(id , price){
//     total += price
//     console.log(total)
// }
function addOrderToArr(id , price , name){
    order.push(
        {
            name: name ,
            price: price ,
            id : id,
            count: 0
        }
    )
    console.log(order)
}

function render(){
    let text = ""

    menuArray.forEach((item)=> {
        const {name , price , emoji , id} = item
        const ingredients = item.ingredients.join(" ")
        text += `
        <li class="item">
            <div class="image">${emoji}</div>
            <div class="item-details">
                <h3>${name}</h3>
                <p>${ingredients}</p>
                <p><span>$${price}</span></p>
            </div>
            <button class="add-btn" 
                data-id=${id} 
                data-price=${price} 
                data-name=${name}
                >
                +
                </button>
        </li>
        `
    })

    items.innerHTML = text

}

render()
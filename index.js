import { menuArray } from "./data.js"

const items = document.querySelector(".items")
const billSection = document.querySelector(".bill-section")

const billList = document.querySelector(".bill-list")
const totalBill = document.querySelector(".total-bill")

let totalPrice = 0

const order = []


document.addEventListener("click", function (e) {

    if (e.target.dataset.action === "add") {

        addOrderToArr(
            e.target.dataset.id,
            e.target.dataset.price,
            e.target.dataset.name
        )
    }

    else if (e.target.dataset.action === "remove") {

        removeOrder(e.target.dataset.id)
    }
})


function addOrderToArr(id, price, name) {

    const existingItem = order.find(item => item.id === id)

    

    if (existingItem) {

        existingItem.count += 1

    } else {

        
        order.push({
            name: name,
            price: Number(price),
            id: id,
            count: 1
        })
    }

    BillSectionShouldExist()
    renderOrder()

}



function renderOrder() {

    let text = ""

    order.forEach(item => {

        const { name, price, count, id } = item

        if (count > 0) {

            text += `
                <li class="billed-items">

                    <div class="item-info">
                        <h3>${name}</h3>

                        <button
                            class="remove-btn"
                            data-action="remove"
                            data-id="${id}">
                            remove
                        </button>
                    </div>

                    <p>
                        ${price} × ${count} = ${price * count}
                    </p>

                </li>
            `
        }
    })

    billList.innerHTML = text
    renderTotalBill()
}



function removeOrder(id) {

    const index = order.findIndex(item => item.id === id)

    if (index !== -1) {

        order[index].count -= 1

        if (order[index].count === 0) {
            order.splice(index, 1)
        }
    }

    BillSectionShouldExist()

    renderOrder()
    removeItemPriceFromTotalPrice()
}

function BillSectionShouldExist(){
    if(order.length === 0)
        billSection.classList.remove("active")
    else
        billSection.classList.add("active")
}


//Total bill section 



function addTotal() {

    totalPrice =  order.reduce((total, currentItem) => {
        return total + (currentItem.count * currentItem.price)
    }, 0)
}

function renderTotalBill() {

    addTotal()
    let text =`
            <h3>Total price:</h3>
            <p>${totalPrice}</p>
        `
    

    totalBill.innerHTML = text
}






function render() {

    let text = ""

    menuArray.forEach(item => {

        const { name, price, emoji, id } = item
        const ingredients = item.ingredients.join(" ")

        text += `
            <li class="item">

                <div class="image">
                    ${emoji}
                </div>

                <div class="item-details">
                    <h3>${name}</h3>
                    <p>${ingredients}</p>
                    <p><span>$${price}</span></p>
                </div>

                <button
                    class="add-btn"
                    data-id="${id}"
                    data-price="${price}"
                    data-name="${name}"
                    data-action="add">
                    +
                </button>

            </li>
        `
    })

    items.innerHTML = text
}


render()
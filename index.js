import { menuArray } from "./data.js"

const items = document.querySelector(".items")
const billSection = document.querySelector(".bill-section")

let billList 
let totalBill
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

    renderBillSection()
}


function renderBillSection() {

    /*
        The bill section is initially empty.

        On the first click:
        .bill-list does not exist, so querySelector()
        returns null. !null is true, therefore we
        create the bill section.

        On the next click:
        .bill-list already exists, so querySelector()
        returns the element. !element is false, so
        we don't create the bill section again.

        After that, we get references to the newly
        created elements and update their contents.
    */

    if (!document.querySelector(".bill-list")) {

        billSection.innerHTML = `
            <h3>Your Order</h3>
            <ul class="bill-list"></ul>
            <div class="total-bill"></div>
            <div class="order">
                <button class="order-btn">Complete order</button>
            </div>
        `
    }

    billList = document.querySelector(".bill-list")
    totalBill = document.querySelector(".total-bill")

    renderOrder()
    renderTotalBill()
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
}


function renderTotalBill() {

    const total = addTotal()

    let text = ""

    if (total > 0) {

        text = `
            <h3>Total price:</h3>
            <p>${total}</p>
        `
    }

    totalBill.innerHTML = text
}


function addTotal() {

    return order.reduce((total, currentItem) => {
        return total + (currentItem.count * currentItem.price)
    }, 0)
}


function removeOrder(id) {

    const existingItem = order.find(item => item.id === id)

    if (existingItem) {
        existingItem.count -= 1
    }

    renderBillSection()
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
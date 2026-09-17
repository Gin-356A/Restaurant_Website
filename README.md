# 🍔 Jimmy's Diner — Restaurant Ordering App

A responsive restaurant ordering web app built with **HTML, CSS, and JavaScript**. Users can browse the menu, add and remove items from their order, view the total price, and complete their order through a payment form.

## 🚀 Features

* 🍕 Dynamic menu rendering from JavaScript data
* ➕ Add items to the order
* ➖ Remove items from the order
* 🔢 Track multiple quantities of the same item
* 🧾 Dynamic order summary
* 💰 Automatic total price calculation
* 💳 Payment form with HTML form validation
* 📋 Form data handling using `FormData`
* 🎉 Order confirmation message after payment
* 🚫 Disable menu buttons after completing an order
* 📱 Responsive and user-friendly interface

## 🛠️ Technologies Used

* **HTML5** — Structure and forms
* **CSS3** — Styling and layout
* **JavaScript (ES6+)** — Application logic and DOM manipulation
* **FormData API** — Handling form input
* **Git & GitHub** — Version control

## 📂 Project Structure

```text
Restaurant_Ordering/
│
├── Images/
│   ├── header.svg
│   ├── pizza.jpg
│   ├── burger.png
│   └── drink.png
│
├── data.js
├── index.html
├── index.css
└── index.js
```

## ⚙️ How It Works

### 1. Menu Rendering

Menu items are stored in `data.js` and dynamically rendered onto the page using JavaScript.

### 2. Adding Items

Each menu item contains data attributes such as:

```html
data-id
data-price
data-name
data-action
```

JavaScript uses these attributes to identify the selected item and add it to the order.

### 3. Order Management

The order is stored in an array. When an existing item is added again, its quantity is increased instead of creating a duplicate item.

```js
existingItem.count += 1
```

### 4. Total Calculation

The total price is calculated using JavaScript's `reduce()` method based on the item's price and quantity.

### 5. Payment Form

The payment form uses HTML's built-in form validation and the `FormData` API to retrieve submitted values.

```js
const formData = new FormData(e.target)

const name = formData.get("user-name")
```

### 6. Event Delegation

A single event listener handles multiple menu actions using `data-action` and `event.target`.

```js
document.addEventListener("click", function(e) {
    // Handle add, remove, order and close actions
})
```

## 🎯 Learning Objectives

This project was built to practice:

* DOM manipulation
* JavaScript arrays and objects
* `find()` and `findIndex()`
* `reduce()`
* Event delegation
* `dataset`
* Dynamic HTML rendering
* Form handling
* `FormData`
* HTML form validation
* JavaScript modules
* Git and GitHub workflow

## ▶️ Running the Project

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Open the project in VS Code.

3. Run the project using a local development server such as **VS Code Live Server**.

4. Open the provided local URL in your browser.

## 📌 Project Status

Completed as a JavaScript practice project and built to strengthen understanding of DOM manipulation, event handling, arrays, forms, and dynamic UI updates.



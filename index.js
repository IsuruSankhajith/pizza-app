const menu = [
    {name : 'magarita', price : 8},
    {name : 'magarita', price : 10},
    {name : 'magarita', price : 10},
    {name : 'magarita', price : 9},
]

const cashInRegister = 100;
const orderQueue = [];

function addnewPizza(pizzaobj){
    menu.push(pizzaobj);
}

function paceOrder(pizzaName){
    const seectedpizza = menu.find(pizzaobj =>pizzaobj.name === pizzaName);
    cashInRegister += seectedpizza.price;
    const newOrder = { id: nextOrderId++, pizza: seectedpizza, status: 'Ordered'};
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId){
    const order = orderQueue.find(order => order.id === orderId);
    order.status = 'Completed';
}

addnewPizza({name : 'pepperoni', cost : 12});
addnewPizza({name : 'hawaiian', cost : 12});
addnewPizza({name : 'veggie', cost : 12});
addnewPizza({name : 'meatlovers', cost : 12});

paceOrder('pepperoni');
completeOrder("0");

console.log("Menu: ", menu);
console.log("Cash in Register: ", cashInRegister);
console.log("Order Queue: ", orderQueue);
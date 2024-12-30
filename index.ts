type Pizza = { name: string; price: number };
type Order = { id: number; pizza: Pizza; status: string };

const menu: Pizza[] = [
  { name: 'magarita', price: 8 },
  { name: 'magarita', price: 10 },
  { name: 'magarita', price: 10 },
  { name: 'magarita', price: 9 },
];

let cashInRegister = 100;
let orderQueue: Order[] = [];
let nextOrderId = 0;

function addNewPizza(pizzaObj: Pizza): void {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | null {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`Pizza "${pizzaName}" not found in the menu.`);
    return null;
  }
  const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: 'Ordered' };
  orderQueue.push(newOrder);
  cashInRegister += selectedPizza.price; // Update cash only if the pizza exists
  return newOrder;
}

function completeOrder(orderId: number): void {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order with ID "${orderId}" not found.`);
    return;
  }
  order.status = 'Completed';
}

// Corrected calls to addNewPizza
addNewPizza({ name: 'pepperoni', price: 12 });
addNewPizza({ name: 'hawaiian', price: 12 });
addNewPizza({ name: 'veggie', price: 12 });
addNewPizza({ name: 'meatlovers', price: 12 });

// Test placing and completing orders
const newOrder = placeOrder('pepperoni');
if (newOrder) {
  completeOrder(newOrder.id);
}

console.log("Menu: ", menu);
console.log("Cash in Register: ", cashInRegister);
console.log("Order Queue: ", orderQueue);

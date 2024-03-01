class Cart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTotalItems() {
    return this.items.length;
  }

  addItem(item) {
    if (typeof item !== "object" || !item || Array.isArray(item)) {
      throw new Error();
    }

    this.items.push(item);
  }

  removeItem(id) {
    if (typeof id !== "string") {
      throw new Error("Invalid Id. Id must be a string.");
    }

    this.items = this.items.filter((item) => item.id !== id);
  }
}

module.exports = Cart;

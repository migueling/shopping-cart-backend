const Chance = require("chance");

const Cart = require("./Cart");

const chance = new Chance();

describe("when using Cart object", () => {
  let cart, item, itemTwo;

  beforeEach(() => {
    cart = new Cart();
    item = {
      id: chance.guid(),
      price: chance.integer(),
    };
    itemTwo = {
      id: chance.guid(),
      price: chance.integer(),
    };
  });

  it("should the cart items", () => {
    //ARRANGE
    const cart = new Cart();

    //ACT
    const cartItems = cart.getItems();

    //ASSERT
    expect(cartItems).toBeDefined();
  });

  it("should add items to the shopping cart", () => {
    //ARRANGE
    const cart = new Cart();
    item = {
      id: chance.guid(),
      price: chance.integer(),
    };

    //ACT
    cart.addItem(item);

    //ASSERT
    expect(cart.items).toContainEqual(item);
  });

  it("should throw an error when the item pass to addItem is invalid eg: null", () => {
    //ARRANGE
    let error;

    //ACT
    try {
      cart.addItem(null);
    } catch (e) {
      error = e;
    }

    //ASSERT
    expect(error).toBeDefined();
  });

  it("should throw an error when the item pass to addItem is invalid eg: []", () => {
    let error;

    try {
      cart.addItem([item]);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
  });

  it("should throw an error when the item pass to addItem is invalid eg: 'name'", () => {
    let error;

    try {
      cart.addItem("name");
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
  });

  it("should get the total of the cart items", () => {
    const cart = new Cart();
    item = {
      id: chance.guid(),
      price: chance.integer(),
    };

    cart.addItem(item);
    cart.addItem(item);
    const total = cart.getTotalItems();

    expect(total).toBe(2);
  });

  it("should remove an item by itemId", () => {
    cart.addItem(item);
    cart.addItem(itemTwo);

    cart.removeItem(item.id);

    expect(cart.items).not.toContainEqual(item);
  });

  it("should throw an error when the item id pass to removeItem is not a string", () => {
    let error;
    cart.addItem(item);

    try {
      cart.removeItem(null);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
  });

  it("should throw an error message `Invalid Id. Id must be a string.` when the item id pass to removeItem is not a string", () => {
    let error;
    cart.addItem(item);

    try {
      cart.removeItem(null);
    } catch (e) {
      error = e;
    }

    expect(error.message).toMatch("Invalid Id. Id must be a string.");
  });

  it("should get the total of the cart items", () => {
    const cart = new Cart();
    cart.addItem({ id: 1, price: 100 });
    cart.addItem({ id: 1, price: 200 });

    const total = cart.getTotal();

    expect(total).toBe(300);
  });
});

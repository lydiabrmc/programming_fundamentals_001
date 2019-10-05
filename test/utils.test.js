const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
    test("returns 36 when passed 30", () => {
        expect(utils.addVAT(30)).toBe(36);
    });

    test("returns 120 when passed 100", () => {
        expect(utils.addVAT(100)).toBe(120);
    });
    test("returns 118.8 when passed 99", () => {
        expect(utils.addVAT(99)).toBe(118.8);
    });
});

describe("utils.getFullName", () => {
    test("returns first and last name when passed", () => {
        expect(utils.getFullName("first", "last")).toBe("first last");
    });
});

describe("utils.makeHalfPrice", () => {
    test("returns 50 when passed 100", () => {
        expect(utils.makeHalfPrice(100)).toBe(50);
    });
});

describe("utils.countBooks", () => {
    test("returns 3 when passed ['book1', 'book2', 'book3']", () => {
        expect(utils.countBooks(['book1', 'book2', 'book3'])).toBe(3);
    });
});

describe("utils.isInStock", () => {
    test("returns true if the title is in stock", () => {
        const book = {
            title: "The Stone Diaries",
            author: "Carol Shields",
            yearOfPublication: 1993,
            quantity: 6
        };
        expect(utils.isInStock(book)).toBe(true);
    });
});

describe("utils.getTotalOrderPrice", () => {
    test("returns total price and quantity when passed with VAT", () => {
        const order = {
            price: 8,
            quantity: 2,
        }
        expect(utils.getTotalOrderPrice(order, 2)).toBe(order * 0.2);
    });
});
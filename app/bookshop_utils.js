function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(first, last) {
    return (first + ' ' + last);
}

function makeHalfPrice(price) {
    return price / 2;
}

function countBooks(count) {
    return count.length;
}

function isInStock(book) {
    if (book.quantity > 0) {
        return true;
    } else {
        return false;
    }
}

function getTotalOrderPrice(order) {
    return order.quantity + (0.2 * order);

}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice,
};
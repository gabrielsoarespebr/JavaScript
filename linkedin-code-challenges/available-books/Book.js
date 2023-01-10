export class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    getAvailability() {
        let availability;
        switch (true) {
            case this.numCopies === 0:
                availability = "out of stock";
                break;
            case this.numCopies > 0 && this.numCopies < 10:
                availability = "low stock";
                break;
            case this.numCopies > 10:
                availability = "in stock";
                break;
            default:
                availability = "invalid";
                break;
        }
        return availability;
    }

    sell(numSold = 1) {
        this.numCopies -= numSold;
    }

    restock(numCopies = 5) {
        this.numCopies += numCopies;
    }

}
// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(nombre, description, price, imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: nombre,
            description: description,
            price: price,
            img: imageUrl || 'https://via.placeholder.com/150', // Default image if no imageUrl is provided
            createdAt: new Date()   
        };

        // Push the item to the items property
        this.items.push(item);
    }
}
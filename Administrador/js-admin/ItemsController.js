class ItemsController{
  constructor(currentId = 0){
    this.items = [];
    this.currentId = currentId;
  }

  addItem(nombre, description, type, category, subcategory, price, imageUrl){
    const item = {
      id: this.currentId++,
      nombre,
      description,
      type,
      category,
      subcategory,
      price,
      imageUrl
    };
    this.items.push(item);

    //guardar en localstorage
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
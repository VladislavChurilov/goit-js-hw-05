
class Storage {
   constructor(storage) {
       this.storage = storage
   }
   getItems () {
       console.log(storage)
   }
   addItem(item){    
       this.storage.push(item);
    //    return storage;
        console.table (storage);
   }
   removeItem(item){
    const itemToRemove = item;
    const index = this.storage.indexOf(itemToRemove);
    this.storage.splice(index, 1);
    console.table (storage);
   }   
}



const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
//  console.log(storage); 
  const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
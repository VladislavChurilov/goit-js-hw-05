class Storage {
   constructor(storage) {
       this.storage = storage;
   }
   getItems () {
      //  console.log(storage)
      return storage;
   }
   addItem(item){    
       this.storage.push(item);
      //  return storage;
       return storage;
   }
   
   removeItem(item){
    const itemToRemove = item;    
    const index = this.storage.indexOf(itemToRemove);
    if(index != -1){          
         this.storage.splice(index, 1);
        }    
    // console.table (storage); 
    return storage;   
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
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
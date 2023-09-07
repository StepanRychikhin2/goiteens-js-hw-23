class Storage {
constructor(itemsArr){
    this.items = itemsArr;
}


getItems () {
    return this.items;
}

addItem (element) {
    this.items.push(element);
}
removeItem  (element) {
    const frendName = this.items.reduce((element2) => {  
        if (this.items === element) {
            element === 0;
        } else{
            this.items.push(element);
        }
        
             }, this.items);
        
        console.log(frendName);
}

}




















// const Storage = function (itemsArr) {
//     this.items = itemsArr;
//     this.getItems = function () {
//         return this.items;
//     }

//     this.addItem = function (element) {
//         this.items.push(element);
//     }
//     this.removeItem = function (element) {
//         const frendName = this.items.reduce((element2) => {  
//             if (this.items === element) {
//                 element === 0;
//             } else{
//                 this.items.push(element);
//             }
            
//                  }, this.items);
            
//             console.log(frendName);
//     }
//     return frendName;
// };


const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
    ]);
    const items = storage.getItems();
    console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
    storage.addItem('Дроїд');
    console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
    storage.removeItem('Пролонгер');
    console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
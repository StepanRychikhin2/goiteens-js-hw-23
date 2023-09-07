class StringBuilder {
    constructor(initialValue = "") {
      this._value = initialValue;
    }
  
    get value() {
      return this._value;
    }
  
    append(str) {
   
        this._value += str;
     
    }
  
    prepend(str) {
     
        this._value = str + this._value;
      
    }
  
    pad(str) {
      
        this._value = str + this._value + str;
      
    }
  }
  
  // Приклад використання класу
  const builder = new StringBuilder('.');
  console.log(builder.value);  
//   builder.pad("***");
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='











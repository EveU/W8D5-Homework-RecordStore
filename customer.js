var Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.records = [];
}

Customer.prototype = {
  buyRecord:function(record, store){
    if(this.cash >= record.price){
      store.sellRecord;
      this.records.push(record);
      this.cash -= record.price;
    } else{
      console.log("You don't have enough money to buy that.");
    }
  },
  sellRecord:function(record, store){
    if(store.balance >= record.price){
      var index = this.records.indexOf(record);
      this.records.splice(index, 1);
      store.addRecordToInventory;
      store.balance -= record.price;
      this.cash += record.price;
    }
  }
}

module.exports = Customer;
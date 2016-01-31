var _ = require('lodash');

var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
}

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
  this.inventoryValue = 0;
}

RecordStore.prototype = {
  addRecordToInventory:function(record){
    this.inventory.push(record);
  },
  listInventory:function(){
    for(record of this.inventory){
      console.log(record.artist + " | " + record.title + " | " + record.price);
    }
    return this.inventory[0];
  },
  sellRecord:function(record){
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index, 1);
    this.balance += record.price;
    this.calculateInventoryValue();
  },
  calculateInventoryValue:function(){
    for(record of this.inventory){
      this.inventoryValue += record.price;
    }
    return this.inventoryValue;
  }
}

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
    }
  },
}

module.exports = {
  recordConstructor: Record,
  recordStoreConstructor: RecordStore,
  customerConstructor: Customer
}
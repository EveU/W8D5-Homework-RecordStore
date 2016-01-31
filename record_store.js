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
}

RecordStore.prototype = {
  addRecordToInventory:function(record){
    this.inventory.push(record);
  }
};

module.exports = {
  recordConstructor: Record,
  recordStoreConstructor: RecordStore
}
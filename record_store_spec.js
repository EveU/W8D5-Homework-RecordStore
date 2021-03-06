var imported = require('./record_store');
var Record = imported.recordConstructor;
var RecordStore = imported.recordStoreConstructor;
var Customer = require('./customer');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Record', function(){
  // Create a constructor to create Record objects with artist, title, price
  it('should have artist, title and price', function(){
    var newRecord = new Record('jesse & joy', 'electricidad', 7.99);
    assert.equal('jesse & joy', newRecord.artist);
    assert.equal('electricidad', newRecord.title);
    assert.equal(7.99, newRecord.price);
  });
});

// Create a few records
var record1 = new Record('jesse & joy', 'electricidad', 7.99);
var record2 = new Record('jesse & joy', '¿con quién se queda el perro?', 9.99);
var record3 = new Record('ásgeir trausti', 'dýrð í dauðaþögn', 9.99);
var record4 = new Record('csemer boglárka', 'boggie', 8.99);

// Create a RecordStore that has a name, city and multiple records in it's inventory
describe('Record Store', function(){
  it('should have a name and city', function(){
    var newRecordStore = new RecordStore('jsRecords', 'Edinburgh');
    assert.equal('jsRecords', newRecordStore.name);
    assert.equal('Edinburgh', newRecordStore.city);
  });
  it('should have multiple records in its inventory', function(){
    var newRecordStore = new RecordStore('jsRecords', 'Edinburgh');
    newRecordStore.addRecordToInventory(record1);
    newRecordStore.addRecordToInventory(record2);
    newRecordStore.addRecordToInventory(record3);
    newRecordStore.addRecordToInventory(record4);
    assert.equal(record1, newRecordStore.inventory[0]);
    assert.equal(4, newRecordStore.inventory.length);
  });
  // Give the RecordStore a balance i.e. cash in bank.
  it('should have a balance', function(){
    var newRecordStore = new RecordStore('jsRecords', 'Edinburgh');
    assert.equal(0, newRecordStore.balance);
  });
});

// Add some records to your RecordStore.
var jsRecords = new RecordStore('jsRecords', 'Edinburgh');
jsRecords.inventory = [record1, record2, record3, record4];

// Create a method that lists the inventory.
describe('JS Records', function(){
  it('should be able to list the inventory', function(){
    assert.equal(record1, jsRecords.listInventory());
  });
  // Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
  it('should be able to sell a record', function(){
    jsRecords.sellRecord(record2);
    assert.equal(3, jsRecords.inventory.length);
    assert.equal(9.99, jsRecords.balance);
  });
  // Create a method that reports on the financial situation of the store. Cash and value of inventory.
  it('should keep track of the cash balance and inventory value', function(){
    assert.equal(9.99, jsRecords.balance);
    assert.equal(26.97, jsRecords.inventoryValue);
  });
});

// Create a RecordCollector (or customer) constructor who can buy and sell records.
var customer1 = new Customer('Allan', 30.00);

describe('Customer', function(){
  it('should be able to buy records', function(){
    customer1.buyRecord(record4, jsRecords);
    assert.equal(1, customer1.records.length);
    assert.closeTo(20.01, 0.1, customer1.cash);
  });
  it('should be able to sell records', function(){
    customer1.sellRecord(record4, jsRecords);
    assert.equal(0, customer1.records.length);
    assert.closeTo(30.00, 0.1, customer1.cash);
  });
});
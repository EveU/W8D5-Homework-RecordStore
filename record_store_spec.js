var imported = require('./record_store');
var Record = imported.recordConstructor;

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

// Create a RecordStore that has a name, city and multiple records in it's inventory

// Give the RecordStore a balance i.e. cash in bank.

// Add some records to your RecordStore.

// Create a method that lists the inventory.

// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold

// Create a method that reports on the financial situation of the store. Cash and value of inventory.

// Create a RecordCollector (or customer) constructor who can buy and sell records.
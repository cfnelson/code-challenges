
// Inspired by http://codekata.com/kata/kata09-back-to-the-checkout/
/* Example of the rules object's format */
  
var rules = { 
   A: { 
    unitPrice: 50, 
    specialPrice: { 
      amount: 3, 
      price: 120 
    } 
   },
   B: { 
    unitPrice: 30, 
    specialPrice: { 
      amount: 2, 
      price: 45 
    } 
   },
   C: { 
    unitPrice: 20,  
   },
   D: { 
    unitPrice: 15 
   }
  };

function Checkout(rules) {
	this.pricingRules = rules;
  this.total = 0;
  this.scannedItems = {};
}

Checkout.prototype.scan = function scan(item) {
  if ( this.scannedItems[item] ) this.scannedItems[item] += 1;
  else this.scannedItems[item] = 1;
  
  var scannedItem = this.pricingRules[item];

  if ( this.pricingRules[item].hasOwnProperty("specialPrice") ) {
    var noScanned = this.scannedItems[item];
    var spAmount  = scannedItem.specialPrice.amount;  
    
    if ( spAmount % noScanned === 0 ) {
      this.total += ( (scannedItem.unitPrice * spAmount) - scannedItem.specialPrice.price ); 
    } else {
      this.total += scannedItem.unitPrice;
    }
  } else {
    this.total += scannedItem.unitPrice;
  }  
}

var test = new Checkout(rules);

test.scan("A");
test.scan("A");
test.scan("A");
test.scan("A");
test.scan("A");
test.scan("A");
test.scan("D");

console.log("shopping cart total: ", test.total);

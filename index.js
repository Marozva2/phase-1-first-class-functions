function receivesAFunction(callback) {
    callback("I have been called");
  }
  
function returnsANamedFunction() {
    function namedFunction() {
        console.log("Named function");
    }
    return namedFunction;
  }

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function!")
    };
  }
  const AnonymousFunction = returnsAnAnonymousFunction();
AnonymousFunction();
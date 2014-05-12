var array = [101, 0, 2, 44, 576];

function decodeASCII(number) {
    return String.fromCharCode(number);
}
arrayDeocded = array.map(decpdeASCII).join("");
//////////////////////////////////////////////////
function primeCheck(number) {
    var prime1 = true,
        duece = 2;
        while (duece <= Math.sqrt(number) && prime1) {
             prime1 = number % duece === 0 ? false : true;
             duece ++;
        }
        return number < 2 ? false : prime1;
}
function twinsPrime() {
    var primeTwin = 0,
        i;
    for (i = 0; i < 1000 - 3; i++) {
        if (primeCheck(i)) {
            if (primeCheck(i + 2)) {
                primeTwin ++;
            }
         }
    }
}
////////////////////////////////////////////////////
//for ax + b = c - dx
var algebra = function (a, b, c, d) {
    a += d;
    c -= b;
    return c / a;
};
//////////////////////////////////////////////////
function crossSumSteps(number) {
    number += "";
    var j = 0,
        crossSum =0,
        i,
        z;
    for (i = 0; i < number.length; i++) {
        crossSum += parseFloat(number[i]);
    }
    if (crossSum === parseFloat(number)) {
        z = j;
        j = 0;
        return z;
    } else {
        j += 1;
        return crossSumSteps(crossSum);
    }
}
///////////////////////////////////////////////////
function isPrime(n) {
    this.s = Math.sqrt(n);
    var i,
        previous = 1,
        number = 2,
        sum = 0,
        aux = number;
    for (i = 0; i <= s; i++) {
        if (n % i === 0) {
            return false;
        } else {
            return true;
        }
    }
    while (number < 100000000) {
        if (isPrime(number)) {
            sum += number;
        }
        number += previous;
        previous = aux;
    }
}
console.log(sum);
///////////////////////////////////////////////////
function primeFactorSum(number) {
    var sum, 
        i;
    for (i = 0; i <= number; i++) {
        while (number % i === 0) {
            number = number / i;
            sum += i;
        }
    }
    return sum;
}
////////////////////////////////////////////////////
String.prototype.rotate = function (n) {
    n %= this.length;
    var cut = n < 0 ? -n : this.length - n;
    return this.substr(cut) + this.substr(0, cut);
};
var alphabet =ABCDEFGHIJKLMNOPQRSTUVWXYZ;
rot13_dict = {};
var A2z = (alphabet + alphabet.toLowerCase()).split("");
var rotate = (alphabet.rotate(13) + alphabet.rotate(13).toLowerCase()).split("");
A2z.forEach(function(value, index, array) {
    rot13_dict[value] = rotate[index];
});
var rot13_map = function(n) {
    return rot13_dict[n] || n;
};
var rot13 = function(string) {
    return string.split("").map(rot13_map).join("");
};
console.log(rot13("slfkjs effjla sdlfkjoduf'));
/////////////////////////////////////////////////////////
var fibo = function (nth) {
    return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, nth) - Math.pow((1 - Math.sqrt(5)) / 2, nth)) / Math.sqrt(5));
};
var getFibsByLimit = function(limit) {
    var f = [];
    f.push(fibo(f.length));
    while (f[f.length - 1] < limit) {
        f.push(fibo(f.length));
    }
    return f;
};
var mult = function (n, p) {
    return n * p;
};
var zeck = function (fibs, value) {
    var v = value,
        s = [],
        arr = fib.filter(function(e) {
            return e <= v;
        });
    while (v !== 0 && arr.length > 0) {
        s.push(arr[arr.length]);
        v = v - arr[arr.length - 1];
        if (v !== 0) {
            arr = fib.filter(function (e) {
                return e <= v;
            });
        }
    }
    return a.length > 0 ? s.reduce(mult) : 0;
};
var = fib = getFibsByLimit(12345);
console.log(zeck(fib, 1000));
console.log(zeck(fib, 13245));
            
/////////////////////////////////////////////////
private void SnapAndPost () {
    Busy = true;
    UpdateUIStatus("Taking a picture");
    var picker = new Xamarin.Media.MediaPicker(),
        pickTask = picker.TakePhotoAsyn(new Xamainr.Media.StoreCameraMediaOptions()),
        tagsCtrl,
        uploadTask;
    pickTask.ContinueWith((picRetTask) => {
        InvokeOnMainThreadI(() => {
            if (picRetTask.IsCanceled) {
                Busy = false;
                UpdateUIStatus("Canceled");
            } else {
                tagsCtrl = new GetTagsUIViewController(picRetTask.Result.GetStream());
                PresentViewController(tagsCtrl, true, () => {
                    UpdateUIStatus("Submitting picture to server");
                    uploadTask = new Task (() => {
                        return PostPicToService(picRetTask.Result.GetStream(), tagsCtrl.Tags);
                    });
                    uploadTask.ContinueWith((uploadRetTask) => {
                        InvokeOnMainThread(() => {
                            Busy = false; //flag
                            UpdateUIStatus(uploadRetTask.Result.Failed ? "Canceled" : "Success");
                        });
                    });
                    uploadTask.Start();
                });
            }
        });
    });
}

//using compiler in C# async (and F#)
//C# compiler infrasture for Async is built on top of the Task primative, this Task class is similar to
// futures, promises or async
//same as above, but this time when you put the word await in the program the compiler interprets this as
//the point in the program to suspend execution so background operations can take place

private async Task SnapAndPostAsyn() {
    try {
        Busy = true;
        UpdateUIStatus("taking a picture");
        var picker = new Xamarin.Media.MediaPicker(),
            mFile = await picker.TakePhotoAsync(new Xamarin.Media.StoreCameraMediaOptions()),
            tagsCtrl = new GetTagsUIViewController(mFile.GetStream());
            //call new ioS and await API
        await PresentViewControllerAsync(tagsCtrl, true);
        UpdateUIStatus("Submitting picture to server");
        await PostPicToServerAsync(mFile.GetStream(), tagsCtrl.Tags);
        UpdateUIStatus("Success");
    } catch {
        UpdateUIStatus("Cancelled");
    } finally {
        Busy = false; //now it is centralized
    }
}

//Parse object, asyncronous operation with callbacks:
object.save({
    key: value
    }, {
        success: function(object) {
            //object was saved.
        },
        error: function(object, error) {
        //saving the object failed.
        }
});

//with Promise paradigm and "then" function, which is given callbacks to be
//called when the promise has been fulfilled or has failed:
object.save({
    key: value
}).then(function(object) {
    //the object was saved
    },
    function(error) {
        //saving the object failed.
    }
); 
//this allows chaining of promises by calling promise.then(func) which returns a new promise
//which is not fullfilled until func has completed
//important point  ***if the callback supplied to then returns a new promise then the promise
//returned by then will not be fullfilled until the promise returned by the callback is fullfilled


//this code logs in, finds and object then updates it
Parse.User.logIn("user:", "pass", {
    success: function(user) {
        query.find({
            success: function(results) {
                results[0].save({
                    key: value
                	},
                	{
                    success: function(result) {
                         //the object was saved.
                    }
                });
            }
        });
    }
});

//with promise chaining
Parse.User.logIn("user","pass").then(function(user) {
    return query.find():
}).then(function(results) {
    return results[0].save({
        key: value
    });
}).then(function(result) {
    //the object was saved.
});

//first code with error handling added
Parse.User.logIn("user", "pass", {
    success: function(user) {
        query.find({
            success: function(results) {
                results[0].save({
                    key: value
                    },
                    {
                    success: function(result) {
                        //the object was saved.
                    },
                    error: function(result, error) {
                        //An error occured.
                    }
                });
            },
            error: function(error) {
                //An error occured.
            }
        });
    },
    error: function(user, error) {
         //An error occurred.
    }
});

//with promises, errors are propagated, not calling callbacks until error handler is encountered:

Parse.User.logIn("user", "pass").then(function(user) {
    return query.find();
}).then(function(results) {
    return results[0].save({
        key: value
        }
    );
}).then(function(result) {
    //Object was saved.
}, function(error) {
    //there was an error.
});

//the failing promise is the asyncronous equivalent to throwing an exception, if the callback 
//passed to then throws an error, the promise returned will fail with that error
//propagating the error to the next available handler is the equivalent to bubbling up an exceptionuntil a catch is encountered   


testing: assert(condition, message); //asserts that premise is either true or false, first param is condition that should be true, second is message if it is not
Ex: assert(a === 1, "Disaster, a is not one");

performance:
	start =  new Date().getTime();
        for (var n = 0; n < maxCount; n++) {
            //perform operation to be measured.
        }
        elasped = new Date().getTime() - start;
        assert(true, "Measured time: " + elasped);

debugging in JS,
	logging (console.log()) and breakpoints

//logging method that works in all modern browsers

function log() {
    try {
        console.log.apply(console, arguments); //tries using the most common method
    }
    catch (e) {
        try {
            opera.postError.apply(opera, arguments);
        }
        catch (e) {
            alert(Array.prototype.join.call(arguments, " " ));
        }
    }
}  
            
//good test make good code
//1. repeatability, and not dependent upon external factors such as network or CPU load
//2. Simplicity, one thing at a time, remove as much as possible
//3. Independence-execute in isolation and not dependent on other test, smallest unit possible

//group test are important for the testing the context of assertions

//asynchonous tests results come back after a nondeterministic amount of time has passed: AJAX request and 
//animations
//Assertions are grouped into a unifying test group based on the the same asynchronous operation
//GUI: set up interface, enter a loop for events to occur, invoke handlers for those events
//callbacks are used for event handlers
//when a function is named that name is valid throughout the scope within which the function is declared
//if a function is declared at the top level, a property using the function name is created on -window-
//that references the function
//all functions have a name property that is stored as a string and is empty if no name is given

//four ways to invoke a function that determine how this is defined
//	1. as a function (this refers to window as its master)
//  2. method, invocation tied to object
//  3. constructor, new object
//  4. apply() and call() methods
//this refers to the object that is implicitly associated to the function invocation and is the function's context 
//what this points to is not determined by how the function is declared but by how it is invoked
//Deconstructive case vs constructive case
//A javascript test suit should serve a single need: displaying the results of the test
//making it easy to to determine which tests have passed or failed
//components of a test suit: test runner, test groupings, and assertions and the ability to test asynchronously
//regression testing

//Assertion Method
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
} //defintion 
window.onload = function() {
    assert(true, "The test suit is running.");
    assert(false, "Fail");
}; //execution

//test groups: grouping tests together in a context
//in unit testing test group will represent a collection of  assertions as they relate to a single
// method in our API or application
//behavior driven delevelopment - the group would collections assertions by task                                      
//invoking a function via the variable, the function invocation operator is can be applied to 
//any expression that evaluates to a function 

//when a constructor is invoked these things happen: 
//    empty object is created
//    this object is passed to the constructor as this parameter and becomes the constructor's function context
//    if their is no explicit return value the new object is returned as the constructor's value
// apply() method of a function, apply(object as context, array of values to be used as invocation arguments) 
// call() method used the same except the arguments are passed directly in the argument list rather than as an array

function () {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}
var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);

//Imperative vs functional programming
//imperative will use an array passed to a function to operate on through iteration vs functional that
//using a function that operates on a single item and passes each entry to that function
//if the arguments are unrelated values in variable or specified as literals, use call, 
//but if the arguments are already in an array, they apply would be better. 
//each object in JS has a super power for functions its the ability to be invoked

window.onload = function () {
    assert(true, "power");
}; //anonymous functions as an event handler
var ninja = {
    shout: function () {
        assert(true, "Ninja");
    }
}; //using property name, so do not need name for function call
ninja.shout();
setTimeout(function () {
    assert(true, "Forever");
    }, 500);
  // function passed as a callback to be invoked when the timer expires
  
//palindrome function
function isPalindrome(text) {
    if (text.length <= 1) {
        return true;
    }
    if (text.charAt(0) !== text.charAt(text.length - 1)) {
        return false;
    }
    return isPalindrome(text.substr(1, text.length - 2));
}

//two criteria of recursive functions: reference to self and convergence towards elimination
//functions with names are called inline functions
//inline function names are only visible inside the function itself, like variable names with local scope
//assigning properties to functions is important in event callback management
//storing functions in collections
//memoizing

//Storing a collection of unique functions
var store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
        if (!fn.id) {
           fn.id = store.nextId++;
           return !!(store.cache[fn.id] = fn); //!! is boolean equivalent
        }
    }
};
function ninja() {}

assert(store.add(ninja),
    "Function was safely added.");
assert(!store.add(ninja),
    "But it was only added once.");

//memoization is giving a function the ability to modify itself by remembering previously computed values
//this increases perfomance by avoiding needless complex computations that have already been performed
function isPrime(value) {
    if (!isPrime.answers) {
        isPrime.answers = {};
    }
    if (isPrime.answers[value] !== null) {
        return isPrime.answers[value];
    }
    var prime = value !== 1;
    for (var i = 2; i < value; i += 1) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
}
assert(isPrime(5), "5 is prime!");
assert(isPrime.answers[5], "The answer was cached!");

//caching sacrificies memory for performance
//load test

function getElements(name) {
    if (!getElements.cache) {
        getElements.cache = {};
    }
    return getElements.cache[name] = getElements.cache[name] ||
        document.getElementsByTagName(name);
}
//state...such as metadata concerning the collection is the reason to create an object and not an array
//simulating array-like methods 
var elems = {
    length: 0,
    add: function (elem) {
        Array.prototype.push.call(this, elem);
    },
    gather: function (id) {
        this.add(document.getElementById(id));
    }
};
elems.gather("first");
assert(elems.length === 1 && elems[0].nodeType,
    "Verify that we have an element in our stash");
elems.gather("second");
assert(elems.length === 2 && elems[1].nodeType,
    "Verify the other insertion");
    
//Max and Min for arrays
function smallest(array) {
    return Math.min.apply(Math, array); //it is not necessary to make Math the context
}
function largest(array) {
    return Math.max.apply(Math, array);
}
assert(smallest([0, 1, 2, 3]) === 0, "Located the smallest");

//transversing variable-length argument lists
function merge(root) {
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            root[key] = arguments[i][key];
        }
    }
    return root;
}
var merged = merge(
    { name: "Batou" },
    { city: "Niihama" }
);
//slicing the arguments list
function multiMax(multi) {
    return multi * Math.max.apply(Math, 
    Array.prototype.slice.call(arguments, 1));
}
assert(multiMax(3, 1, 2, 3) === 9, "3*3=9 (First arg, by largest.)");
console.log(multiMax(3, 1, 2, 3)); //9

//a method for overloading a function 
// with three arguments: object upon which a method is to be bound,
// the name of the property to which the method will be bound, 
// the declaration of the method to be bound

function addMethod(object, name, fn) {
    var old = object[name];  
    	//stores the previous function if we need to call it
    object[name] = function () {
        if (fn.length === arguments.length) {
            return fn.apply(this, arguments); 
            	// invokes the passed function if its parameter and arg counts match
        } else if (typeof old === "function") {
            return old.apply(this.arguments);
                //invokes previous function if passed function isn't a match
        }
    };
}

addMethod(ninja, "whatever", function () {/*do something */});
addMethod(ninja, "whatever", function (a) {/*do something else */});
addMethod(ninja, "whatever", function (a, b) {/* yet do something else */});

var ninjas = {
    values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};
addMethod(ninjas, "find", function () {
    return this.values;
});
addMethod(ninjas, "find", function (name) {
    var ret = [];
    for (var i = 0; i < values.length; i++) {
        if (this.values[i].indexOf(name) === 0) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});
addMethod(ninjas, "find", function (first, last) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++) {
        if (this.values[i] === (first + " " + last)) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});
assert(ninjas.find().length === 3, "Found all ninjas");
assert(ninjas.find("Sam").length === 1, "Found ninja by first name");
assert(ninjas.find("Alex", "Russell", "Jr") === null, "Found nothing");

//function test
function isFunction(fn) {
    return Object.prototype.toString.call(fn) === "[object Function]";
}

var outValue = "ninja";
var later;
function outerFunction () {
    
//an implementation method or setter method provides control of a variable value in a 
//controlled manner. i.e., a business method, allowing us to maintain state 
//closures for callbacks and timers, most common uses for asynchronous code

//AJAX request
<div id="testSubject"></div>
<button type="button" id="testButton">Go</button>
    jQuery("#testButton").click(function () {
        var elem$ = jQuery("#testSubject");
        elem$.html("Loading...");
        jQuery.ajax({
            url: "test.html",
            success: function (html) {
                assert(elem$, 
                    "We can see elem$, via the closure for this callback.");
                elem$.html(html);
            }
        });
    });
    
//closure for a timer interval callback
<div id="box">*%$#</div>
<script type="text/javascript">
    function animateIt(elementId) {
        var elem = document.getElementById(elementId),
            tick = 0,
            timer = setInterval(function () {
                if (tick < 100) {
                    elem.style.left = elem.style.top = tick + "px";
                    tick++;
                } else {
                    clearInterval(timer);
                    assert(tick === 100,
                        "Tick accessed via a closure");
                    assert(elem, 
                        "Element also accessed via a closure");
                    assert(timer, 
                        "Timer refernce also obtained via a closure");
                }
            }, 10);
    }
    animateIt("box");        
</script>
    
//function that serves as an object method is bound to a DOM element as an event listener
//by binding a specific context to an event handler

<button id="test">Click Me!</button>
<script type="text/javascript">

    function bind(context, name) { //name of the method
        return function () {
            return context[name].apply(context, arguments);
        };
    } //wraps a call to the method of an object within another
    
    var button = {  //backing object
        clicked: false, //stores state
        click: function () { //method that serves as the event handler
            this.clicked = true;
            assert(button.clicked, "The button has been clicked");
        } //will fire when the button is clicked
        
    };
    var elem = document.getElementById("test");
    elem.addEventListener("click", bind(button, "click"), false);
        //uses the bind function to bind the button object as the context of the handler
        
</script>

//button wants to know if it's been clicked, its state

Function.prototype.bind = function () {
    var fn = this, 
        args = Array.prototype.slice.call(arguments),
        object = args.shift();
    return function () {
        return fn.apply(object,
            args.concat(Array.prototype.slice.call(arguments)));
    };
};
    var myObject = {};
    function myFunction() {
        return this === myObject;
    }
    assert( !myFunction(), "Context is not yet set yet" );
    var aFunction = myFunction.bind(myObject);
    assert(aFunction(), "Context is set properly");

//currying is to create a proxy function that will fill in the first few arguments of a function
var elements = "val1,val2, val3, val4".split(/,\s*/);

//partially applying arguments to a native function
Function.prototype.partial = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments),
        arg,
        i;
    return function () {
        arg = 0;
        for (i = 0; i < args.length && arg < arguments.length; i += 1) {
            if (args[i] === undefined) {
                arg += 1;
                args[i] = arguments[arg];
            }
        }
        return fn.apply(this, args);
    };
};
  
        

//filling in the first specified arguments
Function.prototype.curry = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments); //prefill arguments in the variables that will be captured in the closure
    return function () {
        return fn.apply(this, args.concat(
            Array.prototype.slice.call(arguments)));
    };
};


//Asynchronous
var delay = setTimeout.partial(undefined, 2000);

delay(function () {
   assert(true, "A call to this function will be delayed 2 second");
});

//for binding events
var bindClick = document.body.addEventListener.partial(
    "click", undefined, false);
bindClick(function () {
    assert(true, "Click event bound via curried function");
});

//memoization method for functions
Function.prototype.memoized = function (key) { 
    this._values = this._values || {};  //stores a cache of values in property values using a short-circuiting expression
    return this._values[key] !== undefined ?  
        this._values[key] :  //when called with a key, check for a cached value
        this._values[key] = this.apply(this, arguments); //if not, call the funct and store its value for the next time
};
function isPrime(num) {
    var prime = num !== 1;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
assert(isPrime.memoized(5), 
    "The function works; 5 is prime.");
assert(isPrime._values[5],
    "The answer has been cached.");

//this new memoized function method gives us the ability to wrap the functions and 
// attach properties taht are associated with the function itself
//this allows you to create a data store (cache) in which all precomputed values can be saved

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
} //perfomance degrades over large numbers due to recursive calls

//because javascript behaves like associative arrays, caching works each time a memoized function is called, its
//parameters are used to index the cache. if the data is present, it is returned without executing the entire function

//the fibonnaci function with memoization; a self executing anonymous function returns an inner function
//which is used as the fibonnaci function when returned, the closure allows it to continue to use the memo object
//which stores all of its previous results. Memo is defined outside the function so that it keeps its results

var fibonnaci = (function () {
    var memo = {};
    
    function f(n) {
        var value;
        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1) {
                value = n;
            } else {
                value = f(n - 1) + f(n + 2);
            }
            memo[n] = value;
        }
        return value;
    }
    return f;
})(); 

//technique for memoizing functions using closures
//Memoized() stores
Function.prototype.memoized = function (key) {
    this._values = this._values || {}; //cache of the property values, checking to see if we already created it and do so if not
    return this._values[key] !== undefined ?
        this._values[key] :
        this._values[key] = this.apply(this, arguments);
};
Function.prototype.memoize = function () {
    var fn = this;
    return function () {
        fn.memoized.apply(fn, arguments);//wraps the original function with the memoized method applied
    } //it will always return a memoized version of the function
};

var isAStarOnly = (function (person) {
    var i,
        emohivee,
        star;
    star = person !== emohivee;
    for (i = 0; i < person.length; i += 1) {
        if (person === emohivee) {
            star = false;
            break;
        }
    }
    return star;
}).memoize();
    
//wrapping: ecapsulate the logic while overwriting it with new or extended functionality

//wrapping an old function with a new piece of functionality

function wrap(object, method, wrapper) { //generic wrapping fn
    var fn = object[method];
    return object[method] = function () { //wraps original function by creating new fn that calls fn passed as wrapper
        return wrapper.apply(this, [fn.bind(this)].concat( //within new fn, called with apply
            Array.prototype.slice.call(arguments)));
    };
}
if (Prototype.Browser.Opera) {
    wrap(Element.Methods, "readAttribute", 
        function (original, elem, attr) {
            return attr === "title" ?
                 elem.title :
                 original(elem, attr);
    });
}
//////////////////////
//using closure from a callback for an AJAX request 
<div id="testSubject"></div>
<button type="button" id="testButton">GO!</button>
<script type="text/Javascript">


//using $ as a suffix or prefix is a jQuery convention to say that the variable holds a jQuery object reference

jQuery("#testButton").click(function () { //click handler on the test button with a function that will be called
    var elem$ = jQuery("#testSubject"); 
    elem$.htm("Loading...");  //preloads the div with the text to let the user know something is going on
    jQuery.ajax({
        url: "test.html",
        success: function (html) {
            assert(elem$, "we can see elem$, via the closure for this callback.");
            elem$.html(html); //loading the div when the request comes back from the server
        }
    });
});
//////////////////////////////
<div id="box">%&%&%</div>

function animateIt(elementId) {
    var elem = document.getElementById(elementId),
        tick = 0, //state of animation ticks or steps
        timer = setInterval(function() {
             if (tick < 100) {
                 elem.style.left = elem.style.top = top + "px";
                 tick++;
            } else {
                 clearInterval(timer);
                 assert(tick === 100, "Tick accessed via a closure. ");
                 assert(elem, "Element also accessed via a closure.");
                 assert(timer, "Timer reference also obtained via a closure");
            }
    }, 10);
}
animateIt("box");

//not only can we see the values that these variables had at the time of the closure when created but we can also update them within the closure
//while the function within the closure executes...it's not a snapshot of the state of the scope but an active encapsulation of that state that can be modified


//the following code the function serves as an object method and is bound to a DOM element as an event listener. 
//Binding a specific context to a function

<button id="test">Click Me</button>

var button = { //"backing" object for DOM element button 
    clicked: false, 
    click: function () { //declare method...because it's method of an object, we us --this-- within the function to get reference to the object
        this.clicked = true;
        assert(button.clicked, "The button has been clicked"); //within the method, test to see button state has been changed after click
    }
};
var elem = document.getElementById("test");  //establishes click handler on the button
elem.addEventListener("click", button.click, false); //does not work as intended because button in this context is button element not the button object

//Binding a specific context to an event handler

function bind(context, name) {
    return function () { //event handler proxy for the real handler
        return context[name].apply(context, arguments); //return button["click"].apply(button, arguments) = button.click.apply(button, arguments)
    }; //"binding" function that wraps a call to the method of an object within another
}
var button = {
    clicked: false,
    click: function () {
        this.clicked = true;
        assert(button.clicked, "The button has been clicked");
        console.log(this);
    }
};
var elem = document.getElementById("test");
elem.addEventListener("click", bind(button, "click"), false); //uses the binding function to bind the button object as the context of the handler
//works because bind uses button the variable or object and not the DOM element that the addEvenListener was looking for the first time
///////////////////////////////////
//An example of a bind function from the Prototype library
Function.prototype.bind = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments),
        object = args.shift();
    return function () {
        return fn.apply(object, 
            args.concat(Array.prototype.slice.call(arguments)));
    };
};
var myObject = {};
function myFunction() {
    return this === myObject;
}            

/////////////////////////////////////
//partially applying functions: prefill arguments to a function before it's executed, returning a new function with the predefined arguments
//can be called later...proxy function (stands in for a function and calls that function when executed)
//also known as currying
Function.prototype.curry = function () {
    var fn = this, 
        args = Array.prototype.slice.call(arguments); //arguments to be prefilled
    return function () { //transfer them to newly constructed function
        return fn.apply(this, args.concat(
             Array.prototype.slice.call(arguments)));
        };
};

Function.prototype.partial = function () { //fills in ANY missing argument from a given function--not just those at the beginning of an argument list
    var fn = this,
        args = Array.prototype.slice.call(arguments);
    return function () {
        var arg = 0,
            i;
        for (i = 0; i < args.length && arg < arguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = arguments[arg++]; //argument merging, filling in undefined gaps 
            }
        }
        return fn.apply(this, args);
    };
};
//you can specify arguments anywhere in the parameter list that will be filled in later by specifying the undegined value for 
//missing arguments 

//using this, we can set up a delay function

var delay = setTimeout.partial(undefined, 10);
delay(function() {
    assert(true, "A call to this function will be delayed 10 ms");
});

//function for binding events
var bindClick = document.body.addEvenListener.partial(
    "click", undefined, false);
bindClick(function () {
    assert(true, "Click even bound via curry function");
});

//////////////////////////////////////////////////
//Manipulating internal behaviour with two techniques:
//producing self-modifying functions based upon existing static functions
//modifying how an exising function works without closures

//memoization without access to an existing function
Function.prototype.memoized = function (key) {
    this._values = this._values || {}; //cache of values in property values, checks to see if created first using short-circuiting expression
    return this._values[key] !== undefined ?
        this._values[key] : // when we get called with a key, checks to see if we have a cached value for it, if so, return, if not call function and store 
        this._values[key] = this.apply(this, arguments); //value computed for next time
}; //computing the value, saving the value and returning the value all in the return statement
function isPrime(num) {
    var prime = num !== 1;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(isPrime.memoized(5));  //manual call to memoize method
console.log(isPrime.memoized(7));
console.log(isPrime.memoized(9));
console.log(isPrime.memoized(17));
console.log(isPrime.memoized(6));
console.log(isPrime._values[5]);
console.log(isPrime._values);
// logs: {'5': true, '6': false, '7': true, '9': false, '17': true}

//Automatic memoization without manually calling the method using a closure
Function.prototype.memoized = function (key) {
    this._values = this._values || {};
    return this._values[key] !== undefined ?
        this._values[key] :
        this._values[key] = this.apply(this, arguments);
};
Function.prototype.memoize = function () {
    var fn = this;
    return function () {
        return fn.memoized.apply(fn, arguments);
    };
};
var isPrime = (function (num) {
    var prime = num !== 1;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}).memoize();

console.log(isPrime(5));  
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(17));
console.log(isPrime(6));
console.log(isPrime._values);

//if you obscure too much code becomes unextendable
//function wrapping: ecapsulating the logic of a function while overwriting it with new or extended functionality in one step
//function wrapping as opposed to if-else statements to alter behaviour
// wrapping an old function with a new piece of functionality

function wrap(object, method, wrapper) {
    var fn = object[method]; 
    return object[method] = function () { 
        return wrapper.apply(this, [fn.bind(this)].concat( 
        Array.prototype.slice.call(arguments))); 
    };
}
//generic wrapper, object whose method is to be wrapped, name of method, function to be executed in place of original
//remembers the orginal function so it can be referenced later via a closure
//wraps original function by creating new function that calls function passed as wrapper
//within new function, wrapper function is called with apply forcing context to object, passing as arguments the original method using bind
//bind() forces the function context to object and original arguments

if (Prototype.Browser.Opera) {
    wrap(Element.Methods, "readAttribute", 
        function (original, elem, attr) {
        return attr === "title" ?
            elem.title :
            original(elem, attr);
        }
    );
}
//uses wrap function to substitute new functionality if attr argument is "title" and original function if it is not

// })(); create function instance, execute the function, and discard the function 
//because the closure executes immediately, we can use the inner scope to create temporary scope
//temporary and self-contained scope
(function () {
    var numClicks = 0;
    document.addEvenListener("click", function () {
        alert(++numClicks);
    }, false);
})();
//click handler is bound immediately

document.addEventListener("click", (function () {
    var numClicks = 0;
    return function () {
        alert(++numClicks);
    };
})(), false);
//in this case, returning a value: a function to serve as the event handler
//changes the scope of the variable, numClicks
//jQuery.noConflict() allows Prototype library to use $ as an alias then "jQuery" is used instead or...
//Enforcing the use of a name with an enclosed scope

<body>
<img src="../images/ninja-with-pole.png">
$ = function () { //redefines to be something other than jQuery
    alert("not jQuery!");
};
(function ($) { //this use of $ as a parameter overrides any use of it in the higher scope
    $("img").on("click", function (event) { //$ belongs to jQuery now
        $(event.target).addClass("ClickedOn");
    })
})(jQuery); //immediately calling the function using jQuery as the argument, binding jQuery to the $
</body>

(function (v) {
    Object.extend(v, {
        href:		v._getAttr, 
        src:		v._getAttr, 
        type:		v._getAttr, 
        action: 	v._getAttrNode, 
        disabled:	v._flag,
        checked:	v._flag, 
        readonly:	v._flag, 
        multiple:	v._flag,
        onload:		v._getEv, 
        onunload:	v._getEv, 
        onclick:	v._getEv,
        ...
	});
})(Element.attributeTranslations.read.values);
//Prototype is extending an object with a number of new properties and methods
//instead of a temporary variable, Element.attr...is passed as the first argument
//v is the reference to this data structure referenced by by this long name and is contained within the scope

//Loops, 
//closures remember references to included variables not just their values at the time at which they were created. 
//Using an immediate function to hand iterators

<div>DIV 0</div>
<div>DIV 1</div>
var div = document.getElementsByTagName("div");
for (var i = 0; i < div.length; i++) {
    (function (n) {
        div[n].addEventListener("click", function () {
            alert("div #" + n + " was clicked");
        });
    })(i);
}
//immediate function in the body of the for loop
//within the scope of each step of the for loop the i variable is defined anew, giving the closure of the
//click handler the right value

(function () {
    var jQuery = window.jQuery = function () {
         //Initialize
    };
    //...
})();
//the double assignment is meant to assign the jQuery constructor to window.jQuery
//which makes it a global variable, and we assign it as a local variable
//to make sure it stays a global variable within the scope of the immediate function
/...or 
var jQuery = (function () {
    function jQuery() {
    //Initialize
}
//...
return jQuery;
})(); //useful if exporting a single variable

//prototypes are a way to define types of objects as a feature of functions
//properties are bound to the object instance from the prototype
//properties are added to the object instance within the constructor function 
//the prototype is attached to the constructed object and consulted during the reconciliation of property references made to the object
//i.e., var ninja > Object(property constructor) > constructor function (property prototype) > prototype object
//javascript objects have an implicit property named constructor that references the constructor that was used to create the object
//the prototype is a property of the constructor

function Ninja() {}
var ninja = new Ninja();
var ninja2 = new ninja.constructor();
//both are created but not equal

//forEach() method allows you to iterate over the entries in an array, calling a function for every entry
//cross-browser implementation function for forEach

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, context) { //aways defers to native browser method if it exists
        for (var i = 0; i < this.length; i++) {
            callback.call(context || null, this[i], i, this); //prevents passing undefined value to call()
        }
    };
}
["a", "b", "c"].forEach(function(value, index, array) {
    assert(value, "Is in it's place" + index + " out of " + 
        (array.length - 1));
});
    
//be careful when implementing methods and properties on native objects, always ask if it exists and defer to it
//all DOM elements inherit from an HTMLElement constructor, so we can extend any HTML node
<div id ="parent">
  <div id="a">I will be removed.</div>
  <div id="b">Me too!</div>
</div>

HTMLElement.prototype.remove = function () {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
};
var a = document.getElementById("a");
a.parentNode.removeChild(a);

document.getElementById("b").remove(); //same effect using new method

//**** Don't extend Object.prototype **** (but safe to extend other native prototypes)
//hasOwnProperty() determines whether properties are actually defined on an object or instance or imported from a prototype

Object.prototype.keys = function () {
    var keys = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) { //ignores prototyped properties by using hasOwnProperties to skip over properties from prototype
            keys.push(i); // not good practice to use in own code, only for testing others code
        }
    }
    return keys;
};
var obj = { a: 1, b: 2, c: 3 }

assert(obj.keys().length === 3, "There are three properties in this object");   

/////////////////////////////////
//subclassing native objects (instead of augmenting)
//Object is easy to subclass

//simulating array functionality without the true subclassing

function MyArray() {}
MyArray.prototype.length = 0; //defines a new "class" (rather than subclass) with a prototyped length property 
//the only property we have to implement ourselves because length must remain mutable
(function () { //copies selected Array functionality using apply to trick it
    var methods = ['push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'join'];
    for (var i = 0; i < methods.length; i++) {
        (function (name) {
            MyArray.prototype[name] = function () {
                return Array.prototype[name].apply(this, arguments);
            };
        })(methods[i]);
    }
})();
var mine = new MyArray(); //test the new class 
mine.push(1, 2, 3);
assert(mine.length === 3, 
    "All the items are on our subclassed array.");
assert(!(mine instanceof Array), "We aren't a subclass of Array, though");

// Determining whether a function is called as a constructor or regular function 

function User(first, last) {
    if (!(this instanceof arguments.callee)) {
        return new User(first, last);
    }
    this.name = first + " " + last;
}
var name = "Rukia";
var user = User("Ichigo", "Kurosaki");
assert(name === "Rukia", "Name was set to Rukia");
assert(user instanceof User, "User instantiated");
assert(user.name === "Ichigo Kurosaki", "User name correctly assigned");


//in other languages, a system that trivializes the sytax of buiding new constructor functions and prototypes
//an easy way perform inheritance
//a way of accessing methods overriden by the function's prototype
//Classical Inheritance Syntax

var Person = Object.subClass({ //subClass() method call creates a new class
    init: function (isDancing) {
        this.dancing = isDancing;
    },
    dance: function () {
        return this.dancing;
    }
});
var Ninja = Person.subClass({  //creates the Ninja class by subclassing Person
    init: function () {
        this._super(false); //calling the superclass constructor
    },
    dance: function () {
        //Ninja specific stuff here
        return this._super();
    },
    swingSword: function () {
        return true;
    }
});
var person = new Person(true);
assert(person.dance(),
    "This person is dancing.");
var ninja = new Ninja();
assert(ninja.swingSword(),
    "The ninja is swinging");
assert(!ninja.dance(),
    "The ninja is not dancing");
assert(person instanceof Person, "Person is not a Person");
assert(ninja instanceof Ninja && 
    ninja instanceof Person, 
    "Ninja is a ninja and a Person");
    
//SubClassing Method
(function () {
    var initializing = false,
        proto,
        _super,
        tempSup,
        restoreIt,
        superPattern = 
            /xyz/.test(function () { xyz }) ? //test() method test for a match in a string invokes the toString method
            /\b_super\b/ :                    //regular express to determine if the function can be serialized and browser supported
            /.*/;                             //functional serialization is act of taking a function and getting its text source back
    Object.subClass = function (properties) { //adds a subClass method to Object with hash properties to be added to subClass
        _super = this.prototype;              //instance of superClass assigned to the prototype
        									  //benefits of instanceof without creating and running a constructor
        initializing = true;                  //instantiates the superClass for prototype
        proto = new this();                   //...
        initializing = false;                 //makes sure we are not in init mode, running expensive startup code
        									  //when we just want a instance to serve as a prototype
        for (var name in properties) {        //copies properties into the prototype merging superClass and passed properties
            proto[name] = typeof properties[name] === "function" &&  //is subClass property a function
                          typeof _super[name] === "function" &&      //is superClass property a function
                          superPattern.test(properties[name]) ? //does subClass contain reference to _super (the original method of superClass
                (function (name, fn) {        //defines a new overriding function that wraps and executes the subclass 
                    return function () {      //while making the superclass function available
                        tempSup = this._super;//saves a reference to old _super
                        this._super = _super[name]; //creates a new _super which a ref to the existing method in superclass prototype
                        restoreIt = fn.apply(this, arguments);
                        this._super = tempSup;//return _super to its original state
                        return restoreIt;
                    };
                }(name, properties[name])) :
                properties[name];
        }
        function Class() {					  //creates dummy class constructor
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
        }
        Class.prototype = proto;			  //populates the class prototype
        Class.constructor = Class;            //overrrides the constructor reference
        Class.subClass = arguments.callee;    //makes the class extendable
        return Class;
    };
}());        
//////////////////////////////
//**Side note, remember that JS is a dynamic language and the notes from this book at the point are trying to understand tricks
//***in javascript that make it look and act like C# or ther object oriented programming(OOP) languages which try to optimize their code for reuse


//REGEXP
//trivialize the process of tearing down strings and looking for information 
//manipulating strings of HTML code
//locating partial selectors with a CSS selector expression
//determine if an element has a specific class name
//extracting the opacity from IE filter property

"Testing a Specific Pattern in a String"
function isThisAZipCode(candidate) {
    "use strict";
    var n,
        c;
    if (typeof candidate !== "string" ||
            candidate.length !== 10) {
        return false;
    }
    for (n = 0; n < candidate.length; n += 1) {
        c = candidate[n];
        switch (n) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 6:
        case 7:
        case 8:
        case 9:
            if (c < "0" || c > "9") {
                return false;
            }
            break;
        case 5:
            if (c !== "-") {
                return false;
            }
            break;
        }
    }
    return true;
}

"or this..."           

function isThisAZipCode(candidate) {
    "use strict";
    return (/^\d{5}-\d{4}$/).test(candidate);
}
////////////////////////////////////////////
//Made up of terms and operators that qualify those terms
//two ways to create a regular expression:
//regular expression literal
//an instance of a regular expression object
var pattern = /test/; //regex literal, fwd slash delimited and preferred method due to the \ needed in string literals is confusing
var pattern = new RegExp("test"); //instance
//most common flags
/test/i, new RegExp("test", "i")//i means case insensitive Test, tEst, etc
/test/g //matches all instances of a pattern and not just the local
/test/m //allows matches across multiple lines
//character class operators--not an exact match but characters from a finite set, set operation
[abc] //match any of these characters
[^abc] //caret means anything but abc
/^test/ //means anchors a match for a beginning of a sting, e.g., "testiment", therefore, ^ is overloaded 
/test$/ //means test must appear at the end of the string "detest"
/^test$/ //means the specified pattern must encompass the entire string
/t?est/ // "t" is optional
/t+est/ //"t" t can appear more than one time but at least once
/t*est/ //"t" is optional--and--can appear many times in a row
/a{4}/ //four consecutive "a"s 
/a{4,10}/ //four through ten consecutive "a"s
/a{4,}/ //four or more consecutive a
[a-z] //anything between
\. \% \$ \\  \[ //one backslash means a literal special character follows and not an operator
//greedy: consume all possible characters to produce a match
//*** annotating the operator with a ? will make it non-greedy, consuming only enough characters to make a match, e.g., "aaa" /a+?/ would only need one a  vs /a+/ which would take all three
//some characters (such as a carriage return) do not have literal characters 
<div class="samurai ninja"></div>
<div class="ninja samurai"></div>
<div></div>
<span class="samurai ninja ronin"></span>

function findClassInElements(className, type) {
    var elems = 
        document.getElementsByTagName(type || "*");
    var regex =  //double escaped (\\) because it is within a string
        new RegExp("(^|\\s)" + className + "(\\s|$)"); //can't use literal because name is not known in advanced
    var results = [];
    for (var i = 0, length = elems.length; i < length; i += 1) {
        if (regex.test(elems[i].className)) {
            results.push(elems[i]);
        }
    }
    return results;
}

//new RegExp("(^|\\s)" + className + "(\\s|$)"); means beg of a string or whitespace char then className then white space char or end of a string
///////////////
<div id="opacity" style="opacity: 0.5; filter: alpha(opacity=50);"></div>
//defines the opacity for both styles; modern browsers and IE--
function getOpacity(elem) {
    var filter = elem.style.filter;
    return filter ? //determine if filter property exists
        filter.indexOf("opacity=") >= 0 ? //standards compliant defined value is greater than 0.0
            (parseFloat(filter.match(/opacity=([^])+/)[1]) / 100) + "" :
            "" : //match() method of regular expressions
            elem.style.opacity;
}
window.onload = function () {
    assert(
        getOpacity(document.getElementById("opacity")) === "0.5",
            "The opacity of the element has been obtained"); 
//////////////////////////
var html = "<div class='test'><b>Hello</b> <i>world!</i></div>"; 
var results = html.match(/<(\/?)(\w+)([^>]*?)>/); //local, no global flag
assert(results[0] === "<div class='test'>", "the entire match"); 
assert(results[1] === "", "the missing slash");
var all = html.match(/<(\/?)(\w+)([^>]*?)>/g); //global
assert(results[0] === "<div class='test'>", "the opening div tag");
assert(results[1] === "<b>", "the opening b tag");
//no captures using global unless you use the exec() method, return next match set everytime it's called
//global search will match all instances of the pattern in the string
var html = "<div class='test'><b>Hello</b> <i>world</i></div>";
var tag = (/<(\/?)(\w+)([^>]*?)>/g), match;
var num = 0;
while ((match = tag.exec(html)) !== null) {
    assert(match.length === 4,
        "Every match finds each tag and 3 captures");
    num += 1;
}
assert(num === 6, "3 opening and 3 closing tags found.");

//two ways to to refer back to potions of a match captured, within the match itself and with a replacement string
var html = "<b class='hello'>Hello</b> <i>world</>";
var pattern = (/<(\w+)([^>]*)>(.*?)<\/\1>/g); // \1 refers back to the first capture within the expression (in this case, the tag name)
var match = pattern.exec(html);
assert(match[0] === "<b> class='hello'>Hello</b>",
    "the entire tag, start to finish");
assert(match[1] === "b", "The tag name");
assert(match[2] === "class='hello'", "The tag attributes.");
assert(match[3] === "Hello", "The contents of the tag.");

match = pattern.exec(html);
assert(match[0] === "<i>world</i>",
    "The entire tag, start to finish");
assert(match[1] === "i", "The tag name");
assert(match[2] === "", "the tag attributes");
assert(match[3] === "world", "The contents of the tag.");

//get capture references within the the replace string of a call to the replace() method
//using the syntax of $1, $1, $3, etc.
assert("fontFamily".replace(/([A-Z])/g, "-$1").toLowerCase() === 
    "font-family", "Convert the camelCase to dash notation.");
    //first capture is capital F
    
//passive subexpression ?: indicates that a set of parentheses 
//should not result in a capture
//from:
var pattern = (/((ninja-)+)sword/);
//to:
var pattern = (/((?:ninja-)+sword/); //outter parentheses creates the capture

"ABCDEfg".replace(/[A-Z]/g, "X") //XXXXXfg
//***when the replacement value is a function it will be invoked for match found
//with a variable list of parameters, full text of the match, the captures of the match (one parameter for each), the index of the match within the original string, the source string
//a global search will match all instances of the pattern in the source string
//ex turning a dashed string to camel case

function upper(all, letter) {
    return letter.toUpperCase(); 
}
assert("border-bottom-width".replace(/-(\w)/g, upper) //matches dashed characters
    === "borderBottomWidth",
        "Camel cased a hyphenated string.");
////////////////////////////
//Technique for compressing a query string

function compress(source) {
    var keys = {}; //hash to store the keys and values that we find in the sourc query string
    source.replace( //method tranverses a string for values rather than as an 
        /([^=&]+)=([^&]*)/g, // actual search and replace mechanism
            function (full, key, value) {
                keys[key] = 
                    (keys[key] ? keys[key] + "," : "") + value;
                return ""; //return an empty string because we are concerned with the side effect rather the actual result 
            }
    ); //function as a replacement value argument and rather than returning a value becomes a means of searching
    var result = []; //array aggregates the results
    for (var key in keys) { //iterates through the keys we find adding to the array
        result.push(key + "=" + keys[key]);
    }
    return result.join("&");
}
assert(compress("foo=1&foo=2&blah=a&blah=b&foo=3") ===
    "foo=1,2,3&blah=a,b");

//String.trim() implementation for old browsers
function trim(str){
    return (str || "").replace(/^\s+|\s+$/g, ""); //trims from the front or back of the string without looping
}
assert(" #id div.class ") === "#id div.class",
    "Extra whitespace trimmed from the selector string.");
    //or
function trim(str){
    return str.replace(/^\s\s*/, "")
              .replace(/\s\s*$/, ""); //seperates the leading and trailing whitespace
}
assert(trim(" #id div.class ") === "#id div.class",
    "Extra whitespace trimmed from the selector string."); 
//Method that slices at the end of the string
function trim(str){
    str = str.replace(/^\s\s*/, "");
    var ws = /\s/,
        i = str.length;
    while (ws.test(str.charAt(i -= 1))) {
        return str.slice(0, i + 1);
    }
}
assert(trim(" #id div.class ") === "#id div.class",
    "Extra whitespace trimmed from a selector string.");
//Matching all characters, including new line

var html = "<b>Hello</b>\n<i>world</i>";
assert(/.*/.exec(html)[0] === "<b>Hello</b>", // . operator
    "A normal capture does not handle endlines");
assert(/[\S\s]*/.exec(html)[0] === "<b>Hello</b>\n<i>world</i>",
    "Matching everything with a character set."); //defines a char class that matches anything that is not a whitespace character and anything that is a whitespace char
assert(/(?:.|\s)*/.exec(html)[0] === "<b>Hello</b>\n<i>world</i>",
    "Using a non-capturing group to match everyting."); //everything matched by . (everything but newline) and everything considered whitespace

//Matching Unicode 
var text = "\u5FCD\u8005\u30D1\u30EF\u30FC";

var matchALL = /[\w\u0080-\uFFFF_-]+/; //entire set of unicode 
assert((text).match(matchALL), //chars above u0080, alphabetic, punctuation and special characters
    "Our regexp matches unicode!"); // \w term matches all normal word chars
//Escaped Characters
var pattern = /^((\w+)|(\\.))+$/;
var tests = [
    "formUpdate",
    "form\\.update\\.whatever",
    "form\\:update",
    "\\f\\o\\r\\m\\u\\p\\d\\a\\t\\e",
    "form:update"
];
for (var n = 0; n < test.length; n += 1) {
    assert(pattern.test(tests[n]),
        tests[n] + " is a valid indentifer");
}

//Timers and Threading
//HTML5 webworkers create multiple threads with limited functions and access
//timers are not part of Javascript itself but a part of the objects and methods 
//that the web browsers make available...i.e., do not exist outside of the browser environment
//Rhino allows for implementation-specific features like threads
//two methods to create timers and two methods to remove them-- all are methods of the window object
var timeoutID = window.setTimeout(function, delay, [param1, param2, ...]);
//executes passed callback exactly once after the delay
//timeoutID is the numerical ID of the timeout 
//function is the one you want to execute after the delay
//delay is number of milliseconds for the delay of the function call
var timeoutID = window.setTimeout(code, delay);
//code to execute after the delay

var clearTimeout = window.clearTimeout(timeoutID); 
//cancels timer if it has not yet fired
var setIntervalID = window.setInterval(function, delay[, param1,...]);
//initiates timer that will continually execute the passed callback at the delay interval
var clearIntervalID = window.clearInterval(intervalID);

//Two ways of creating repeating timers
setTimeout(function repeatMe() {
    /* ... */
    setTimeout(repeatMe, 10);
}, 10);  //timeout that reschedules itself every 10 milliseconds

setInterval(function () {
    /* ... */
}, 10); //sets up a interval that triggers every 10 milliseconds
//setTimeout will always have a delay of 10 milliseconds from previous callback execution
//setInterval will execute a callback every 10 milliseconda regardless of when the last callback was executed
//if you set delay to 0 to acheive the fastest possible interval, IE fails and executes just once
//you can use closures to pass data into timer and interval callbacks
//modern browsers allow you to pass extra arguments on the setup call
//setTimeout(callback, interval, arg1, arg2, arg3) would cause args to be passed to the timeout callback
//firefox and opera issure dialog box for script running longer than 5 secs and 
//ipone browsers will kill the the script running 5 secs and over

//use timers to convert loops and long operations into non-blocking
//long running task

var tbody = document.getElementsByTagName("tbody")[0], //find elem to create
    i,
    t,
    td,
    tr;
for (i = 0; i < 24; i += 1) { //makes 24 rows
    tr = document.createElement("tr"); //creates individual row
    for (t = 0; t < 12; t += 1) { //for each row, creates 12 cells each with a text node
        td = document.createElement("td");
        td.appendChild(document.createTextNode(i + "," + t));
        tr.appendChild(td);
    }
    tbody.appendChild(tr); //attaches new row to the parent
} 
//with timers
var rowCount = 24,
    divideInto = 4,
    chunkSize = rowCount/dividInto,
    iteration = 0,
    table = document.getElementsByTagName("tbody")[0],
    base = 0,
    i,
    t,
    td,
    tr;
setTimeout(function generateRows(){
    base = (chunkSize) * iteration;
    for (i = 0; i < chunkSize; i += 1) {
        tr = document.createElement("tr");
        for (t = 0; t < 6; t += 1) {
            td = document.createElement("td");
            td.appendChild(
                document.createTextNode((i + base) + "," + t +
                    "," + iteration));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    iteration += 1;
    if (iteration < divideInto) {
        setTimeout(generateRows, 0);
    }
}, 0);

//animation engines use central timer control
//runs one timer per page at a time
//pause and resume timers at will
//process for removing callbacks functions is trivialized

//A central timer control to manage multiple handlers
var timers = {
    timerID: 0, 
    timers: [], //records state (for callbacks)
    add: function (fn) {
        this.timers.push(fn); //adds callback handlers
    },
    start: function () {
        if (this.timerID) { //checks to see if a timer is not already running
            return;
        }
        (function runNext() {
            if (timers.timers.length > 0 ) { //looks for handlers
                for (var i = 0; i < timers.timers.length; i += 1) { //executes them
                    if (timers.timers[i]() === false) { //if false, remove from array
                        timers.timers.splice(i, 1);
                        i -= 1;
                    }
                }
                timers.timerID = setTimeout(runNext, 0);
            }
        })();
    },
    stop: function () {
        clearTimeout(this.timerID);
        this.timerID = 0;
    }
};

//example of animation
<div id ="box">Hello!</div>
var box = document.getElementById("box"), x = 0, y = 20;
timers.add(function () {
    box.style.left = x + "px";
    if ((x += 1) > 50) return false;
});
timers.add(function () {
    box.style.top = y + "px";
    y += 2;
    if (y > 120) {
        return false;
    }
});
timers.start();

//Asynchronous testing (keeps them executing the right order)gbv 
(function () {
    var queue = [], //retains state
        paused = false;
    this.test = function (fn) { //defines the test registration function 
        queue.push(fn);
        runTest();
    };
    this.pause = function () { //defines function to pause testing
        paused = true;
    };
    this.resume = function () { //defines the resume function
        paused = false;
        setTimeout(runTest, 1);
    };
    function runTest() { //runs test
        if (!paused && queue.length) {
            queue.shift()();
            if (!paused) {
                resume();
            }
        }
    }
})();


//Runtime code evaluation; dynamically interpret and execute code
//do not use this  code!
function globalEval(data) {
    data = data.replace(/^\s*|\s*$/g, "");
    if (data) {
        var head = document.getElementsByTagName("head")[0] ||
                   document.documentElement,
            script = document.createElement("script");
        script.type = "text/javascript";
        script.text = data;
        head.appendChild(script);
        head.removeChild(script);
    }
}
window.onload = function () {
    (function () {
        globalEval("var test = 5;");
    })();
    
    assert(test === 5, "the code was evaluated globally");
 /////////////////////////////
    
//A function for finding the argument names of a function
function argumentNames(fn) {
    var found = (/^[\s\(]* function[^(]*\(\s*([^)]*?)\s*\)/).exec( //expects a string
        fn.toString()); //decompiles the passed func, and using regex to extract comma delimited argument list
    return found && found[1] ?
        found[1].split(/,\s*/) : [];
}

assert(argumentNames(function () {}).length === 0,
    "Works on zero-arg functions,");
assert(argumentNames(function (x) {}[0] === "x",
    "Single argument working.");
var results = argumentNames(function(a, b, c, d, e){});
assert(results[0] === "a" &&
       results[1] === "b" &&
       results[2] === "c" &&
       results[3] === "d" &&
       results[4] === "e",
       "Multiple arguments working");
       
/////////////////////
var FUNCTION_DECOMPILATION = (/abc(.|\n)*xyz/).test(
    function (abc) {
        return xyz;
    });
//the most wide-spread use of runtime evaluation is the conversion of JSON
//converting JSON
var json = '{"name": "Ninja"}';
var object = eval("(" + json + ")");
assert(object.name === "Ninja",
     "My name is Ninja");

//this is better!
var object = JSON.parse('{"name": "Ninja"}');
console.log(object.name); //"Ninja"

eval(function(p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? "" :
            e(parseInt(c / a))) + ((c = c % a) > 35 ?
                String.fromCharCode(c + 29) :
                    c.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (c -= 1) {
            r[e(c)] = k[c] || e(c);
        }
        k = [function (e) {
            return r[e]
            }
        ];
        e = function () {
            return "\\w+"
        };
        c = 1;
    }
    
//creating a script tag type that executes only after the page has loaded
window.onload = function () {
    var scripts = document.getElementsByTagName("script"); //finds all script blocks
    for (var i = 0; i < scripts.length; i += 1) {
        if (scripts[i].type === "x/onload") {
            globalEval(scripts[i].innerHTML); //cause the script to be evaluated in the global context
        }
    }
};
<script type = "x/onload"> 
    assert(true, "Executed on page load");
</script>
                
//implementing other languages on top of JS: metalanguages (that will be dynamically converted to javascript source and evaluated
//DSL: domain specific languages

//example of code converted from Process.js
function SpinSpots() {
    with (this) {
        var __self = this;
        function superMethod() {
            extendClass(__self, arguments, Spin);
            this.dim = 0;
            extendClass(this, Spin);
            addMethod(this, "display", function() {
                noStroke();
                pushMatrix();
                translate(x, y);
                angle += speed;
                rotate(angle);
                ellipse(-dim / 2, 0, dim, dim);
                ellipse(dim / 2, dim, dim);
                popMatrix();
            });
            if (arguments.length === 4) {
                var x = arguments[0];
                var y = arguments[1];
                var s = arguments[2];
                var d = arguments[3];
                superMethod(x, y, s);
                dim = d;
            }
        }
    }
}
YAHOO.util.Event.on([YAHOO.util.Dom.get("item"), YAHOO.util.Dom.get("otheritem")],
    "click", function () {
        YAHOO.util.Dom.setStyle(this, "color", "#c00");
    }
);

//toSourceCode(showHierarchy) method extention on Object.prototype
Object.prototype.toSourceCode(hier, lv, forObj) {
    var i,
        len = this.length,
        out,
        key,
        tabs = "",
        idre = (/^[a-z_][a-z0-9_]*$/i);
    if (!lv) {
        lv = 0;
    }
    if (hier) {
        tabs = Math.pow(10, lv).toString().substr(1).replace(/0/g, "\t");
    }
    if (this.constructor === Array) {
        out = (forObj ? "" : tabs) + '[' + (hier ? '\n' : "");
        for (i = 0; i < len; i += 1) {
            out += ((this[i] !== null) ? this[i].toSourceCode(hier, lv + 1) 
                : "null") + (i < (len - 1) ? ',' : "") + (hier ? '\n' : "");
        }
        return out + tabs + ']';
    } else if (this.constructor === Object) {
        out = (forObj ? "" : tabs) + '{' + (hier ? '\n' : "");
        for (key in this) {
            if (key !== "toSourceCode") {
                out += tabs + (hier ? '\t' : '') + (idre.test(key) ? key : 
                    ("'" + key + "'")) + ":" + (this[key] === null ? "null" :
                        this[key].toSourceCode(hier, lv + 1, true)) + "," + 
                            (hier ? '\n' : "");
            }
        }
        out = out.replace(/,(\n?)$/, "$1");
        return out + tabs + '}';
    } else if (this.constructor === String) {
        return (forObj ? "" : tabs) + "'" + this + "'";
    } else if (this.constructor === Date) {
        return (forObj ? "" : tabs) + "new Date(" + this.valueOf() + ")";
    } else if (this.constructor === RegExp) {
        return (forObj ? "" : tabs) + this.toString().replace(
            /([^\\])((? : \\\\)*) \/(?=.*\/)/g, "$1$2\\/");
    } else {
        return (forObj ? "" : tabs) + this.toString();
    }
}
//or you can just write:
Object.defineProperty(Object.prototype, "toSourcCode", {
    enumerable: false, //this is also the default value
    value: function (...) {
        ...
    }
}); //defines property that is not enumerable

//graceful degradation
//Regressions are bugs or non-backward-compatable API changes
//DOM level 2 event handlers (bound using the addEventListener() method
//Element detection for IE
function bindEvent(element, type, handle) {
    if (element.addEventListener) {
        element.addEventListener(type, handle, false); //binds using stardard API
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, handle); //binds using proprietary APO
    }
}

//safest cross-browser fixes have no side-effects and do no use feature or 
//browser detection
//The following two APIs are unified and require no browser detection
//jQuery detection in IE
if ((key === "width" || key === "height") && parseFloat(value) < 0) {
    value = undefined;
}  //some versions of IE threw exceptions, this  will not throw
//another jQuery example
if (name === "type" && elem.nodeName.toLowerCase() === "input" &&
    elem.parentNode) {
    throw "type attribute can't be changed";
} //IE does not allow manipulation of the type attribute of input elements
//that are already part of the DOM

//object detection: object or object property exists, if so, assumes proper functionality
//used to choose between multiple APIs, discovering the facilities provide by the browser
function bindEvent(element, type, handle) {
    if (element.addEventListener) {
        element.addEventListener(type, handle, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, handle);
    }
}
/////////////// good first line of defense in reusable code authoring
if (typeof document !== "undefined" && //did the document load
    (document.addEvenListener || document.attachEvent) && //and provides means to bind event handlers
        document.getElementsByTagName && //and can find elements by tag name
             document.getElementById) { //and by ID
    //we have enough of an API to work with to build our app
} else {
   //provide fallback
}

//feature simulation
//for getElementsByTagName()
window.findByTagWorksAsExpected = (function () {
    var div = document.createElement("div");
    div.appendChild(document.createComment("test"));
    return div.getElementsByTagName(*).length === 0;
})(); //returns true if a call to getElementsByTagName("*") functions as expected and false otherwise

//working around a bug with feature simulation
<body>
    <div><!--comment #1--></div>
    
    function getAllElements(name) {
        if (!window.findByTagWorksAsExpected) {
            window.findByTagWorksAsExpected = (function () {
                var div = document.createElement("div");
                div.appendChild(document.createComment("test"));
                return div.getElementsByTagName("*").length === 0;
            })();
        }
        var allElements = document.getElementsByTagName("*");
        if (!window.findByTagWorksAsExpected) {
            for (var n = allElements.length - 1; n >= 0; n -= 1) {
                if (allElements[n].nodeType === 1) {
                    allElements.splice(n, 1);
                }
            }
        }
        return allElements;
    }
    var elements = getAllElements();
    var elementCount = elements.length;
    for (var n = 0; n < elementCount; n += 1) {
        assert(element[n].nodeType === 1,
            "Node is an element node");
            
            
//cannot test for event handler bindings: there is no way to determine if a function 
//has been bound to an event listener or an element
//cannot test for event firing
//cannot test for CSS property effects
//cannot test for browser crashes

function bindEvent(element, type, handle) {
    if (element.addEventListener) {
        element.addEventListener(type, handle, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, handle);
    }
}
////////////////////
//DOM: attributes are integral to how the DOM gets built, properties are the
//primary means by which the elements hold runtime information
//two ways of accessing values of DOM attributes: 
//1. traditional DOM methods of getAttribute and setAttribute
//2. using properties of the DOM objects that correspond to the attributes
//eg getting the id of an element whose ref is stored in var e
e.getAttribute("id");
e.id; //either way returns value of id
//accessing attributes via DOM methods and properties
<div></div>
window.onload = function () {
    var div = document.getElementsByTagName("div")[0]; //obtains element ref
    div.setAttribute("id", "ninja-1");
    assert(div.getAttribute("id") === "ninja-1",
        "Attribute was successfully changed");
    div.id = "ninja-2";
    assert(div.id === "ninja-2",
        "Property was successfully changed");
    div.id = "ninja-3";
    assert(div.id === "ninja-3",
        "Property was successfully changed");
    assert(div.getAttribute("id") === "ninja-3",
        "Attribute was successfully changed via property");
    div.setAttribute("id", "ninja-4");
    assert(div.id === "ninja-4", 
        "Property successfully changed via attribute");
    assert(    
    
function isXML(elem) {
    return (elem.ownerDocument ||
        elem.documentElement.nodeName.toLowerCase() !== "html";
}
//Attributes ("strings" passed to the DOM method) and properties (dot notation)
//cross-browser naming 
    //property names are fairly consistent
    //more differences between attributes (e.g., IE use of className for class
    //Attribute Name			Poperty Name
    //for 						htmlFor
    //class						className
    //readonly					readOnly
    //maxlength					maxLength
    //cellspacing				cellSpacing
    //rowspan					rowSpan
    //colspan					colSpan
    //tabindex					tabIndex
    //cellpadding				cellPadding
    //usemap					UseMap	
    //fameborder				frameBorder
    //contentEditable			contentEditable
    
//HTML versus XML differences
//custom attribute behaviour
	//not all attributes are represented by element properties
	//to access the value of custom attributes use DOM methods getAttribute() 
	//setAttribute()
	//test to see if an attribute exists
	var value = element.someValue ? element.someValue :
	    element.getAttribute("someValue");
	//HTML 5 uses the prefix "data-" for all custom attributes to keep them valid 
//performance
	//property ccess is faster than DOM attribute access--especially in IE
//comparing the performance of DOM methods versus properties
<div id="testSubject"></div>
<script type="test/javascript">
    var count = 5000000,
        n,
        begin = new Date(),
        end,
        testSubject = document.getElementById("testSubject"),
        value;
    for (n = 0; n < count; n += 1) { //tests a DOM method read
        value = testSubject.getAttribute("id");
    }
    end = new Date();
    assert(true, "Time for DOM method read: " +
        (end.getTime() = begin.getTime()));
        
    begin = new Date(); //tests a property read...this is by far the fastest
    for (n = 0; n < count; n += 1) {
        value = test.Subject.id;
    }
    end = new Date();
    assert(true, "Time for property read: " +
        (end.getTime() - begin.getTime()));
        
    begin =  new Date();
    for (n = 0; n < count; n += 1) {
        testSubject.setAttribute("id", "testSubject");
    }
    end = new Date();
    assert(true, "Time for DOM method write: " +
        (end.getTime() - begin.getTime()));
    
    begin = new Date();
    for (n = 0; n < count; n += 1) {
        testSubject.id = "testSubject";
    }
    end = new Date();
    assert(true, "Time for property write: " +
        (end.getTime() - begin.getTime()));

</script>   


//function for setting and getting attribute values using property method or 
//DOM method if it doesn't exist
<div id="testSubject"></div>
<script type="text/javascript">
    (function () { //keeping the scope of the map local
        var translations = { //translation map
            "for": "htmlFor",
            "class": "className",
            readonly: "readOnly",
            maxlength: "maxLength",
            cellspacing: "cellspacing",
            rowspan: "rowSpan",
            colspan: "colSpan",
            tabindex: "tabIndex",
            cellpadding: "cellPadding",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        };
        window.attr = function (element, name, value) { //has access to the map
            var property = translations[name] || name, //defines set/get function
                propertyExists = typeof element[property] !== "undefined";
            if (typeof value !== "undefined") {
                if (propertyExists) {
                    element[property] = value;
                } else {
                    element.setAttribute(name, value);
                }
            }
            return propertyExists ? element[property] :
                element.getAttribute(name);
        };
})();
var subject = document.getElementById("testSubject");
assert(attr(subject, "id") === "testSubject",
    "id value fetched");
assert(attr(subject, "id", "other") === "other",
    "new id value fetched");
assert(attr(subject, "data-custom", "whatever") === "whatever",
    "custom attribute set");
assert(attr(subject, "data-custom") === "whatever",
    "custom attribute fetched");    
    
    
//misimplementation if the DOM code in the browser
//browser take the id or name values sepcified on form input elements
//and add refereces to the elements as properties on the parent <form> element
//overwriting any existing properties of the same name
//IE also replaces the attribute values with refereces to the element

//url normalization on src, href, action: url value us automatically converted
//from original form into full canonical URL
//demonstrating URL normalization
<a href="listing-12.5.html" id="testSubject">Self</a>
<script type="text/javascript">
    var link = document.getElementById("testSubject");
    var linkHref = link.getAttributeNode("href").nodeValue; 
    assert(linkHref === "listing-12.5.html", //original node value matches specified in element markup
        "link node value is ok"); //this test will pass
    assert(link.href === "listing-12.5.html", //href property contains the same value
        "link property is ok"); //this test fails
    assert(link.getAttribute("href") === linkHref, //attribute value is what we expect
        "link attribute not modified"); //this test passes
</script>        

//style attribute is difficult to get and set
//DOM uses style property: element.style.color (for example)
//use getAttribute("style") does not work on IE, use element.style.cssText 
//on the <input> element, the type atribute cannot be changed 
//changing an input element's type after insertion

<form id="testForm" action="/"></form>
<script type="text/javascript">
    window.onload = function () {
        var input = document.createElement("input"); //creates new element with default attribute
        input.type = "text"; //sets type attribute
        assert(input.type === "text", 
            "Input type is text");
        document.getElementById("testForm").appendChild(input); //inserts new element into the DOM
        input.type = "hidden"; //changes type after insertion
        assert(input.type === "hidden",
            "Input type changed to hidden");
    }; //passes with all except IE (throws an exception at assignment before second test)
</script>

//nodeName property needs to be normalized: it is uppercase in HTML and lowercase in XML
var all = document.getElementsByTagName("*")[0];
for (var i = 0; i < all.length; i += 1) {
    var nodeName = all[i].nodeName.toLowerCase();
    if (nodeName === "div" || nodeName === "ul") {
        all[i].className = "found";
    }
}  //performing on all instances of div and ul only
//style property
<style> //in-page style sheet that applies font size and border information
  div { 
      font-size: 1.8em; 
      border: 0 solid gold;
  }
</style>  

<div style="color:#000;" title:"Ninja power!"></div> //test element should 
//recieve multiple styles from various places incl its own attribute and style sheet
<script>
    window.onload = function () {
        var div = document.getElementsByTagName("div")[0];
        assert(div.style.color === "rgb(0, 0, 0)" || //color is normalized to rbg notation in most browsers style property
            div.style.color === "#000",
               "color was recorded"); //passes
        assert(div.style.fontSize === "1.8em",
            "fontSize was recorded");  // test fails even though style was applied
        assert(div.style.borderWidth === "0",
            "borderWidth was recorded"); //fails
        
        div.style.borderWidth = "4px";
        assert(div.style.borderWidth === "4px",
            "borderWidth was replaced");  //passes     
//any values in an element's style property will take precedence over anything
//inherited by a style sheet--even with !important annotation
//simple method for accessing styles
<div style="color:red;font-size:10px;background-color:#eee;"></div> 
<script type="text/javascript">
    function style(element, name, value) {
        name = name.replace(/-([a-z])/ig, //converts to camel case
            function (all, letter) {
                return letter.toUpperCase();
            }
        );
        if (typeof value !== "undefined") { //sets value if provided
            element.style[name] = value;
        }
        return element.style[name];
    }
    window.onload = function () {
        var div = document.getElementsByTagName("div")[0];
        assert(true, style(div, "color"));
        assert(true, style(div, "font-size"));
        assert(true, style(div, "background-color"));
    };
</script>

//float style property is a reserved key word in JS
//use parseFloat to make sure that you get the intended value when attempting 
//read a pixel value our of a style attribute
//height and width default to auto when not specifies, so you can't use style properties 
//to get accurate values unless they are explicitly provided in the attribute string
//use offsetHeight and offsetWidth properties (they incl padding of the element!)
//if the element display style is set to 0 then it is a non-displayed element
//and offset values will be zero
//must make it unhidden, get value then hide again
//change display to block, set visibility to hidden, set position to absolute, grab
//dimension values, restore changed properties
<div></div>
<script type="text/javascript">
    (function () {
        var PROPERTIES = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        };
        window.getDimensions = function (element) {
            var previous = {}, //remembers settings
                key,
                result;
            for (key in PROPERTIES) {
                previous[key] = element.style[key];
                element.style[key] = PROPERTIES[key]; //replaces settings
            }
            result = { //fetches dimensions
                width: element.offsetWidth,
                height: element.offsetHeight
            };
            for (key in PROPERTIES) {
                element.style[key] = previous[key]; //restores settings
            }
            return result;
        };
    })();
    window.onload = function () { //load handler ensures we do not test until DOM has been built
        setTimeout(function () { //performs test in a callback to a 3-second timer
            var withPole = document.getElementById("withPole"),
                withShuriken = document.getElementById("withShuriken");
            assert(withPole.offsetWidth === 41,
                "Pole image width fetched; actual: " +
                    withPole.offsetWidth + ", expected: 41");
            assert(withPole.offsetHeight === 48,
               "Pole image height fetched; actual: " +
                    withPole.offsetHeight + ", expected: 48");
            assert(withShuriken.offsetWidth === 36,
               
            
            var dimensions = getDimensions(withShuriken);
        }, 3000);
    }
    </script>
       
//checking the offsetWidth and offsetHeight style properties for zeroes can serve 
//as in incredibly efficient means of determining the visibility of an element

//opacity: 0.3; (all browsers)
//filter: alpha(opacity=30); (IE)  
//many different types of filters besides alpha
//browsers that support opacity will normalize the value given less than 1.0 with
//a leading 0, eg .5 will return as 0.5 in supported browsers
//feature similulation for opacity
<img src=".../png" style="opacity:.5;">
<script type="text/javascript">
    var div = document.createElement("div");
    div.setAttribute("style", "opacity:.5");
    var OPACITY_SUPPORTED = div.style.opacity === "0.5";
    
    assert(OPACITY_SUPPORTED,
        "Opacity is supported.");
</script>

//CSS color formats
//keyword (red)
//#rgb (0-f)
//#rrggbb (00-ff)
//rgb (r, g, b) 0 - 255, or 0% to 100%
//determining how a browser formats color information 
<div style="background-color:darkslateblue">&nbsp;</div>
<div style="background-color:#369">&nbsp;</div>
<div style="background-color:#123456">&nbsp;</div>
<div style="background-color:rg6b(44,88,168)">&nbsp;</div>
<div style="background-color:rgba(44,88,166,0.5)">&nbsp;</div>
<div style="background-color:hsl(120,100%, 25%)">&nbsp;</div>
<div style="background-color:hsla(120,100%,25%,0.5)">&nbsp;</div>
<script type="text/javascript">

    var divs = document.getElementsByTagName("div"); //collect elements
    for (var n = 0; n < divs.length; n += 1) {
        assert(true, divs[n].style.backgroundColor); //displays color info
    }
</script>

//computed style of an element: combination of all styles applied to it via
//style sheets, the element's style attribute, and any manipulation of the style
//property by script
//all browsers except before IE9, use window.getComputed-Style() method
//accepts an element and returns an interface through which property queries can 
//be made. this interface provides a method named getPropertyValue()
//for retrieving the computed style, accepts css property names rather than camel case
//prior to IE 9 use currentStyle for computed style

//fetching computed style values
<style type="text/css">
  div {
    background-color: #ffc; 
    display: inline;
    font-size: 1.8em;
    border: 1px solid crimson;
    color: green;
  }
</style>
<div style="color:crimson;" id="testSubject" title="Ninja power!"> //test subject
</div>
<script type="text/javascript">
    function fetchComputedStyle(element, property) { 
        if (window.getComputedStyle) {
            var computedStyles = window.getComputedStyles(element); //gets interface
            if (computedStyles) { //fetches style value
                property = property.replace(/([A-Z]/g, "-$1").toLowerCase(); //puts "-" in front of camel
                return computedStyles.getPropertyValue(property);
            }
        } else if (element.currentStyle) {
            property = property.replace(/-([a-z])/ig,
                function (all, letter) {
                    return letter.toUpperCase();
                }
            );
        }
    }
    window.onload = function () {
        var div = document.getElementsByTagName("div")[0];
        assert(true,
            "background-color: " +
                fetchComputedStyle(div, "background-color"));
        assert(true,
            "display: " +
                fetchComputedStyle(div, "display"));
        assert(true,
            "font-size: " +
                fetchComputedStyle(div, "fontSize"));
    };
</script>

//amalgam properties, eg border: 1px solid crimson;
//must specify "low-level" individual property like border-top-color

//attribute values are set from the attributes placed on the element markup

//Events
//get behaviour  out of the structural markup
//window.onload = doSomething; (DOM level 0 event model
//not good for reusable code or pages with lots of complexity
//DOM level 2 is a more robust API, but not for IE prior to 9
//DOM level 2 uses addEventListener()/removeEventListener() to bind/unbind
//event handlers (attachEvent() and detachEvent() for IE 9-) 
//IE model does not provide a way to listen for the capturing stage of an event
//only the buddling phase of the event-handling process is supported
//DOM L2 propagates from the event target up to the root of the DOM during the 
//bubble phase, and traverse down the tree back to the target during the capture phase
//IE model does not properly set the context on the bound handler, 
//its this will refer to the window object instead
//binding a handler
//unbinding a handler
//obtaining event information
//obtaining event target

//Providing Proper Context when binding event handlers
<script type="text/javascript">
    
    if (document.addEventListener) { //checks for DOM model
        this.addEvent = function (elem, type, fn) { //creates a bind function
            elem.addEvenListener(type, fn, false); //false ids handler as bubble handler
            return fn; //returns the established handler
        }; //bubbling so that it is cross-browser supported as opposed to capture phase
        this.removeEvent = function (elem, type, fn) { //creates an unbind function
            elem.removeEventListener(type, fn, false);
        };
    } else if (document.attachEvent) { //checks for IE Model
        this.addEvent = function (elem, type, fn) { //creates bind using IE
            var bound = function () {
                return fn.apply(elem, aguments);
            };
            elem.attachEvent("on" + type, bound); 
            return bound; //return the wrapper, not the function passed in
        };
        this.removeEvent = function (elem, type, fn) { //unbinds with IE
            elem.detachEvent("on" + type, fn);
        };
    }
</script>

//testing the event binding API
addEvent(window, "load", function () { //establish a load handler
    var elems = document.getElementsByTagName("div");  //fetches test elements
    for (var i = 0; i < elems.length; i += 1) {
        (function (elem) {
            var handler = addEvent(elem, "click", function () { //est test handlers
                this.style.backgroundColor =
                    this.style.backgroundColor === "" ? "green" : "";
                removeEvent(elem, "click", handler); //unbinds handlers
            });
        })(elems[i]);
});
    
//function that normalizes the event object instance
<script type="text/javascript">

function fixEvent(event) {
    function returnTrue() {
        return true; //predefines often used functions
    }
    function returnFalse() {
        return false;
    }
    if (!event || !event.stopPropagation) { //test if fixing is needed
        var prop,
            old = event || window.event; //passed to us or in the global context
        event = {}; //clone old object before modifying, will take new properties
        for (prop in old) {
            event[prop] = old[prop];
        }
        if (!event.target) { //the event occurred on this element
            event.target = event.srcElement || document; //srcElement for IE
        }  
        event.relatedTarget = event.fromElement === event.target ? //for an event used in conjuction with another element (like mouseover/mouseout)
            event.toElement : event.fromElement; //IE counter to relatedTarget
            event.preventDefault = function () {
                event.returnValue = false;  //does not exist in IE Model so set to false
                event.isDefaultPrevented = returnTrue;
            }; //stop default browsert action
            event.isDefaulPrevented = returnFalse;
            event.stopPropagation = function () {
                event.cancelBubble = true; //does not exist in IE so set to true
                event.isPropagationStopped = returnTrue;
            }; //stop the event from bubbling
            event.isPropagationStopped = returnFalse;
            event.stopImmediatePropagation = function () {
                this.isImmediatePropagationStopped = returnTrue;
                this.stopPropagation();
            }; //stop event bubbling and executing other handlers
            event.isImmediatePropagationStopped = returnFalse;
            if (event.clientX !== null) { //handle mouse position 
                var doc = document.documentElement, 
                    body = document.body;
                event.pageX = event.clientX + //not in IE
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                        (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop || body && body.scrollTop || 0) -
                        (doc && doc.clientTop || body && body.clientTop || 0);
            } //pageX/Y: mouse relative to while document, clientX/Y: relative to window, scrollTop/Left gives scrolled position of the document, clientTop/Left gives offset of the document itself
            event.which = event.charCode || event.keyCode; //handle key presses //charCode and keyCode for IE
            if (event.button !== null) { //mouse button clicked by user on mouse event
                event.button = (event.button & 1 ? 0 :
                    (event.button & 4 ? 1 : //IE uses a bitmask
                        (event.button & 2 ? 2 : 0)));
            }  //left-click, right-click, middle (IE: 1, 2, 4 DOM: 0, 1, 2)
        }
        return event; //fixed up instance
    }
</script>
                
                
//not bind event handlers direction to elements
//to manage handler assoc with DOM elem: give it unique identifier then
//store its data in a centralized object to avoid memory leaks in IE 

//Central object store for DOM elem info
<div title="Ninja Power!"></div>
<div title="Secrets"></div>
<script type="text/javascript">
    (function () {
        var cache = {}, //data associated with the element
            guid, 
            guidCounter = 1,
            expando = "data" + (new Date).getTime(); //property name for each elem with time stamps to prevent collisions with user-defined expandos
        this.getData = function (elem) { //fetches data block for DOM element
            guid = elem[expando];
            if (!guid) { //
                guid = elem[expando] = guidCounter += 1;
                cache[guid] = {};
            }
            return cache[guid];
        };
        this.removeData = function (elem) { //removes it when not needed
            var guid = elem[expando];
            if (!guid) {
                return;
            }
            delete cache[guid];
            try {
                delete elem[expando];
            } catch (e) {
                if (elem.removeAttribute) {
                    elem.removeAttribute(expando);
                }
            }
        }
    })();

    var elems = document.getElementsByTagName("div");
    for (var n = 0; n < elems.length; n += 1) {
        getData(elems[n]).ninja = elems[n].title; //assigns associated data
    }
    for (var n = 0; n < elems.length; n += 1) { //test data was stored
        assert(getData(elems[n]).ninja === elems[n].title,
            "Stored data is " + getData(elems[n]).ninja);
    }
    for (var n = 0; n < elems.length; n += 1) {
        removeData(elems[n]);
        assert(getData(elems[n]).ninja === undefined,
            "Stored data has been destroyed");

//a function to bind event handlers with tracking
(function () {
    var nextGuid = 1, //running counter that is local storage
        data,
        handlers,
        n;
    this.addEvent = function (elem, type, fn) { //element on which handler is to be bound, type of event and the event handler
        data = getData(elem);
        if (!data.handlers) { //check to see if a property name handlers exists
            data.handlers = {}; //handler storage
        }
        if (!data.handlers[type]) {
            data.handlers[type] = []; //creates array by type to store reference to handlers
        } //one array per event type (only for types that have handlers bound to them)
        if (!fn.guid) {
            fn.guid = nextGuid += 1; //marks instrumented functions on behalf of the caller
        }
        data.handlers[type].push(fn); //creates uber handler (dispatcher) to keep track of the bound handlers
        if (!data.dispatcher) {// only creates it once
            data.disabled = false;
            data.dispatcher = function (event) { //triggers when bound event occurs 
                if (data.disabled) {
                    return; //terminates if disabled flag is set
                }
                event = fixEvent(event);
                handlers = data.handlers[event.type]; //calls registed handlers
                if (handlers) {
                    for (n = 0; n < handlers.length; n += 1) {
                        handlers[n].call(elem, event); //handlers called with element as function context and event object as sole argument
                    }
                }
            };
        }
        if (data.handlers[type].length === 1) { //registers dispatcher
            if (document.addEventListener) {
                elem.addEventListener(type, data.dispatcher, false);
            } else if (document.attachEvent) {
                elem.attachEvent("on"+ type, data.dispatcher);
            }
        }
    };
})();
//Cleaning up the handler constructs
function tidyUp(elem, type) {
    var prop,
        data;
    function isEmpty(object) {
        for (prop in object) {
            return false;
        }
        return true;
    }
    data = getData(elem);
    if (data.handlers[type].length === 0) { //checks for type handlers
        delete data.handlers[type]; //if it is empty it gets blown away
        if (document.removeEventListener) {
            elem.removeEventListener(type, data.dispatcher, false);
        } else if (document.detachEvent) {
            elem.detachEvent("on" + type, data.dispatcher);
        }
    }
    if (isEmpty(data.handlers)) { //checks for any handlers
        delete data.handlers;
        delete data.dispatchers;
    }
    if (isEmpty(data)) { //checks if data is needed at all
        removeData(elem);
    }
}
//Function to unbind event handlers
this.removeEvent = function (elem, type, fn) { //1, declares the function
    var data = getData(elem), //2 fetches the associated element data
        removeType,
        t,
        handlers,
        n;
    if (!data.handlers) { //3 short-circuits if there's nothing to do
        return;
    }
    removeType = function (t) { //4 sets up a utility function
        data.handlers[t] = []; //removes by replacing the array of handlers with an empty array
        tidyUp(elem, t);
    };
    if (!type) { // 5 removes all bound handlers for--all--type
        for (t in data.handlers) { 
            removeType(t);
        }
        return;
    }
    handlers = data.handlers[type]; // 6 finds all handlers for a type
    if (!handlers) {
        return;
    }
    if (!fn) {  //7 removes all handlers for a type
        removeType(type);
        return;
    }
    if (fn.guid) { //8 removes one bound handler
        for (n = 0; n < handlers.length; n += 1) {
            if (handlers[n].guid === fn.guid) {
                handlers.splice(n -= 1, 1);
            }
        }
    }
    tidyUp(elem, type);
};        

//smoke test: cursorytest of the major functions of whatever is being tested
//smoke testing the event functions
<script type="text/javascript">

    addEvent(window, "load", function () { //binds the load handler
        var subjects = document.getElementsByTagName("div"), //collects the test subjects
            i;
        for (i = 0; i < subjects.length; i += 1) {
            (function (elem) {
                addEvent(elem, "mouseover", function handler(e) { //binds mouse events
                    this.style.backgroundColor = "red";
                });
                addEvent(elem, "click", function handler(e) { //binds click events
                    this.style.backgroundColor = "green";
                    removeEvent(elem, "click", handler); //unbinds the click events so that they only happen once
                });
            })(subjects[i]);
        }
    });
</script>
<div id="testSubject1" title="Click once">DAMN IM DOPE</div>
<div id="testSubject2" title="mouse over">WHAT</div>
<div id="testSubject3" title="many times">FUCK</div>

//Trigger the bound handler on the element we target
//cause the event to bubble up the DOM, triggering any other bound handlers
//cause the default action to be triggered on the target element(when it has one
//triggering a bubble event on an element
function triggerEvent(elem, event) { //function accepts element upon which the event will be triggered and the event (event object or string containing the event type) that's to be triggered
    var elemData = getData(elem),
        targetData,
        parent = elem.parentNode || elem.ownerDocument; //fetches element data and references to parent (for bubbling)
    if (typeof event === "string") { //if the event name was passed as a string creates an event out of it
        event = {
            type: event,
            target: elem
        };
    }
    event = fixEvent(event); //normalizes event properties
    if (elemData.dispatcher) { //if the passed element has a dispatcher, executes the established handlers
        elemData.dispatcher.call(elem, event);
    }
    if (parent && !event.isPropagationStopped()) { //unless explicitly stopped, recursively calls the function to bubble the vent up the DOM
        triggerEvent(parent, event); 
    } else if (!parent && !event.isDefaultPrevented()) { //if at the top of the DOM, triggers the default action, unless disablec
        targetData = getData(event,target);
        if (event.target[event.type]) {//checks if the target has a default action for the event
            targetData.disabled = true; //temporarily disable event dispatching on the target because we've already executed the handler
            event.target[event.type](); //excutes any default action
            targetData.disabled = false; //re-enables dispatching
        }
    }
}
//lose coupling: when the code that triggers the condition does not know anything
//about the code that will react to the condition 

var body = document.getElementsByTagName("body")[0];
addEvent(body, "ajax-start", function (e) {
    document.getElementById("whirlyThing").style.display = "inline-block";
});
addEvent(body, "ajax-complete", function (e) {
    document.getElementById("whirlyThing").style.display = "none";
});

//Triggering a Custom Event
<!DOCTYPE html>
<html>
  <head>
    <title>Listing 13.10</title>
    <meta charset="utf-8">
    <script type="text/javascript" src="data.js"></script>
    <script type="text/javascript" src="fixup.js"></script>
    <script type="text/javascript" src="events.js"></script>
    <script type="text/javascript" src="trigger.js"></script>
    <style type="text/css">
      #whirlyThing {display: none; }
    </style>
    <script type="text/javascript" src="ajaxy-operation.js"></script>
    <script type="text/javascript">
        addEvent(window, "load", function () {
            var button = document.getElementById("clickMe"); //adds click handler
            addEvent(button, "click", function () {//to button that will trigger
                performAjaxOperation(this); //a 5 sec ajax operation, knows nothing about pinwheel img
            });
            var body = document.getElementsByTagName("body")[0];
            addEvent(body, "ajax-start", function (e) { //est handler for custom event
                document.getElementById("whirlyThing")//named ajax-start on the body elem
                    .style.display = "inline.block";//that will cause the img to be displayed not coupled to the code that reacts to click button
            });
            addEvent(body, "ajax-complete", function (e) {//est handler for a custom event name ajax-complete
                document.getElementById("whirlyThing")//on the body elem that will cause the img to be hidden, not coupled
                    .style.display = "none";
            });
        });
        
        function performAjaxOperation(target) {
            triggerEvent(target, "ajax-start");
            window.setTimeout(function () {
                triggerEvent(target, "ajax-complete");
            }, 5000);
        }
    </script>
  </head>
  <body>
    <button type="button" id="clickMe">Start</button> //creates buttom to click on
    <img id="whirlyThing" src="whirly-thing.gif"/> //defines the pinwheel img that should be shown while an Ajax operation is under way
  </body>
</html>

//delegation is establishing event handlers at higher levels in the DOM than the item of interest
//changing a cell color after a click event
var cells = document.getElementsByTagName("td"),
    n;

for (n = 0; n < cells.length; n += 1) {
    addEvent(cells[n], "click", function () {
        this.style.backgroundColor = "yellow";
    });
}  //better for a small number, because establishing same event handler on every element
//delegating to the table 
var table = document.getElementById("#someTable");

addEvent(table, "click", function (event) {
    if (event.target.tagName.toLowerCase() === "td") {
        event.target.style.backgroundColor = "yellow";
    }
});
//make sure to use ancesters to catch element in the bubbling
//submit, change, focus and blur events have problems bubbling in various browsers

//event-bubbling detection code 
function isEventSupported(eventName) {
    var element = document.createElement("div"), //new <div> to test, delete later
        isSupported; //<div> has the most diverse types of events bubbled to them
    eventName = "on" + eventName; //test if the event is supported by checking if
    isSupported = (eventName in element); //a property supporting the event is present on the element
    if (!isSupported) { //if the simple approach fails, creates an event-handler attribute and checks if it sticks
        element.setAttribute(eventName, "return;");
        isSupported = typeof element[eventName] === "function"; //will know how to translate into a function
    }
    element = null; //wipeout temporary element
    return isSupported;
}
//simulating the submit event (no IE support)
//triggered two ways
//by triggering an input or button element with type of submit, of an input element of type image, can be triggered with a click or with Enter or Spacebar, piggyback on click
//by pressing Enter while inside a text or password input, therefore piggyback on keypress

//piggybacking submit bubbling on click or keypress

<script type="text/javascript">
    (function () {
        var isSubmitEventSupported = isEventSupported("submit");
        function isInForm(elem) { // 1 defines a utility function that will use
            var parent = elem.parentNode; //to check if the passed element is within
            while (parent) { //a form or not
                if (parent.nodeName.toLowerCase() === "form") {
                    return true;
                }
                parent = parent.parentNode;
            }
            return false;
        }
        function triggerSubmitClick(e) { //2 predefines a handler for clicks that will
            var type = e.target.type; //check to see if the submit event should piggyback
            if ((type === "submit" || type === "image") && //on this event
                    isInForm(e.target)) { //and triggers one, if so
                return triggerEvent(this, "submit");
            }
        }
        function triggerSubmitOnKey(e) {//3 predefines a handler for keypress that 
            var type = e.target.type; //will check to see if a submit event should
            if ((type === "text" || type === "password") && //piggyback on this event
                    isInForm(e.target) && e.keyCode === 13) {//and triggers one if so
                return triggerEvent(this, "submit");
            }
        }
        this.addSubmit = function (elem, fn) {//create a special function for binding submit events
            addEvent(elem, "submit", fn);//binds the submit handler normally
            if (isSubmitEventSupported) { //and short-circuits the rest of the 
                return; //function if the browser support is adequate
            } //need to add extra handlers if not on a form...
            if (elem.nodeName.toLowerCase() !== "form" && //if not a form and is the first submit handler
                    getData(elem).handlers.submit.length === 1) {//establishes handlers for clicks
                addEvent(elem, "click", triggerSubmitOnClick);//and keypresses
                addEvent(elem, "keypress", triggerSubmitOnKey);//piggybacking
            }
        };
        this.removeSubmit = function (elem, fn) {//creates a special function for unbinding submit events
            removeEvent(elem, "submit", fn);//unbinds normally
            if (isEventSupported("submit")) {//exits if browser support is adequate
                return;
            }
            var data = getData(elem);
            if (elem.nodeName.toLowerCase() !== "form" &&//if not a form and is the last
                    !data || !data.events || !data.events.submit) {//handler to be unbound
                removeEvent(elem, "click", triggerSubmitOnClick);//removes the piggybacking handlers
                removeEvent(elem, "keypress", triggerSubmitOnKey);
            }
        };
    })();
</script> //this logic should be merged into addEvent 

//change event is more difficult than submit and needs
//binding it to focusout event for checking the value after moing away from the form element
//binding it to the click and keydown events for checking the value the instant it's been changed
//binding it to the beforeactivate event for getting the previous value before a new on is set
//implentation of a cross-browser bubbling change event
<script type="text/javascript">
    (function () {
        this.addChange = function (elem, fn) { //defines a special binding function for change events
            addEvent(elem, "change", fn); //adds the handler normally and bails 
            if (isEventSupported("change")) {// if the browser has adequate support
                return;
            }
            if (getData(elem).events.change.length === 1) { //piggybacks on events on first change handler binding
                addEvent(elem, "focusout", triggerChangeIfValueChanged);
                addEvent(elem, "click", triggerChangeOnClick);
                addEvent(elem, "keydown", triggerChangeOnKeyDown);
                addEvent(elem, "beforeactivate", triggerChangeOnBefore);
            }
        };
        this.removeChange = function (elem, fn) { //defines special unbinding function
            removeEvent(elem, "change", fn);//for change events removes handler normally
            if (isEventSupported("change")) {//and exits in supported browsers
                return;
            }
            var data = getData(elem);
            if (!data ||!data.events || !data.events.submit) {//removes piggybacks if the last unbinding of change handlers
                addEvent(elem, "focusout", triggerChangeIfValueChanged);
                addEvent(elem, "click", triggerChangeOnClick);
                addEvent(elem, "keydown", triggerChangeOnKeyDown);
                addEvent(elem, "beforeactivate", triggerChangeOnBefore);
            }
        };
        function triggerChangeOnClick(e) {//piggyback handler for click events
            var type = e.target.type;
            if (type === "radio" || type === "checkbox" ||
                    e.target.nodeName.toLowerCase() === "select") {
                return triggerChangeIfValueChanged.call(this, e);
            }
        }
        function triggerChangeOnKeyDown(e) {//piggyback handler for key events
            var type = e.target.type,
                key = e.keyCode;
            if (key === 13 && e.target.nodeName.toLowerCase() !== "textarea" ||
                    key === 32 && (type === "checkbox" || type === "radio") ||
                            type === "select-multiple") {
                return triggerChangeIfValueChanged.call(this, e);
            }
        }
        function triggerChangeOnBefore(e) {//...beforactivate events, stores value
            getData(e.target)._change_data = getVal(e.target);//of elements for
        }//upcoming focusout event
        function getVal(elem) {//utility function that fetches the value of the passed element
            var type = elem.type,
                val = elem.val;
            if (type === "radio" || type === "checkbox") {
                val = elem.value;
            } else if (type === "select-multiple") {
                val = "";
                if (elem.selectedIndex > -1) {
                    for (var i = 0; i < elem.options.length; i += 1) {
                        val += "-" + elem.options[i].selected;
                    }
                }
            } else if (elem.nodeName.toLowerCase() === "select") {
                val = elem.selectedIndex;
            }
            return val; //serialized version of the state of the passed form element
        }
        function triggerChangeIfValueChanged(e) {//piggyback for focusout event
            var elem = e.target, //triggers if the value of the element has changed
                data,
                val;
            var formElems = (/textarea|input|select/i);
            if (!formElems.test(elem.nodeName) || elem.readOnly) {
                return;
            }
            data = getData(elem)._change_data;
            val = getVal(elem);
            if (e.type !== "focusout" || elem.type !== "radio") {
                getData(elem)._change_data = val;
            }
            if (data === undefined || val === data) {
               return;
            }
            if (data !== null || val) {
                return triggerEvent(elem, "change");
            }
        }
    })();
</script>

//focusin and focusout are proprietary IE, events occur before focus or blur
//so they are capturing events rather than bubbling
//Support for the nonstandard focusin and focusout in all browsers
if (document.addEventListener) {
    elem.addEventListener(
            type === "focusin" ? "focus":
                type === "focusout" ? "blur" : type,
                    data.handler, type === "focusin" || type === "focusout");
} else if (document.attacheEvent) {
    elem.attachEvent("on" + type, data.handler);
}
if (document.removeEventListener) {
    elem.removeEventListener(
            type === "focusin" ? "focus" :
                type === "focusout" ? "blur" : type,
                    data.handler, type === "focusin" || type === "focusout");
} else if (document.detachEvent) {
    elem.detachEvent("on" + type, data.handler);
}

//IE mouseenter and mouseleave events, related but different from mouseover and mouseout
//because they will only fire on the main element and only tell us if the cursor actually leaves the parent element
//hover() adds support for the mouseenter and mouseleave events in all browsers
<script >
    (function () {
        if (isEventSupported("mouseenter")) {//test if browser natively supports
            this.hover = function (elem, fn) {//adds handler that invoke the handler for browsers that support
                addEvent(elem, "mouseenter", function () {
                    fn.call(elem, "mouseenter");
                });
                addEvent(elem, "mouseleave", function () {
                    fn.call(elem, "mouseleave");
                });
            };
        } else {
            this.hover = function (elem, fn) {//in nonsupport, handler mouseover/mouseout using a handler that detects whether the handler should fire or not
                addEvent(elem, "mouseover", function (e) {
                    withinElement(this, "mouseenter", fn);
                });
                addEvent(elem, "mouseout", function (e) {
                    withinElement(this, "mouseleave", fn);
                });
            };
        }
        function withinElement(elem, event, type, handle) {//internal handler that fires the original handler to mimic the nonstandard behavior
            var parent = event.relatedTarget;//gets the element we're entering/exiting
            while (parent && parent !== elem) {//traverses upward until it hits the 
                try { //top of the DOM or the hovered element
                    parent = parent.parentNode;
                } catch (e) {//in case of error, assumes we are done (for Firefox and 
                    break; //XML elements)
                }
            }
            if (parent !== elem) {//if not exiting or entering the hovered element 
                handle.call(elem, type);//triggers the handler
            }
        }
    })();
</script>

//the document ready event on DOMContentLoaded
//IE...
//continuously scroll -doScroll- left in the document, will fail until fully loaded, using timers, non-blocking
//and listening for the onreadytatechange event on the document, sometimes this will fire late, but always after DOM is ready and before the final window load event
//onreadystatechange is the backup to doScroll
//third prong is examining the document.readyState property, which records how fully loaded the DOM document is at that point
//looking for complete
<script type="text/javascript">
    (function () {
        var isReady = false, //assumes not ready
            contentLoadedHandler;
        function ready() { //defines a function that triggers the ready handler
            if (!isReady) {//only once
                triggerEvent(document, "ready");
                isReady = true;
            }
        }
        if (document.readyState === "complete") {//if DOM is ready by the time
            ready(); //we get here, just fire the handler
        }
        if (document.addEventListener) { //for W3C browsers, creates a handler for 
            contentLoadedHandler = function () { //DOMContentLoaded event that
                document.removeEventListener(//fires off the ready handler and removes itself
                    "DOMContentLoaded", contentLoadedHandler, false);
                ready();
            };
            document.addEventListener( //establishes the just-created handler for the DOMContentLoaded event
                "DOMContentLoaded", contentLoadedHandler, false);
        } else if (document.attachEvent) { //for IE, creates a handler that removes itself and fires the ready handler if the 
            contentLoadedHandler = function () {//document readyState is complete
                if (document.readyState === "complete") {
                    document.detachEvent(
                    "onreadystatechange", contentLoadedHandler);
                ready();
                }
            };
            document.attachEvent(//establishes the previous handler for onreadystatechange event, will fire late, but iframe safe 
                    "onreadystatechange", contentLoadedHandler);
            var toplevel = false;
            try {
                toplevel = window.frameElement === null;
            } catch (e) {
                if (document.documentElement.doScroll && toplevel) {
                    doScrollCheck(); //if not an iframe, performs scroll check
                }
            }
            function doScrollCheck() {//defines scroll check function and will keep trying until success
                if (isReady) {
                    return;
                }
                try {
                    document.documentElement.doScroll("left");
                } catch (error) {
                    setTimeout(doScrollCheck, 1);
                    return;
                }
                ready();
            }
        }
    })();
</script>
//injecting HTML fragments into a page using document fragments or createContextualFragment()
//neither is used commonly in everyday development, both are faster than createElement()
//memory usage is important in libratry development--don't duplicate resources
//DOM modification code
//range.createContextualFragment() is the new hotness
//injecting HTML: arbitrary into a page to manipulate and insert client-side templates
//retrieving and injecting HTML sent from a server
//API method for injecting arbitrary HTML strings: insertAdjacentHTML()
//Implement a DOM manipulation API from scratch:
//convert arbitrary HTML/XHTML string into a DOM structure
//inject the DOM structure into any location in the DOM 
//excute any inline scripts that were in the source string
//HTML to DOM: innerHTML()
//must be valid 
//wrap string in enclosing markup
//insert into dummy DOM element
//extract the DOM nodes back out
//XML style elements are self closing: ex <table/>
//preparse them to convert them to <table></table>

//Making sure self closing elements are interpreted correctly
<script type="text/javascript">
var tags = /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i;
function convert(html) {
    return html.replace(/(<(\w+)[^>]*?)\/>/g, function (all, front, tag) {
        return tags.test(tag) ? all : front + "></" + tag + ">";
    });
}
assert(convert("<a/>") === "<a></a>", "Check anchor conversion");
</script>

//HTML wrapping
//some elements need to be within certain container elements before they can be injected
//two solutions: injected directly using innerHTML and constructing a parent with createElement, doesn't work in all browsers
//or wrap string with the appropriate markup and inject directly into any container element 
//Problematic elements that need specific containers (7)
<option> and <optgroup>  ==> <select multiple="multiple"> (inject here)</select>
//multiple because non-multiple select will not automatically check any of the options that are placed inside of it
<legend> ==> <fieldset> (inject)</fieldset>
<thead>, <tbody>, <tfoot>, <colgroup>, <caption> ==> <table>(inject)</table>
<tr> ==> <table><thead>(inject)</thead></table>, <table><tbody>(inject)</tbody></table>, <table><tfoot>(inject)</tfoot></table>  
<td> and <th> ==> <<table><tbody>(inject)</tbody></table>
<col> ==> <table><tbody></tbody><colgroup>(inject)</colgroup></table>
//extra tbody needed to generate the <colgroup> properly
<link> and <script> ==> <div></div><div>(insert)</div> 
//IE cannot generate these via innerHTML unless they are both contained within another element and there's an adjacent node

//Generating a List of DOM nodes from some markup
function getNodes(htmlString, doc) {
    var map = {
        "<td":[3, "<table><tbody><tr>", "</tr></tbody></table>"],
        "<th":[3, "<table><tbody><tr>", "</tr></tbody></table>"],
        "<tr":[2, "<table><thead>", "</thead></table>"],
        "<option":[1, "<select multiple='multiple'>", "</select>"],
        "<optgroup":[1, "<select multiple='multiple'>", "</select>"],
        "<legend":[1, "<fieldset>", "</fieldset>",],
        "<thead":[1, "<table>", "</table>"],
        "<tbody":[1, "<table>", "</table>"],
        "<tfoot":[1, "<table>", "</table>"],
        "<colgroup":[1, "<table>", "</table>"],
        "<caption":[1, "<table>", "</table>"],
        "<col":[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        "<link":[3, "<div></div><div>", "</div>"]
    }
    var tagName = htmlString.match(/<\w+/),
        mapEntry = tagName ? map[tagName[0]] : null;
            if (!mapEntry) {
                mapEntry = [0, " ". " "];
            }
    var div = (doc || document).createElement("div");
    div.innerHTML = mapEntry[1] + htmlString + mapEntry[2];
    while (mapEntry[0] -= 1) {
        div = div.lastChild;
        return div.childNodes;
    }
assert(getNodes("<td>test</td><td>test2</td>").length === 2,
    "Get two nodes back from the method");
assert(getNodes("<td>test</td>")[0].nodeName === "TD",
    "Verify that we're getting the right node.");
//have to work through two IE bugs first:
//IE adds a <tbody> element inside an empty table to see if an empty table
//was intended--removing any child nodes is the fix
//IE trims  all leading whitespace from the string passed to innerHTML
//the fix is to check to see if the first generate node is a text and contains leading
//if not, create a new text node and fill it with whitespace explicitly
//DOM fragments is used to hold a collection of nodes, injecting and cloning at the same time
//function getNodes(htmlString, doc, fragment) {
//the passed function is expected to be a DOM fragment that the nodes are injected into for later use
//inserting a DOM fragment into multiple locations in the DOM

function getNodes(htmlString, doc, fragment) {
    if (fragment) {
        while (div.firstChild) {
            fragment.appendChild(div.firstChild);
        }
    }
    
<div id="test"><b>Hello</b>, I am a ninja</div>
<div id="test2"></div>
window.onload = function () {
    function insert(elems, args, callback) {
        if (elems.length) {
            var doc = elems[0].ownerDocument || elems[0],
                fragment = doc.createDocumentFragment(),
                scripts = getNodes(args, doc, fragment), //getNodes from above with fragment passed in
                first = fragment.firstChild,
                i;
            if (first) {
                for (i = 0; elems[i]; i += 1) {
                    callback.call(root(elems[i], first),
                        i > 0 ? fragment.cloneNode(true) : fragment);
                }
            }
        }
    }
    var divs = document.getElementsByTagName("div");
    insert(divs, ["<b>Name:</b>"], function (fragment) {
        this.appendChild(fragment);
    });
    insert(divs, ["<span>First</span><span>Last</span>"], 
            function (fragment) {
        this.parentNode.insertBefore(fragment, this);
    });
};


//figure out the insertion point of an element
function root(elem, cur) {
    return elem.nodeName.toLowerCase() === "table" &&
        cur.nodeName.toLowerCase() === "tr" ?
            (elem.getElementsByTagName("tbody")[0] ||
                elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
                elem;
}
//inline scripts should be stripped out of the DOM structure before being inserted 
//into the document
//function used to convert HTML into a DOM node that collects the script
for (var i = 0; ret[i]; i += 1) {
    if (jQuery.nodeName(ret[i], "script") && //ret is array that holds all the
        (!ret[i].type || //DOM nodes that have been generated.
            ret[i].type.toLowerCase() === "text/javascript")) {//only removes normally executed javascript
        scripts.push(ret[i].parentNode ? //scripts is the array populated with all the scripts in this fragment, in document order
            ret[i].parentNode.removeChild(ret[i]) : 
                ret[i]);
    } else if (ret[i].nodeType === 1) {
        ret.spice.apply(ret, [i + 1, 0].concat(
            jQuery.makeArray(ret[i].getElementsByTagName("script"))));
    }
}
//inline scripts are evaluated in the global context
//to do so in all browsers, create a fresh script element, inject the code to execute,
//inside the script, and inject and remove the script from the document
//evaluting a script within the global scope using jQuery
function globalEval(data) {
    data = data.replace(/\s+|\s+$/g, "");
    if (data) {
        var head = document.getElementsByTagName("head")[0] ||
                document.documentElement,
            script = document.creatElement("script");
        script.type = "text/javascript";
        script.text = data;
        head.insertBefore(script, head.firstChild);
        head.removeChild(script);
    }
}




//Method for evaluating script (remotely located)
function evalScript(elem) {
    if (elem.src) {
        jQuery.ajax({
            url: elem.src,
            async: false,
            dataType: "script"
        });
    } else {
        jQuery.globalEval(elem.text || "");
    }
    if (elem.parentNode) {
        elem.parentNode.removeChild(elem);
    }
}//after evaluating the script, we remove it from the DOM 
//so that the script won't accidentally double execute, (appending a script that will recursively call itself)

//Cloning, could use cloneNode...but IE, IE will copy over all the event handlers
//and will carry over custom expandos
//jQuery test for browser copies of event handlers on cloning
var div = document.createElement("div");
if (div.attachEvent && div.fireEvent) {
    div.attachEvent("onclick", function () { //cloning a node should not copy any 
        jquery.support.noCloneEvent = false;//bound event handlers
        div.detachEvent("onclick", arguments.callee);
    });
    div.cloneNode(true).fireEvent("onclick");
}

//element clone code from jQuery
function clone() {
    var ret = this.map(function () {
        if (!jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this)) {
            var clone = this.cloneNode(true),
                container = document.creatElement("div");
            container.appendChild(clone);
            return jQuery.clean([container.innerHTML])[0];//clean method converts HTML string into a DOM structure 
        } else {
            return this.cloneNode(true);
        }
    });
    var clone = ret.find("*").andSelf().each(function () {
        if (this[expando] !== undefined) {
            this[expando] = null;
        }
    });
    return ret;
}

//have to do preliminary cleaning before you can remove an element from the DOM
//two steps of clean up before removing elements 
//first clean any bound event handlers by removing them from element
//if they are bound one at a time, simple as removing that one function
//if not removed the handler will case a memory leak by referencing the DOM element that is deleted
//second step is remove any external data associated with the element
//will also cause a memory leak
//remove element and decendants
function remove() {
    jQuery("*", this).add([this]).each(function () {//traverses all decendants and elements to be removed
        jQeury.event.remove(this);//removes all bound elements
        jQuery.removeData(this);//removes attached data
    });
    if (this.parentNode) { //removes element if it's in the DOM 
        this.parentNode.removeChild(this);
    }
}

//IE also has an outHTML() property that is a setter function that will allow
//you to wipe out data by setting to ""L outHTML = "";
//wipes out every element from memory more completely than removeChild()
if (this.parentNode) {
    this.parentNode.removeChild(this);
}
if (typeof this.outerHTML !== "undefined") {
    this.outerHTML = "";
}
//so, three steps:
//empty contents of the element, replace the contents of an element(with HTML or text) replace element directly

//text: getting and setting content
//W3C, textContent(), provides textual contents, including direct children and decendants
//IE, innerText(), same as textContent()
//Using textContent and innerText()
<div id="test"><b>Hello</b>, Im a ninja</div>

window.onload = function () {
    var b = document.getElementById("test");
    var text = b.textContent || b.innerText;
    assert(text === "Hello, I'm a ninja",
        "Examine the text contents of an element");
    assert(b.childNode.length === 2,
        "An element and a text node exist.");
    if (typeof b.textContent !== "undefined") {
        b.textContent = "Some new text";
    } else {
        b.innerText = "Some new text";
    }
    text = b.text.Content || b.innerText;
    assert(text === "Some new text",
        "Set new text value.");
    assert(b.childNodes.length === 1,
        "Only one text node exists now.");
}
//to insert new content we need a methos to properly escape the string to be inserted
//HTML specific characters need special escapement
<div id="test"><b>Hello</b>,I'm a ninja</div>
window.onload = function () {
    var = document.getElementById("test");
    while (b.firstChild) {
        b.removeChild(b.firstChild);
    }
    b.appendChild(document.createTextNode("Some new text"));
    var text = b.textContent || b.innerText;
    assert(text === "Some new text", "Set a new text value");
    assert(b.childNode.length === 1,
        "Only one text nodes exists now.");

//Getting the text contents of an element
window.onload = function () {
    function getText(elem) {
        var text = "",
            i,
            b,
            cur;
        for (i = 0; i < elem.childNodes.length; i += 1) {
            cur = elem.childNodes[i];
            if (cur.nodeType === 3) {  //text nodes have a node Type of 3
                text += cur.NodeValue;
            } else if (cur.nodeType === 1) { //we need to recurs further if
                text += getText(cur); //it's element
            }
        }
        return text;
    }
    b = document.getElementById("test");
    text = getText(b);
    assert(text === "Hellow I'm a ninja",
        "Examine the text contents of an element");
    assert(b.childNodes.length === 2,
        "An element and a text node exist.");
};

//implementing a CSS Selector engine:
//1. W3C selectors, XPath (DOM querying language), 3, pure DOM 
//W3C CSS3 API, querySelector() accepts a CSS selector string returns first element found or null
//querySelectorAll() accepts a CSS selector string and returns a staticNodeList of all elements found by the selector
//both exist on all DOM elementd, DOM documents and DOM fragments

window.onload = function () {
    var divs = document.querySelectorAll("body > div");
    assert(divs.length === 2, "Two divs found by the CSS selector");
    var b = document.getElementById("test")
            .querySelector("b:only-child");
    assert(b, "The bold element was found relative to another");
};
//W3C API only supports bowser supported CSS selectors and not those in JS libraries
(function () { //binds count variable to rootedQuerySelectorAll
    var count = 1,
        oldID; 
    this.rootedQuerySelectorAll = function (elem, query) {
        oldID = elem.id; //remembers the original ID so we can restore it
        elem.id = "rooted" + (count += 1); //assigns a uniquely generated temporary ID value
        try { //selector API methods throw for syntax or unsupported selectors
            return elem.querySelectorAll("#" + elem.id + "" + query); //build selector
        } catch (e) {
            throw e;
        } finally { //finally will always execute after the try/catch, so ID will always be restored
            elem.id = oldID; //restores the ID in a finally block so that it cannot be circumvented
        }
    };
})();
window.onload = function () {
    var b = rootedQuerySelectorAll(
        document.getElementById("test"), "div b");
    assert(b.length === 0, "The selector is now rooted properly");
};

//XPath to find an element (for browsers not supporting SelectorsAPI)
//finds nodes
//Modern browsers support for HTML based documents, but not IE which only suppports XML
//finding elements by id and simple tag-based selectors(<div>) will always be 
//faster with pure DOM code (using getElementsByTagName() or getElementsById()
//Method for executing an XPath expression on an HTML document (Prototype Library)
if (typeof document.evaluate === "function") {
    function getElementsByXpath(expression, parentElement) {
        var i,
            length = query.snapshotLength,
            results = [],
            query = document.evaluate(expression,
                    parentElement || document,
                        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (i = 0; i < length; i += 1) {
            results.push(query.snapshotItem(i));
        }
        return results;
    }
}
//CSS selectors versus Xpath expressions
// GOAL								XPATH											CSS3
//All elements						//*												*
//All elements named p				//p												p
//All immediate child elemnts of p 	//p/*											p > *
//Element by ID						//*[@id="foo"]									//#foo
//Element by Class					//*[contains(concat("", @class, ""),"foo")]		.foo
//Element with attribute			//*[@title]										*[title]
//First child of all p				//p/*[0]										p > *:first-child
//All p with an a decendant			//p[a]											N/A
//Next element						//p/following-sibling::*[0]						p + *

//we could use Xpath expressions to create a selector engine rather than construct
//a pure DOM selector engine by parsing the selector using regular expressions
//the resulting CSS selector portions would get mapped to thier associated 
//XPath expressions and executed

//Pure DOM CSS selector engine, parses the CSS selectors using getElementsByTagName() and getElementById()
//HTML5 adds getElementsByClassName()
//top down or bottom up implementation
//top-down works by parsing a CSS selector from left to right, matching elements in a document as it goes
//preferred method in most javascript libraries
<body>
	<div></div>
	<div class="ninja">
		<span>Please</span><a href="/ninja"><span>Click me</span></a>
	</div>
</body>

div.ninja a span //will select the <span> element containing the Click me
//div.ninja identitifies the subtree within the document
// a indentifies the subtree rooted at the anchor element
// span identifies the target node
//results should be in document order and unique
//A limited top-down selector engine
<div>
	<div>
		<span>Span</span>
	</div>
</div>
<script type="text/javascript">

	window.onload = function () { //turns "div span" in ["div", "span]
	    function find(selector, root) {
	        root = root || document; //if no root is provided starts at the top of the document
	        var i,
	            parts = selector.split(" "), //spits on spaces
	            query = parts[0], //grabs the first term
	            rest = parts.slice(1).join(" "), //collects the remainder
	            elems = root.getElementsByTagName(query), //finds the element matching the first term
	            results = []; //initializes an array to gather the resuls within
	        for (i = 0; i < elems.length; i += 1) {
	            if (rest) {
	                results = results.concat(find(rest, elems[i])); //calls find recursively until the all the selectors are consumed
	            } else {
	                results.push(elems[i]); //pushes found elements into results array
	            }
	        }
	        return results; //returns list of matched elements
	    };
	    var divs = find("div");
	    assert(divs.length === 2, "Correct number of divs found");
	    var divs = find("div", document.body);
	    assert(divs.length === 2, "Correct number of divs found in body.");
	    var divs = find("body div");
	    assert(divs.length === 2,
	        "Correct number of divs found in body.");
	    var spans = find("div span");
	    assert(spans.length === 2, "A duplicate span was found.");
	};
</script>
//Using regular expression to make parser more robust
var selector = "div.class > span:not(:first-child) a[href]",
    chunker = /((?:\[^\)]+\)|\[[^\]]+\]|[^ ,\(\[]+)+)(\s*,\s*)?/g,
    parts = [];
chunker.lastIndex = 0;
while ((m = chunker.exec(selector)) !== null) {
    parts.push(m[1]);
    if (m[2]) {
        extra = RegExp.rightContext;
        break;
    }
}
assert(parts.length === 4,
    "Our selector is broken into four unique parts.");
assert(parts[0] === "div.class", "div selector");
assert(parts[1] === ">", "child selector");
assert(parts[2] === "span:not(:first-child)", "span selector");


//AJAX application of fade
function fade(id) {
    var dom = document.getElementById("id"),
        level = 1;
    function step () {
        var h = level.toString(16);
        dom.style.backgroundColor =
            #FFFF + h + h;
        if (level < 15) {
            setTimeout(step, 1000);
        }
    }
    setTimeout(step, 1000);
}

//later method, like setTimeout except for all objects
if (typeof Object.prototype.later !== "function") { //not generally good for applications but okay for AJAX lib
    Object.prototype.later = function (msec, method) {
        var that = this,
            args = Array.prototype.slice.apply(arguments, [2]);
        if (typeof method = "string") {
            method = that[method];
        }
        setTimeout(function () {
            method.apply(that, args);
        }, msec);
        return that; //Cascade
    };
}

//Partial Application , doesn't execute function unless supplied with additional arguments
function curry(func) {
    var args = arguments.slice(1);
    return function () {
        return func.apply(null,
                args.concat(arguments.slice()));
    };
}
var inc = curry(function add(a, b) {
    return a + b;
}, 1);
alert(inc(6));   

//Promise maker function, process that cannot be resolved immediately (worker pool), go back to server to get some stuff(?)
function make_promise() {//will return something immediately that we can start acting on even though it won't be "real" for a while
    var status = "unresolved", ...;
    function vouch(deed, func) {...} //private to promise maker
    function resolve(deed, value) {...} //...
    return { //promise, will call methods on the thing as long as we do not know what it is
        when: function (func) {
            vouch("fulfilled", func);
        },
        fail: function (func) {
            vouch("smashed", func);
        },
        fulfill: function (value) {
            resolve("fulfilled", value); // value is the thing that will get delivered
        },
        smash: function (string) {// causes all the fail methods to run
            resolve("smashed", string);
        },
        status: function () {
            return status;
        }
    };
}  //communications application

function make_promise() {
    var status = "unresolved",
        outcome, //when we know value, 
        waiting = [], //functions registered with win
        dreading = []; //functions registered with fail
    function vouch(deed, func) { //if current state of the promise matches the deed, we can execute immediately
        switch(status) {
        case "unresolved":
            (deed === "unfilfulled" ? waiting : dreading)
                   .push(func);
            break;
        case deed:
            func(outcome);
            break;
        }
    }
    function resolve(deed, value) {
        if (status !== "unresolved") {
            throw new Error(
                    "The promise has already been resolved" + status);
        }
        status = deed;
        outcome = value;
        (deed === fulfilled ? waiting : dreeding)
                .forEach(function (func) {
            try {
                func(outcome);
            } catch () {}
        });
        waiting = null;
        dreeding = null;
    }

//sealers and unsealers, sending secret information through the application
function make_sealer() {
    var boxes = [],
        values = [];
    return {
        sealer: function (value) {
            var i = boxes.length,
                box = {};
            boxes[i] = box;
            values[i] = value;
            return box;
        },
        unsealer: function (box) {  //if it finds the right box, returns corresponding value
            return values[boxes.indexOf(box)];
        }
    };
}

//prototypal inheritance
var gismo = new_constructor(Object, function (id) { //inherits from Object
    this.id = id;
}, {
    toString: function () {
        return "gismo " + this.id;
    }
});
var hoozit = new_constructor(gismo, function (id) {
    this.id = id;
}, {
    test: function (id) {
        return this.id === id;
    }
});

function new_constructor(extend, initializer, methods) {
    var func,
        prototype = Object.create(extend && 
            extend.prototype);
    if (methods) {
        methods.keys().forEach(function (key) { //keys() method returns an array of all the known keys
            prototype[key] = method[key];
        });
    }
    func = function () {
        var that = Object.create(prototype);
        if (typeof initializer === "function") {
            initializer.apply(that, arguments); //does same thing as new
        }
        return that;
    };
    func.prototype = prototype;
    prototype.constructor = func;
    return func;
}

//module patten
var singleton = (function () { //not passing the function itself, but the consequence of calling the function
    var privateVariable;
    function privateFunction (x) {
        ...privateVariable...
    }
    return {
        firstMethod: function (a, b) {
            ...privateVariable...
        },
        secondMethod: function (c) {
            ...privateVariable...
        }
    }
}());

(function () {
    var privateVariable;
    function privateVariable(x) {
       ...privateVariable...
    }
    GLOBAL.firstMethod = function (a, b) {
        ...privateVariable...
    };
    GLOBAL.secondMethod = function (c) {
        ...privateFunction()...
    }
}());
//making constructor
//make an object
//define var and functions
//augment with privilegde method
//return object
function myPowerConstructor(x) {
    var that = otherMaker(x);
    var secret - f(x);
    that.priv = function () {
        ...secret of that...
    };
    return that;
    
//Functional inheritance
function gismo(id) {
    return { //object literal
        id: id,
        toString: function () {
            return "gismo " + this.id;
        }
    };
}
function hoozit(id) {
    var that = gismo(id);
    that.test = function (testid) { //augments that
        return testid === this.id; //returning test method
    };
    return that;
}
//for privacy
function gismo(id, secret) {
    secret = secret || {};
    secret.id = id;
    return {
        toString: function () {
            return "gismo " + secret.id;
        }
    };
}
function hoozit(id) {
    var secret = {};
    var that = gismo(id, secret);
    that.test = function (testid) {
        return testid === secret.id;
    };
    return that;
}

function StaffMember(name, discountPercent) {
     this.name = name;
     this.discountPercent = discountPercent;
}
var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);
var me = new StaffMember("Shahn", 20);

var cashRegister = {
    total: 0,
    lastTransactionAmount: 0,
    add: function (itemCost) {
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function (item, quantity) {
        switch (item) {
        case "eggs":
            this.add(0.98 * quantity);
            break;
        case "milk":
            this.add(1.23 * quantity);
            break;
        case "magazine":
            this.add(4.99 * quantity);
            break;
        case "chocolate":
            this.add(0.45 * quantity);
            break;
        }
        return true;
    },
    voidLastTransaction: function () {
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount: function (employee) {
        this.total -= (this.total * (employee.discountPercent / 100));
    }
}

String.prototype.rotate = function (n) {
    n %= this.length;
    var cut = n < 0 ? -n : this.length - n;
    return this.substr(cut) + this.substr(0, cut);
};
var alphabet =ABCDEFGHIJKLMNOPQRSTUVWXYZ;
rot13_dict = {};
var A2z = (alphabet + alphabet.toLowerCase()).split("");
var rotate = (alphabet.rotate(13) + alphabet.rotate(13).toLowerCase()).split("");
A2z.forEach(function(value, index, array) {
    rot13_dict[value] = rotate[index];
});
var rot13_map = function(n) {
    return rot13_dict[n] || n;
};
var rot13 = function(string) {
    return string.split("").map(rot13_map).join("");
};
console.log(rot13("slfkjs effjla sdlfkjoduf"));

//eval(): a function with global scope, executes code passed into it in a string form within the current context
//the results returned from the method are a result of the last evaluated expression
//1. it will evaluate the code passed to it as a string
//2. it will execute that code in the scope within which eval() was called


//NSArray and NSMutableArray Contructors

- (id)initWithObjects:(const id [])objects count:(NSUInteger)cnt;
//init an array with specified objects and count
- (id)initWithObjects:(id)firstObj, ... NS_REQUIRES_NIL_TERMINATION;
//...array with spcified nil terminated list of objects
- (id)initWithArray:(NSArray *)array; 
//init with array using  another array
- (id)initWithArray:(NSArray *)array copyItems:(BOOL)flag;
//init an array using another array and creates new copies of each object
- (id)initWithContentsOfFile:(NSString *)path;
//an array with the contents of a local file
- (id)initWithContentsOfURL:(NSURL *)url;
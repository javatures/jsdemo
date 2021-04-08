"use strict"

function hello() {
    console.log("Hello World")
}

function log(message) { // definition
    console.log(message)
}

log("Hello World") // invocation

/* dynamic (loose) typing */
log('Hello from log')
log(42)
log(42/50)
log(8 == '8') // value vs... (type coercion)
log(8 === '8') // type equivalency
log(null)
var m
log(m)
log(globalVar2)

/* Objects and arrays */
var obj = {
    'id' : 1,
    'name' : 'Mehrab',
    'favoriteColor' : 'blue',
    'lastname' : 'Rahman',
    'isObject' : true,
    'fullName' : function() {
        log(this.name + ' ' + this.lastname)
    }
};
var arr = [1, 'Mehrab', 'blue', true];

log(obj)
log(arr)
log(typeof obj + `, ` + typeof arr)

obj.fullName()
obj.name = 'Merv'
obj.fullName()

/* Scopes & Hoisting */
// globalVar = 'I\'m a global-scope variable' // won't work in strict mode
var globalVar2 = "I'm also a global-scope variable"

function functionScope() {
    var functionVar = "I'm a function-scope variable"
    log(functionVar)

    /* ES6+ adds block scope */
    if (true) {
        let blockLet = "I'm a block-scope variable"
        var blockVar = "I'm NOT a block-scope variable"
        const blockConst = "I'm a block-scope constant"
        // blockConst = 'something' // no good, can't reassign
    }

    log(blockVar)
    // log(blockLet) // Won't work due to Let scoping
    log(globalVar2)
}

functionScope()
alert('Hello')
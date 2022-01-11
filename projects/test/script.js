// $('button').on('click', function() {
//     $.ajax({
//         type: 'POST',
//         url: 'test.php',
//         dataType: 'json',
//         data: {name: 'Wayne', age: 27, country: 'Ireland'},
//         success: function() {
//             console.log('OK');
//         },
//         error: function() {
//             console.log('error');
//         }
//     });
// });


let a = 5,
b = 7;
console.log(a, b);
 
a = 6;
b = a;
console.log(a, b);
 
a = 8;
console.log(a, b);
 
let objA = {
        a: 5,
    },
    objB = {
        b: 6,
    }
console.log(objA, objB);
 
objA.a = 7;
objB.b = 8;
console.log(objA, objB);
 
objB = objA;
console.log(objA, objB);
 
objA.a = 9;
console.log(objA, objB);
 
objB.b = 10;
console.log(objA, objB);
 
objB.c = 11;
console.log(objA, objB);
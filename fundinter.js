// //1
// var suma=0;
// function sigma(num){
//     for(var i = num; i > 0; i--){
//         suma += i;
//     }
//     return suma;
// }
// console.log(sigma(4));

// //2
// var fact=1;
// function factorial(num){
//     for(var i = num; i > 0; i--){
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5));

// //3
// var arr=[];
// var ant=1;
// function fibonacci(num){
//     for(var i = 0; i <= num; i++){
//         if(num == 0){
//             arr[i] = i;
//             return arr;
//         }
//         if(i == 0 || i == 1){
//             arr[i] = i;
//         }
//         else{
//             ant = i -1;
//             arr[i] = arr[ant] + arr[ant-1];
//         }

//     }
//     return arr;
// }
// console.log(fibonacci(5));

// //4
// var arr=["Hola","Como","Estas","Amigo"];
// var arr2=[];
// function penultimo(arreglo){
//     if(arreglo.length <= 1){
//         return null;
//     }else{
//         return arreglo[arreglo.length-2];
//     }
// }
// console.log(penultimo(arr));

// //5
// var arr=[0,1,2,3,4,5,6];
// var arr2=[1];
// var index=2;
// function nultimo(arreglo,indice){
//     if(arreglo.length <= indice){
//         return null;
//     }else{
//         return arreglo[indice];
//     }
// }
// console.log(nultimo(arr,index));

//6
var arr=[2,10,50,4.2,1];

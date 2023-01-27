let x = +prompt('Введите число')
let y = +prompt('Введите степень числа')

if(isNaN(x) && isNaN(y)){
    alert('error')
} else if(x === 0 && y === 0){
    alert('error')
} else{
    alert(x ** y);
}
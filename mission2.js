// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function friendNumbers(number1,number2) {
    let toplam1 = 0;
    let toplam2 = 0;
    for(let i = 1; i < number1; i++){
        if (number1 % i == 0) {
            toplam1 += i;
        }
    }

    for(let i = 1; i < number2; i++){
        if (number2 % i == 0) {
            toplam2 += i;
        }
    }

    if (number1 == toplam2 && number2 == toplam1) {
        console.log(`${number1} ve ${number2} arkadaş sayılardır`);
    }
    else{
        console.log(`${number1} ve ${number2} ardadaş sayı değillerdir`);
    }
}
friendNumbers(120,284)

// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )



function findPrime(...numbers) {
    for(let i = 0; i < numbers.length; i++){
       let count = 0;
       for(let j = 1; j <= numbers[i]; j++){
            if (numbers[i] % j == 0) {
            count++;
           }
       }
        if (count == 2) {
            console.log(numbers[i] + " this is a prime number");
        }
        else {
            console.log(numbers[i] + " this is not a prime number");
        }
    }
}
findPrime(2,5,8,21,13)
findPrime(3,5)
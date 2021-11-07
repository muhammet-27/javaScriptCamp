// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function asalControl(){
    for(let i = 2; i < 1000; i++){
        let sayi = 0;
        for(let j = 1; j <= i; j++){
            if (i % j == 0) {
                sayi++;
            }
        }
        if (sayi == 2) {
            console.log(`sayı: ${i} asal sayıdır.`);
        }
    }
 }
 asalControl()
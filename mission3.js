// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumber(params) {
    for(let sayi = 1; sayi < 1000; sayi++){
        let toplam = 0
        for(let i = 1; i < sayi; i++){
            if (sayi % i == 0) {
                toplam += i
            }
        }

        if (toplam == sayi) {
            console.log(` ${sayi}: mükemmel bir sayıdır`);
        }
    }
}
perfectNumber()
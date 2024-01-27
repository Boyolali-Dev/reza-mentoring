/** 1
 * Buatlah sebuah fungsi untuk penambahan sum(number_1, number_2)
 * Parameter adalah number_1, number_2
 * Output adalah penjumlahan dari kedua parameter tersebut
 * Ex: console.log(sum(1,3)) => 4
 */

// Tulis di sini
function sum(number_1, number_2) {
    return number_1 + number_2;
}

const answer = sum(1,3);
console.log(answer);

/** 2
 * Buatlah sebuah fungsi untuk perkalian multiply(number_1, number_2)
 * Parameter adalah number_1, number_2
 * Output adalah perkalian dari kedua parameter tersebut
 * Ex: console.log(multiply(1,3)) => 3
 */

// Tulis di sini
function multiply(number_1, number_2) {
    return number_1 * number_2;
}

const result = multiply(1,3);
console.log(result);

/** 3
 * Buatlah sebuah fungsi untuk pembagian divide(number_1, number_2)
 * Parameter adalah number_1, number_2
 * Output adalah pmebagian dari number_1 dibagi number_2
 * Perhatikan jika number_2 kamu isi 0, gunakan if else
 * Ex: console.log(divide(1,3)) => 0.3333
 * console.log(divide(1,0)) => return "error, ndak bisa dibagi 0"
 */

// Tulis di sini
function divide(number_1, number_2) {
    if (number_2 == 0) {
        return "error, ndak bisa dibagi 0";
    } else {
        return number_1 / number_2;
    } 
}

const hasil = divide(3,4);
console.log(hasil);

/** 4
 * Buatlah sebuah fungsi bernama greeting yang menerima satu parameter (nama) 
 *  mengembalikan sebuah string "Hello, [nama]!"
 * Parameter adalah nama
 * Ex: console.log(greeting("reza")) => "Hello, reza"
 */

// Tulis di sini
function greeting(nama){
    return "Hello, " + nama + " !"
}
console.log(greeting("Indras"))

/** 5   
 * Buatlah sebuah fungsi bernama cekGenapGanjil 
 * yang menerima satu parameter (angka) dan mengembalikan string "Genap" 
 * jika angka tersebut genap, dan "Ganjil" jika angka tersebut ganjil.
 * Ex: console.log(cekGenapGanjil(2)) => "Genap"
 * console.log(cekGenapGanjil(123)) => "Ganjil"
 */

// Tulis di sini
function cekGenapGanjil(angka){
    if (angka % 2 === 0 ) {
        return "Genap";
    } else
        return "Ganjil";
}
console.log(cekGenapGanjil(2))
console.log(cekGenapGanjil(123))

/** 6   
 * Buatlah sebuah fungsi bernama bandingkanAngka 
 * yang menerima dua parameter (angka1 dan angka2) dan 
 * mengembalikan string "Angka1 lebih besar" jika angka1 lebih besar dari angka2,
 * "Angka2 lebih besar" jika angka2 lebih besar, dan "Angka sama besar" jika keduanya sama.
 * Ex: console.log(bandingkanAngka(2, 1)) => "2 lebih besar"
 * console.log(bandingkanAngka(2, 2)) => "Angka sama besar"
 * console.log(bandingkanAngka(0, 666)) => "666 lebih besar"
 */

// Tulis di sini
function bandingkanAngka(angka1, angka2){
    if (angka1 > angka2) {
      return "Angka1 lebih besar";
    } else if (angka2 > angka1) {
        return "Angka2 lebih besar";
    } else {
        return "Angka sama besar";
    }
}
console.log(bandingkanAngka(2,1))
console.log(bandingkanAngka(12,123))
console.log(bandingkanAngka(123,123))

/** 7   
 * Buatlah sebuah fungsi bernama reverseString
 * yang menerima satu parameter (string) dan mengembalikan string
 * tersebut dalam kebalikan urutan.
 * Ex: console.log(reverseString("indras")) => "sardni"
 * console.log(reverseString("reza")) => "azer"
 */

// Tulis di sini
function reverseString(str) {
    let arrayKarakter = str.split('');
    let arrayTerbalik = arrayKarakter.reverse();
    let stringTerbalik = arrayTerbalik.join('');
    return stringTerbalik;
}
console.log(reverseString("indras"))
console.log(reverseString("reza"))

/** 8   
 * Buatlah sebuah fungsi bernama cekTahunKabisat 
 * yang menerima satu parameter (tahun) dan mengembalikan true 
 * jika tahun tersebut adalah tahun kabisat, dan false jika tidak. 
 * (Tahun kabisat adalah tahun yang habis dibagi 4, kecuali tahun yang habis dibagi 100 tetapi tidak habis dibagi 400).
 * Ex: console.log(cekTahunKabisat(2012)) => true
 * console.log(cekTahunKabisat(2111)) => false
 */
function cekTahunKabisat(tahun) {
    if ((tahun % 4 === 0) && (tahun % 100 !== 0) || (tahun % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(cekTahunKabisat(2012))
console.log(cekTahunKabisat(2024))
console.log(cekTahunKabisat(1998))

// Tulis di sini

/** 9   
 * Buatlah sebuah fungsi bernama hitungLuasLingkaran yang 
 * menerima satu parameter (jari-jari) dan mengembalikan luas lingkaran dengan rumus π * r^2.
 * Ex: console.log(hitungLuasLingkaran(7)) => 153.938040026
 * console.log(hitungLuasLingkaran(14)) => 615.752160104
 */

// Tulis di sini
function hitungLuasLingkaran(jari_jari) {
    return 22/7 * (jari_jari * jari_jari );
}
console.log(hitungLuasLingkaran(14))
console.log(hitungLuasLingkaran(7))

/** 10   
 * Buatlah sebuah fungsi bernama 
 * filterAngka yang menerima satu parameter 
 * berupa array angka dan mengembalikan array baru yang hanya berisi angka-angka ganjil dari array tersebut.
 * Ex: console.log(filterAngkaGanjil([1,2,3,4,5,6,8])) => [1,3,5]
 * console.log(filterAngkaGanjil([2,4,6,8,10])) => []
 */

function filterAngka(arr) {
    const angkaGanjil = arr.filter(angka => angka % 2 !== 0);
    return angkaGanjil;
}
console.log(filterAngka([1,2,3,4,5,6,8]))
console.log(filterAngka([0,8,1,9,6,5,3,17,18]))
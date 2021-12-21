// js line comment

/*
javascript
block comment

human example:
skeleton = html
hair skin eye color physical appearance = css
moves, actions vs = javascript
 */

/*JS NOTES****
tek tırnak çift tırnak farketmez
window aynı obje gibi herşeyi window ile yapıyormuşuz
alert window.alert ın kısaltılmışı
console.(log,info vs.) ile yazdığımızda f12 ye basıp console altında görebiliriz
noktalı virgül zorunlu değil ama koy sen yine de
var diyerek bütün primitive türleri yazabiliyoruz.
var bisiler diyip o değişkene başka primitive türü de verebiliyoruz
javada da var diye bişey varmış. var karşılığı obje olarak geliyor.
typeof değişken diyince değişkenin hangi türde olduğunu gösteriyor.
*/

/*
window.alert("Ekranda Göster");
alert("kısaltılmış hali");
console.log("console log");
console.info("console info");
console.error("console error");

document.write("document write yazdım"); // html sayfamızda pıtı pıtı görünüyor bu yazdığımız
*/

/*
var sayi = 3;
sayı = true;
var kelime = "kelime";
var isTrue = false;
var karakter = 'A';
alert(sayi);
alert(typeof kelime);
*/

/*
//global değişkenler var
var sayi2 = "44", result;
result = sayi2 / "22";
alert(result);
bu işlemi yaptığımızda otomatik casting yapıyor ve 44 ü 2ye bölüyor.
result = String(sayi2) veya number(sayi2) / "22"; bu şekilde casting yapılabiliyor.
EgmaScript 6... egmascript formatında ilerliyoruz. (ES6 olsa gerek)
var global değişkenler için kullanılıyor.

//local değişkenler --> bunlar fonksiyonlarda kullanılacak. Fonksiyonlarda always let. 
let deneme = "5555";

//constant değişken
const deneme3 = "5555"; //constant
deneme3 = "89234" kabul edilmez çünkü constant deneme3

//var _deneme = 55; var $deneme = 55;

//dizi

var sayi = 55;
var dizi = ["asd", true, sayi];
alert(dizi[2]);
console.log(dizi) tüm diziyi gösterir. kırılmalı gösterir. 

//Object 
var object = {
    adi: "Cemil",
    soyadi: "Duman",
    dil: ["Java", "JS", "HTML"],
};
console.log(object);

var object = {
    adi: "Cemil",
    soyadi: "Duman",
    dil: ["Java", "JS", "HTML"],
};
console.log(object);
console.log(object.adi); direkt olarak objedeki ada eriştik

//NaN ve Undefined
var sayi = 44 / "asd";
NaN veriyor çünkü bölemezsin
console.log(sayi);

var sayi2;
console.log(sayi2);
Undefined veriyor çünkü değer yok

//variable operations
var sayi1 = 12;
var sayi2 = 22;
console.log(sayi1+sayı2); / * - + hepsi olur sayi1++ sayi2-- bunlarda  olur
console.log(sayi1>=sayi2) true veya false döndürüyor. 

//Conditions(if)
var sayi1 = 12;
var sayi2 = 24;

if (sayi1 == sayi2) {
    console.log("eşit")
} else {
    console.log("eşit değil")
}

var sayi1 = 12;
var sayi2 = 12;

if (sayi1 === sayi2) {
    console.log("eşit");
} else {
    console.log("eşit değil");
}

burda 
1 tane eşittir = means that 
2 tane eşittir == means that equals or not bildiğimiz if sayi1 = "12" sayi2 = 12 bu senaryoda da kesinlikle eşit veriyor
3 tane eşittir === means that sayi1 = "12" sayi2 = 12 bu senaryoda eşit değildir veriyor
3. eşittir type equality kıyaslıyor gibi
*/

//***********************************************************************************************
/* //#region
var o bu şu;
bu araya yazdığın hiçbirşey çalışmaz ama düzgünlü görünür...
    //#endregion
    */

//***********************************************************************************************
/*
Scanner,JOptionPane.show BufferedReader (JAVA IO) vs bunların js karşılığı prompt
var sayi = prompt("Lütfen sayı giriniz:")
var sayi = (Number) prompt("Lütfen sayı giriniz:") bu sanırım daha type safe oluyor
console.log(sayi);
*/
//***********************************************************************************************
/*Math sınıfı
var dizi = [1, 5, 9, 12, 7, -3, 8];
console.log(Math.abs(-4));
console.log(Math.sqrt(25));
console.log(Math.pow(2, 5));
console.log(Math.min(-4, 5, 6552, 62, -96));
console.log(Math.max(-4, 5, 6552, 62, -96));
console.log(Math.floor(3.4));
console.log(Math.ceil(-4));
console.log(Math.round(3.5));
console.log(Math.random() * 4 + 1);
console.log(sayi **= 2); sayının karesi anlamında
console.log(Math.min(dizi)); //Güzel denemeydi ama NaN verdi
*/

//***********************************************************************************************
//Example
/*console.log(Math.pow(prompt("Lütfen sayı giriniz: "), 2));
console.log(sayi**=2);

//Escape Charactes = \
alert("\""); " eklemek için escape char kullandık
console.log(4/0) --> Infinity verir
*/
//***********************************************************************************************
/*
//try-catch Block
try {
    let sayi = 5 / 3;
    console.log(sayi);
} catch (e) {
    alert(e.message());
} finally {
    alert("Burası kesin kapatılacak.")
}

//Scientific view, var sayi = 44e6;

//var sayi = 0xFF; 16lık sayı sistemi

var sayi = 0b11; 16 lık sayı sistemi
*/

//***********************************************************************************************
//Metinsel Yapılar
/*
var kelime = "JavaScript";
console.log("length: " + kelime.length);
console.log("küçük harf: " + kelime.toLowerCase); -- > Bu native code diye bir hata verir() koymadığımız için.
console.log("küçük harf: " + kelime.toLowerCase()); --> Olması gereken bu
console.log("büyük harf: " + kelime.toUpperCase());
console.log("indexOf: " + kelime.indexOf("pt")); --> Index of soldan arayarak gidiyor ilk bulduğunu gösteriyor
console.log("indexOf: " + kelime.lastIndexOf("J")); -- > last Index of sağdan arayarak gidiyor ilk bulduğunu gösteriyor
console.log("indexOf: " + kelime.indexOf("J")); mesela bu 0 verir
console.log("indexOf: " + kelime.lastIndexOf("J")); bu is 19 verir
console.log(kelime.substring(4)); -- > 4ten itibaren göster
console.log(kelime.substring(4, 7)); --> 4,7 arasını göster
console.log("trim: " + kelime.trim().length); trim show önden arkadan sil boşlukları
console.log("length: " + kelime.charAt(1)); 0dan başlar unutma
console.log(kelime.replace("jsp", "yenisi")); bir çar sequence i başka bir char sequence ile değiştirmece
console.log("search" + kelime.search("J")); -- > aranılan char 'ın indexini veriyor.
*/
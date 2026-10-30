var iTotal;
var sKupon;

iTotal = prompt("Masukkan Total Belanja(dalam ribu rupiah).", 0);
sKupon = prompt("Punya kupon? (Y)a atau (Tidak)", "Y");

if (iTotal >= 200) {
    if (sKupon == "Y") {
        alert("Diskon 20% dan gratis ongkir");
    } else {
        alert("Diskon 10% dan gratis ongkir");
    }
} else {
    if (sKupon == "Y") {
        alert("Diskon 10%");
    } else {
        alert("Tidak ada diskon");
    }
}

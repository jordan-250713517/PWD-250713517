function fn_ValForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;
    var pesan = "";

    if (nama == "") {
        pesan += "\n* Anda belum mengisikan nama";
    }

    if (email == "") {
        pesan += "\n* Anda belum mengisikan email";
    } else {
        var regexEmail = /^[a-z0-9][a-z0-9\.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9\.\-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/;
        if (!regexEmail.test(email)) {
            pesan += "\n* Format email tidak valid";
        }
    }

    if (umur == "") {
        pesan += "\n* Anda belum mengisikan umur";
    } else if (isNaN(umur) || umur < 17 || umur > 65) {
        pesan += "\n* Umur harus angka antara 17 - 65 tahun";
    }

    if (kategori == "") {
        pesan += "\n* Anda belum memilih paket member";
    }

    if (pesan != "") {
        alert("Peringatan:" + pesan);
        return false;
    } else {
        var info = "";
        if (umur <= 25) {
            info = "paket Pelajar";
        } else {
            info = "Paket umum";
        }

        var pilihan = "";
        switch (kategori) {
            case "S":
                pilihan = "Silver";
                break;
            case "G":
                pilihan = "Gold";
                break;
            case "P":
                pilihan = "Platinum";
                break;
        }

        alert("Terima kasih " + nama + "! Anda terdaftar di acara " + pilihan + " (" + info + ").");
        return true;
    }
}
function tampilkanNilaiButton (value) {
    document.getElementById("display").value += value;
}

function hitung () {
    document.getElementById("display").value = eval(
        document.getElementById("display").value
    );
};

function kosong () {
    document.getElementById("display").value = "";
}
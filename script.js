// Inisialisasi angka
let count = 0;

// Fungsi untuk memperbarui number boxes
function updateNumberBoxes() {
    const digits = count.toString().padStart(4, "0"); // Pastikan ada 4 digit (0000-9999)
    document.getElementById("digit-1").textContent = digits[0];
    document.getElementById("digit-2").textContent = digits[1];
    document.getElementById("digit-3").textContent = digits[2];
    document.getElementById("digit-4").textContent = digits[3];
}

// Tambah angka
document.getElementById("increment-btn").addEventListener("click", () => {
    if (count < 9999) {
        count++;
        updateNumberBoxes();
  }
});

// Reset angka
document.getElementById("reset-btn").addEventListener("click", () => {
    count = 0;
    updateNumberBoxes();
});

// Panggil update pertama kali untuk inisialisasi
updateNumberBoxes();

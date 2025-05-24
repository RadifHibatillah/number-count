// Ambil semua elemen angka yang akan dianimasikan
const counters = document.querySelectorAll(".num");

// Fungsi untuk menghitung naik dari 0 sampai angka tujuan
function animateCountUp(denis) {
  // Ambil nilai target dari atribut data-val, konversi ke number
  const targetValue = Number(denis.getAttribute("data-val"));
  let currentValue = 0; // nilai awal

  // Durasi total animasi (dalam milidetik)
  const totalDuration = 2000;
  // Hitung jeda waktu antarpenambahan satu angka
  const stepTime = Math.floor(totalDuration / targetValue);

  // Buat interval untuk update angka
  const timer = setInterval(() => {
    currentValue += 1; // tingkatkan angka
    denis.textContent = currentValue; // tampilkan di halaman

    // Jika sudah mencapai target, hentikan interval
    if (currentValue >= targetValue) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Tunggu sampai DOM benar-benar siap
document.addEventListener("DOMContentLoaded", () => {
  // Jalankan animasi untuk setiap elemen .num
  counters.forEach((counter) => {
    animateCountUp(counter);
  });
});

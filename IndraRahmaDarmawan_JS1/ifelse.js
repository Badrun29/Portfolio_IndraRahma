let nilai_ujian = 75;


if (nilai_ujian >= 70) {
  console.log("Selamat! Anda lulus.");
} else {
  console.log("Maaf, Anda tidak lulus.");
  
// nested if 
  if (nilai_ujian >= 50) {
    console.log("Tetapi Anda bisa mengikuti ujian remedial.");
  } else {
    console.log("Anda harus belajar lebih giat lagi.");
  }
}

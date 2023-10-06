function latihanModulo(angka) {
    if (angka % 2 === 0) {
      return "Genap";
    } else {
      return "Ganjil";
    }
  }
  
  let angka = 10;
  let hasil = latihanModulo(angka);
  console.log(angka + " adalah bilangan " + hasil);
  
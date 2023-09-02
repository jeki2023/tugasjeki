
// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function getRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  // Membuat array dengan 100 nilai acak
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(getRandomValue());
  }
  
  // Cetak array
  console.log(randomArray);

  var randomArray = [/* isi array dengan 100 nilai acak */]; // Isi dengan 100 nilai acak Anda

  var genapArray = [];
  var ganjilArray = [];
  
  for (var i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
      // Jika indeks genap, tambahkan ke genapArray
      genapArray.push(randomArray[i]);
    } else {
      // Jika indeks ganjil, tambahkan ke ganjilArray
      ganjilArray.push(randomArray[i]);
    }
  }
  
  // Cetak array genap dan ganjil
  console.log("Array Indeks Genap:", genapArray);
  console.log("Array Indeks Ganjil:", ganjilArray);
  
// Array yang telah dibuat sebelumnya
var genapArray = [/* isi array genap */]; // Isi dengan nilai-nilai genap
var ganjilArray = [/* isi array ganjil */]; // Isi dengan nilai-nilai ganjil

// Menghitung nilai minimum dan maksimum
var minGenap = Math.min(...genapArray);
var maxGenap = Math.max(...genapArray);

var minGanjil = Math.min(...ganjilArray);
var maxGanjil = Math.max(...ganjilArray);

// Menghitung total
var totalGenap = genapArray.reduce(function (acc, val) {
  return acc + val;
}, 0);

var totalGanjil = ganjilArray.reduce(function (acc, val) {
  return acc + val;
}, 0);

// Menghitung rata-rata
var rataRataGenap = totalGenap / genapArray.length;
var rataRataGanjil = totalGanjil / ganjilArray.length;

// Menampilkan hasil
console.log("Array Genap:");
console.log("Nilai Minimum:", minGenap);
console.log("Nilai Maksimum:", maxGenap);
console.log("Total:", totalGenap);
console.log("Rata-rata:", rataRataGenap);

console.log("\nArray Ganjil:");
console.log("Nilai Minimum:", minGanjil);
console.log("Nilai Maksimum:", maxGanjil);
console.log("Total:", totalGanjil);
console.log("Rata-rata:", rataRataGanjil);

// Array yang telah dibuat sebelumnya
var genapArray = [/* isi array genap */]; // Isi dengan nilai-nilai genap
var ganjilArray = [/* isi array ganjil */]; // Isi dengan nilai-nilai ganjil

// Menghitung nilai minimum dan maksimum
var minGenap = Math.min(...genapArray);
var maxGenap = Math.max(...genapArray);

var minGanjil = Math.min(...ganjilArray);
var maxGanjil = Math.max(...ganjilArray);

// Menghitung total
var totalGenap = genapArray.reduce(function (acc, val) {
  return acc + val;
}, 0);

var totalGanjil = ganjilArray.reduce(function (acc, val) {
  return acc + val;
}, 0);

// Menghitung rata-rata
var rataRataGenap = totalGenap / genapArray.length;
var rataRataGanjil = totalGanjil / ganjilArray.length;

// Membandingkan nilai-nilai
if (minGenap > minGanjil) {
  console.log("Nilai minimum lebih besar pada array genap");
} else if (minGanjil > minGenap) {
  console.log("Nilai minimum lebih besar pada array ganjil");
} else {
  console.log("Nilai minimum sama pada kedua array");
}

if (maxGenap > maxGanjil) {
  console.log("Nilai maksimum lebih besar pada array genap");
} else if (maxGanjil > maxGenap) {
  console.log("Nilai maksimum lebih besar pada array ganjil");
} else {
  console.log("Nilai maksimum sama pada kedua array");
}

if (totalGenap === totalGanjil) {
  console.log("Total memiliki nilai yang sama antara array genap dan ganjil");
} else {
  console.log("Total memiliki nilai yang berbeda antara array genap dan ganjil");
}

if (rataRataGenap > rataRataGanjil) {
  console.log("Rata-rata lebih besar pada array genap");
} else if (rataRataGanjil > rataRataGenap) {
  console.log("Rata-rata lebih besar pada array ganjil");
} else {
  console.log("Rata-rata sama pada kedua array");
}

// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function getRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  // Membuat array dengan 100 nilai acak
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(getRandomValue());
  }
  
  // Membuat dua array untuk indeks genap dan ganjil
  var genapArray = [];
  var ganjilArray = [];
  
  for (var i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
      genapArray.push(randomArray[i]);
    } else {
      ganjilArray.push(randomArray[i]);
    }
  }
  
  // Menghitung nilai minimum dan maksimum pada array genap dan ganjil
  var minGenap = Math.min(...genapArray);
  var maxGenap = Math.max(...genapArray);
  var minGanjil = Math.min(...ganjilArray);
  var maxGanjil = Math.max(...ganjilArray);
  
  // Menghitung total pada array genap dan ganjil
  var totalGenap = genapArray.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  
  var totalGanjil = ganjilArray.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  
  // Menghitung rata-rata pada array genap dan ganjil
  var rataRataGenap = totalGenap / genapArray.length;
  var rataRataGanjil = totalGanjil / ganjilArray.length;
  
  // Menampilkan hasil
  console.log("Array dengan 100 nilai acak:");
  console.log(randomArray);
  
  console.log("\nArray Genap (50 nilai):");
  console.log("Nilai Minimum:", minGenap);
  console.log("Nilai Maksimum:", maxGenap);
  console.log("Total:", totalGenap);
  console.log("Rata-rata:", rataRataGenap);
  
  console.log("\nArray Ganjil (50 nilai):");
  console.log("Nilai Minimum:", minGanjil);
  console.log("Nilai Maksimum:", maxGanjil);
  console.log("Total:", totalGanjil);
  console.log("Rata-rata:", rataRataGanjil);
  
  // Membandingkan nilai-nilai
  console.log("\nPerbandingan antara array Genap dan Ganjil:");
  if (minGenap > minGanjil) {
    console.log("Nilai minimum lebih besar pada array genap");
  } else if (minGanjil > minGenap) {
    console.log("Nilai minimum lebih besar pada array ganjil");
  } else {
    console.log("Nilai minimum sama pada kedua array");
  }
  
  if (maxGenap > maxGanjil) {
    console.log("Nilai maksimum lebih besar pada array genap");
  } else if (maxGanjil > maxGenap) {
    console.log("Nilai maksimum lebih besar pada array ganjil");
  } else {
    console.log("Nilai maksimum sama pada kedua array");
  }
  
  if (totalGenap === totalGanjil) {
    console.log("Total memiliki nilai yang sama antara array genap dan ganjil");
  } else {
    console.log("Total memiliki nilai yang berbeda antara array genap dan ganjil");
  }
  
  if (rataRataGenap > rataRataGanjil) {
    console.log("Rata-rata lebih besar pada array genap");
  } else if (rataRataGanjil > rataRataGenap) {
    console.log("Rata-rata lebih besar pada array ganjil");
  } else {
    console.log("Rata-rata sama pada kedua array");
  }
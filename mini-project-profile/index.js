const chalk = require("chalk");

// Data profil
const nama = "Gilang";
const email = "gilang@email.com";
const goal = "Web3 Developer";
const fase = "0 - Persiapan";
const mulai = new Date().toLocaleDateString("id-ID");

// Warna
const purple = chalk.hex("#8B5CF6");
const cyan = chalk.hex("#06B6D4");
const green = chalk.green;
const dim = chalk.gray;

// Border
const line = purple("═".repeat(42));
const side = purple("║");

// Tampilkan kartu
console.log("");
console.log(purple("╔") + line + purple("╗"));
console.log(side + cyan("     🚀 Developer Profile Card        ") + side);
console.log(purple("╠") + line + purple("╣"));
console.log(side + `  Nama    : ${green(nama)}                  ` + side);
console.log(side + `  Email   : ${dim(email)}          ` + side);
console.log(side + `  Goal    : ${cyan(goal)}            ` + side);
console.log(side + `  Fase    : ${dim(fase)}              ` + side);
console.log(side + `  Mulai   : ${dim(mulai)}            ` + side);
console.log(purple("╠") + line + purple("╣"));
console.log(side + green("  ✅ VS Code   ✅ Terminal   ✅ Git   ") + side);
console.log(side + green("  ✅ GitHub    ✅ Node.js    ✅ npm   ") + side);
console.log(purple("╚") + line + purple("╝"));
console.log("");

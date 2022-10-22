// const fs = require("fs");

// console.log("Início");

// fs.writeFileSync("arquivo.txt", "Oi");

// console.log("Fim");

const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo.txt", "Oi", function (err) {
  setTimeout(function () {
    console.log("Arquivo criado!");
  }, 1000);
});

console.log("Fim");
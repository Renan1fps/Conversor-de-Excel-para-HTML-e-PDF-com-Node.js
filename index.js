const fs = require("fs");
fs.readFile("./texto.txt", { encoding: "utf-8" }, (erro, daddos) => {
  if (erro) {
    console.log("Ocorreum um erro" + erro.message);
  } else {
    console.log(daddos);
  }
});
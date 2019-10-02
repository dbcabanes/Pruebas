let prom1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("Promesa terminada");
    resolve()
    //reject()
  }, 1500);
});

prom1.then(
  
  function() {
    console.log("Todo bin");
  },
  
  function() {
    console.log("Todo mal");
  }
);

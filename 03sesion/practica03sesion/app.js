const fs = require('fs');

//?leer el contenido de un archivo json
fs.readFile('practicaFileSystem.json', 'utf-8', (err, contenido) => {
  if (err) {
    throw err;
  }
  console.log(contenido);
});

//?agregar contenido al final de un archivo
fs.appendFile('practicaFileSystem.json', '"{read": true}', (err)=>{
    if (err){
        throw err
    }
    console.log('Archivo actualizado.')
})


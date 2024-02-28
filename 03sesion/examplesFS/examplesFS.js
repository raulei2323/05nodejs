
const { error } = require('console')
const fs = require('fs')

// fs.writeFile('./test.txt', 'Hola koders!', (error) => {
//     if (error) throw error
//     console.log('Archivo creado correctamente')
// })

// fs.readFile('./test.txt', 'utf-8', (error, data) =>{
//     if (error) throw error
//     console.log(`El contenido del archivo es ${data}`)
// })

// fs.appendFile('./test.txt', 'Los saludo desde node', (error) => {
//     if (error) throw error
//     console.log('Archivo modificado exitosamente')
// })

// fs.unlink('./test.txt', (error) => {
//     if (error) throw error
//     console.log('Archivo borrado correctamente')
// })
// fs.mkdir('./newfolder', (error) =>{
//     if(error) throw error
//     console.log('Directorio creado correctamente')
// })
// fs.writeFile('./newfolder/test2.txt', 'Hola koders!', (error) => {
//         if (error) throw error
//         console.log('Archivo creado correctamente')
//     })
//? withfiletyps si es true nos muestra la metadata del archivo
//?el for each itera sobre los archivos del directorio y los muestra en este caso solo hay uno
// fs.readdir('./newfolder',{withFileTypes: false}, (error, files)=>{
//     if(error) throw eroor 
//     files.forEach(file => {
//         console.log(file)
//     });
// })
fs.rmdir('./newfolder', {recursive: true}, (error) =>{
    if(error) throw error
    console.log('Directorio borrado correctamente')
})




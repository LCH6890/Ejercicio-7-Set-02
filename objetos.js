const obj = {
    nombre: "Lorena",
    apellido: "Chamorro",
    edad: 32,
    altura: 1.64,
    isDeveloper: true,
}
console.log(obj.edad)

const list = [{ ...obj 
},{
    nombre: "Ada",
    apellido: "Llupart",
    edad: 33,
    altura: 1.71,
    isDeveloper: false,
},{
    nombre: "Ignacio",
    apellido: "Del Río",
    edad: 31,
    altura: 1.75,
    isDeveloper: false,
}]

console.log(list)

const ListaOrdenada= list.sort((a, b) => b.edad - a.edad)
console.log(ListaOrdenada)

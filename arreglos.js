var animales = ['🐻','🦁','🐣'];
animales.push('🐟');
animales.push('🐘');
animales[2];
animales.unshift('🐶');

//animales.pop('🐣'); No es la manera de sacar un elemento de una posicion en un vector


for (var i=0; i<animales.length;i++) {
    console.log('animal:', animales[i])
}

var admitidos = animales.filter(function(animal){

    return animal != '🐣'; // La manera para eliminar el pollo de una posición específica. 

});

admitidos;


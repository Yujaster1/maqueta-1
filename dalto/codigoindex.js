array1 = ["maria","josefa","roberta"]
array2 = ["pedro","marcelo","array1","pepe"]

parahijitos:
for (let array in array2){
    if (array == 2) {

        for (let array of array1){
            document.write(array + "<br>");
            break parahijitos; // para salir del segundo for cuando encuentra la palabra "array1" en array2
        }

    }   
    else {
        document.write(array2[array] + "<br>");
    }
}
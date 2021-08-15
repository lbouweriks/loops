const colours=["yellow", "blue", "red", "orange"]

let i=0

while (i<colours.length){
    console.log(colours[i])
    i++
}

for (i=0; i<colours.length; i++){
    console.log(colours[i])
}

colours.forEach(colour =>
    console.log(colour)
)
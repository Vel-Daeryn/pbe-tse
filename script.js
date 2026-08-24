const createStars = (amount, width, height) => {
    boxShadow = []

    for(i = 1; i <= amount; i++) {
        x = Math.floor(Math.random() * width)
        y = Math.floor(Math.random() * height)

        boxShadow.push(`${x}px ${y}px white`)
    }

    return boxShadow.join(", ")
}

smallStars = createStars(1500, 3840, 2160)
mediumStars = createStars(875, 3840, 2160)
largeStars = createStars(425, 3840, 2160)

console.log(smallStars)
console.log(mediumStars)
console.log(largeStars)
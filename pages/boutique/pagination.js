let url = new URLSearchParams(window.location.search)

const titlePage = document.getElementById("title")

const container = document.getElementById("container")


if(url.get("category") === "bijoux") {
    titlePage.textContent = `${url.get("category")} & bien-être`
} else if(url.get("category") === "fumigation") {
    titlePage.textContent = `${url.get("category")} & sel`
} else if(url.get("category") === "livres") {
    titlePage.textContent = `${url.get("category")} & grimoires`
} else if(url.get("category") === "huiles") {
    titlePage.textContent = `${url.get("category")} essentielles`
} else {
    titlePage.textContent = `${url.get("category")}`
}

fetch("../../res/db/data.json")
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        console.log(data[0].category)
        verification(data)
    })
    .catch((error) => console.error("Erreur lors du chargement de la base de donnée"))

const verification = (data) => {
    data.forEach(el => {
      if(el.category === url.get("category")) {
        console.log(true)
        pagination(el)
      } else {
        console.log(false)
      }  
    })
}

const pagination = (data) => {
    let productElement
    productElement = document.createElement("a")
    productElement.setAttribute("href", `./objet.html?items=${data.id}`)
    productElement.setAttribute("class", "object-link")

    container.appendChild(productElement)

    let productElementContainer
    productElementContainer = document.createElement("div")

    productElement.appendChild(productElementContainer)

    let productElementImg
    productElementImg = document.createElement("img")
    productElementImg.setAttribute("src", `${data.img}`)
    productElementImg.setAttribute("alt", `Image du produit : ${data.name}`)
    
    productElementContainer.appendChild(productElementImg)
    
    let productElementTitle
    productElementTitle = document.createElement("p")
    productElementTitle.setAttribute("class", "title")
    productElementTitle.textContent = `${data.name}`

    productElementContainer.appendChild(productElementTitle)

    let productElementPrice
    productElementPrice = document.createElement("span")
    productElementPrice.setAttribute("class", "price-tag")
    productElementPrice.textContent = `${(data.price / 100).toFixed(2)}€`

    productElementContainer.appendChild(productElementPrice)

}

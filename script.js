function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profileyellow.PNG")
    img.setAttribute(
      "alt",
      "Foto de Matheus Dev sorrindo, usando camisa branca, barba curta e fundo amarelo."
    )
  } else {
    img.setAttribute("src", "./assets/profilepurple.PNG")
    img.setAttribute("alt", "Foto de Matheus Dev sorrindo, usando camisa branca, barba curta e fundo roxo.")
  }
}

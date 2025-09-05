import bolos from "../data/bolos.json"

/** @type HTMLUListElement **/
const bolosContainer = document.getElementById("bolos")

bolos.forEach((bolo) => {
  const li = document.createElement("li");
  li.classList.add("bolo_card");

  li.innerHTML = `
    <img class="bolo_image" src="${bolo.image}"/>
    <div class="bolo_content">
      <h3 class="bolo_title">${bolo.title}</h3>
      <p class="bolo_price">R$ ${bolo.price.toFixed(2)}</p>
    </div>
  `;

  bolosContainer.appendChild(li);
});

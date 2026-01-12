import fetchImages from "./fetchApis";

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
modal.style.display = "none";

const imageGrid = document.querySelector(".image-grid");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let imagesData = [];

// Função para buscar e exibir os dados do endpoint
async function displayImages() {
  const data = await fetchImages();
  imagesData = data; // Armazena os dados para navegação
  try {
    const postsList = data
      .map((item, index) => {
        // Added index to map
        const description = item.description || item.descricao;
        const imgUrl = item.imgUrl || item.img_url;
        return `
            <article data-index="${index}" data-description="${description}">
              <figure>
                <img src="${imgUrl}" alt="${item.alt}" />
              </figure>
            </article>
          `;
      })
      .join("");
    imageGrid.insertAdjacentHTML("beforeend", postsList);

    // Adicionando eventos de clique para cada imagem carregada
    addImageClickEvents();
  } catch (error) {
    console.error("Erro ao popular página", error);
  }
}

function updateModal(index) {
  const item = imagesData[index];
  if (!item) return;

  const description = item.description || item.descricao;
  const imgUrl = item.imgUrl || item.img_url;

  modalImg.src = imgUrl;
  modalImg.alt = item.alt;
  captionText.innerHTML = `<p>${description || item.alt}</p>`;
  currentIndex = index;
}

// Função para adicionar os eventos de clique às imagens
function addImageClickEvents() {
  const articles = document.querySelectorAll(".image-grid article");
  articles.forEach((article) => {
    article.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      modal.style.display = "flex";
      updateModal(index);
    });
  });
}

// Eventos de navegação
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita fechar o modal ao clicar no botão
  currentIndex = currentIndex > 0 ? currentIndex - 1 : imagesData.length - 1;
  updateModal(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita fechar o modal ao clicar no botão
  currentIndex = currentIndex < imagesData.length - 1 ? currentIndex + 1 : 0;
  updateModal(currentIndex);
});

// Evento de fechar o modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Fechar o modal clicando fora dele
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Chamar a função para buscar e exibir as imagens ao carregar a página
document.addEventListener("DOMContentLoaded", displayImages);

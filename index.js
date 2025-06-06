const legenda = document.getElementById("legendaID");
const items = document.getElementById("items");
const fas = document.getElementById("fas");
const stars = document.getElementById("stars");
const input = document.getElementById("input");
const inputLink = document.getElementById("input-link");
const depo = document.getElementById("profile-depo");
const sair = document.getElementById("sair");

const aboutFotos = document.getElementById("aboutFotos");
const profileFotos = document.getElementById("profile-fotos");

const aboutVideos = document.getElementById("aboutVideos");
const profileVideos = document.getElementById("profile-videos");

const fotosSeta = document.getElementById("fotos-seta");
const videosSeta = document.getElementById("videos-seta");
const deposSeta = document.getElementById("depos-seta");

const fotosPopup = document.getElementById("fotosPopup");
const videosPopup = document.getElementById("videosPopup");
const depoPopup = document.getElementById("depoPopup");
const boloPopup = document.getElementById("boloPopup");

const verDepos = document.getElementById("ver-depos");
const verVideos = document.getElementById("ver-videos");
const verFotos = document.getElementById("ver-fotos");

// Legend hover functionality: Shows and hides the legend on hover
items.addEventListener("mouseover", function () {
  legenda.setAttribute("class", "legenda");
});

items.addEventListener("mouseleave", function () {
  legenda.setAttribute("class", "legenda-none");
});

// Star functionality: Toggles the star count in localStorage and updates the UI
fas.onclick = function () {
  if (localStorage.getItem("star") === "1") {
    localStorage.setItem("star", "0");
    stars.innerText = `⭐ ${localStorage.getItem("star")}`;
  } else {
    localStorage.setItem("star", "1");
    stars.innerText = `⭐ ${localStorage.getItem("star")}`;
  }
};

// Smooth scroll functionality: Scrolls to specific sections smoothly
aboutFotos.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

aboutVideos.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

profileFotos.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

profileVideos.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

depo.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

// Popup functionality: Displays popups for photos, videos, testimonials, and logout
verDepos.onclick = function () {
  depoPopup.setAttribute("class", "depo-popup-block");
  setTimeout(function () {
    depoPopup.setAttribute("class", "depo-popup");
  }, 2000);
};

verFotos.onclick = function () {
  fotosPopup.setAttribute("class", "fotos-popup-block");
  setTimeout(function () {
    fotosPopup.setAttribute("class", "fotos-popup");
  }, 2000);
};

verVideos.onclick = function () {
  videosPopup.setAttribute("class", "videos-popup-block");
  setTimeout(function () {
    videosPopup.setAttribute("class", "videos-popup");
  }, 2000);
};

sair.onclick = function () {
  boloPopup.setAttribute("class", "bolo-popup-block");
  setTimeout(function () {
    boloPopup.setAttribute("class", "bolo-popup");
  }, 2000);
};

fotosSeta.onclick = function () {
  if (fotosSeta.getAttribute("class") === "right") {
    fotosSeta.setAttribute("class", "bottom");
  } else {
    fotosSeta.setAttribute("class", "right");
  }
};

videosSeta.onclick = function () {
  if (videosSeta.getAttribute("class") === "right") {
    videosSeta.setAttribute("class", "bottom");
  } else {
    videosSeta.setAttribute("class", "right");
  }
};

deposSeta.onclick = function () {
  if (deposSeta.getAttribute("class") === "right") {
    deposSeta.setAttribute("class", "bottom");
  } else {
    deposSeta.setAttribute("class", "right");
  }
};

// Input search functionality: Updates the search link dynamically based on input value
input.onchange = function () {
  inputLink.setAttribute(
    "href",
    `https://www.google.com/search?q=${input.value}`
  );
};

// Onload functionality: Initializes the star count from localStorage
window.onload = () => {
  if (localStorage.hasOwnProperty("star")) {
    stars.innerText = `⭐ ${localStorage.getItem("star")}`;
  }
};
// Depoimentos (Testemunhos) - Mockup de dados

const mockDepoimentos = [
    { autor: "Amigo Secreto", avatar: "images/avatarhd.avif", texto: "Super gente boa, um profissional dedicado! Contratem ele!", data: "1 hora atrás" },
    { autor: "Mãe do Jhonnatan", avatar: "images/mother-woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg", texto: "Meu filho é um gênio, bonito e talentoso. O melhor programador que conheço! Beijo, filho!", data: "Ontem" },
    { autor: "Ex-Chefe Misterioso", avatar: "images/03-512.webp", texto: "Trabalhou comigo e sempre entregou tudo com excelência. Recomendo.", data: "2 dias atrás" }
];
let depoimentosExibidos = 0;
const listaDepoimentosElement = document.getElementById("lista-depoimentos");
const verDeposLink = document.getElementById("ver-depos"); // Seu link/botão "ver-depos"
const countDepoimentosElement = document.getElementById("count-depoimentos");
const depoimentosContent = document.getElementById("depoimentos-content"); // Container dos depoimentos

if(countDepoimentosElement) countDepoimentosElement.textContent = `(${mockDepoimentos.length})`; // Atualiza contagem inicial

function criarDepoimentoHTML(depoimento) {
    return `
        <li class="depoimento-item" style="border-bottom: 1px solid #eee; padding: 10px 0; display: flex; align-items: flex-start;">
            <img src="${depoimento.avatar || 'images/default-avatar.png'}" alt="Avatar de ${depoimento.autor}" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
            <div style="flex-grow: 1;">
                <p style="margin:0; font-size: 0.9em;"><strong><a href="#" style="color: #245A9C;">${depoimento.autor}</a></strong> <span style="color: #777; font-size: 0.8em;">- ${depoimento.data}</span></p>
                <p style="margin:5px 0 0 0; font-size: 0.95em;">${depoimento.texto}</p>
            </div>
        </li>
    `;
}

function carregarDepoimentos() {
    if (!listaDepoimentosElement) return;
    listaDepoimentosElement.innerHTML = ""; // Limpa depoimentos antigos se for recarregar
    mockDepoimentos.forEach(depo => {
        listaDepoimentosElement.innerHTML += criarDepoimentoHTML(depo);
    });
    depoimentosExibidos = mockDepoimentos.length;
}

// Seu botão/link `verDepos` agora pode controlar o toggle e carregar
if (verDeposLink && depoimentosContent) {
    // Se já houver clique para o popup, você pode remover ou integrar
    // Substituindo o onclick do popup pelo toggle E carregamento:
    verDeposLink.onclick = function (event) {
        event.preventDefault(); // Previne comportamento de link

        // Toggle da seta (se estiver associado)
        if (deposSeta && deposSeta.getAttribute("class") === "right") {
            deposSeta.setAttribute("class", "bottom");
        } else if (deposSeta) {
            deposSeta.setAttribute("class", "right");
        }
        // Toggle do conteúdo da seção de depoimentos
        depoimentosContent.classList.toggle("visible");

        // Carrega os depoimentos se a lista estiver vazia e o container visível
        if (depoimentosContent.classList.contains("visible") && listaDepoimentosElement.children.length === 0) {
            carregarDepoimentos();
        }
    };
}
// Opcional: Botão "Deixar um depoimento" (simula um formulário)
const escreverDepoBtn = document.getElementById('escrever-depoimento-btn');
if (escreverDepoBtn) {
    escreverDepoBtn.onclick = function() {
        alert("Obrigado pelo interesse! Esta função será implementada em breve. Por enquanto, entre em contato por e-mail para deixar seu depoimento. :)");
    }
}
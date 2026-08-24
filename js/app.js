// EDITA AQUÍ: nombres, fecha y canción.
const CONFIG = {
  nombreElla: "mi Pirbull",
  nombreMio: "Oso",
  fechaInicioRelacion: "2024-07-24",
  cancion: "audio/nuestra-cancion.mp3"
};

// EDITA AQUÍ: momentos de la línea de tiempo. No uses fechas si no las recuerdas.
const recuerdosTimeline = [
  {
    momento: "Un comienzo bonito",
    titulo: "El inicio de nosotros",
    descripcion: "Así empezó esta historia de Pirbull y Oso, sin saber todo lo bonito que iba a venir después.",
    foto: "images/foto-03.jpeg",
    alt: "Recuerdo de Pirbull y Oso cuando todo empezó"
  },
  {
    momento: "Un recuerdo especial",
    titulo: "Más fotos, más complicidad",
    descripcion: "Fuimos llenando los días de risas, miradas, planes y esa forma tan nuestra de cuidarnos.",
    foto: "images/foto-10.jpeg",
    alt: "Recuerdo especial de Pirbull y Oso"
  },
  {
    momento: "Lo que seguimos construyendo",
    titulo: "Lo que seguimos construyendo",
    descripcion: "Todavía quedan muchas fotos, muchos abrazos y muchos capítulos de Pirbull y Oso por vivir.",
    foto: "images/foto-17.jpeg",
    alt: "Recuerdo reciente de Pirbull y Oso"
  }
];

// EDITA AQUÍ: fotos y frases de la galería.
const galeriaRecuerdos = [
  { foto: "images/foto-01.jpeg", titulo: "Pirbull y Oso", frase: "La prueba de que lo nuestro tiene su propia manera de brillar.", alt: "Foto de Pirbull y Oso" },
  { foto: "images/foto-02.jpeg", titulo: "Mi lugar bonito", frase: "Hay fotos que no solo se miran: se sienten.", alt: "Recuerdo de Pirbull y Oso" },
  { foto: "images/foto-03.jpeg", titulo: "Ese momento", frase: "Este recuerdo todavía me hace sonreír.", alt: "Recuerdo especial de Pirbull y Oso" },
  { foto: "images/foto-04.jpeg", titulo: "Nosotros", frase: "Contigo, lo sencillo también se vuelve inolvidable.", alt: "Foto juntos" },
  { foto: "images/oso.jpeg", titulo: "Mi Pirbull", frase: "Una foto pequeña para un sentimiento gigante.", alt: "Recuerdo de mi Pirbull" },
  { foto: "images/foto-06.jpeg", titulo: "Oso feliz", frase: "Me gusta pensar que aquí estábamos creando historia.", alt: "Recuerdo de Oso y Pirbull" },
  { foto: "images/foto-07.jpeg", titulo: "Nuestro mundo", frase: "Hay momentos que no se repiten, pero se quedan.", alt: "Momento especial juntos" },
  { foto: "images/foto-08.jpeg", titulo: "Comida", frase: "Nuestra comida favorita.", alt: "Recuerdo alegre juntos" },
  { foto: "images/foto-09.jpeg", titulo: "Siempre tú", frase: "Uno de esos momentos que quiero recordar siempre.", alt: "Foto especial de Pirbull" },
  { foto: "images/foto-10.jpeg", titulo: "Gracias", frase: "Gracias por existir en mis días.", alt: "Recuerdo de amor" },
  { foto: "images/foto-11.jpeg", titulo: "Complicidad", frase: "Me encanta esa forma nuestra de entendernos sin explicar tanto.", alt: "Recuerdo de complicidad" },
  { foto: "images/foto-12.jpeg", titulo: "Un abrazo", frase: "Si pudiera guardar este momento, lo tendría cerca siempre.", alt: "Recuerdo romántico" },
  { foto: "images/foto-13.jpeg", titulo: "Mi persona", frase: "Eres mi pensamiento bonito incluso en los días normales.", alt: "Foto de mi persona favorita" },
  { foto: "images/foto-14.jpeg", titulo: "Otro capítulo", frase: "Cada foto nuestra parece decir: sigamos.", alt: "Foto de otro capítulo juntos" },
  { foto: "images/foto-15.jpeg", titulo: "Cariño", frase: "Pirbull y Oso, con su manera rara y bonita de quererse.", alt: "Foto de cariño" },
  { foto: "images/foto-16.jpeg", titulo: "Memoria", frase: "Esto también se queda en mi corazón.", alt: "Foto para recordar" },
  { foto: "images/foto-17.jpeg", titulo: "Juntos", frase: "Lo mejor no es la foto, es saber que estabas ahí conmigo.", alt: "Foto juntos" },
  { foto: "images/foto-18.jpeg", titulo: "Mi suerte", frase: "Qué suerte coincidir contigo, Pirbull.", alt: "Foto de Pirbull" },
  { foto: "images/foto-19.jpeg", titulo: "Oso te ama", frase: "Y aunque suene simple, es de las verdades más grandes que tengo.", alt: "Recuerdo de amor de Oso" },
  { foto: "images/foto-20.jpeg", titulo: "Continuará", frase: "Todavía nos faltan demasiados recuerdos por crear.", alt: "Recuerdo que continuará" },
  { foto: "images/foto-21.jpeg", titulo: "Detalle", frase: "Amo las pequeñas cosas que hacen que seas tú.", alt: "Detalle especial" },
  { foto: "images/foto-22.jpeg", titulo: "Calma", frase: "Contigo hasta el silencio puede sentirse bonito.", alt: "Recuerdo tranquilo juntos" },
  { foto: "images/foto-23.jpeg", titulo: "Vida", frase: "Me gusta vivir cosas contigo y después volver a recordarlas.", alt: "Recuerdo de vida juntos" },
  { foto: "images/foto-24.jpeg", titulo: "Mi Pirbull", frase: "Te miro y entiendo por qué todo esto vale la pena.", alt: "Foto de mi Pirbull" },
  { foto: "images/foto-25.jpeg", titulo: "Oso y Pirbull", frase: "Nuestro cuento no es perfecto, es nuestro. Y eso lo hace especial.", alt: "Foto de Oso y Pirbull" },
  { foto: "images/foto-26.jpeg", titulo: "Para siempre en mí", frase: "Hay recuerdos que se vuelven casa.", alt: "Recuerdo final de la galería" }
];

const momentosEspeciales = [
  {
    foto: "images/foto-06.jpeg",
    alt: "Momento especial de Pirbull y Oso",
    frase: "Uno de esos momentos que Oso quiere recordar siempre."
  },
  {
    foto: "images/foto-12.jpeg",
    alt: "Momento inolvidable de Pirbull y Oso",
    frase: "Contigo, Pirbull, aprendí que los mejores momentos no tienen que ser perfectos para convertirse en inolvidables."
  },
  {
    foto: "images/foto-18.jpeg",
    alt: "Recuerdo bonito de Pirbull",
    frase: "Hay abrazos que parecen casa, y para Oso muchas veces casa eres tú."
  },
  {
    foto: "images/foto-24.jpeg",
    alt: "Otro recuerdo especial de Pirbull y Oso",
    frase: "Me gusta que lo nuestro tenga fotos, chistes, manías y esa ternura que solo entendemos los dos."
  }
];

// EDITA AQUÍ: razones.
const razones = [
  { titulo: "Tu sonrisa.", mensaje: "Porque incluso en los días complicados tienes una manera de hacer que todo se sienta un poquito mejor." },
  { titulo: "Mi Pirbull.", mensaje: "Porque ese apodo ya no es solo un apodo: es una forma bonita de decir hogar." },
  { titulo: "Tu forma de mirar.", mensaje: "Porque cuando me miras siento que el mundo baja el volumen y solo quedamos nosotros." },
  { titulo: "Tu ternura.", mensaje: "Porque hay detalles tuyos que le recuerdan a Oso que amar también es cuidar con calma." },
  { titulo: "Tu compañía.", mensaje: "Porque contigo hasta los planes simples se sienten como algo especial." },
  { titulo: "Tu risa.", mensaje: "Porque me gusta coleccionarla en la memoria como una de mis canciones favoritas." },
  { titulo: "Tu paciencia.", mensaje: "Porque me enseñas que el amor también se construye con comprensión." },
  { titulo: "Tu energía.", mensaje: "Porque contigo la vida se siente más despierta, más bonita y más posible." },
  { titulo: "Tu corazón.", mensaje: "Porque hay bondad en ti incluso cuando no te das cuenta." },
  { titulo: "Ser tú.", mensaje: "Porque Oso no necesita que seas perfecta; ama la persona real que eres." }
];

// EDITA AQUÍ: frases del botón "cuando me extrañes".
const mensajesCuandoMeExtranes = [
  "Pirbull, recuerda que sin importar dónde esté, Oso está pensando en ti.",
  "Si el día pesa, imagina que Oso te abraza suave y te dice: aquí estoy.",
  "Me haces falta de esas formas bonitas que no caben en una sola frase.",
  "Ojalá pudiera aparecer un minuto solo para verte sonreír.",
  "Hay canciones que me llevan directo a ti, mi Pirbull.",
  "No estás sola: una parte de Oso siempre te acompaña.",
  "Si me extrañas, mira una foto nuestra y acuérdate de todo lo que falta por vivir.",
  "Te elegiría incluso en un día común, incluso sin razones, incluso otra vez.",
  "A veces cierro los ojos y vuelvo a uno de nuestros momentos felices.",
  "Pirbull sigue siendo una de mis maneras favoritas de pensar en el amor.",
  "Que esta frase llegue como un abrazo pequeño de Oso.",
  "Me encanta coincidir contigo en esta vida.",
  "Todavía tengo muchos planes que quiero cumplir a tu lado.",
  "Si pudiera guardarte una luz para cada noche difícil, lo haría.",
  "Gracias por ser el pensamiento bonito de Oso."
];

const mensajesSecretos = [
  "Oso te elegiría incluso si tuviera que conocerte mil veces.",
  "Me gusta la paz que aparece cuando estás cerca, Pirbull.",
  "Hay detalles tuyos que se me quedan para siempre.",
  "Amo la forma en que vuelves especial cualquier momento.",
  "Eres una de mis casualidades favoritas.",
  "Quiero muchos comienzos nuevos contigo.",
  "Si encontraste esto, también encontraste un abrazo escondido de Oso."
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentPhotoIndex = 0;
let lastMissIndex = -1;
let songWasConfigured = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function applyConfig() {
  document.title = `Para ${CONFIG.nombreElla}`;
  $$("[data-config='nombreElla']").forEach((node) => {
    node.textContent = CONFIG.nombreElla;
  });
  $$("[data-config='nombreMio']").forEach((node) => {
    node.textContent = CONFIG.nombreMio;
  });
}

function buildTimeline() {
  const timeline = $("#timeline");
  timeline.innerHTML = recuerdosTimeline.map((item) => `
    <article class="timeline-item reveal">
      <img src="${item.foto}" alt="${item.alt}" loading="lazy">
      <div>
        <p class="timeline-item__label">${item.momento}</p>
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
      </div>
    </article>
  `).join("");
}

function buildGallery() {
  const gallery = $("#gallery");
  gallery.innerHTML = galeriaRecuerdos.map((item, index) => {
    const tilt = index % 2 === 0 ? "-1.6deg" : "1.4deg";
    const delay = `${(index % 6) * 70}ms`;
    return `
      <button class="polaroid reveal" type="button" style="--tilt:${tilt}; --reveal-delay:${delay}" data-index="${index}" aria-label="Abrir foto: ${item.frase}">
        <span class="polaroid__frame">
          <img src="${item.foto}" alt="${item.alt}" loading="lazy">
          <span class="polaroid__caption"><strong>${item.titulo}</strong><br>${item.frase}</span>
        </span>
      </button>
    `;
  }).join("");

  $$(".polaroid").forEach((button) => {
    button.addEventListener("click", () => {
      createPhotoSparkles(button, 12);
      openLightbox(Number(button.dataset.index));
    });
    button.addEventListener("touchstart", () => {
      button.classList.add("is-tapped");
      createPhotoSparkles(button, 8);
      window.setTimeout(() => button.classList.remove("is-tapped"), 420);
    }, { passive: true });
  });
}

function buildMoments() {
  const moments = $("#moments");
  moments.innerHTML = momentosEspeciales.map((item, index) => `
    <article class="moment reveal ${index % 2 === 0 ? "slide-left" : "slide-right"}">
      <img src="${item.foto}" alt="${item.alt}" loading="lazy" data-parallax>
      <blockquote>"${item.frase}"</blockquote>
    </article>
  `).join("");
}

function buildReasons() {
  const reasons = $("#reasons");
  reasons.innerHTML = razones.map((item, index) => `
    <button class="reason-card reveal" type="button" aria-expanded="false">
      <span class="reason-card__front">
        <span>Razón #${index + 1}</span>
        <strong>Tócame</strong>
        <small>Guardo algo bonito aquí.</small>
      </span>
      <span class="reason-card__back">
        <strong>${item.titulo}</strong>
        <small>${item.mensaje}</small>
      </span>
    </button>
  `).join("");

  $$(".reason-card").forEach((card) => {
    card.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      card.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function setupRevealAnimations() {
  const revealItems = $$(".reveal");

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (entry.target.matches(".polaroid, .media-card, .timeline-item, .moment")) {
          createPhotoSparkles(entry.target, entry.target.matches(".polaroid") ? 6 : 9);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

  revealItems.forEach((item) => observer.observe(item));
}

function setupExperienceStart() {
  $("#startExperience").addEventListener("click", () => {
    $("#historia").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    createFloatingHearts();
    prepareAudio();
  });

  $("#backToTop").addEventListener("click", () => {
    $("#inicio").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

function createFloatingHearts() {
  if (prefersReducedMotion) return;

  for (let index = 0; index < 18; index += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "♡";
    heart.style.setProperty("--x", `${Math.random() * 94 + 3}%`);
    heart.style.setProperty("--size", `${Math.random() * 14 + 14}px`);
    heart.style.setProperty("--duration", `${Math.random() * 1.9 + 3.2}s`);
    heart.style.setProperty("--drift", `${Math.random() * 80 - 40}px`);
    heart.style.animationDelay = `${index * 80}ms`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

function createPhotoSparkles(element, amount = 8) {
  if (prefersReducedMotion) return;

  const rect = element.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > window.innerHeight) return;

  const symbols = ["♡", "✦", "·"];
  for (let index = 0; index < amount; index += 1) {
    const spark = document.createElement("span");
    spark.className = "photo-spark";
    spark.textContent = symbols[index % symbols.length];
    spark.style.setProperty("--x", `${rect.left + rect.width * (0.15 + Math.random() * 0.7)}px`);
    spark.style.setProperty("--y", `${rect.top + rect.height * (0.12 + Math.random() * 0.76)}px`);
    spark.style.setProperty("--dx", `${Math.random() * 90 - 45}px`);
    spark.style.setProperty("--dy", `${-34 - Math.random() * 76}px`);
    spark.style.setProperty("--size", `${Math.random() * 10 + 11}px`);
    spark.style.setProperty("--duration", `${Math.random() * 520 + 900}ms`);
    spark.style.setProperty("--rotate", `${Math.random() * 70 - 35}deg`);
    spark.style.animationDelay = `${index * 28}ms`;
    document.body.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove());
  }
}

function prepareAudio() {
  const audio = $("#loveSong");
  if (!songWasConfigured) {
    audio.src = CONFIG.cancion;
    audio.volume = Number($("#volumeControl").value);
    songWasConfigured = true;
  }
}

function setupMusic() {
  const audio = $("#loveSong");
  const toggle = $("#musicToggle");
  const volume = $("#volumeControl");

  toggle.addEventListener("click", async () => {
    prepareAudio();

    if (audio.paused) {
      try {
        await audio.play();
        toggle.textContent = "❚❚";
        toggle.setAttribute("aria-label", "Pausar música");
      } catch {
        showToast("Cuando agregues tu canción en audio/nuestra-cancion.mp3, podrás reproducirla aquí.");
      }
      return;
    }

    audio.pause();
    toggle.textContent = "♪";
    toggle.setAttribute("aria-label", "Reproducir música");
  });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
  });

  audio.addEventListener("ended", () => {
    toggle.textContent = "♪";
    toggle.setAttribute("aria-label", "Reproducir música");
  });
}

function setupMissButton() {
  const button = $("#missButton");
  const message = $("#missMessage");

  button.addEventListener("click", () => {
    let nextIndex = Math.floor(Math.random() * mensajesCuandoMeExtranes.length);
    if (mensajesCuandoMeExtranes.length > 1) {
      while (nextIndex === lastMissIndex) {
        nextIndex = Math.floor(Math.random() * mensajesCuandoMeExtranes.length);
      }
    }
    lastMissIndex = nextIndex;
    message.classList.remove("is-changing");
    void message.offsetWidth;
    message.textContent = mensajesCuandoMeExtranes[nextIndex];
    message.classList.add("is-changing");
  });
}

function updateCounter() {
  const start = new Date(`${CONFIG.fechaInicioRelacion}T00:00:00`);
  const today = new Date();

  if (Number.isNaN(start.getTime()) || start > today) {
    $("#yearsTogether").textContent = "0";
    $("#monthsTogether").textContent = "0";
    $("#daysTogether").textContent = "0";
    return;
  }

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (days < 0) {
    const previousMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += previousMonthLastDay;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  $("#yearsTogether").textContent = years;
  $("#monthsTogether").textContent = months;
  $("#daysTogether").textContent = days;
}

function setupLetter() {
  const button = $("#openLetter");
  const letter = $("#letterBody");

  button.addEventListener("click", () => {
    const willOpen = letter.hidden;
    letter.hidden = !willOpen;
    button.classList.toggle("is-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) {
      letter.scrollIntoView({ block: "nearest", behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  });
}

function openLightbox(index) {
  currentPhotoIndex = index;
  renderLightbox();
  $("#lightbox").hidden = false;
  document.body.classList.add("lightbox-open");
  createPhotoSparkles($("#lightboxImage"), 14);
  $("#closeLightbox").focus();
}

function closeLightbox() {
  $("#lightbox").hidden = true;
  document.body.classList.remove("lightbox-open");
}

function renderLightbox() {
  const item = galeriaRecuerdos[currentPhotoIndex];
  $("#lightboxImage").src = item.foto;
  $("#lightboxImage").alt = item.alt;
  $("#lightboxCaption").textContent = item.frase;
}

function changePhoto(direction) {
  currentPhotoIndex = (currentPhotoIndex + direction + galeriaRecuerdos.length) % galeriaRecuerdos.length;
  renderLightbox();
}

function setupLightbox() {
  $("#closeLightbox").addEventListener("click", closeLightbox);
  $("#prevPhoto").addEventListener("click", () => changePhoto(-1));
  $("#nextPhoto").addEventListener("click", () => changePhoto(1));

  $("#lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if ($("#lightbox").hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") changePhoto(-1);
    if (event.key === "ArrowRight") changePhoto(1);
  });
}

function setupSecretMessages() {
  $$(".secret-heart").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.secret) - 1;
      const message = mensajesSecretos[index] || mensajesSecretos[0];
      showToast(`Encontraste un mensaje secreto: "${message}"`);
      button.style.visibility = "hidden";
    });
  });
}

function showToast(message) {
  const toast = $("#secretToast");
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.hidden = true;
  }, 5200);
}

function setupParallax() {
  if (prefersReducedMotion) return;

  const parallaxItems = $$("[data-parallax]");
  let ticking = false;

  const update = () => {
    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const centerOffset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      item.style.transform = `translateY(${centerOffset * -18}px)`;
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}

function init() {
  applyConfig();
  buildTimeline();
  buildGallery();
  buildMoments();
  buildReasons();
  setupRevealAnimations();
  setupExperienceStart();
  setupMusic();
  setupMissButton();
  setupLetter();
  setupLightbox();
  setupSecretMessages();
  setupParallax();
  updateCounter();
  window.setInterval(updateCounter, 60 * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", init);

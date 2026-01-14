<template>
  <section id="inicio" class="hero">
    <div class="hero-bg-iframe">
      <iframe src="https://my.spline.design/greetingrobot-JhV02AkIg618aoeLduac4lQc/" frameborder="0" loading="lazy"
        title="Robot 3D Interactivo"></iframe>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="hero-title-line">Software Developer & </span>
            <span class="hero-title-highlight">UI Designer</span>
            <span class="hero-title-line">
              enfocada en crear productos
            </span>
            <span class="hero-title-highlight">
              digitales con IA.
            </span>
          </h1>

          <p class="hero-description">
            Tecnóloga Superior en Desarrollo de Software con experiencia en el ecosistema de
            <strong>JavaScript (React, Next.js, Angular)</strong>.
            Me enfoco en crear soluciones digitales que combinan estética y funcionalidad,
            integrando tecnologías de <strong>IA</strong> para optimizar la experiencia del usuario.
          </p>

          <div class="hero-actions">
            <a href="https://calendly.com/daniela-tarapues232/30min" class="btn btn-primary">
              <span>Agendar Cita</span>
              <i class="pi pi-calendar"></i>
            </a>

            <div class="cv-wrapper">
              <a :href="cv" target="_blank" class="btn btn-cv-main">
                <span>Ver CV</span>
              </a>
              <a :href="cv" download="CV_Daniela_Tarapues.pdf" class="btn btn-cv-icon" title="Descargar PDF">
                <i class="pi pi-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-bg-decoration"></div>
  </section>
  <FuturisticToast
    v-model="showToast"
    :type="toastType"
    :title="toastTitle"
    :message="toastMessage"
    :duration="5000"></FuturisticToast>
</template>

<script scoped>
import cv from '@/assets/CV_Tarapues_Daniela.pdf';
import FuturisticToast from '../components/FuturisticToast.vue';

export default {
  name: 'HeroSectionTest',
  components: {
    FuturisticToast
  },
  
  data() {
    return {
      cv
    };
  }
};
</script>

<style scoped>
/* Estructura Base */
.hero {
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  background: var(--hero-bg);
  padding: var(--space-4xl) 0;
  overflow: hidden;
  min-height: 100vh;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Capa del Robot (Fondo) */
.hero-bg-iframe {
  position: absolute;
  inset: 0; /* Esto resume top/left/right/bottom: 0 */
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.hero-bg-iframe iframe {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 100%;
  height: 100%;
  border: none;
  transform-origin: center center;
  transform: translate(-74%, -50%) scale(1.2);
  mix-blend-mode: lighten;
}

/* Hacer que el contenido no bloquee el iframe */
.hero-content,
.hero-text,
.hero-visual {
  pointer-events: none;
}

/* Restaurar interactividad SOLO donde se necesita */
.hero-actions a,
.btn,
a,
button {
  pointer-events: auto;
}

/* Elementos Superiores (Z-Index y Pointer Events) */
.hero-content,
.hero-text {
  position: relative;
  z-index: 10;
}

.hero-text span {
  pointer-events: none;
}

.hero-text {
  padding-top: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

/* Tipografía */
.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-xl);
  display: inline;
}

.hero-title-line,
.hero-title-highlight {
  display: inline;
  white-space: normal;
}

.hero-title-highlight {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.1em;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--text-strong);
  margin-bottom: var(--space-2xl);
  line-height: 1.7;
  margin-top: 1rem;
}

/* Botones y Acciones */
.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}


/* Contenedor del grupo CV */
.cv-wrapper {
  display: flex;
  align-items: center;
  background: var(--card-bg);
  /* Fondo sutil */
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.cv-wrapper:hover {
  border-color: var(--accent-purple);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
}

/* Estilo común para ambos lados */
.btn-cv-main,
.btn-cv-icon {
  background: transparent;
  border: none;
  color: var(--text-primary);
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
  font-weight: 500;
}

/* Lado del texto: "Ver CV" */
.btn-cv-main {
  padding-right: 1rem;
  border-right: 1px solid var(--border-color);
  /* Línea divisoria suave */
  border-radius: 7px 0 0 6px;
}

.btn-cv-main:hover,
.btn-cv-icon:hover {
  background: var(--fill-weak);
}

/* Lado del icono: "Descargar" */
.btn-cv-icon {
  padding: 1rem 1rem;
  color: var(--accent-purple);
  /* Color de acento para el icono */
  border-radius: 1px 0 0 1px;
}


/* Decoración de Fondo */
.hero-bg-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 600px;
  background: var(--hero-decoration-bg);
  border-radius: 50%;
  transform: translate(30%, -30%);
  pointer-events: none;
  transition: background var(--transition-normal);
}

/* Animaciones */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  /* Forzamos que la sección principal permita bloques independientes */
  .hero {
    padding-top: 80px;
    height: auto;
    min-height: 100vh;
  }

  /* El contenedor principal lo tratamos como bloque */
  .hero-content {
    display: block; 
    width: 100%;
    padding: 0;
  }

  /* --- TÍTULO: OCUPA TODO EL ANCHO Y SE CENTRA --- */
  .hero-title {
    display: block;
    width: 100%;
    text-align: left !important;
    margin: 0 0 10px 0 !important; /* Espacio debajo del título */
    font-size: 2.4rem;
    line-height: 1.2;
  }

  /* --- CONTENEDOR DE LA PARTE INFERIOR (TEXTO + ROBOT) --- */
  .hero-text {
    display: block; /* Cambiamos a bloque para posicionar manualmente */
    position: relative;
    width: 100%;
    min-height: 300px; /* Espacio mínimo para que quepan los botones */
  }

  /* DESCRIPCIÓN: Forzamos alineación a la izquierda y ancho limitado */
  .hero-description {
    text-align: left !important;
    width: 65%; /* Deja el 35% de la derecha para el robot */
    margin-left: 0 !important;
    margin-right: auto;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  /* BOTONES: Alineados a la izquierda */
  .hero-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    gap: 12px;
    width: 65%; /* Misma anchura que la descripción */
  }

  .cv-wrapper{
    border: none;
  }

  .btn-primary, 
  .cv-wrapper {
    width: 160px; /* Tamaño controlado */
    margin-left: 0;
  }

  .btn-cv-main {
   width: 8rem;
   padding: 0.625rem 1.25rem;
  }

  /* --- EL ROBOT: PEQUEÑO Y A LA DERECHA --- */
 .hero-bg-iframe {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    overflow: visible; /* Permitir que el robot se asome si es necesario */
  }

.hero-bg-iframe iframe {
    position: absolute;/* Aumentamos el lienzo del iframe para que el robot no se corte dentro */
    width: 700px;  
    height: 600px; /* Lo posicionamos */
    right: -18px;  /* Ajusta esto para pegarlo más o menos al borde */
    top: 18%;      /* Ajuste de altura según tu preferencia */
    left: auto;
    border: none; /* La escala ahora es más pequeña y desde el centro para no cortarlo */
    transform: scale(0.45); 
    transform-origin: center right; 
    mix-blend-mode: lighten;
    pointer-events: auto;
  }
}

@media (max-width:700px) {
    .hero-bg-iframe iframe {
    top: 12%;
    right: -6%;
  }

  .hero-title {
    font-size: 2rem;
  }

}

@media (max-width:570px) {
    .hero-bg-iframe iframe {
    top: 15%;
    right: -11%;
  }
}

@media (max-width:476px) {
    .hero-bg-iframe iframe {
    top: 14%;
    right: -13%;
  }
}

@media (max-width:470px) {
    .hero-bg-iframe iframe {
    top: 20%;
  }
}

@media (max-width: 445px) {

  /* 1. Ajuste del iframe para que no interfiera visualmente arriba */
  .hero-bg-iframe iframe {
    top: 16%; /* Ajuste fino de la posición del robot */
    transform: scale(0.35);
  }

  /* 2. Liberamos el contenedor de texto para que los hijos decidan su ancho */
  .hero-text {
    display: flex;
    flex-direction: column;
    min-height: auto; /* Quitamos el min-height fijo para que crezca con el contenido */
  }

  /* 3. La descripción mantiene su ancho si quieres que el robot se vea a su lado */
  .hero-description {
    width: 65%; 
    margin-bottom: 2rem;
  }

  /* 4. LOS BOTONES: Forzamos a que bajen y ocupen el 100% */
  .hero-actions {
    display: flex;
    flex-direction: column;
    width: 100%; /* Ahora ocupa todo el ancho de la pantalla */
    gap: 15px;
    align-items: stretch !important; /* Estira los botones al ancho total */
    pointer-events: auto;
  }

  /* 5. Estilizamos los botones individuales y el wrapper del CV */
  .btn-primary, 
  .cv-wrapper {
    width: 100% !important; /* Ocupa todo el contenedor */
    justify-content: center;
    box-sizing: border-box;
  }

  .btn-cv-main {
    flex-grow: 1; /* Hace que el texto del CV ocupe el espacio disponible */
    justify-content: center;
  }
}

/* Ajuste para pantallas muy pequeñas (iPhone SE, etc) */
@media (max-width: 400px) {
  .hero-title {
    font-size: 1.6rem;
  }
  .hero-bg-iframe iframe {
    width: 600px;
    height: 600px;
    right: -20px;
    top: 10%;
    transform: scale(0.3); /* Aún más pequeño en pantallas mini */
  }
}

@media (max-width: 370px) {
  .hero-bg-iframe iframe {
    width: 600px;
    height: 600px;
    right: -20px;
    top: 15%;
    transform: scale(0.3); /* Aún más pequeño en pantallas mini */
  }
}


</style>
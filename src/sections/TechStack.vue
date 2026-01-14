<template>
  <section class="tech-stack" id="tecnologías">
    <div class="container">
      <div class="tech-stack-header">
        <h2 class="section-title">Tecnologías y Herramientas</h2>
        <div class="header-line"></div>
      </div>
    </div>

    <div class="carousel-outer">
      <div class="fade-edge left"></div>
      <div class="fade-edge right"></div>

      <div class="carousel-track" ref="carouselTrack" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
        <div v-for="(tech, index) in [...technologies, ...technologies]" :key="index" class="tech-card">
          <span class="tech-category">{{ tech.category }}</span>

          <div class="tech-icon">
            <GradientIcon :icon="tech.icon" />
          </div>
          <div class="tech-content">
            <h3 class="tech-name">{{ tech.name }}</h3>
            <p class="tech-description">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import {
  PhAngularLogo, PhAtom, PhGithubLogo, PhGlobeSimple,
  PhFileVue, PhFigmaLogo, PhDeviceMobile, PhAppWindow,
  PhCode, PhMagicWand, PhPaintBrushBroad, PhLayout
} from "@phosphor-icons/vue"
import GradientIcon from "@/components/GradientIcon.vue"

const carouselTrack = ref(null)

const technologies = [
  // --- FRONTEND ---
  { name: "React", category: "Frontend", description: "Interfaces interactivas.", icon: PhAtom },
  { name: "Next.js", category: "Frontend", description: "Framework SSR y estático.", icon: PhAppWindow },
  { name: "Angular", category: "Frontend", description: "Aplicaciones escalables.", icon: PhAngularLogo },
  { name: "Vue.js", category: "Frontend", description: "Framework progresivo.", icon: PhFileVue },
  { name: "Tailwind CSS", category: "Frontend", description: "Estilizado moderno.", icon: PhPaintBrushBroad },

  // --- MOBILE ---
  { name: "React Native", category: "Mobile", description: "Apps nativas iOS/Android.", icon: PhDeviceMobile },

  // --- DESIGN (UI/UX) ---
  { name: "Figma", category: "Design", description: "Prototipado y sistemas de diseño.", icon: PhFigmaLogo },

  // --- BACKEND & AI ---
  { name: "AI Integration", category: "Backend & AI", description: "OpenAI API", icon: PhMagicWand },
  { name: "Python & SQL", category: "Backend & AI", description: "Lógica y manejo de datos.", icon: PhCode },

  // --- TOOLS ---
  { name: "WordPress", category: "Tools", description: "Gestión de contenidos.", icon: PhGlobeSimple },
  { name: "GitHub", category: "Tools", description: "Control de versiones Git.", icon: PhGithubLogo }
]

const pauseCarousel = () => {
  if (carouselTrack.value) carouselTrack.value.style.animationPlayState = "paused"
}

const resumeCarousel = () => {
  if (carouselTrack.value) carouselTrack.value.style.animationPlayState = "running"
}
</script>


<style scoped>
.tech-stack {
  padding: var(--space-4xl) 0;
  background: var(--primary-bg);
  overflow: hidden;
  position: relative;
}

.tech-stack-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

/* --- Lógica del Carrusel --- */
.carousel-outer {
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: var(--space-xl);
  width: max-content;
  animation: scroll-infinite 40s linear infinite;
  padding: var(--space-lg);
}

/* Tarjeta Refinada y Futurista */
.tech-card {
  position: relative;
  width: 280px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-xl);

  /* Glassmorphism sutil */
  background: var(--fill-glass);
  border: 1px solid var(--stroke-weak);
  border-radius: var(--border-radius-xl);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* Transición más suave y profesional */
  transition:
    transform var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal);
  user-select: none;
  overflow: hidden;
}

/* Resplandor de fondo muy suave */
.tech-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center,
      var(--floating-element-bg) 0%,
      transparent 70%);
  opacity: 0;
  transition: opacity var(--transition-normal);
  z-index: 0;
}

/* Hover más sutil y elegante */
.tech-card:hover {
  transform: translateY(-8px);
  /* Elevación reducida */
  border-color: var(--accent-purple);
  /* Sombra más difusa y menos oscura */
  box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(99, 102, 241, 0.1);
}

.tech-card:hover::before {
  opacity: 0.6;
  /* Resplandor tenue */
}

/* Estilo del Badge de Categoría */
.tech-category {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 20px;
  background: var(--fill-weak);
  color: var(--fill-brand-strong);
  border: 1px solid var(--stroke-weak);
  backdrop-filter: blur(4px);
}

/* Ajuste sutil en la tarjeta para dar espacio al badge */
.tech-card {
  padding-top: var(--space-2xl);
  /* Más espacio superior */
}

/* Diferenciación visual opcional por categoría */
.tech-card:has([category="Design"]) {
  border-bottom: 2px solid #F24E1E;
  /* Color Figma */
}

.tech-icon {
  position: relative;
  z-index: 1;
  width: 70px;
  /* Tamaño ligeramente más refinado */
  height: 70px;
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 8px rgba(172, 167, 255, 0.2));
  transition: transform var(--transition-normal);
}

.tech-card:hover .tech-icon {
  transform: scale(1.05);
  /* Escala mínima */
}

.tech-content {
  position: relative;
  z-index: 1;
}

.tech-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--text-strong);
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.tech-description {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  padding: 0 var(--space-xs);
}

/* Difuminados Laterales Premium */
.fade-edge {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15%;
  z-index: 10;
  pointer-events: none;
}

.fade-edge.left {
  left: 0;
  background: linear-gradient(to right, var(--primary-bg) 0%, transparent 100%);
}

.fade-edge.right {
  right: 0;
  background: linear-gradient(to left, var(--primary-bg) 0%, transparent 100%);
}

/* Animación de Carrusel */
@keyframes scroll-infinite {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-50% - (var(--space-xl) / 2)));
  }
}

@media (max-width: 768px) {
  .tech-card {
    width: 250px;
    height: 310px;
  }

  .tech-stack {
    padding: var(--space-2xl) 0;
  }
}
</style>
<script setup lang="ts">
import { computed } from 'vue'
import { Menu, X, Moon, Sun } from 'lucide-vue-next'
import { useDark } from '@vueuse/core'

// Importaciones locales
import BaseToggle from '@/common/components/BaseToggle.vue'
import { useNavigation } from '@/common/composables/useNavigation'
import LogoWhite from '@/assets/logowhite.svg'
import LogoDark from '@/assets/logodark.svg'

const sectionOrder = ['inicio', 'tecnologías', 'experiencia', 'footer']
const navLinks = computed(() => sectionOrder.filter(s => s !== 'footer'))

// Lógica de Tema
const isDark = useDark({
  selector: 'html', attribute: 'data-theme', storageKey: 'theme',
  valueDark: 'dark', valueLight: 'light',
})

// Lógica de Navegación extraída
const {
  activeSection,
  hoveredSection,
  isMenuOpen,
  scrollClass,
  updateNavState,
  setHover
} = useNavigation(sectionOrder)

const getLinkClasses = (section) => {
  // La línea se activa si es la sección real O si el mouse está encima
  const isCurrentActive = activeSection.value === section
  const isCurrentlyHovered = hoveredSection.value === section

  return {
    'nav-link--active': isCurrentActive || isCurrentlyHovered,
    'is-before': sectionOrder.indexOf(activeSection.value) > sectionOrder.indexOf(section),
    'is-after': sectionOrder.indexOf(activeSection.value) < sectionOrder.indexOf(section)
  }
}

const handleLinkClick = (s) => { updateNavState(s); isMenuOpen.value = false }
</script>

<template>
 <header class="header" :class="{ 'header--menu-open': isMenuOpen }">
    <nav class="nav">
      <div class="container nav-content">
        <div class="logo">
          <img :src="isDark ? LogoWhite : LogoDark" class="logo-image" alt="Logo" />
        </div>

        <ul class="nav-links" :class="[{ 'nav-links--open': isMenuOpen }, scrollClass]">
          <li v-for="section in navLinks" :key="section">
            <a :href="'#' + section" class="nav-link" :class="getLinkClasses(section)" @click="handleLinkClick(section)"
              @mouseenter="setHover(section)" @mouseleave="setHover(null)">
              {{ section }}
            </a>
          </li>

          <li class="nav-item-mobile-only">
            <div class="theme-switch-wrapper">
              <span>Modo {{ isDark ? 'Oscuro' : 'Claro' }}</span>
              <BaseToggle v-model="isDark">
                <template #icon>
                  <component :is="isDark ? Moon : Sun" size="14" />
                </template>
              </BaseToggle>
            </div>
          </li>
        </ul>

        <div class="nav-actions">
          <BaseToggle v-model="isDark" class="desktop-only">
            <template #icon>
              <component :is="isDark ? Moon : Sun" size="14" />
            </template>
          </BaseToggle>

          <button class="mobile-menu-btn" @click.stop="isMenuOpen = !isMenuOpen">
            <component :is="isMenuOpen ? X : Menu" :size="24" />
          </button>
        </div>
      </div>
    </nav>
  </header>
  <transition name="fade">
    <div v-if="isMenuOpen" class="nav-overlay" @click="isMenuOpen = false"></div>
  </transition>
</template>


<style scoped>
/* --- 1. ESTRUCTURA Y LAYOUT --- */
.header {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  background: var(--gradient-header);
  backdrop-filter: blur(20px);
  border: 1px solid var(--stroke-weak);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
}


/* --- LOGO (Restaurado a 5rem) --- */
.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 5.4rem;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

/* --- AJUSTE NAV CONTENT --- */
.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  min-height: 60px;
  /* Asegura que el logo no estire el header */
}

/* --- 2. NAVEGACIÓN (DESKTOP) --- */
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: inline-block;
  color: var(--text-strong-dark);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.4s ease;
}

.nav-link::first-letter {
  text-transform: uppercase;
}

/* --- 3. ANIMACIÓN DE LÍNEA INTELIGENTE --- */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 1px;
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.nav-link--active::after {
  transform: scaleX(1);
  /* Se muestra cuando es activa */
}

/* Lógica de direcciones */
/* Cuando el movimiento es hacia adelante (bajar scroll o mover mouse a la derecha) */
.move-forward .nav-link--active::after {
  transform-origin: left;
}

.move-forward .nav-link:not(.nav-link--active)::after {
  transform-origin: right;
}

/* Cuando el movimiento es hacia atrás (subir scroll o mover mouse a la izquierda) */
.move-backward .nav-link--active::after {
  transform-origin: right;
}

.move-backward .nav-link:not(.nav-link--active)::after {
  transform-origin: left;
}

/* --- 4. CONTROL DE VISIBILIDAD (EL ARREGLO) --- */

/* Ocultar elementos de móvil en escritorio */
.nav-item-mobile-only {
  display: none !important;
}

/* El botón de hamburguesa también oculto en desktop */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
}

/* --- Estilos del Overlay --- */
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--overlay);
  /* Color oscuro semi-transparente */
  backdrop-filter: blur(4px);
  /* Opcional: desenfoque para más estilo */
  z-index: 999;
  /* Justo debajo del header (1000) */
  cursor: pointer;
}

/* Animación de entrada/salida */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



/* --- 5. RESPONSIVE (MOBILE) --- */
@media (max-width: 768px) {

  .header{
    border-radius: 10px;
  }

  /* Ocultar switch de escritorio */
  .desktop-only {
    display: none !important;
  }

  /* Mostrar switch y menú de móvil */
  .nav-item-mobile-only {
    display: block !important;
    width: 100%;
    padding-top: 1.7rem;
    border-top: 1px solid var(--stroke-weak);
  }

  .mobile-menu-btn {
    display: flex;
  }

  .header--menu-open{
  border-radius: 10px 10px 0 0;
}

.nav-links {
    position: fixed;
    top: 78px; 
    left: -1px;
    right: -1px;
    flex-direction: column;
    padding: 2rem;
    border-radius: 0 0 10px 10px;

    /* Aumentamos la opacidad del fondo para que las letras de atrás se mezclen más */
    /* Usamos un color base sólido antes del gradiente para asegurar cobertura */
    background: var(--gradient-menu);
    
    /* El punto dulce del blur suele ser entre 20px y 40px con saturación */
    backdrop-filter: blur(30px) saturate(150%);
    -webkit-backdrop-filter: blur(30px) saturate(150%);
    
    border: 1px solid var(--stroke-weak);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); /* Sombra más fuerte para dar profundidad */

    /* Animación y control */
    z-index: 1001;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px); /* Ligero desplazamiento para la animación */
    transform-origin: top right;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }

  .nav-links {
    /* Menú encima del overlay */
    z-index: 1001;
  }

.nav-links--open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto; /* Reactiva clics */
  }


  .theme-switch-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-strong-dark);
  }

  .nav-link {
    width: 100%;
    font-size: 1.1rem;
  }

  .nav-link::after {
    transform-origin: center !important;
  }
}
</style>
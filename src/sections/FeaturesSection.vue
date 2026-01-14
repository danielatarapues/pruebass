<template>
  <section id="proyectos" class="features">
    <div class="container">
      <div class="features-header">
        <h2 class="section-title text-center">Todo lo que necesitas para empezar a invertir en tu futuro</h2>
        <p class="section-subtitle text-center">
          Rastrea y administra todas tus inversiones en un solo lugar con nuestras herramientas detalladas,
          análisis y perspectivas personalizadas para optimizar tu portafolio.
        </p>
      </div>

      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.id"
          class="feature-card"
          :class="{ 
            'feature-card--reverse': index % 2 !== 0 
          }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="feature-content">
            <div class="feature-text">
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
              <button class="feature-btn btn btn-secondary">
                {{ feature.buttonText }}
              </button>
            </div>
            
            <div class="feature-visual">
              <img :src="feature.imagePath" :alt="feature.title" class="feature-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    title: 'Diseño Web desde Cero',
    description:
      'Si aún no tienes una página, te ayudo a crear una desde cero con un diseño moderno, responsivo y pensado para destacar tu negocio o proyecto personal.',
    buttonText: 'Crear mi primera web',
    imagePath: '/assets/images/features/feature-analysis.webp',
    large: true
  },
  {
    id: 2,
    title: 'Desarrollo Personalizado',
    description:
      'Desarrollo tu sitio a medida, con una estructura profesional, buena velocidad y optimización básica para buscadores—ideal si recién estás empezando.',
    buttonText: 'Empezar ahora',
    imagePath: '/assets/images/features/feature-optimization.webp',
    large: false
  },
  {
    id: 3,
    title: 'Asesoría y Acompañamiento',
    description:
      'Te explico cada paso del proceso y te asesoro para que tomes buenas decisiones: diseño, contenido, funcionalidades y recomendaciones para tu marca.',
    buttonText: 'Quiero asesoría',
    imagePath: '/assets/images/features/feature-realtime.webp',
    large: true
  },
  {
    id: 4,
    title: 'Soporte y Mejoras Futuras',
    description:
      'Una vez tu web esté lista, te doy la opción de mantenerla actualizada, agregar nuevas secciones y mejorarla según vaya creciendo tu proyecto.',
    buttonText: 'Conocer más',
    imagePath: '/assets/images/features/feature-reports.webp',
    large: false
  }
])


</script>

<style scoped>
.features {
  padding: var(--space-4xl) 0;
  background: var(--primary-bg);
}

.features-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  line-height: 1.2;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  line-height: 1.6;
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
}

.feature-card {
  width: 100%;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-xl);
  padding: var(--space-2xl);
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out both;
}


.feature-card--reverse .feature-content {
  display: flex; /* Aseguramos flex o grid */
  flex-direction: row-reverse; /* Invertimos el orden */
  width: 100%;
}

.feature-btn {
  align-self: flex-start;
  margin-top: var(--space-md);
}


.feature-card:hover {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(99, 102, 241, 0.2);
}

.feature-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center; /* Centrado vertical para la imagen */
  height: 100%;
}


.feature-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  gap: var(--space-lg);
}

.feature-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: var(--font-size-base);
}

.feature-btn {
  align-self: flex-start;
  margin-top: var(--space-md);
}

.feature-visual {
  position: relative;
  height: 280px; /* Mantener la altura para consistencia */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Asegura que la imagen no se desborde */
  border-radius: var(--border-radius-lg); /* Bordes redondeados para la imagen */
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cubre el área manteniendo la relación de aspecto */
  border-radius: var(--border-radius-lg);
  transition: transform 0.3s ease-in-out;
}

.feature-card:hover .feature-image {
  transform: scale(1.05); /* Pequeño zoom al pasar el ratón */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card--large {
    grid-column: span 2;
  }
  
  .feature-content {
    grid-template-columns: 1fr !important;
    text-align: center;
    gap: var(--space-xl);
  }
  
  .feature-btn {
    align-self: center !important;
  }
}

@media (max-width: 768px) {
  .features {
    padding: var(--space-3xl) 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: var(--space-xl);
  }
  
  .section-title {
    font-size: var(--font-size-2xl);
  }
  
  .section-subtitle {
    font-size: var(--font-size-base);
  }
  
  .feature-visual {
    height: 200px;
  }
  
  .feature-title {
    font-size: var(--font-size-xl);
  }
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: var(--space-lg);
  }
  
  .feature-visual {
    height: 160px;
  }
}
</style>
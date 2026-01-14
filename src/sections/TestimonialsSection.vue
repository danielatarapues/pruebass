<template>
  <section id="testimonios" class="testimonials">
    <!-- Fondo con Spline -->
    <div class="spline-bg">
      <iframe src='https://my.spline.design/3dpathslines1copy-ps5CdWAoLq5W1rgFaIwQMDbZ/' frameborder='0' width='100%'
        height='100%'></iframe>
    </div>

    <div class="container">
      <div class="testimonials-header">
        <h2 class="section-title text-center">Testimonios</h2>
        <p class="section-subtitle text-center">
          Lo que dicen nuestros clientes sobre trabajar conmigo
        </p>
      </div>

      <Carousel :value="testimonials" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
        :circular="true" :autoplayInterval="5000">
        <template #item="slotProps">
          <div class="testimonial-card">
            <div class="testimonial-content">

              <div class="testimonial-author">
                <div class="author-avatar">
                  <img :src="slotProps.data.avatar" :alt="slotProps.data.name" />
                </div>
                <div class="author-info">
                  <h4 class="author-name">{{ slotProps.data.name }}</h4>
                  <p class="author-role">{{ slotProps.data.role }}</p>
                  <p class="author-company">{{ slotProps.data.company }}</p>
                </div>
              </div>
              <blockquote class="testimonial-quote">
                "{{ slotProps.data.quote }}"
              </blockquote>

            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Carousel from "primevue/carousel";

const testimonials = ref([
  {
    id: 1,
    name: "Christopher Palacios",
    role: "CEO & Fundador",
    company: "TechStart Inc.",
    quote:
      "El trabajo de diseño y desarrollo que realizó superó todas nuestras expectativas. La atención al detalle y la experiencia de usuario son excepcionales.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "María Gómez",
    role: "Directora de Marketing",
    company: "Digital Solutions",
    quote:
      "Increíble capacidad para traducir nuestras ideas en interfaces funcionales y atractivas. El proceso de colaboración fue fluido y profesional.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1d3?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Jorge Ramírez",
    role: "Product Manager",
    company: "Innovation Labs",
    quote:
      "Su enfoque en la experiencia del usuario y la implementación técnica resultó en un producto final que nuestros usuarios adoran. Altamente recomendado.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Lucía Fernández",
    role: "Gerente de Proyectos",
    company: "Creative Agency",
    quote:
      "La comunicación fue clara en todo momento y cumplió con los plazos establecidos sin sacrificar calidad.",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Andrés Torres",
    role: "CTO",
    company: "NextGen Apps",
    quote:
      "La solución técnica implementada es escalable y eficiente. Definitivamente volveríamos a trabajar con él.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Valentina Ruiz",
    role: "UX Researcher",
    company: "Bright Ideas",
    quote:
      "Su sensibilidad hacia las necesidades del usuario fue clave para que el producto fuera tan bien recibido.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style scoped>
@import "primeicons/primeicons.css";

.testimonials {
  padding: var(--space-4xl) 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

/* Fondo Spline */
.spline-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.spline-bg iframe {
  width: 140%;
  height: 190%;
  transform: scale(1.5) translateY(-12%) translateX(-10%);
  transform-origin: center;
}

/* Contenido encima */
.container {
  position: relative;
  z-index: 1;
}

/* ---- estilos de cards y textos se mantienen ---- */
.testimonials-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  line-height: 1.6;
}

.testimonial-card {
  padding: 0 var(--space-lg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.testimonial-content {
  background: var(--fill-glass);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-xl);
  padding: var(--space-3xl);
  text-align: center;
  backdrop-filter: blur(8px);
  position: relative;
  box-shadow: var(--shadow-xl);
  max-width: 800px;
}


.testimonial-stars {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: var(--space-lg);
}

.star {
  color: #fbbf24;
  font-size: var(--font-size-lg);
}

.testimonial-quote {
  font-size: var(--font-size-lg);
  color: var(--text-primary);
  line-height: 1.7;
  margin-bottom: var(--space-2xl);
  font-style: italic;
  position: relative;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--accent-purple);
  box-shadow: var(--shadow-lg);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  text-align: left;
}

.author-name {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.author-role {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin-bottom: 0.125rem;
}

.author-company {
  font-size: var(--font-size-sm);
  color: var(--accent-purple);
  font-weight: 500;
}

@media (max-width: 768px) {
  .testimonial-author {
    flex-direction: column;
    text-align: center;
  }

  .author-info {
    text-align: center;
  }
}
</style>
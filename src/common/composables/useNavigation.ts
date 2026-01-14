import { ref, onMounted, computed } from 'vue'

export function useNavigation(sectionOrder: string[]) {
  const activeSection = ref('inicio')
  const previousSection = ref('inicio')
  const hoveredSection = ref<string | null>(null)
  const isMenuOpen = ref(false)

  // 1. Determinamos cuál es la sección "objetivo" (hover manda sobre scroll)
  const targetSection = computed(() => hoveredSection.value || activeSection.value)

  // 2. Calculamos la dirección basándonos en el targetSection
  const scrollClass = computed(() => {
    const currentIndex = sectionOrder.indexOf(targetSection.value)
    const previousIndex = sectionOrder.indexOf(previousSection.value)
    
    // Si la nueva sección está después en el array, se mueve hacia adelante
    return currentIndex >= previousIndex ? 'move-forward' : 'move-backward'
  })

  const updateNavState = (newSection: string) => {
    if (newSection && newSection !== activeSection.value) {
      previousSection.value = activeSection.value
      activeSection.value = newSection
    }
  }

  // 3. Función para manejar el hover y actualizar la dirección previa
  const setHover = (section: string | null) => {
    if (section) {
      previousSection.value = targetSection.value // Guardamos donde estábamos antes del hover
    } else {
      previousSection.value = hoveredSection.value || activeSection.value
    }
    hoveredSection.value = section
  }

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.tagName === 'FOOTER' ? 'footer' : e.target.id
          updateNavState(id)
        }
      })
    }, { rootMargin: '-25% 0px' })

    document.querySelectorAll('section[id], footer').forEach(el => observer.observe(el))
  })

  return { 
    activeSection, 
    hoveredSection, 
    isMenuOpen, 
    scrollClass, 
    updateNavState,
    setHover
  }
}
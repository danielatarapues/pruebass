<template>
    <transition name="toast">
        <div v-if="modelValue" class="toast-wrapper">
        <div class="toast-overlay" @click="$emit('update:modelValue', false)"></div>

        <div v-if="modelValue" class="futuristic-toast" :class="type" role="alert">
            <div class="toast-glass"></div>

            <div class="toast-accent"></div>

            <div class="toast-content">
                <div class="toast-icon-wrapper">
                    <i :class="config.icon"></i>
                </div>

                <div class="toast-body">
                    <h4 class="toast-title">{{ title || config.defaultTitle }}</h4>
                    <p class="toast-message">{{ message }}</p>

                    <div v-if="type === 'error'" class="toast-actions">
                        <a href="mailto:daniela.tarapues232@gmail.com" class="action-link">
                            <i class="pi pi-envelope"></i> Email
                        </a>
                        <a href="https://wa.me/593996214772" class="action-link">
                            <i class="pi pi-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>

                <button class="toast-close" @click="$emit('update:modelValue', false)" aria-label="Cerrar">
                    <i class="pi pi-times"></i>
                </button>

            </div>
        </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';

interface Props {
    modelValue: boolean;
    type?: 'success' | 'error' | 'info';
    title?: string;
    message: string;
    duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'info',
    duration: 5000
});

const emit = defineEmits(['update:modelValue']);

// Configuración visual según el tipo
const config = computed(() => {
    const settings = {
        success: { icon: 'pi pi-check-circle', defaultTitle: 'Operación Exitosa' },
        error: { icon: 'pi pi-exclamation-circle', defaultTitle: 'Error de Sistema' },
        info: { icon: 'pi pi-info-circle', defaultTitle: 'Notificación' }
    };
    return settings[props.type];
});

// Auto-cierre
watch(() => props.modelValue, (newVal) => {
    if (newVal && props.duration > 0) {
        setTimeout(() => {
            emit('update:modelValue', false);
        }, props.duration);
    }
});
</script>

<style scoped>
.toast-wrapper {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
}

.toast-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
}

.futuristic-toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 380px;
    max-width: 90vw;
    z-index: 9999;
    display: flex;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-weak);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.toast-glass {
    position: absolute;
    inset: 0;
    background: var(--fill-glass);
    backdrop-filter: blur(12px);
    z-index: -1;
}

.toast-accent {
    width: 4px;
    background: var(--color-accent-purple);
}

.toast-content {
    padding: 1.25rem;
    display: flex;
    gap: 1rem;
    width: 100%;
}

.toast-icon-wrapper {
    font-size: var(--font-size-2xl);
    display: flex;
    align-items: flex-start;
}

.success .toast-icon-wrapper {
    color: var(--success-icon);
}

.error .toast-icon-wrapper {
    color: var(--error-color);
}

.toast-body {
    flex: 1;
}

.toast-title {
    color: var(--text-primary);
    font-weight: 700;
    font-size: var(--font-size-base);
    margin-bottom: 0.25rem;
}

.toast-message {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    line-height: 1.5;
}

.toast-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.action-link {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    background: var(--fill-brand-inverse);
    border: 1px solid var(--border-base);
    border-radius: var(--radius-lg);
    color: var(--text-strong);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.3s ease;
}

.action-link:hover {
    background: var(--fill-brand-strong);
    border-color: var(--fill-brand-strong);
    color: var(--text-inverse);
    transform: translateY(-2px);
}

.toast-close {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.25rem;
    height: fit-content;
    transition: color 0.2s;
}

.toast-close:hover {
    color: var(--text-primary);
}

/* Animación de entrada/salida optimizada para el centro */
.toast-enter-active {
    transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.toast-leave-active {
    transition: all 0.3s ease;
}

/* El estado inicial debe incluir el translate(-50%, -50%) para no romperse */
.toast-enter-from {
    opacity: 0;
    transform: translate(-50%, -40%) scale(0.9);
}

.toast-leave-to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
}

@media (max-width: 480px) {
    .futuristic-toast {
        width: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
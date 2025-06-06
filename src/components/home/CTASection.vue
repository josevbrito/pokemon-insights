<template>
  <section class="cta">
    <div class="cta-bg"></div>
    <div class="cta-content">
      <h2>Pronto para começar sua jornada?</h2>
      <p>Mergulhe no mundo dos Pokémon e descubra informações incríveis!</p>
      <router-link to="/pokedex" class="btn btn-accent btn-large">
        <Icon icon="mdi:rocket-launch" class="btn-icon" />
        Começar Agora
      </router-link>
    </div>
    <div class="cta-decoration">
      <div class="floating-pokeball pokeball-1"></div>
      <div class="floating-pokeball pokeball-2"></div>
      <div class="floating-pokeball pokeball-3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection'
}
</script>

<style scoped>
/* ===== CTA SECTION ===== */
.cta {
  position: relative;
  background: var(--primary-gradient);
  color: white;
  border-radius: var(--border-radius-xl);
  padding: 4rem 3rem;
  text-align: center;
  margin: 4rem 0;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.cta-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: float 8s ease-in-out infinite;
}

.cta-content {
  position: relative;
  z-index: 10;
}

.cta h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta .btn-accent {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.cta .btn-accent:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.cta-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-pokeball {
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(180deg, #ff6b6b 50%, white 50%);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: float 6s ease-in-out infinite;
}

.floating-pokeball::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateY(-50%);
}

.floating-pokeball::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

.pokeball-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
  transform: scale(0.8);
}

.pokeball-2 {
  bottom: 20%;
  right: 15%;
  animation-delay: 2s;
  transform: scale(1.1);
}

.pokeball-3 {
  top: 30%;
  right: 5%;
  animation-delay: 4s;
  transform: scale(0.9);
}

/* ===== ANIMATIONS ===== */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* ===== MEDIA QUERIES ===== */
@media (max-width: 1024px) {
  .cta {
    padding: 3rem 2rem;
  }
}

@media (max-width: 768px) {
  .cta h2 {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
  }

  .cta p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .cta {
    padding: 2.5rem 1rem;
  }
}
</style>
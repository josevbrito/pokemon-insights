<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        Bem-vindo ao <span class="highlight">Pokémon Insights</span>
      </h1>
      <p class="hero-description">
        Explore o incrível mundo dos Pokémon! Descubra informações detalhadas sobre seus Pokémon favoritos, 
        seus tipos, habilidades e muito mais usando dados oficiais da PokéAPI.
      </p>
      <div class="hero-buttons">
        <router-link to="/pokedex" class="btn btn-primary">
          <Icon icon="mdi:magnify" class="btn-icon" />
          Explorar Pokédex
        </router-link>
        <router-link to="/items" class="btn btn-secondary">
          <Icon icon="mdi:bag-personal" class="btn-icon" />
          Ver Itens
        </router-link>
      </div>
      
      <!-- Hero Stats -->
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-number">1000+</span>
          <span class="stat-label">Pokémons</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">18</span>
          <span class="stat-label">Tipos</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">9</span>
          <span class="stat-label">Gerações</span>
        </div>
      </div>
    </div>
    
    <div class="hero-image">
      <div class="hero-decoration">
        <div class="floating-element element-1">⚡</div>
        <div class="floating-element element-2">⭐</div>
        <div class="floating-element element-3">🔥</div>
        <div class="floating-element element-4">💧</div>
      </div>
      <div class="hero-img-container">
        <img src="/pikachu.png" alt="Pikachu" class="pikachu-img">
        <div class="glow-effect"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
/* ===== HERO SECTION ===== */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
  margin-bottom: 6rem;
  position: relative;
}

.hero-content {
  animation: slideInLeft 0.8s ease-out;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  line-height: 1.1;
}

.highlight {
  background: linear-gradient(135deg, #ee1515 0%, #a10d0d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: pulse 2s ease-in-out infinite;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 90%;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-icon {
  font-size: 1.1rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  min-width: 100px;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-color);
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 600;
  text-align: center;
}

/* ===== HERO IMAGE ===== */
.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInRight 0.8s ease-out;
}

.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  animation: bounce 2s ease-in-out infinite;
  opacity: 0.7;
}

.element-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  top: 20%;
  right: 15%;
  animation-delay: 0.5s;
}

.element-3 {
  bottom: 30%;
  left: 5%;
  animation-delay: 1s;
}

.element-4 {
  bottom: 10%;
  right: 10%;
  animation-delay: 1.5s;
}

.hero-img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pikachu-img {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
  animation: float 3s ease-in-out infinite;
  position: relative;
  z-index: 2;
}

.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(255, 235, 59, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  z-index: 1;
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

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* ===== MEDIA QUERIES ===== */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    min-height: unset;
  }

  .hero-content {
    order: 2;
  }

  .hero-image {
    order: 1;
    margin-bottom: 2rem;
  }

  .hero-description {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }

  .hero-description {
    font-size: 1rem;
    max-width: 95%;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .hero-buttons {
    gap: 0.8rem;
  }

  .btn {
    width: 90%;
  }

  .hero-stats {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .stat-item {
    width: 100%;
    max-width: 200px;
  }
}
</style>
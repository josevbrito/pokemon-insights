<template>
  <section class="stats">
    <div class="section-header">
      <h2 class="section-title">Estatísticas do Site</h2>
      <p class="section-subtitle">Números impressionantes do mundo Pokémon</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <Icon icon="mdi:gamepad-variant" />
        </div>
        <div class="stat-number">1000+</div>
        <div class="stat-label">Pokémon Disponíveis</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <Icon icon="mdi:label" />
        </div>
        <div class="stat-number">18</div>
        <div class="stat-label">Tipos Diferentes</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <Icon icon="mdi:gift" />
        </div>
        <div class="stat-number">400+</div>
        <div class="stat-label">Itens Catalogados</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <Icon icon="mdi:earth" />
        </div>
        <div class="stat-number">9</div>
        <div class="stat-label">Gerações</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection'
}
</script>

<style scoped>
/* ===== SECTION HEADERS ===== */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeIn 0.8s ease-out;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--primary-gradient);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* ===== STATS SECTION ===== */
.stats {
  margin-bottom: 6rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  position: relative;
  background: var(--primary-gradient);
  color: white;
  border-radius: var(--border-radius-xl);
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  overflow: hidden;
  animation: slideUp 0.6s ease-out;
}

.stat-card:nth-child(even) {
  background: var(--secondary-gradient);
  animation-delay: 0.2s;
}

.stat-card:nth-child(3) {
  background: var(--accent-gradient);
  animation-delay: 0.4s;
}

.stat-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--shadow-xl);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
  opacity: 0.9;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 600;
}

/* ===== ANIMATIONS ===== */
@keyframes slideUp {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* ===== MEDIA QUERIES ===== */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: clamp(1.8rem, 5vw, 3rem);
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .stat-card {
    padding: 2rem 1.5rem;
  }

  .stat-number {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
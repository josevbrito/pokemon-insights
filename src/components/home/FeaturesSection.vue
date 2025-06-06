<template>
  <section class="features">
    <div class="section-header">
      <h2 class="section-title">Funcionalidades</h2>
      <p class="section-subtitle">Descubra tudo o que você pode fazer no Pokémon Insights</p>
    </div>
    
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <Icon icon="mdi:magnify" />
        </div>
        <h3>Pokédex Completa</h3>
        <p>Explore centenas de Pokémon com informações detalhadas sobre cada um deles.</p>
        <div class="card-decoration"></div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <Icon icon="mdi:flash" />
        </div>
        <h3>Tipos e Habilidades</h3>
        <p>Conheça os diferentes tipos de Pokémon e suas habilidades únicas.</p>
        <div class="card-decoration"></div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <Icon icon="mdi:bag-personal" />
        </div>
        <h3>Itens do Jogo</h3>
        <p>Descubra todos os itens disponíveis no universo Pokémon.</p>
        <div class="card-decoration"></div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <Icon icon="mdi:chart-bar" />
        </div>
        <h3>Estatísticas</h3>
        <p>Veja as estatísticas base de cada Pokémon de forma visual e intuitiva.</p>
        <div class="card-decoration"></div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <Icon icon="mdi:star-four-points" />
        </div>
        <h3>Design Responsivo</h3>
        <p>Interface moderna e responsiva que funciona em todos os dispositivos.</p>
        <div class="card-decoration"></div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <Icon icon="mdi:api" />
        </div>
        <h3>API Oficial</h3>
        <p>Dados sempre atualizados direto da PokéAPI oficial.</p>
        <div class="card-decoration"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
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

/* ===== FEATURES SECTION ===== */
.features {
  margin-bottom: 6rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius-xl);
  padding: 2.5rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all var(--transition-normal);
  overflow: hidden;
  animation: slideUp 0.6s ease-out;
}

.feature-card:nth-child(even) {
  animation-delay: 0.2s;
}

.feature-card:nth-child(3n) {
  animation-delay: 0.4s;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
}

.card-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: var(--primary-gradient);
  opacity: 0.1;
  border-radius: 0 var(--border-radius-xl) 0 100px;
  transition: var(--transition-normal);
}

.feature-card:hover .card-decoration {
  opacity: 0.2;
  transform: scale(1.1);
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
  .features-grid {
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

  .feature-card {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
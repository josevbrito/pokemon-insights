<template>
  <div class="pokemon-stats-container info-group">
    <h2>Estatísticas Base</h2>
    <div v-for="stat in stats" :key="stat.stat.name" class="stat-item">
      <span class="stat-name">{{ formatStatName(stat.stat.name) }}:</span>
      <div class="stat-bar-wrapper">
        <div class="stat-bar" :style="{ width: statBarWidth(stat.base_stat) }">
          <span class="stat-value">{{ stat.base_stat }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string; };
}

export default defineComponent({
  name: 'PokemonStats',
  props: {
    stats: {
      type: Array as PropType<PokemonStat[]>,
      required: true
    }
  },
  setup() {
    const formatStatName = (name: string): string => {
      switch (name) {
        case 'hp': return 'HP';
        case 'attack': return 'Ataque';
        case 'defense': return 'Defesa';
        case 'special-attack': return 'Ataque Especial';
        case 'special-defense': return 'Defesa Especial';
        case 'speed': return 'Velocidade';
        default: return name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
      }
    };

    const statBarWidth = (baseStat: number): string => {
      const maxWidth = 255;
      const percentage = (baseStat / maxWidth) * 100;
      return `${Math.min(percentage, 100)}%`;
    };

    return {
      formatStatName,
      statBarWidth
    };
  }
});
</script>

<style scoped>
.pokemon-stats-container {
  grid-column: 1 / -1;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  text-align: left;
}

.pokemon-stats-container h2 {
  text-align: center;
  margin-bottom: 15px;
}

.stat-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.stat-name {
  flex-basis: 120px;
  font-weight: bold;
  font-size: 0.95rem;
  color: inherit;
}

.stat-bar-wrapper {
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  height: 20px;
  overflow: hidden;
  position: relative;
}

.stat-bar {
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #667eea);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: width 0.5s ease-out;
}

.stat-value {
  color: white;
  font-weight: bold;
  font-size: 0.85rem;
  padding-right: 8px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.details-card-wrapper.bg-type-electric .stat-bar .stat-value,
.details-card-wrapper.bg-type-ground .stat-bar .stat-value,
.details-card-wrapper.bg-type-ice .stat-bar .stat-value,
.details-card-wrapper.bg-type-steel .stat-bar .stat-value,
.details-card-wrapper.bg-type-normal .stat-bar .stat-value {
  color: #333; 
}

@media (max-width: 480px) {
  .stat-name {
    flex-basis: 90px;
    font-size: 0.85rem;
  }
  .stat-bar-wrapper {
    height: 18px;
  }
  .stat-value {
    font-size: 0.75rem;
  }
}
</style>

<template>
  <div class="pokemon-counter">
    <span class="counter-text">
      Mostrando {{ filteredPokemonsLength }} de {{ totalPokemons }} Pokémon
    </span>
  </div>

  <div class="pokemon-grid">
    <div 
      v-for="pokemon in paginatedPokemons" 
      :key="pokemon.name"
      class="pokemon-card"
      @click="$emit('selectPokemon', pokemon)"
    >
      <div class="card-inner">
        <div class="pokemon-image-container">
          <img 
            :src="getPokemonImage(pokemon.url)" 
            :alt="pokemon.name"
            class="pokemon-image"
            loading="lazy"
          >
          <div class="pokemon-number">#{{ getPokemonNumber(pokemon.url) }}</div>
        </div>
        
        <div class="pokemon-info">
          <h3 class="pokemon-name">{{ formatPokemonName(pokemon.name) }}</h3>
          <div class="pokemon-types" v-if="pokemonDetails[pokemon.name]">
            <span 
              v-for="type in pokemonDetails[pokemon.name].types" 
              :key="type.type.name"
              :class="['type-badge', `type-${type.type.name}`]"
            >
              {{ type.type.name }}
            </span>
          </div>
        </div>
        
        <div class="card-glow"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { getPokemonImage, getPokemonNumber, formatPokemonName } from '../../services/pokeApiService';

interface Pokemon {
  name: string;
  url: string;
}

export default defineComponent({
  name: 'PokemonGrid',
  props: {
    paginatedPokemons: {
      type: Array as PropType<Pokemon[]>,
      required: true
    },
    pokemonDetails: {
      type: Object as PropType<Record<string, any>>,
      required: true
    },
    filteredPokemonsLength: {
      type: Number,
      required: true
    },
    totalPokemons: {
      type: Number,
      required: true
    }
  },
  emits: ['selectPokemon'],
  setup() {
    return {
      getPokemonImage,
      getPokemonNumber,
      formatPokemonName
    };
  }
});
</script>

<style scoped>

.pokemon-counter {
  text-align: center;
  margin-bottom: 30px;
}

.counter-text {
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 700;
  color: #495057;
  backdrop-filter: blur(10px);
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.pokemon-card {
  cursor: pointer;
  height: 320px;
  perspective: 1000px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.pokemon-card:hover .card-inner {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.pokemon-image-container {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #d31818 0%, #b31b1b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.pokemon-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.pokemon-card:hover .pokemon-image {
  transform: scale(1.1);
}

.pokemon-number {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
}

.pokemon-info {
  padding: 20px;
  text-align: center;
}

.pokemon-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2d3748;
  margin: 0 0 10px 0;
  text-transform: capitalize;
}

.pokemon-types {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.type-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

.type-badge.type-fire { background: #ff7f50; }
.type-badge.type-water { background: #6493ea; }
.type-badge.type-grass { background: #7ac74c; }
.type-badge.type-electric { background: #f7d02c; color: #333; }
.type-badge.type-psychic { background: #f95587; }
.type-badge.type-ice { background: #96d9d6; color: #333; }
.type-badge.type-normal { background: #a8a77a; }
.type-badge.type-fighting { background: #c22e28; }
.type-badge.type-poison { background: #a33ea1; }
.type-badge.type-ground { background: #e2bf65; color: #333; }
.type-badge.type-flying { background: #a98ff3; }
.type-badge.type-bug { background: #a6b91a; }
.type-badge.type-rock { background: #b6a136; }
.type-badge.type-ghost { background: #735797; }
.type-badge.type-dragon { background: #6f35fc; }
.type-badge.type-dark { background: #705746; }
.type-badge.type-steel { background: #b7b7ce; color: #333; }
.type-badge.type-fairy { background: #d685ad; }
.type-badge.type-stellar { background: #6f35fc; color: #f7d02c; }
.type-badge.type-unknown { background: #333; }

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
}

.pokemon-card:hover .card-glow {
  animation: shine 0.6s ease-in-out;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
}

@media (max-width: 768px) {
  .pokemon-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .pokemon-grid {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <div class="pokemon-details-container" v-if="pokemon">
    <div class="details-header">
      <button @click="goBack" class="back-button">
        <Icon icon="mdi:arrow-left" /> Voltar
      </button>
      <div class="pokemon-name-and-number">
        <h1 class="pokemon-name">{{ formatPokemonName(pokemon.name) }}</h1>
        <span class="pokemon-number">#{{ getPokemonNumberFromId(pokemon.id) }}</span>
      </div>
    </div>

    <div class="details-card-wrapper" :class="pokemonMainTypeClass">
      <div class="details-card-inner">
        <div class="pokemon-image-section">
          <img 
            :src="getPokemonImage2(pokemon.id)" 
            :alt="pokemon.name"
            class="pokemon-details-image"
          >
          <div class="pokemon-types-badges">
            <span 
              v-for="typeInfo in pokemon.types" 
              :key="typeInfo.type.name"
              :class="['type-badge', `type-${typeInfo.type.name}`]"
            >
              {{ typeInfo.type.name.toUpperCase() }}
            </span>
          </div>
        </div>

        <div class="pokemon-info-section">
          <div class="info-group">
            <h2>Altura:</h2>
            <p>{{ (pokemon.height * 10 / 100).toFixed(2) }} m</p>
          </div>
          <div class="info-group">
            <h2>Peso:</h2>
            <p>{{ (pokemon.weight / 10).toFixed(2) }} kg</p>
          </div>
          <div class="info-group">
            <h2>Habilidades:</h2>
            <ul class="abilities-list">
              <li v-for="abilityInfo in pokemon.abilities" :key="abilityInfo.ability.name">
                {{ formatPokemonName(abilityInfo.ability.name) }}
                <span v-if="abilityInfo.is_hidden" class="hidden-ability">(Oculta)</span>
              </li>
            </ul>
          </div>

          <PokemonStats :stats="pokemon.stats" />
        </div>
      </div>
    </div>

    <div class="section-title">Evoluções</div>
    <div class="evolution-chain-container" v-if="evolutionChain.length > 0">
        <div v-for="(stage, index) in evolutionChain" :key="index" class="evolution-stage">
            <div class="evolution-pokemon-card" @click="selectPokemon(stage.name)">
                <img :src="getPokemonImage2(stage.id)" :alt="stage.name" class="evolution-image">
                <p class="evolution-name">{{ formatPokemonName(stage.name) }}</p>
                 <span class="evolution-number">#{{ getPokemonNumberFromId(stage.id) }}</span>
            </div>
            <div v-if="index < evolutionChain.length - 1" class="evolution-arrow">
                <Icon icon="mdi:arrow-right-thick" />
            </div>
        </div>
    </div>
    <div v-else class="no-evolution">
        <p>Este Pokémon não possui evoluções conhecidas na cadeia principal.</p>
    </div>

    <div v-if="loading" class="loading-overlay">
      <PokedexLoading />
    </div>
  </div>
  <div v-else-if="!loading && !pokemon" class="pokemon-not-found">
    <h1>Pokémon não encontrado!</h1>
    <p>Verifique o nome e tente novamente.</p>
    <button @click="goBack" class="back-button">
      <Icon icon="mdi:arrow-left" /> Voltar para a Pokédex
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { 
  getPokemonDetails, 
  formatPokemonName, 
  getPokemonSpeciesDetails, 
  getEvolutionChain, 
  getPokemonImage2
} from '../services/pokeApiService';
import PokedexLoading from '../components/pokedex/PokedexLoading.vue';

interface PokemonDetailsData {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string; url: string; }; is_hidden: boolean; }[];
  types: { type: { name: string; url: string; }; slot: number; }[];
  stats: { base_stat: number; effort: number; stat: { name: string; url: string; }; }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

interface EvolutionStage {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'PokemonDetails',
  components: {
    Icon,
    PokedexLoading,
    // PokemonStats, 
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const pokemon = ref<PokemonDetailsData | null>(null);
    const evolutionChain = ref<EvolutionStage[]>([]);
    const loading = ref(true);

    const loadPokemonData = async (pokemonName: string) => {
      loading.value = true;
      pokemon.value = null;
      evolutionChain.value = []; 
      try {
        const detailsResponse = await getPokemonDetails(pokemonName);
        pokemon.value = detailsResponse.data;
        if (!pokemon.value) {
            console.error('Detalhes do Pokémon não foram carregados corretamente.');
            loading.value = false;
            return;
        }

        const speciesResponse = await getPokemonSpeciesDetails(pokemon.value.id);
        if (speciesResponse.data.evolution_chain?.url) {
          const chainResponse = await getEvolutionChain(speciesResponse.data.evolution_chain.url);
          const evolutions: EvolutionStage[] = [];
          
          let currentStage = chainResponse.data.chain;

          while (currentStage) {
            const idMatch = currentStage.species.url.match(/\/(\d+)\/$/);
            const id = idMatch ? parseInt(idMatch[1]) : 0;
            
            evolutions.push({ 
                name: currentStage.species.name, 
                id: id 
            });

            if (currentStage.evolves_to && currentStage.evolves_to.length > 0) {
              currentStage = currentStage.evolves_to[0];
            } else {
              currentStage = null;
            }
          }
          evolutionChain.value = evolutions;
        }

      } catch (error) {
        console.error('Erro ao carregar detalhes do Pokémon ou cadeia de evolução:', error);
        pokemon.value = null;
      } finally {
        loading.value = false;
      }
    };

    const goBack = () => {
      router.back();
    };

    const getPokemonNumberFromId = (id: number): string => {
      return String(id).padStart(3, '0');
    };

    const selectPokemon = (pokemonName: string) => {
      router.push({ name: 'PokemonDetails', params: { name: pokemonName } });
    };

    const pokemonMainTypeClass = computed(() => {
      if (pokemon.value && pokemon.value.types.length > 0) {
        return `bg-type-${pokemon.value.types[0].type.name}`;
      }
      return '';
    });

    onMounted(() => {
      loadPokemonData(route.params.name as string);
    });

    watch(() => route.params.name, (newName) => {
      if (newName) {
        loadPokemonData(newName as string);
      }
    });

    return {
      pokemon,
      evolutionChain,
      loading,
      goBack,
      getPokemonImage2,
      formatPokemonName,
      getPokemonNumberFromId,
      selectPokemon,
      pokemonMainTypeClass
    };
  }
});
</script>

<style scoped>
.pokemon-details-container {
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #f0f2f5 0%, #e0e5ec 100%);
  color: #333;
}

.details-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 15px 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.back-button {
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.back-button:hover {
  background: #495057;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.pokemon-name-and-number {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.pokemon-name {
  font-size: 2.8rem;
  font-weight: bold;
  color: #2d3748;
  text-transform: capitalize;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.pokemon-number {
  font-size: 1.5rem;
  color: #6c757d;
  font-weight: 600;
  margin-top: -5px;
}

.details-card-wrapper {
  background: white;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  padding: 30px;
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;
}

.details-card-wrapper.bg-type-normal { background: #a8a77a; }
.details-card-wrapper.bg-type-fire { background: #ff7f50; }
.details-card-wrapper.bg-type-water { background: #6493ea; }
.details-card-wrapper.bg-type-grass { background: #7ac74c; }
.details-card-wrapper.bg-type-electric { background: #f7d02c; }
.details-card-wrapper.bg-type-ice { background: #96d9d6; }
.details-card-wrapper.bg-type-fighting { background: #c22e28; }
.details-card-wrapper.bg-type-poison { background: #a33ea1; }
.details-card-wrapper.bg-type-ground { background: #e2bf65; }
.details-card-wrapper.bg-type-flying { background: #a98ff3; }
.details-card-wrapper.bg-type-psychic { background: #f95587; }
.details-card-wrapper.bg-type-bug { background: #a6b91a; }
.details-card-wrapper.bg-type-rock { background: #b6a136; }
.details-card-wrapper.bg-type-ghost { background: #735797; }
.details-card-wrapper.bg-type-dragon { background: #6f35fc; }
.details-card-wrapper.bg-type-steel { background: #b7b7ce; }
.details-card-wrapper.bg-type-dark { background: #705746; }
.details-card-wrapper.bg-type-fairy { background: #d685ad; }
.details-card-wrapper.bg-type-stellar { background: #6f35fc; }
.details-card-wrapper.bg-type-unknown { background: #333; }

.details-card-wrapper.bg-type-electric .pokemon-info-section,
.details-card-wrapper.bg-type-ground .pokemon-info-section,
.details-card-wrapper.bg-type-ice .pokemon-info-section,
.details-card-wrapper.bg-type-steel .pokemon-info-section,
.details-card-wrapper.bg-type-normal .pokemon-info-section {
  color: #333;
}
.details-card-wrapper.bg-type-electric .pokemon-info-section h2,
.details-card-wrapper.bg-type-ground .pokemon-info-section h2,
.details-card-wrapper.bg-type-ice .pokemon-info-section h2,
.details-card-wrapper.bg-type-steel .pokemon-info-section h2,
.details-card-wrapper.bg-type-normal .pokemon-info-section h2 {
  color: #222;
}

.details-card-wrapper:not(.bg-type-electric):not(.bg-type-ground):not(.bg-type-ice):not(.bg-type-steel):not(.bg-type-normal) .pokemon-info-section {
  color: white;
}
.details-card-wrapper:not(.bg-type-electric):not(.bg-type-ground):not(.bg-type-ice):not(.bg-type-steel):not(.bg-type-normal) .pokemon-info-section h2 {
  color: #eee;
}

.details-card-inner {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.pokemon-image-section {
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.3);
}

.pokemon-details-image {
  width: 90%;
  height: 90%;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
}

.pokemon-types-badges {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 8px;
}

.type-badge {
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.type-badge.type-normal { background: #a8a77a; }
.type-badge.type-fire { background: #ff7f50; }
.type-badge.type-water { background: #6493ea; }
.type-badge.type-grass { background: #7ac74c; }
.type-badge.type-electric { background: #f7d02c; color: #333; }
.type-badge.type-ice { background: #96d9d6; color: #333; }
.type-badge.type-fighting { background: #c22e28; }
.type-badge.type-poison { background: #a33ea1; }
.type-badge.type-ground { background: #e2bf65; color: #333; }
.type-badge.type-flying { background: #a98ff3; }
.type-badge.type-psychic { background: #f95587; }
.type-badge.type-bug { background: #a6b91a; }
.type-badge.type-rock { background: #b6a136; }
.type-badge.type-ghost { background: #735797; }
.type-badge.type-dragon { background: #6f35fc; }
.type-badge.type-steel { background: #b7b7ce; color: #333; }
.type-badge.type-dark { background: #705746; }
.type-badge.type-fairy { background: #d685ad; }
.type-badge.type-stellar { background: #6f35fc; color: #f7d02c; }
.type-badge.type-unknown { background: #333; }


.pokemon-info-section {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.info-group {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.info-group h2 {
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: bold;
}

.info-group p, .abilities-list {
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
}

.abilities-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hidden-ability {
  font-style: italic;
  font-size: 0.9em;
  opacity: 0.8;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  border-radius: 2px;
}

.evolution-chain-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.evolution-stage {
  display: flex;
  align-items: center;
  gap: 15px;
}

.evolution-pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: #f8f9fa;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-width: 120px;
}

.evolution-pokemon-card:hover {
  transform: translateY(-5px);
  background: #e9ecef;
}

.evolution-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 5px;
}

.evolution-name {
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
  font-size: 1.1rem;
}

.evolution-number {
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 2px;
}

.evolution-arrow {
  font-size: 2.5rem;
  color: #6c757d;
}

.no-evolution {
  text-align: center;
  font-size: 1.1rem;
  color: #6c757d;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.pokemon-not-found {
  text-align: center;
  padding: 50px;
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.pokemon-not-found h1 {
  color: #dc3545;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.pokemon-not-found p {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 30px;
}

@media (max-width: 1024px) {
  .details-card-inner {
    flex-direction: column;
    align-items: center;
  }

  .pokemon-info-section {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  .pokemon-image-section {
    width: 250px;
    height: 250px;
  }

  .pokemon-name {
    font-size: 2.2rem;
  }
  .pokemon-number {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .pokemon-details-container {
    padding: 10px;
  }

  .details-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .pokemon-name-and-number {
    align-items: flex-start;
  }

  .pokemon-name {
    font-size: 2rem;
  }

  .pokemon-number {
    font-size: 1rem;
  }

  .details-card-wrapper {
    padding: 20px;
  }

  .pokemon-image-section {
    width: 200px;
    height: 200px;
  }

  .pokemon-info-section {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .evolution-chain-container {
    flex-direction: column;
  }

  .evolution-stage {
    flex-direction: column;
    gap: 5px;
  }

  .evolution-arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 480px) {
  .pokemon-name {
    font-size: 1.8rem;
  }
  .pokemon-number {
    font-size: 0.9rem;
  }
  .pokemon-details-image {
    width: 150px;
    height: 150px;
  }
  .pokemon-image-section {
    width: 180px;
    height: 180px;
  }
  .type-badge {
    padding: 4px 8px;
    font-size: 11px;
  }
  .info-group h2 {
    font-size: 1rem;
  }
  .info-group p, .abilities-list {
    font-size: 0.9rem;
  }
  .section-title {
    font-size: 1.6rem;
  }
  .evolution-image {
    width: 60px;
    height: 60px;
  }
  .evolution-name {
    font-size: 0.9rem;
  }
}
</style>

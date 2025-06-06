<template>
  <div class="pokedex-container">
    <PokedexHeader 
      :search-query="searchQuery"
      :selected-type="selectedType"
      :selected-generation="selectedGeneration" 
      :pokemon-types="pokemonTypes"
      :pokemon-generations="pokemonGenerations" 
      @update:searchQuery="searchQuery = $event"
      @update:selectedType="selectedType = $event; currentPage = 1"
      @update:selectedGeneration="selectedGeneration = $event; currentPage = 1" 
      @clearFilters="clearFilters"
    />

    <PokemonGrid 
      v-if="!loading"
      :paginated-pokemons="paginatedPokemons"
      :pokemon-details="pokemonDetails"
      :filtered-pokemons-length="filteredPokemons.length"
      :total-pokemons="totalPokemons"
      @selectPokemon="selectPokemon"
    />

    <PokedexLoading v-if="loading" />

    <PokedexPagination
      v-if="!loading && filteredPokemons.length > pokemonPerPage"
      :current-page="currentPage"
      :total-pages="totalPages"
      :visible-pages="visiblePages"
      @changePage="changePage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  getPokemonList,
  getPokemonDetails,
  getPokemonTypes,
  getPokemonGenerations,
  getPokemonByGeneration,
} from '../services/pokeApiService';

import PokedexHeader from '../components/pokedex/PokedexHeader.vue';
import PokemonGrid from '../components/pokedex/PokemonGrid.vue';
import PokedexPagination from '../components/pokedex/PokedexPagination.vue';
import PokedexLoading from '../components/pokedex/PokedexLoading.vue';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonType {
  name: string;
  url: string;
}

interface PokemonGeneration {
  name: string;
  url: string;
}

export default defineComponent({
  name: 'Pokedex',
  components: {
    PokedexHeader,
    PokemonGrid,
    PokedexPagination,
    PokedexLoading
  },
  setup() {
    const router = useRouter();

    const fullPokemonListForCurrentContext = ref<Pokemon[]>([]); 

    const pokemonDetails = ref<Record<string, any>>({}); 
    const pokemonTypes = ref<PokemonType[]>([]);
    const pokemonGenerations = ref<PokemonGeneration[]>([]);
    const loading = ref(true);
    const searchQuery = ref('');
    const selectedType = ref('');
    const selectedGeneration = ref(''); 
    const currentPage = ref(1);
    const pokemonPerPage = 20;
    const totalPokemons = ref(0);
    const filteredPokemons = computed(() => {
      let filtered = fullPokemonListForCurrentContext.value;

      if (searchQuery.value) {
        filtered = filtered.filter(pokemon => 
          pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }

      if (selectedType.value) {
        filtered = filtered.filter(pokemon => {
          const details = pokemonDetails.value[pokemon.name];
          return details?.types?.some((type: any) => type.type.name === selectedType.value);
        });
      }

      return filtered;
    });

    const totalPages = computed(() => Math.ceil(filteredPokemons.value.length / pokemonPerPage));

    const paginatedPokemons = computed(() => {
      const start = (currentPage.value - 1) * pokemonPerPage;
      const end = start + pokemonPerPage;
      return filteredPokemons.value.slice(start, end);
    });

    const visiblePages = computed(() => {
      const pages = [];
      const start = Math.max(1, currentPage.value - 4);
      const end = Math.min(totalPages.value, currentPage.value + 4);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });

    const loadBasePokemonList = async () => {
      loading.value = true;
      try {
        let pokemonData: Pokemon[] = [];
        if (selectedGeneration.value) {
          const genId = parseInt(selectedGeneration.value);
          const response = await getPokemonByGeneration(genId);
          pokemonData = response.data.pokemon_species.map((s: any) => ({
            name: s.name,
            url: s.url.replace('pokemon-species', 'pokemon') 
          })).sort((a: Pokemon, b: Pokemon) => {
            const idA = parseInt(a.url.split('/').slice(-2, -1)[0]);
            const idB = parseInt(b.url.split('/').slice(-2, -1)[0]);
            return idA - idB;
          });
        } else {

          const response = await getPokemonList(1302, 0); 
          pokemonData = response.data.results;
        }
        
        fullPokemonListForCurrentContext.value = pokemonData;
        totalPokemons.value = pokemonData.length;

        await loadPokemonDetails(fullPokemonListForCurrentContext.value);

      } catch (error) {
        console.error('Erro ao carregar Pokémon:', error);
        fullPokemonListForCurrentContext.value = [];
        totalPokemons.value = 0;
      } finally {
        loading.value = false;
      }
    };

    const loadPokemonTypes = async () => {
      try {
        const response = await getPokemonTypes();
        pokemonTypes.value = response.data.results;
      } catch (error) {
        console.error('Erro ao carregar tipos:', error);
      }
    };

    const loadPokemonGenerations = async () => {
      try {
        const response = await getPokemonGenerations();
        pokemonGenerations.value = response.data.results;
      } catch (error) {
        console.error('Erro ao carregar gerações:', error);
      }
    };

    const loadPokemonDetails = async (pokemonList: Pokemon[]) => {
      const promises = pokemonList.map(async (pokemon) => {
        if (!pokemonDetails.value[pokemon.name]) {
          try {
            const response = await getPokemonDetails(pokemon.name);
            pokemonDetails.value[pokemon.name] = response.data;
          } catch (error) {
            console.warn(`Erro ao carregar detalhes de ${pokemon.name}:`, error);

          }
        }
      });

      await Promise.allSettled(promises);
    };

    const selectPokemon = (pokemon: Pokemon) => {
      router.push(`/pokemon/${pokemon.name}`);
    };

    const clearFilters = () => {
      searchQuery.value = '';
      selectedType.value = '';
      selectedGeneration.value = ''; 
      currentPage.value = 1;

      loadBasePokemonList(); 
    };

    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    watch([searchQuery, selectedType], () => {
        currentPage.value = 1; 
    });

    watch(selectedGeneration, async (newGen, oldGen) => {
        if (newGen !== oldGen) {
            currentPage.value = 1;
            await loadBasePokemonList();
        }
    });

    watch(paginatedPokemons, (newPokemons) => {

      loadPokemonDetails(newPokemons.filter(p => !pokemonDetails.value[p.name]));
    }, { deep: true }); 

    onMounted(async () => {
      loading.value = true;
      await Promise.all([
        loadPokemonTypes(), 
        loadPokemonGenerations()
      ]);
      await loadBasePokemonList();
      loading.value = false;
    });

    return {

      searchQuery,
      selectedType,
      selectedGeneration,
      pokemonTypes,
      pokemonGenerations,
      loading,
      pokemonDetails,
      totalPokemons,
      filteredPokemons,
      paginatedPokemons,
      currentPage,
      totalPages,
      visiblePages,
      pokemonPerPage,
      
      selectPokemon,
      clearFilters,
      changePage
    };
  }
});
</script>

<style>
.pokedex-container {
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

@media (max-width: 768px) {
  .pokedex-container {
    padding: 10px;
  }
}
</style>
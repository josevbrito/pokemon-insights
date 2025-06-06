<template>
  <div class="pokedex-header">
    <div class="logo-section">
      <div class="pokeball-logo">
        <div class="pokeball-top"></div>
        <div class="pokeball-middle"></div>
        <div class="pokeball-bottom"></div>
      </div>
      <h1 class="pokedex-title">POKÉDEX</h1>
    </div>
    
    <div class="controls-section">
      <div class="search-and-filter-row">
        <div class="search-bar">
          <input 
            :value="searchQuery" 
            @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)" 
            type="text" 
            placeholder="Buscar Pokémon..."
            class="search-input"
          >
          <div class="search-icon">
            <Icon icon="mdi:search" class="nav-icon" />
          </div>
        </div>
        
        <div class="type-select-container">
          <select 
            :value="selectedType" 
            @change="$emit('update:selectedType', ($event.target as HTMLSelectElement).value)" 
            class="type-select"
            :class="selectedTypeClass" 
          >
            <option value="">TODOS OS TIPOS</option> 
            <option 
              v-for="type in pokemonTypes" 
              :key="type.name" 
              :value="type.name"
              :class="`type-${type.name}`"
            >
              {{ type.name.toUpperCase() }} 
            </option>
          </select>
        </div>

        <div class="generation-select-container type-select-container"> 
          <select 
            :value="selectedGeneration" 
            @change="$emit('update:selectedGeneration', ($event.target as HTMLSelectElement).value)" 
            class="generation-select type-select"
          >
            <option value="">TODAS AS GERAÇÕES</option> 
            <option 
              v-for="(gen, index) in pokemonGenerations" 
              :key="gen.name" 
              :value="(index + 1).toString()"
            >
              Geração {{ index + 1 }}
            </option>
          </select>
        </div>

        <button 
          @click="$emit('clearFilters')" 
          class="clear-filter"
          v-if="selectedType || searchQuery || selectedGeneration"
        >
          <Icon icon="mdi:eraser-variant" class="erase-icon" /> Limpar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue';
import { Icon } from '@iconify/vue';

interface PokemonType {
  name: string;
  url: string;
}

interface PokemonGeneration {
  name: string;
  url: string;
}

export default defineComponent({
  name: 'PokedexHeader',
  components: {
    Icon
  },
  props: {
    searchQuery: {
      type: String,
      default: ''
    },
    selectedType: {
      type: String,
      default: ''
    },
    selectedGeneration: { 
      type: String,
      default: ''
    },
    pokemonTypes: {
      type: Array as PropType<PokemonType[]>,
      required: true
    },
    pokemonGenerations: { 
      type: Array as PropType<PokemonGeneration[]>,
      required: true
    }
  },
  emits: ['update:searchQuery', 'update:selectedType', 'update:selectedGeneration', 'clearFilters'],
  setup(props) {
    const selectedTypeClass = computed(() => {
      return props.selectedType ? `type-${props.selectedType}` : '';
    });

    return {
      selectedTypeClass
    };
  }
});
</script>

<style scoped>
.pokedex-header {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.pokeball-logo {
  width: 60px;
  height: 60px;
  position: relative;
  cursor: pointer;
  animation: spin 10s linear infinite;
}

.pokeball-top, .pokeball-bottom {
  width: 100%;
  height: 50%;
  border-radius: 30px 30px 0 0;
}

.pokeball-top {
  background: #ff6b6b;
  border-bottom: 3px solid #333;
}

.pokeball-bottom {
  background: #f8f9fa;
  border-radius: 0 0 30px 30px;
  border-top: 3px solid #333;
}

.pokeball-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: white;
  border: 4px solid #333;
  border-radius: 50%;
}

.pokeball-middle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.pokedex-title {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff0000, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.controls-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search-and-filter-row { 
  display: flex; 
  gap: 15px; 
  flex-wrap: wrap; 
  align-items: center; 
}

.search-bar {
  position: relative;
  flex-grow: 1; 
  min-width: 200px; 
}

.search-input {
  width: 100%;
  padding: 15px 50px 15px 20px;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #4ecdc4;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2);
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-44%);
  font-size: 25px;
  color: #6c757d;
}

.clear-filter {
  height: 52px;
  padding: 0 18px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #6c757d;
  color: white;
  display: flex; 
  align-items: center;
  justify-content: center;
  gap: 5px; 
  white-space: nowrap; 
  flex-shrink: 0;
  min-width: 120px;
}

.clear-filter:hover {
  background: #495057;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.erase-icon {
  font-size: 20px; 
}

.type-select-container, .generation-select-container {
  position: relative;
  flex-shrink: 0; 
  min-width: 180px; 
}

.type-select, .generation-select {
  width: 100%;
  padding: 15px 45px 15px 20px;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  background: white;
  color: #495057;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 20px;
}

.type-select.type-fire     { background: #ff7f50; color: white; }
.type-select.type-water    { background: #6493ea; color: white; }
.type-select.type-grass    { background: #7ac74c; color: white; }
.type-select.type-electric { background: #f7d02c; color: #333; }
.type-select.type-psychic  { background: #f95587; color: white; }
.type-select.type-ice      { background: #96d9d6; color: #333; }
.type-select.type-dragon   { background: #6f35fc; color: white; }
.type-select.type-dark     { background: #705746; color: white; }
.type-select.type-fighting { background: #c22e28; color: white; }
.type-select.type-poison   { background: #a33ea1; color: white; }
.type-select.type-ground   { background: #e2bf65; color: #333; }
.type-select.type-flying   { background: #a98ff3; color: white; }
.type-select.type-bug      { background: #a6b91a; color: white; }
.type-select.type-rock     { background: #b6a136; color: white; }
.type-select.type-ghost    { background: #735797; color: white; }
.type-select.type-steel    { background: #b7b7ce; color: #333; }
.type-select.type-fairy    { background: #d685ad; color: white; }
.type-select.type-normal   { background: #a8a77a; color: white; }
.type-select.type-stellar  { background: #6f35fc; color: #f7d02c; }
.type-select.type-unknown  { background: #333;    color: white; }


.type-select:hover, .generation-select:hover {
  border-color: #4ecdc4;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(78, 205, 196, 0.2);
}

.type-select:focus, .generation-select:focus {
  border-color: #4ecdc4;
  box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.4); 
  transform: translateY(-2px);
  background-color: #e6f7f6; 
  color: #2d3748; 
  background-image: none; 
}

.type-select option, .generation-select option {
  padding: 12px 20px;
  font-weight: 600;
  border-radius: 8px;
  margin: 2px 0;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}

.type-select option.type-fire    { background: #ff7f50; color: white; }
.type-select option.type-water   { background: #6493ea; color: white; }
.type-select option.type-grass   { background: #7ac74c; color: white; }
.type-select option.type-electric{ background: #f7d02c; color: #333;   }
.type-select option.type-psychic { background: #f95587; color: white; }
.type-select option.type-ice     { background: #96d9d6; color: #333;   }
.type-select option.type-dragon  { background: #6f35fc; color: white; }
.type-select option.type-dark    { background: #705746; color: white; }
.type-select option.type-fighting{ background: #c22e28; color: white; }
.type-select option.type-poison  { background: #a33ea1; color: white; }
.type-select option.type-ground  { background: #e2bf65; color: #333;   }
.type-select option.type-flying  { background: #a98ff3; color: white; }
.type-select option.type-bug     { background: #a6b91a; color: white; }
.type-select option.type-rock    { background: #b6a136; color: white; }
.type-select option.type-ghost   { background: #735797; color: white; }
.type-select option.type-steel   { background: #b7b7ce; color: #333;   }
.type-select option.type-fairy   { background: #d685ad; color: white; }
.type-select option.type-normal  { background: #a8a77a; color: white; }
.type-select option.type-stellar { background: #6f35fc; color: #f7d02c; }
.type-select option.type-unknown { background: #333;    color: white; }


.type-select option:hover, .generation-select option:hover {
  background-color: rgba(78, 205, 196, 0.2); 
  color: #2d3748;
}

.type-select-container::before, .generation-select-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(102, 126, 234, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
}

.type-select-container:hover::before, .generation-select-container:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .pokedex-header {
    padding: 20px;
  }
  
  .logo-section {
    flex-direction: column;
    text-align: center;
  }
  
  .pokedex-title {
    font-size: 2rem;
  }
  
  .controls-section {
    align-items: center;
  }
  
  .search-and-filter-row { 
    flex-direction: column; 
    width: 100%;
    gap: 15px; 
  }

  .search-bar, .type-select-container, .generation-select-container, .clear-filter { 
    max-width: 100%; 
    min-width: unset; 
  }
  
  .search-input, .type-select, .generation-select, .clear-filter {
    font-size: 14px;
    padding: 12px 40px 12px 16px;
    height: auto;
  }

  .clear-filter {
    width: 100%; 
  }
}

@media (max-width: 480px) {
  .search-input, .type-select, .generation-select, .clear-filter {
    font-size: 13px;
    padding: 10px 35px 10px 14px;
    background-size: 16px;
    background-position: right 12px center;
  }
}
</style>
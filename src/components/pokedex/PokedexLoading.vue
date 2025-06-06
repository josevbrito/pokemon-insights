<template>
  <div class="loading-container">
    <div class="pokeball-loader">
      <div class="pokeball-loading">
        <div class="pokeball-loading-top"></div>
        <div class="pokeball-loading-middle"></div>
        <div class="pokeball-loading-bottom"></div>
      </div>
    </div>
    <p class="loading-text">Carregando Pokémon...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokedexLoading'
});
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.pokeball-loader {
  margin-bottom: 20px;
}

.pokeball-loading {
  width: 80px;
  height: 80px;
  position: relative;
  animation: bounce 1.5s ease-in-out infinite;
}

.pokeball-loading-top, .pokeball-loading-bottom {
  width: 100%;
  height: 50%;
  border-radius: 40px 40px 0 0;
}

.pokeball-loading-top {
  background: #ff6b6b;
  border-bottom: 4px solid #333;
}

.pokeball-loading-bottom {
  background: #f8f9fa;
  border-radius: 0 0 40px 40px;
  border-top: 4px solid #333;
}

.pokeball-loading-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: white;
  border: 5px solid #333;
  border-radius: 50%;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

.loading-text {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
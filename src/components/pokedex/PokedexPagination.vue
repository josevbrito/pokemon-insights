<template>
  <div class="pagination">
    <button 
      @click="$emit('changePage', currentPage - 1)" 
      :disabled="currentPage === 1"
      class="page-btn"
    >
      ◀ Anterior
    </button>
    
    <div class="page-numbers">
      <button 
        v-for="page in visiblePages" 
        :key="page"
        @click="$emit('changePage', page)"
        :class="['page-number', { active: page === currentPage }]"
      >
        {{ page }}
      </button>
    </div>
    
    <button 
      @click="$emit('changePage', currentPage + 1)" 
      :disabled="currentPage === totalPages"
      class="page-btn"
    >
      Próximo ▶
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'PokedexPagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    visiblePages: {
      type: Array as PropType<number[]>,
      required: true
    }
  },
  emits: ['changePage']
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

.page-btn, .page-number {
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: #495057;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.page-btn:hover:not(:disabled), .page-number:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number.active {
  background: #4ecdc4;
  color: white;
}

.page-numbers {
  display: flex;
  gap: 5px;
}

@media (max-width: 480px) {
  .pagination {
    flex-wrap: wrap;
  }
  .page-numbers {
    display: none;
  }
}
</style>
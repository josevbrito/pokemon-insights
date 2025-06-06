import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';
import Pokedex from '../pages/Pokedex.vue';
import PokemonDetails from '../pages/PokemonDetails.vue';
import NotFound from '../pages/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pokedex', name: 'Pokedex', component: Pokedex },
  { path: '/pokemon/:name', name: 'PokemonDetails', component: PokemonDetails },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

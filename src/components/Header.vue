<template>
  <header class="header">
    <div class="header-bg"></div>
    <nav class="nav">
      <router-link to="/" class="logo">
        <Icon icon="mdi:flash" class="logo-icon" />
        <span class="logo-text">Pokemon Insights</span>
      </router-link>

      <ul class="nav-links">
        <li>
          <router-link to="/" class="nav-link">
            <Icon icon="mdi:home" class="nav-icon" />
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/pokedex" class="nav-link">
            <Icon icon="mdi:pokeball" class="nav-icon" />
            <span>Pokedex</span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <!-- Mobile menu overlay -->
    <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
      <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
        <Icon icon="mdi:home" class="nav-icon" />
        <span>Home</span>
      </router-link>
      <router-link to="/pokedex" class="mobile-nav-link" @click="closeMobileMenu">
        <Icon icon="mdi:pokeball" class="nav-icon" />
        <span>Pokedex</span>
      </router-link>
    </div>
  </header>
</template>


<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    return {
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  background: linear-gradient(135deg, #ee1515 0%, #a10d0d 100%);
  padding: 1rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 99, 99, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 179, 179, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(180, 50, 50, 0.4) 0%, transparent 50%);
  animation: float 8s ease-in-out infinite;
}


@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

.nav {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.logo:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.logo-icon {
  font-size: 1.8rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.logo-text {
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-link.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(102, 126, 234, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.mobile-menu.active {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-link:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .logo {
    font-size: 1.3rem;
    padding: 0.4rem 0.8rem;
  }
  
  .logo-text {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo-icon {
    font-size: 1.5rem;
  }
}
</style>
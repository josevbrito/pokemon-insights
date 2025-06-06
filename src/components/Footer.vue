<template>
  <footer class="footer">
    <div class="footer-bg"></div>
    
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-brand">
          <div class="brand-logo">
            <span class="brand-icon">⚡</span>
            <span class="brand-text">Pokemon Insights</span>
          </div>
          <p class="brand-description">
            Explore o mundo dos Pokémons com dados detalhados e insights incríveis.
          </p>
        </div>

        <div class="footer-links">
          <div class="link-section">
            <h3>Navegação</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/pokedex">Pokedex</router-link></li>
            </ul>
          </div>
          
          <div class="link-section">
            <h3>Conecte-se</h3>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer bottom -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>© 2025 Pokemon Insights</p>
          <div class="creator">
            <span>Criado com</span>
            <span class="heart">❤️</span>
            <span>por <strong>José Brito</strong></span>
          </div>
        </div>
        
        <div class="footer-tech">
          <span class="tech-badge">Vue.js</span>
          <span class="tech-badge">TypeScript</span>
          <span class="tech-badge">PokeAPI</span>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="pokeball pokeball-1"></div>
    <div class="pokeball pokeball-2"></div>
    <div class="pokeball pokeball-3"></div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  position: relative;
  background: linear-gradient(135deg, #ee1515 0%, #a10d0d 100%);
  color: white;
  margin-top: auto;
  overflow: hidden;
}

.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(120, 219, 226, 0.2) 0%, transparent 50%);
  animation: float 10s ease-in-out infinite;
}

.footer-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand {
  max-width: 400px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.brand-icon {
  font-size: 2rem;
  animation: pulse 2s infinite;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 3rem;
}

.link-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #f0f8ff;
}

.link-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-section li {
  margin-bottom: 0.5rem;
}

.link-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.link-section a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  transition: width 0.3s ease;
}

.link-section a:hover {
  color: white;
  transform: translateX(5px);
}

.link-section a:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.creator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.heart {
  color: #ff6b6b;
  font-size: 1rem;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.creator strong {
  color: white;
  font-weight: 600;
}

.footer-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-badge {
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.pokeball {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ff6b6b 50%, white 50%);
  border: 3px solid #333;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.pokeball::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  border: 3px solid #333;
}

.pokeball-1 {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.pokeball-2 {
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

.pokeball-3 {
  top: 60%;
  right: 20%;
  animation-delay: 4s;
  width: 40px;
  height: 40px;
}

.pokeball-3::after {
  width: 15px;
  height: 15px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 2rem 1rem 1rem;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .copyright {
    align-items: center;
  }
  
  .creator {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .brand-logo {
    justify-content: center;
  }
  
  .brand-text {
    font-size: 1.3rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .tech-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }
  
  .pokeball {
    width: 40px;
    height: 40px;
  }
  
  .pokeball::after {
    width: 15px;
    height: 15px;
  }
}
</style>
# 🏦 Bank React Tailwind

Una moderna landing page para una plataforma de pagos online, construida con React, Tailwind CSS y Vite. Diseño responsivo, rápido y optimizado para conversión.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Características

- 🎨 **Diseño moderno** con Tailwind CSS
- ⚡ **Ultra rápido** gracias a Vite
- 📱 **Totalmente responsivo** (mobile-first)
- 🎯 **Optimizado para conversión** con CTAs estratégicos
- 🌙 **Componentes reutilizables** en React
- 📊 **Sección de estadísticas** y testimonios
- 🤝 **Galería de clientes** destacados
- 🔥 **Hot Module Replacement** en desarrollo
- 📦 **Minificado y optimizado** para producción

## 🎯 Secciones

- **Navbar** - Navegación responsive con logo y links
- **Hero** - Sección de bienvenida con CTA principal
- **Stats** - Métricas de la empresa
- **Business** - Propuesta de valor
- **Billing** - Planes de precios
- **CardDeal** - Características principales
- **Testimonials** - Opiniones de clientes
- **Clients** - Empresas que confían en nosotros
- **CTA** - Llamada a la acción final
- **Footer** - Pie de página con links y contacto

## 📋 Requisitos Previos

- Node.js >= 14.0.0
- npm o yarn
- Git (para clonar el repositorio)

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Letualtv/bank_react_tailwind.git
cd bank_react_tailwind
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
bank_react_tailwind/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Business.jsx
│   │   ├── Billing.jsx
│   │   ├── CardDeal.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Clients.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── FeedBackCard.jsx
│   │   └── GetStarted.jsx
│   ├── constants/            # Constantes y datos
│   ├── assets/               # Imágenes y recursos
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   ├── index.css             # Estilos globales
│   └── style.js              # Estilos reutilizables
├── public/                   # Recursos públicos
├── vite.config.js            # Configuración de Vite
├── tailwind.config.js        # Configuración de Tailwind
├── postcss.config.js         # Configuración de PostCSS
├── package.json
└── README.md
```

## 💻 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🎨 Personalización

### Colores y Estilos
Los estilos se encuentran principalmente en:
- `src/index.css` - Estilos globales
- `tailwind.config.js` - Configuración de colores y temas
- `src/style.js` - Variables reutilizables

### Contenido
- `src/constants/index.js` - Datos de navegación, testimonios, etc.
- `src/components/` - Contenido de cada sección

## 🌐 Desplegar en GitHub Pages

### Opción 1: Automático con GitHub Actions

1. **Configurar el repositorio**
```bash
git remote add origin https://github.com/Letualtv/bank_react_tailwind.git
```

2. **Crear archivo de workflow** `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. **Permitir GitHub Pages en el repositorio**
   - Ve a Settings → Pages
   - Selecciona "Deploy from a branch"
   - Branch: `gh-pages`, Carpeta: `/ (root)`

### Opción 2: Deploy Manual

```bash
# Compilar
npm run build

# El contenido está en la carpeta 'dist/'
# Sube la carpeta 'dist/' a GitHub Pages o a tu servidor
```

## 📦 Dependencias

- **react** (^18.2.0) - Librería de UI
- **react-dom** (^18.2.0) - Renderizado en DOM
- **tailwindcss** (^3.3.5) - Framework CSS
- **vite** (^4.4.5) - Build tool
- **postcss** (^8.4.31) - Procesador CSS
- **autoprefixer** (^10.4.16) - Prefijos CSS automáticos

## 🛠️ Herramientas de Desarrollo

- **ESLint** - Linting de código
- **@vitejs/plugin-react** - Plugin React para Vite
- **TypeScript support** - Tipos para React y DOM

## 📱 Responsive Design

El proyecto utiliza Tailwind CSS con breakpoints:
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `2xl` - 1536px

## 🔍 SEO Basics

Para mejorar SEO, considera:
- Actualizar `index.html` con meta tags
- Agregar descripción y keywords
- Implementar Open Graph tags
- Crear sitemap.xml
- Agregar robots.txt

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️

## 📞 Soporte

¿Preguntas? Abre un [Issue](https://github.com/Letualtv/bank_react_tailwind/issues) en el repositorio.

---

**Última actualización:** Abril 2026

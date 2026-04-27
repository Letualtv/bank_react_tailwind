# 🚀 Guía de Despliegue - GitHub Pages

## Opción 1: Despliegue Automático con GitHub Actions (RECOMENDADO)

### Paso 1: Preparar el repositorio

```bash
# Inicializar git si no está inicializado
git init

# Agregar el remoto
git remote add origin https://github.com/TuUsuario/bank_react_tailwind.git

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit"

# Empujar a main
git branch -M main
git push -u origin main
```

### Paso 2: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Abre **Settings** → **Pages**
3. En "Build and deployment":
   - Source: **GitHub Actions**
   - Guarda los cambios

### Paso 3: El workflow se ejecutará automáticamente

- Cada vez que hagas `git push` a `main` o `master`, se ejecutará automáticamente
- El workflow construirá la aplicación y la desplegará en GitHub Pages
- Tu sitio estará disponible en: `https://TuUsuario.github.io/bank_react_tailwind/`

---

## Opción 2: Despliegue Manual con gh-pages

### Paso 1: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Paso 2: Configurar package.json

El script `deploy` ya está configurado:
```json
"deploy": "npm run build && gh-pages -d dist"
```

### Paso 3: Desplegar

```bash
npm run deploy
```

Tu sitio estará disponible en: `https://TuUsuario.github.io/bank_react_tailwind/`

---

## Opción 3: Despliegue en dominio personalizado

### Si tienes un dominio personalizado:

1. Crea un archivo `CNAME` en la carpeta `public/`:
```
tudominio.com
```

2. En GitHub:
   - Settings → Pages
   - Custom domain: `tudominio.com`
   - Guarda

3. Configura los registros DNS según las instrucciones de GitHub

---

## ⚠️ Nota Importante: Rutas

Si despliegas en un subfolder (`github.io/bank_react_tailwind/`), necesitas actualizar `vite.config.js`:

```javascript
export default defineConfig({
  base: '/bank_react_tailwind/', // Descomenta esta línea
  plugins: [react()],
})
```

Si es en el root (`tudominio.com`), deja `base: '/'` o sin comentar.

---

## 🔧 Solución de Problemas

### El sitio se ve quebrado (sin estilos ni assets)
→ Verifica la configuración de `base` en `vite.config.js`

### Los links no funcionan
→ Asegúrate de que los enlaces sean relativos, no absolutos

### El workflow falla
→ Verifica que hayas hecho `git push` a la rama correcta (main o master)

### Cambios no se reflejan
→ GitHub Pages puede tardar 1-2 minutos, limpia el caché del navegador

---

## 📊 Monitorear el despliegue

1. Ve a **Actions** en tu repositorio
2. Selecciona el workflow "Deploy to GitHub Pages"
3. Verifica el estado en tiempo real
4. Haz clic en el workflow para ver los detalles

---

## 🎉 ¡Listo!

Tu sitio está en vivo. Comparte la URL: `https://TuUsuario.github.io/bank_react_tailwind/`

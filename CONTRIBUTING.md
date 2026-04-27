# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a **Bank React**! Este documento proporciona directrices para contribuir al proyecto.

## 📋 Código de Conducta

Por favor, sé respetuoso y constructivo en todas las interacciones. Queremos mantener una comunidad acogedora y segura.

## 🐛 Reportar Bugs

Si encuentras un bug:

1. **Verifica que no exista un issue similar** buscando en [Issues](../../issues)
2. **Abre un nuevo issue** con:
   - Título descriptivo
   - Descripción detallada del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si es relevante
   - Sistema operativo y versión de Node.js

### Ejemplo de reporte de bug:
```
Título: Navbar se superpone en pantallas pequeñas

Descripción:
En dispositivos móviles (iPhone 12), el menú de navegación se superpone con el contenido principal.

Pasos para reproducir:
1. Abre el sitio en un iPhone 12 o en DevTools con viewport de 390x844
2. Observa la navbar
3. Navega a la sección "Features"

Comportamiento esperado:
La navbar debe ser responsiva sin superponer contenido.

Comportamiento actual:
La navbar se superpone sobre el contenido.
```

## ✨ Proponer Mejoras

1. Abre un issue describiendo tu idea
2. Discute la propuesta antes de implementar
3. Una vez aprobada, puedes proceder con un Pull Request

## 🚀 Pull Requests

### Paso 1: Fork y Clone

```bash
# Fork el proyecto en GitHub
# Clone tu fork
git clone https://github.com/Letualtv/bank_react_tailwind.git
cd bank_react_tailwind
```

### Paso 2: Crear una rama

```bash
# Actualiza main
git checkout main
git pull origin main

# Crea una rama para tu feature
git checkout -b feature/nombre-descriptivo
```

**Nombres de rama sugeridos:**
- `feature/nueva-seccion-testimonios`
- `bugfix/navbar-mobile`
- `docs/actualizar-readme`
- `refactor/limpiar-estilos`

### Paso 3: Hacer cambios

1. Haz cambios pequeños y lógicos
2. Ejecuta `npm run lint` para verificar el código
3. Prueba en desarrollo: `npm run dev`

### Paso 4: Commit

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "Add: nueva sección de testimonios en Hero component"
```

**Formato de mensajes de commit:**
```
<tipo>: <descripción breve>

<descripción detallada opcional>

Related-To: #123
```

**Tipos de commit:**
- `feat:` - Nueva característica
- `fix:` - Correción de bug
- `refactor:` - Cambio de código sin cambiar funcionalidad
- `style:` - Cambios de estilos CSS o formato
- `docs:` - Cambios en documentación
- `perf:` - Mejora de performance
- `test:` - Agregar o actualizar tests
- `chore:` - Cambios en dependencias o configuración

### Paso 5: Push y Pull Request

```bash
# Push a tu fork
git push origin feature/nombre-descriptivo
```

En GitHub:
1. Navega a tu fork
2. Haz clic en "Compare & pull request"
3. Completa el título y descripción del PR
4. Espera la revisión

### Template para Pull Request

```markdown
## Descripción
Breve descripción del cambio.

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Cambio que rompe compatibilidad

## Cambios
- Punto 1
- Punto 2
- Punto 3

## Screenshots (si aplica)
[Agregar screenshots]

## Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] Ejecuté `npm run lint` sin errores
- [ ] Probé en desarrollo
- [ ] Actualicé la documentación si es necesario
- [ ] Mis cambios no rompen funcionalidades existentes

## Issues relacionados
Cierra #123
```

## 📝 Estándares de Código

### JavaScript/React

```javascript
// ✅ Bueno
const handleClick = (event) => {
  event.preventDefault();
  // hacer algo
};

// ❌ Malo
function handleClick(e) {
  e.preventDefault();
  // hacer algo
}
```

### Nombres

- Componentes: PascalCase (`NavBar.jsx`, `HeroSection.jsx`)
- Variables/funciones: camelCase (`handleSubmit`, `userData`)
- Constantes: UPPER_SNAKE_CASE (`API_URL`, `MAX_RETRIES`)

### Componentes React

```jsx
// ✅ Componentes funcionales
const MyComponent = () => {
  const [state, setState] = useState('');
  
  return (
    <div>
      {/* JSX aquí */}
    </div>
  );
};

export default MyComponent;
```

## 🧪 Testing

Aunque no hay tests configurados actualmente, se aprecian mejoras en esta área.

```bash
# Ejecutar linter
npm run lint
```

## 📚 Documentación

Si agregas una nueva característica importante:

1. Actualiza el README.md
2. Documenta en comentarios si es necesario
3. Actualiza DEPLOY.md si es relevante

## 🎨 CSS y Tailwind

- Usa Tailwind CSS en lugar de CSS personalizado cuando sea posible
- Mantén la consistencia con el diseño existente
- Revisa `tailwind.config.js` para colores y estilos disponibles

```jsx
// ✅ Bueno
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
  Click me
</button>

// ❌ Evitar estilos inline
<button style={{ backgroundColor: 'blue', padding: '10px' }}>
  Click me
</button>
```

## 🔄 Proceso de Revisión

1. Tu PR será revisada por al menos un mantenedor
2. Se pueden solicitar cambios
3. Una vez aprobada, será mergeada a `main`
4. Se ejecutará automáticamente el deploy a GitHub Pages

## ❓ Preguntas

¿Dudas? Abre un [Discussion](../../discussions) o un issue.

---

**¡Gracias por contribuir!** ❤️

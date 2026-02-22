# 🎨 Cómo Integrar tu Robot 3D de Spline

## Método Simple (Recomendado) - Iframe

### Paso 1: Crea tu Robot en Spline
1. Ve a **https://spline.design**
2. Crea una cuenta gratis
3. Crea un nuevo proyecto

### Paso 2: Diseña tu Robot
**Estilo recomendado para tema oscuro:**
- Material oscuro con acentos de neón
- Colores: Grises oscuros (#1a1a1a) con detalles púrpura/azul
- Iluminación dramática
- Forma minimalista y moderna

### Paso 3: Exportar
1. En Spline, click en **"Share"** (arriba derecha)
2. Selecciona **"Export"**
3. Elige **"Embed"**
4. Copia el código del `<iframe>`

### Paso 4: Pegar en tu HTML
1. Abre `index.html`
2. Busca la línea que dice: `<!-- PEGA TU IFRAME DE SPLINE AQUÍ -->`
3. Pega tu iframe ahí
4. **IMPORTANTE:** Elimina o comenta el `<div class="robot-placeholder">` para que no se vea el placeholder

**Ejemplo:**
```html
<div id="robot-container" class="robot-3d-container mx-auto my-20">
    <!-- Tu iframe de Spline -->
    <iframe src='https://my.spline.design/untitled-abc123' 
            frameborder='0' 
            width='100%' 
            height='100%'>
    </iframe>
    
    <!-- Comenta o elimina el placeholder:
    <div class="robot-placeholder">
        <div class="robot-glow"></div>
        <div class="robot-circle"></div>
    </div>
    -->
</div>
```

### Paso 5: Ajustar Tamaño (Opcional)
Si el robot se ve muy grande o pequeño, ajusta en Spline:
- Zoom de la cámara
- Escala del objeto
- Posición

## Alternativa: Usar un Robot de la Comunidad

Si no quieres crear uno desde cero:

1. Ve a **https://spline.design/community**
2. Busca "robot", "3d character", o "minimal robot"
3. Haz click en "Remix" en el que te guste
4. Personaliza los colores para tema oscuro
5. Exporta como iframe

## Robots Recomendados de la Comunidad

Busca estos términos en Spline Community:
- "Minimalist Robot"
- "Sci-fi Character"
- "3D Bot"
- "Futuristic Robot"

## Tips para Mejor Rendimiento

1. **Optimiza tu escena:**
   - No uses demasiados polígonos
   - Limita las luces a 2-3
   - Evita sombras muy complejas

2. **Tamaño del archivo:**
   - Mantén la escena simple
   - Usa materiales básicos
   - Exporta en calidad "Medium" si es muy pesado

## Solución de Problemas

### El iframe no se ve
- ✅ Verifica que la URL sea correcta
- ✅ Asegúrate de que el proyecto en Spline esté publicado (no privado)
- ✅ Revisa la consola del navegador (F12) para errores

### El robot se ve cortado
- Ajusta el tamaño del contenedor en `styles.css`:
```css
.robot-3d-container {
    width: 700px;  /* Aumenta si es necesario */
    height: 700px;
}
```

### El robot no gira con el scroll
- Las animaciones de scroll funcionan con el placeholder
- Para Spline, configura las interacciones dentro de Spline mismo
- O usa el método avanzado con JavaScript (más complejo)

## ¿Prefieres el Placeholder?

El placeholder actual ya se ve bien y tiene:
- ✅ Animaciones de scroll
- ✅ Mouse tracking
- ✅ Glow animado
- ✅ Tema oscuro

Puedes dejarlo así y agregar Spline más adelante cuando tengas tiempo.

---

**¿Necesitas ayuda?** El placeholder seguirá funcionando hasta que pegues tu iframe de Spline.

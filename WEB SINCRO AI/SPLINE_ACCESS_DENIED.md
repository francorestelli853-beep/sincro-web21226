# 🔒 Solución: Access Denied en Spline

## El Problema
Tu escena de Spline está **privada** y no puede ser accedida desde tu sitio web.

## Solución Paso a Paso

### 1. Abre tu escena en Spline
Ve a: https://app.spline.design/file/699e8ffe-cd62-423d-af4a-912a26173e7c

### 2. Haz la escena pública
1. Click en **"Share"** (botón arriba a la derecha)
2. En el modal que aparece, busca **"Privacy"** o **"Visibility"**
3. Cambia de **"Private"** a **"Public"** o **"Anyone with the link"**
4. Guarda los cambios

### 3. Obtén el código de embed
1. En el mismo modal de Share, busca **"Export"** o **"Embed"**
2. Click en **"Embed"**
3. Copia el código del `<iframe>` que aparece

### 4. Pega el iframe en tu HTML
1. Abre `index.html`
2. Busca la línea que dice: `<!-- Cuando tengas el iframe público, pégalo aquí: -->`
3. **Descomenta** el iframe de ejemplo
4. Reemplaza `TU_URL_PUBLICA_DE_SPLINE` con la URL que copiaste
5. **Comenta o elimina** el placeholder (el div con class="robot-placeholder")

### Ejemplo de cómo debería quedar:

```html
<div id="robot-container" class="robot-3d-container mx-auto my-20">
    <!-- Tu iframe de Spline -->
    <iframe 
        src='https://prod.spline.design/699e8ffe-cd62-423d-af4a-912a26173e7c/scene.splinecode' 
        frameborder='0' 
        width='100%' 
        height='100%'
        allow="autoplay; fullscreen">
    </iframe>
    
    <!-- Comenta el placeholder:
    <div class="robot-placeholder">
        <div class="robot-glow"></div>
        <div class="robot-circle"></div>
    </div>
    -->
</div>
```

## Alternativa: Usar el Placeholder

Si no quieres hacer pública tu escena ahora, el **placeholder actual ya funciona muy bien**:
- ✅ Tiene animaciones de scroll
- ✅ Glow animado con colores púrpura/azul
- ✅ Tema oscuro
- ✅ Emoji de robot

Puedes dejarlo así y agregar Spline más adelante cuando estés listo.

## Verificación

Después de publicar y pegar el iframe:
1. Guarda `index.html`
2. Refresca tu navegador (Ctrl + F5)
3. Deberías ver tu robot 3D cargando
4. Si aún dice "Access Denied", verifica que la escena esté realmente pública

---

**Nota:** Algunas cuentas gratuitas de Spline tienen límites en escenas públicas. Si ese es el caso, el placeholder es una excelente alternativa.

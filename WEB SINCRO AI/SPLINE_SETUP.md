# 🤖 Configuración de Spline Robot 3D

## Paso 1: Crear tu Robot en Spline

1. Ve a [https://spline.design](https://spline.design)
2. Crea una cuenta gratuita o inicia sesión
3. Crea un nuevo proyecto

## Paso 2: Diseñar el Robot

### Estilo Recomendado (Apple/Tesla):
- **Material**: Ceramic/Matte blanco
- **Forma**: Orgánica, amigable, minimalista
- **Tamaño**: Proporcionado para viewport de 600x600px
- **Iluminación**: Suave, con highlights sutiles
- **Acabados**: Pulidos en detalles clave

### Tips de Diseño:
```
Color principal: #ffffff (blanco puro)
Color secundario: #f0f0f2 (gris muy claro)
Metalness: 0.1
Roughness: 0.2
Clearcoat: 1.0
```

## Paso 3: Configurar Interacciones (Opcional)

En Spline, puedes configurar:
- **Mouse tracking**: Para que el robot siga el cursor
- **Scroll events**: Para rotación basada en scroll
- **Click events**: Para animaciones al hacer click

## Paso 4: Exportar el Proyecto

1. En Spline, haz click en **"Export"**
2. Selecciona **"Code Export"**
3. Copia la URL del scene (algo como):
   ```
   https://prod.spline.design/abc123xyz/scene.splinecode
   ```

## Paso 5: Configurar en tu Proyecto

1. Abre el archivo `spline-loader.js`
2. Encuentra la línea:
   ```javascript
   const SPLINE_SCENE_URL = 'YOUR_SPLINE_SCENE_URL_HERE';
   ```
3. Reemplázala con tu URL:
   ```javascript
   const SPLINE_SCENE_URL = 'https://prod.spline.design/TU_URL_AQUI/scene.splinecode';
   ```
4. Guarda el archivo

## Paso 6: Probar

1. Abre `index.html` en tu navegador
2. Deberías ver:
   - Un loader mientras carga
   - Tu robot 3D cuando termine de cargar
   - El robot placeholder si hay algún error

## Alternativas si no tienes Spline

### Opción A: Usar un modelo existente
Busca modelos 3D gratuitos en:
- [Sketchfab](https://sketchfab.com)
- [Poly Pizza](https://poly.pizza)
- [Spline Community](https://spline.design/community)

### Opción B: Usar el placeholder mejorado
Si prefieres no usar Spline por ahora:
1. El placeholder actual ya se ve bien
2. Tiene animaciones suaves
3. Puedes agregar Spline más adelante

## Troubleshooting

### El robot no carga
- ✅ Verifica que la URL de Spline sea correcta
- ✅ Revisa la consola del navegador (F12)
- ✅ Asegúrate de tener conexión a internet
- ✅ El fallback se mostrará automáticamente después de 10 segundos

### El robot se ve muy grande/pequeño
Ajusta en Spline:
- Escala del objeto
- Posición de la cámara
- Field of view (FOV)

### Las animaciones no funcionan
- Verifica que las interacciones estén configuradas en Spline
- Revisa los event listeners en `spline-loader.js`
- Asegúrate de que Spline esté exportado correctamente

## Recursos Adicionales

- [Documentación de Spline](https://docs.spline.design)
- [Spline Runtime API](https://github.com/splinetool/runtime)
- [Ejemplos de Spline](https://spline.design/examples)

## Ejemplo de Robot Minimalista

Si quieres un punto de partida, busca en Spline Community:
- "Minimalist Robot"
- "White Robot"
- "Ceramic Character"
- "Apple Style 3D"

---

**¿Necesitas ayuda?** Revisa la consola del navegador para mensajes de debug.

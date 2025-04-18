# PARALLAX
Uso para parallas con css
```css
.parallax{
    background-image: url('imagen.jpg');
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```
Uso de parallax con JS:
```JS
window.addEventListener('scroll', ()=>{
    //mostrar cuanto he scrolleado
    console.log()
})
```
## Prefers-reduce-motion media query
Los usuarios pueden activar en sus dispositivos la preferencia se reduce motion. 
- Win: config->accesibilidad -> Mostrar -> Reducir movimientos
- IOS: Donfig -> accesibilidad -> movimiento -> reducir movimiento
- Android: Conf -> accesibilidad -> Eliminar animaciones 
Para css usamos media queries
```css
@media (prefers-reduced-motion: reduce){
    .parallax {
        background-attachment: scroll
    }
}
```
Para js usamos widows.matchMedia
```js
if(windows.matchMedia('(prefers-reduced-motion: reduce)').matches){
    //no aplicar efectos
    console.log("Se aplica el parallax");
} else{
    //aplicar efectos de parallax

    ParallaxEffect();
}

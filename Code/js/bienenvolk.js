/*Widget js --> Wegen der Anpassung passt so besser in des Div eine */

function scaleWidget() {
    const container = document.querySelector('.iframe-container');
    const iframe = container.querySelector('iframe');
    const widgetWidth = 920; 

    const containerWidth = container.offsetWidth;
    const scale = containerWidth / widgetWidth;

    iframe.style.width = widgetWidth + 'px';
    iframe.style.height = (450 / scale) + 'px';
    iframe.style.transform = `scale(${scale})`;
    iframe.style.transformOrigin = 'top left';
}

scaleWidget();
window.addEventListener('resize', scaleWidget);
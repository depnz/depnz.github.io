/**
 * Scales all images on the page by the given ratio, as well
 * as the background on the body element.
 *
 * @param {number} ratio The ratio to scale the images by.
 * @return {void}
 */
scaleImages = function(ratio) {
    if (ratio > 1) {
        console.log('Scaling images by ratio: ' + ratio);

        // Scale all images on the page.
        const images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].style.transform = 'scale(' + ratio + ')';
        }

        // Determine the new background image size - we assume
        // the background is a 1400 x 900 image.
        const sx = 1400;
        const sy = 900;
        const bx = (ratio * sx).toFixed();
        const by = (ratio * sy).toFixed();

        // Set the background size.
        console.log('Scaling background image to ' + bx + ' x ' + by);
        document.body.style.backgroundSize = bx + 'px ' + by + 'px';
    }
};

/**
 * Called when the window is loaded.
 * 
 * @return {void}
 */
window.onload = function() {
    console.clear();
    console.log('Window loaded');

    scaleImages(window.devicePixelRatio);
};

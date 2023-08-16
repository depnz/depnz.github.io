/**
 * Scales all images on the page by the given ratio.
 *
 * @param {number} ratio The ratio to scale the images by.
 * @return {void}
 */
scaleImages = function(ratio) {
    console.log('Scaling images by ratio: ' + ratio);

    if (ratio > 1) {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].style.transform = 'scale(' + ratio + ')';
        }
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

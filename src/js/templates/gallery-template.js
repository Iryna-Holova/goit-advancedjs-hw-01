/**
 * Generates HTML markup for an image gallery based on an array of objects.
 *
 * @param {Array} arr - Array of objects containing image information.
 * @returns {string} - HTML markup for the gallery.
 */
function createGalleryMarkup(arr) {
  return arr
    .map(
      /**
       * @param {Object} item - Object with information about the image.
       * @param {string} item.preview - URL of the image for preview.
       * @param {string} item.original - URL of the original image.
       * @param {string} item.description - Description of the image.
       * @returns {string} - HTML markup for a gallery item.
       */
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
    )
    .join('');
}

export default createGalleryMarkup;

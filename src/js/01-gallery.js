import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createGalleryMarkup from './templates/gallery-template';
import galleryItems from './gallery-items';

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Initialize the SimpleLightbox instance for the gallery
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

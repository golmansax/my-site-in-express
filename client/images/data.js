'use strict';

import { cachify } from 'connect-cachify-static';

var registeredImages = [
  '/static/navbar-icon.png',
];

export default function getImagesData() {
  var imageData = {};
  registeredImages.forEach((image) => imageData[image] = cachify(image));

  return imageData;
}

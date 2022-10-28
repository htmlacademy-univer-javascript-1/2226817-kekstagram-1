import { createPosts } from './data.js';
import { renderPicture } from './render.js';
import './image-upload.js';

const posts = createPosts();

for (const post of posts) {
  renderPicture(post);
}

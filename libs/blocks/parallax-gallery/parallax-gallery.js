import { addProgress } from '../../utils/frameio.js';

export default function init(el) {
  [...el.children].forEach((col) => col.classList.add('col'));
  addProgress(el);
}

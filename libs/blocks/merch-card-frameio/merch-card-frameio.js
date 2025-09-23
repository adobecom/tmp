import { createTag } from '../../utils/utils.js';
import { decorateButtons } from '../../utils/decorate.js';

export default function init(el) {
  [...el.children].forEach((el, i) =>
    el.classList.add(['usage', 'plan-name', 'pricing', 'purpose', 'details', 'cta'][i])
  );
  const [usage, planName, pricing, purpose, details, cta] = el.children;

  const pricingContainer = pricing.querySelector('div');
  const pricingPs = [...pricingContainer.querySelectorAll('p')];
  pricingContainer.classList.add('pricing-container');
  const perContainer = createTag('div', { class: 'per-container' }, pricingPs.slice(1));
  pricingContainer.append(perContainer);

  decorateButtons(el);
}

import { createTag } from '../../utils/utils.js';
import { decorateButtons } from '../../utils/decorate.js';

const tooltipIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17"><path fill="#9195AE" fill-opacity="0.55" d="M8 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 7.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5A.75.75 0 0 0 8 7.5"></path><path fill="#9195AE" fill-opacity="0.55" fill-rule="evenodd" d="M15 8.5a7 7 0 1 1-14 0 7 7 0 0 1 14 0M8 14A5.5 5.5 0 1 0 8 3a5.5 5.5 0 0 0 0 11" clip-rule="evenodd"></path></svg>`;

const tooltipTemplate = createTag('template');
tooltipTemplate.innerHTML = tooltipIcon;

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

  const detailPs = [...details.querySelectorAll('p')];
  detailPs.forEach((p) => {
    const tooltip = p.querySelector('em');
    if (!tooltip) return;
    const tooltipFragment = tooltipTemplate.content.cloneNode(true);
    const tooltipIcon = tooltipFragment.firstElementChild;
    tooltipIcon.addEventListener('mouseenter', () => {
      tooltip.classList.add('tooltip-on');
    });
    tooltipIcon.addEventListener('mouseleave', () => {
      tooltip.classList.remove('tooltip-on');
    });
    p.append(tooltipIcon);
  });

  decorateButtons(el);
}

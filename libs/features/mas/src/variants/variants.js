import { Catalog, CATALOG_AEM_FRAGMENT_MAPPING } from './catalog.js';
import { Image } from './image.js';
import { InlineHeading } from './inline-heading.js';
import { MiniCompareChart } from './mini-compare-chart.js';
import {
    Plans,
    PLANS_AEM_FRAGMENT_MAPPING,
    PLANS_EDUCATION_AEM_FRAGMENT_MAPPING,
    PLANS_STUDENTS_AEM_FRAGMENT_MAPPING,
} from './plans.js';
import { Product } from './product.js';
import { Segment } from './segment.js';
import {
    SPECIAL_OFFERS_AEM_FRAGMENT_MAPPING,
    SpecialOffer,
} from './special-offer.js';
import { Mini, MINI_AEM_FRAGMENT_MAPPING } from './mini.js';

// Registry for dynamic variants
const variantRegistry = new Map();

const variantState = new WeakMap();

// Function to register a new variant
export const registerVariant = (
    name,
    variantClass,
    fragmentMapping = null,
    style = null,
    collectionOptions
) => {
    variantRegistry.set(name, {
        class: variantClass,
        fragmentMapping,
        style,
        collectionOptions
    });
};

// Add core variants to registry
registerVariant(
    'catalog',
    Catalog,
    CATALOG_AEM_FRAGMENT_MAPPING,
    Catalog.variantStyle,
);
registerVariant('image', Image);
registerVariant('inline-heading', InlineHeading);
registerVariant(
    'mini-compare-chart',
    MiniCompareChart,
    null,
    MiniCompareChart.variantStyle,
);
registerVariant('plans', Plans, PLANS_AEM_FRAGMENT_MAPPING, Plans.variantStyle, Plans.collectionOptions);
registerVariant('plans-students', Plans, PLANS_STUDENTS_AEM_FRAGMENT_MAPPING, Plans.variantStyle, Plans.collectionOptions);
registerVariant('plans-education', Plans, PLANS_EDUCATION_AEM_FRAGMENT_MAPPING, Plans.variantStyle, Plans.collectionOptions);
registerVariant('product', Product, null, Product.variantStyle);
registerVariant('segment', Segment, null, Segment.variantStyle);
registerVariant(
    'special-offers',
    SpecialOffer,
    SPECIAL_OFFERS_AEM_FRAGMENT_MAPPING,
    SpecialOffer.variantStyle,
);
registerVariant(
    'mini',
    Mini,
    MINI_AEM_FRAGMENT_MAPPING,
    Mini.variantStyle,
);

const getVariantLayout = (card) => {
    const variantInfo = variantRegistry.get(card.variant);
    if (!variantInfo) {
        return undefined;
    }
    const { class: VariantClass, style } = variantInfo;
    
    const state = variantState.get(card);
    if (state?.appliedVariant === card.variant) {
        return new VariantClass(card);
    }
    
    // Apply styles only if needed
    if (style) {
        try {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(style.cssText);
            
            if (state?.styleSheet) {
                const index = card.shadowRoot.adoptedStyleSheets.indexOf(state.styleSheet);
                if (index !== -1) {
                    card.shadowRoot.adoptedStyleSheets.splice(index, 1);
                }
            }
            
            card.shadowRoot.adoptedStyleSheets.push(sheet);
            
            // Update state in WeakMap
            variantState.set(card, {
                appliedVariant: card.variant,
                styleSheet: sheet
            });
        } catch (e) {
            // Fallback for browsers that don't support CSSStyleSheet constructor
            const styleElement = document.createElement('style');
            styleElement.textContent = style.cssText;
            styleElement.setAttribute('data-variant-style', card.variant);
            
            if (state?.styleElement) {
                state.styleElement.remove();
            } else {
                const existing = card.shadowRoot.querySelector('[data-variant-style]');
                if (existing) existing.remove();
            }
            
            card.shadowRoot.appendChild(styleElement);
            
            variantState.set(card, {
                appliedVariant: card.variant,
                styleElement: styleElement
            });
        }
    } else {
        variantState.set(card, {
            appliedVariant: card.variant
        });
    }
    
    return new VariantClass(card);
};

export function getFragmentMapping(variant) {
    return variantRegistry.get(variant)?.fragmentMapping;
}

export function getCollectionOptions(variant) {
    return variantRegistry.get(variant)?.collectionOptions;
}

export { getVariantLayout };

export const STATUS = {
  PASS: 'pass',
  FAIL: 'fail',
  LIMBO: 'limbo',
  EMPTY: 'empty',
};

// Check IDs - stable identifiers for mapping (supports ASO)
export const CHECK_IDS = {
  // SEO Check IDs
  H1_COUNT: 'h1-count',
  TITLE_SIZE: 'title-size',
  CANONICAL: 'canonical',
  META_DESCRIPTION: 'meta-description',
  BODY_SIZE: 'body-size',
  LOREM_IPSUM: 'lorem-ipsum',
  BROKEN_LINKS: 'broken-links',

  // Performance Check IDs
  LCP_ELEMENT: 'lcp-element',
  SINGLE_BLOCK: 'single-block',
  PERSONALIZATION: 'personalization',
  IMAGE_SIZE: 'image-size',
  VIDEO_POSTER: 'video-poster',
  FRAGMENTS: 'fragments',
  PLACEHOLDERS: 'placeholders',
  ICONS: 'icons',

  // Asset Check IDs
  IMAGE_DIMENSIONS: 'image-dimensions',
};

// Severity levels for check categorization
export const SEVERITY = {
  CRITICAL: 'critical',
  WARNING: 'warning',
};

<<<<<<< HEAD
// CHECKS constant for structured check definitions (supports notification popup)
=======
export const SEO_TITLES = {
  h1Count: 'H1 count',
  title: 'Title size',
  canonical: 'Canonical',
  description: 'Meta description',
  bodySize: 'Body size',
  loremIpsum: 'Lorem Ipsum',
  links: 'Links',
};

export const SEO_IDS = {
  title: 'title',
  description: 'description',
  h1Count: 'h1-count',
  canonical: 'canonical',
  bodySize: 'body-size',
  loremIpsum: 'lorem-ipsum',
  links: 'links',
};

export const SEO_DESCRIPTIONS = {
  title: 'Title size is appropriate.',
  description: 'Meta description is present and within the recommended character limit.',
  h1Count: 'Found exactly one H1 heading.',
  canonical: 'Canonical reference is valid.',
  bodySize: 'Body content has a good length.',
  loremIpsum: 'No Lorem ipsum is used on the page.',
  links: 'Links are valid.',
};

>>>>>>> f14f1de55 ([MWPW-177278] [Preflight] ASO Preflight conditioned by federal config (#4641))
export const CHECKS = {
  H1_COUNT: {
    id: 'h1-count',
    severity: SEVERITY.WARNING,
    title: 'H1 count',
  },
  TITLE_SIZE: {
    id: 'title-size',
    severity: SEVERITY.WARNING,
    title: 'Title size',
  },
  CANONICAL: {
    id: 'canonical',
    severity: SEVERITY.WARNING,
    title: 'Canonical',
  },
  META_DESCRIPTION: {
    id: 'meta-description',
    severity: SEVERITY.WARNING,
    title: 'Meta description',
  },
  BODY_SIZE: {
    id: 'body-size',
    severity: SEVERITY.WARNING,
    title: 'Body size',
  },
  LOREM_IPSUM: {
    id: 'lorem-ipsum',
    severity: SEVERITY.CRITICAL,
    title: 'Lorem Ipsum',
  },
  BROKEN_LINKS: {
    id: 'broken-links',
    severity: SEVERITY.CRITICAL,
    title: 'Links',
  },
  LCP_ELEMENT: {
    id: 'lcp-element',
    severity: SEVERITY.CRITICAL,
    title: 'LCP',
  },
  SINGLE_BLOCK: {
    id: 'single-block',
    severity: SEVERITY.CRITICAL,
    title: 'Single Block',
  },
  PERSONALIZATION: {
    id: 'personalization',
    severity: SEVERITY.WARNING,
    title: 'Personalization',
  },
  IMAGE_SIZE: {
    id: 'image-size',
    severity: SEVERITY.WARNING,
    title: 'Images Size',
  },
  VIDEO_POSTER: {
    id: 'video-poster',
    severity: SEVERITY.WARNING,
    title: 'Videos',
  },
  FRAGMENTS: {
    id: 'fragments',
    severity: SEVERITY.WARNING,
    title: 'Fragments',
  },
  PLACEHOLDERS: {
    id: 'placeholders',
    severity: SEVERITY.WARNING,
    title: 'Placeholders',
  },
  ICONS: {
    id: 'icons',
    severity: SEVERITY.WARNING,
    title: 'Icons',
  },
  IMAGE_DIMENSIONS: {
    id: 'image-dimensions',
    severity: SEVERITY.CRITICAL,
    title: 'Asset Dimensions',
  },
};

<<<<<<< HEAD
// Title constants for performance checks (supports ASO)
export const PERFORMANCE_TITLES = {
  LcpEl: 'LCP',
  SingleBlock: 'Single Block',
  Performance: 'Performance',
  ImageSize: 'Images Size',
  VideoPoster: 'Videos',
  Fragments: 'Fragments',
  Personalization: 'Personalization',
  Placeholders: 'Placeholders',
  Icons: 'Icons',
};

export const SEO_TITLES = {
  h1Count: 'H1 count',
  title: 'Title size',
  canonical: 'Canonical',
  description: 'Meta description',
  bodySize: 'Body size',
  loremIpsum: 'Lorem Ipsum',
  links: 'Links',
};

export const SEO_IDS = {
  title: 'title',
  description: 'description',
  h1Count: 'h1-count',
  canonical: 'canonical',
  bodySize: 'body-size',
  loremIpsum: 'lorem-ipsum',
  links: 'links',
};

export const SEO_DESCRIPTIONS = {
  title: 'Title size is appropriate.',
  description: 'Meta description is present and within the recommended character limit.',
  h1Count: 'Found exactly one H1 heading.',
  canonical: 'Canonical reference is valid.',
  bodySize: 'Body content has a good length.',
  loremIpsum: 'No Lorem ipsum is used on the page.',
  links: 'Links are valid.',
};

=======
>>>>>>> f14f1de55 ([MWPW-177278] [Preflight] ASO Preflight conditioned by federal config (#4641))
export const ASSETS_TITLES = { AssetDimensions: 'Asset Dimensions' };

export const ASO_TIMEOUT_MS = 60_000;
export const ASO_POLL_INTERVAL_MS = 2_000;
export const ASO_MAX_RETRIES = Math.ceil(ASO_TIMEOUT_MS / ASO_POLL_INTERVAL_MS);

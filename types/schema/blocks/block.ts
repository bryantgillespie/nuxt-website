import type { BlockButtonGroup } from './block-button-group.js';
import type { BlockButton } from './block-button.js';
import type { BlockCardGroup } from './block-card-group.js';
import type { BlockCard } from './block-card.js';
import type { BlockColumns } from './block-columns.js';
import type { BlockCta } from './block-cta.js';
import type { BlockFeatureGrid } from './block-feature-grid.js';
import type { BlockHeader } from './block-header.js';
import type { BlockHeroForm } from './block-hero-form.js';
import type { BlockHeroRotator } from './block-hero-rotator.js';
import type { BlockLogoCloud } from './block-logo-cloud.js';
import type { BlockMedia } from './block-media.js';
import type { BlockMetrics } from './block-metrics.js';
import type { BlockQuote } from './block-quote.js';
import type { BlockSeparator } from './block-separator.js';
import type { BlockShowcase } from './block-showcase.js';
import type { BlockTestimonialSlider } from './block-testimonial-slider.js';

export type BlockType =
	| 'block_button_group'
	| 'block_button'
	| 'block_card_group'
	| 'block_card'
	| 'block_columns'
	| 'block_cta'
	| 'block_featuregrid'
	| 'block_header'
	| 'block_hero_form'
	| 'block_hero_rotator'
	| 'block_logocloud'
	| 'block_media'
	| 'block_metrics'
	| 'block_quote'
	| 'block_richtext'
	| 'block_separator'
	| 'block_separator'
	| 'block_showcase'
	| 'block_testimonial_slider';

export type Block =
	| BlockButton
	| BlockButtonGroup
	| BlockCard
	| BlockCardGroup
	| BlockColumns
	| BlockCta
	| BlockFeatureGrid
	| BlockHeader
	| BlockHeader
	| BlockHeroForm
	| BlockHeroRotator
	| BlockLogoCloud
	| BlockMedia
	| BlockMetrics
	| BlockQuote
	| BlockSeparator
	| BlockShowcase
	| BlockTestimonialSlider;

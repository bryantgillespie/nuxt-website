import type {
	BlockButton,
	BlockButtonGroup,
	BlockButtonGroupBlockButton,
	BlockCard,
	BlockCardGroup,
	BlockCardGroupBlockCard,
	BlockColumns,
	BlockCta,
	BlockFeatureGrid,
	BlockHeader,
	BlockHeroForm,
	BlockLogoCloud,
	BlockLogoCloudLogo,
	BlockMedia,
	BlockMetrics,
	BlockQuote,
	BlockRichText,
	BlockSeparator,
	BlockShowcase,
	BlockTestimonialSlider,
} from './blocks/index.js';
import type { Article, Career, CaseStudy, Form, Page, Report, Resource, SiteBanner, Video } from './content/index.js';
import type { Globals, Navigation, Redirect, Seo } from './meta/index.js';
import type { ContentType, Event, Partner, Team } from './routes/index.js';
import type { File, User } from './system/index.js';

/** Directus Schema for SDK */
export interface Schema {
	// Routes
	articles: Article[];
	content_types: ContentType[];
	events: Event[];
	pages: Page[];
	partners: Partner[];
	team: Team[];

	// Content
	careers: Career[];
	case_studies: CaseStudy[];
	forms: Form[];
	reports: Report[];
	resources: Resource[];
	site_banners: SiteBanner[];
	videos: Video[];

	// Blocks
	block_button_group_block_button: BlockButtonGroupBlockButton[];
	block_button_group: BlockButtonGroup[];
	block_button: BlockButton[];
	block_card_group_block_card: BlockCardGroupBlockCard[];
	block_card_group: BlockCardGroup[];
	block_card: BlockCard[];
	block_columns: BlockColumns[];
	block_cta: BlockCta[];
	block_featuregrid: BlockFeatureGrid[];
	block_header: BlockHeader[];
	block_hero_form: BlockHeroForm[];
	block_logocloud_logo: BlockLogoCloudLogo[];
	block_logocloud: BlockLogoCloud[];
	block_media: BlockMedia[];
	block_metrics: BlockMetrics[];
	block_quote: BlockQuote[];
	block_richtext: BlockRichText[];
	block_separator: BlockSeparator[];
	block_showcase: BlockShowcase[];
	block_testimonial_slider: BlockTestimonialSlider[];

	// Meta
	globals: Globals;
	navigation: Navigation[];
	redirects: Redirect[];
	seo: Seo[];

	// System
	directus_files: File[];
	directus_users: User[];
}

import type { File } from '../system/file.js';
import type { Video } from '../content/video.js';

export interface BlockMedia {
	id: string;
	type: string | null;
	image: string | File | null;
	video: string | Video | null;
	arcade_url: string | null;
	aspect_ratio: 'auto' | '1-1' | '16-9' | '4-3' | null;
	frame: boolean;
}

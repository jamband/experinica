import type { Provider } from "./provider";

export type Track = {
  title: string;
  provider: Provider | "";
  provider_key: string;
  image: string;
  slug: string;
  image_aspect_ratio: `${number}/${number}` | "";
  embed_aspect_ratio: `${number}/${number}` | "";
  path: string;
};

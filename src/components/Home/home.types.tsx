export type ImageProps = {
  src: string;
  alt: string;
};

export type ImageBlockProps = ImageProps & {
  id: string;
  duration: number;
  direction: number;
};

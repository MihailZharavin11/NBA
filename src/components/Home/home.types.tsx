export type ImageProps = {
  src: string;
  alt: string;
};

export type ImageBlockProps = ImageProps & {
  id: string;
  duration: number;
  direction: number;
};

export type HomeTitleProps = {
  title: string;
  text: string;
};

export type ScoreTableProps = {
  team1: React.ReactNode;
  team2: React.ReactNode;
  score1: number;
  score2: number;
};

export type TeamItemProps = {
  src: string;
  name: string;
  win: number;
  lose: number;
};

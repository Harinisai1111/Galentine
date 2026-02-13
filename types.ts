
export interface Memory {
  id: number;
  imageUrl: string;
  caption: string;
  rotation: string;
}

export interface Reason {
  id: number;
  title: string;
  description: string;
  emoji: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}


import { Memory, Reason, TimelineEvent } from './types';

export const MEMORIES: Memory[] = [
  { id: 1, imageUrl: '/images/photo1.jpeg', caption: 'We might have lost but we learned a lot✨', rotation: '-3deg' },
  { id: 2, imageUrl: '/images/photo2.jpg', caption: 'From meeting in classroom to attending family events together🏠', rotation: '2deg' },
  { id: 3, imageUrl: '/images/photo3.jpg', caption: 'Anshi is still my bestiee fr 📸', rotation: '-2deg' },
  { id: 4, imageUrl: '/images/photo4.jpg', caption: 'Silly mirror selfies are totally our thing🌙', rotation: '3deg' },
  { id: 5, imageUrl: '/images/photo5.jpg', caption: 'Too sexy to let you be with someone else 👗', rotation: '1deg' },
  { id: 6, imageUrl: '/images/photo6.jpeg', caption: 'Us and our dumb expressions crazy fs! 🚗', rotation: '-1deg' },
];

export const REASONS: Reason[] = [
  { id: 1, title: 'You Stayed', description: 'Through the highs and the messy lows, you never left my side.', emoji: '🤝' },
  { id: 2, title: 'You Understand', description: 'You know exactly what I\'m thinking before I even say it.', emoji: '🧠' },
  { id: 3, title: 'You Hype Me', description: 'Nobody believes in my dreams as much as you do.', emoji: '📣' },
  { id: 4, title: 'You Are Home', description: 'My safe place, my chaos, and my person, all in one.', emoji: '🏠' },
];

export const TIMELINE: TimelineEvent[] = [
  { id: 1, year: '2022', title: 'The Beginning', description: 'Where our chaos first collided.', imageUrl: '/images/photo7.jpeg' },
  { id: 2, year: '2022', title: 'Growing Together', description: 'Learning more about each other every day.', imageUrl: '/images/photo8.jpeg' },
  { id: 3, year: '2023', title: 'Unbreakable Bond', description: 'Becoming besties forever.', imageUrl: '/images/photo9.jpeg' },
];

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  level: number;
  vipLevel: number;
  diamonds: number;
  coins: number;
  nobilityRank: string;
  followers: number;
  following: number;
  profileBorder?: string;
  badges: Badge[];
  experience: number;
  maxExperience: number;
  totalSpent: number;
  streakDays: number;
  achievements: Achievement[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  reward: {
    diamonds?: number;
    coins?: number;
    badge?: Badge;
  };
}

export interface LiveStream {
  id: string;
  title: string;
  streamer: User;
  thumbnail: string;
  viewers: number;
  isLive: boolean;
  category: string;
  tags: string[];
}

export interface Game {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  players: number;
  maxPlayers: number;
  type: 'party' | 'multiplayer' | 'quiz' | 'casual' | 'strategy' | 'arcade';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  rewards: {
    coins: number;
    experience: number;
  };
}

export interface ChatMessage {
  id: string;
  user: User;
  message: string;
  timestamp: Date;
  type: 'text' | 'gift' | 'system';
  giftId?: string;
}

export interface Gift {
  id: string;
  name: string;
  icon: string;
  cost: number;
  currency: 'diamonds' | 'coins';
  animation?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
  category: 'flowers' | 'vehicles' | 'animals' | 'food' | 'luxury' | 'fantasy' | 'sports' | 'technology';
  effects?: {
    sound?: string;
    particles?: string;
    duration?: number;
  };
}

export interface VipBenefit {
  id: string;
  title: string;
  description: string;
  vipLevel: number;
  icon: string;
}

export interface StoreItem {
  id: string;
  name: string;
  amount: number;
  price: number;
  currency: 'USD' | 'EUR';
  bonus?: number;
  popular?: boolean;
  discount?: number;
  limitedTime?: boolean;
}

export interface NobilityRank {
  id: string;
  name: string;
  icon: string;
  color: string;
  requiredSpending: number;
  benefits: string[];
  level: number;
}

export interface LevelReward {
  level: number;
  diamonds: number;
  coins: number;
  badge?: Badge;
  specialReward?: string;
}
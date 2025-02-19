export interface Professional {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  email: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
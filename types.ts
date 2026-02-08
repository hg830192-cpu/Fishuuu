export enum AppStage {
  LANDING = 'LANDING',
  MEMORY_LANE = 'MEMORY_LANE',
  CUPID_POEM = 'CUPID_POEM',
  PROPOSAL = 'PROPOSAL',
  SUCCESS = 'SUCCESS',
  NEXT_UNLOCK = 'NEXT_UNLOCK'
}

export interface LoveReason {
  id: number;
  text: string;
  emoji: string;
}

export interface CupidResponse {
  poem: string;
  isLoading: boolean;
  error: string | null;
}

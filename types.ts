export enum AppState {
  FORMED = 'FORMED',
  CHAOS = 'CHAOS'
}

export interface ParticleData {
  targetPosition: [number, number, number];
  chaosPosition: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}

export interface OrnamentProps {
  count: number;
  type: 'sphere' | 'box' | 'light' | 'diamond' | 'icicle';
  colors: string[];
  distribution?: 'random' | 'spiral' | 'bottom';
  scaleMultiplier?: number;
}

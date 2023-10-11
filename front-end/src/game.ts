interface GameState {
  cells: Cell[];
  currentPlayer: string;
  winner: string | null;
  history: Cell[][];
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }
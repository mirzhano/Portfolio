
import { Board } from "../@types/Board";
import { Player } from "../@types/Player";
import { getCurrentPlayer, getIsGameOver, getWinner } from "../utils/board";

type UseBoardResponse = {
  player: Player;
  winner: Player | null;
  isGameOver: boolean;
};

export function useBoard(board: Board): UseBoardResponse {
  const player = getCurrentPlayer(board);
  const winner = getWinner(board);
  const isGameOver = getIsGameOver(board);
  return { player, winner, isGameOver };
}

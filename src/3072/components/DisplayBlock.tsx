import NewGameButton from "./NewGameButton";
import ScoreDisplays from "./ScoreDisplays";

interface DisplayBlockProps {
    currentScore: number;
    setCurrentScore: Function;
    setGameMatrix: Function;
    size: number;
    highScore: number;
    setHighScore: Function;
    setIsGameOver: Function;
}

export default function DisplayBlock({currentScore, setCurrentScore, setGameMatrix, size, highScore, setHighScore, setIsGameOver}:DisplayBlockProps) {
    return (
        <div className="flex flex-col">
            <ScoreDisplays currentScore={currentScore} highScore={highScore} setHighScore={setHighScore}/>
            <NewGameButton setGameMatrix={setGameMatrix} size={size} setCurrentScore={setCurrentScore} setIsGameOver={setIsGameOver}/>
        </div>
    );
}

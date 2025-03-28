import { useState } from 'react';
import { Chessboard } from './Chessboard';
import { useChess } from '@/hooks/useChess';
import type { Line } from '@/types/chessboard';
import styles from './trainer.module.css';

type TrainerProps = { line: Line };

export function Trainer({ line }: TrainerProps) {
    const { position, playMove, moveSuccess, lineSuccess } = useChess(line);
    const [shouldShowFeedback, setShouldShowFeedback] = useState(false);

    // TODO: Style me!
    return (
        <>
            <Chessboard
                position={position}
                playerColour={line.player}
                playMove={playMove}
                setShouldShowFeedback={setShouldShowFeedback}
            />

            {!moveSuccess && shouldShowFeedback && (
                <p className={styles.incorrect}>Incorrect</p>
            )}
            {lineSuccess && <p>Well done!</p>}
        </>
    );
}

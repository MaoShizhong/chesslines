import { useState } from 'react';
import { toShuffled } from '@/util/util';
import type { Line } from '@/types/chessboard';

export function useShuffledLines(lines: Line[]) {
    const [shuffledLines, setShuffledLines] = useState(toShuffled(lines));
    const [currentLine, setCurrentLine] = useState(shuffledLines[0]);
    return {
        currentLine: currentLine,
        progress: lines.length - shuffledLines.length + 1,
        toNextLine() {
            const remainingLines = shuffledLines.slice(1);
            setShuffledLines(remainingLines);
            setCurrentLine(remainingLines[0]);
        },
    };
}

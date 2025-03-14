import { Chessboard } from '../components/Chessboard';

export function Trainer() {
    return (
        <Chessboard
            line="1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e6"
            playerColour="w"
        />
    );
}



type HangmanWord = {
    readonly guessedLetters: string[]
    readonly wordToGuess: string
    readonly reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWord){

    return(
        <div style={{ display: 'flex', gap: '.25em', fontSize: '6rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'monospace' }}>
            {wordToGuess.split('').map((letter, index) => {
                return (
                    <span key={index} style={{ borderBottom: '.1em solid black' }}>
                        <span style={{
                            visibility: (guessedLetters.includes(letter) || reveal) ? 'visible' : 'hidden',
                            color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black'
                        }}>
                            {letter}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}
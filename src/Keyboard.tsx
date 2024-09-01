import styles from './Keyboard.module.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  

type KeyboardProps = {
    readonly disabled?: boolean
    readonly activeLetters: string[]
    readonly inactiveLetters: string[]
    readonly addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps){
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
            {KEYS.map((k) => {
                const isActive = activeLetters.includes(k)
                const isInactive = inactiveLetters.includes(k)
                return (
                    <button
                        key={k}
                        onClick={() => addGuessedLetter(k)}
                        disabled={isInactive || isActive || disabled}
                        className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}>
                        {k}
                    </button>
                )
            })}
        </div>
    )
}
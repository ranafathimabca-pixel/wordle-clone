// Word List - Curated 5-letter words
const WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLOW',
    'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY',
    'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AUDIT', 'AVOID', 'AWARD',
    'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BASIS', 'BEACH', 'BEGAN', 'BEGIN', 'BEING',
    'BELOW', 'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD',
    'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING',
    'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH',
    'CAUSE', 'CHAIN', 'CHAIR', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD',
    'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLOCK', 'CLOSE',
    'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM',
    'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT',
    'DEATH', 'DEBUT', 'DELAY', 'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK',
    'DRAWN', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY',
    'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR',
    'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIBER', 'FIELD',
    'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLUID',
    'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH',
    'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE',
    'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUARD',
    'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HENCE', 'HENRY', 'HORSE',
    'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX', 'INNER', 'INPUT', 'ISSUE', 'JAPAN',
    'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH',
    'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON', 'LEVEL', 'LEWIS', 'LIGHT',
    'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE', 'LOWER', 'LUCKY', 'LUNCH', 'LYING',
    'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE', 'MAYOR', 'MEANT', 'MEDIA',
    'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR',
    'MOUNT', 'MOUSE', 'MOUTH', 'MOVIE', 'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT', 'NOISE',
    'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER',
    'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PHOTO',
    'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND',
    'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD',
    'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO',
    'REACH', 'READY', 'REFER', 'RIGHT', 'RIVAL', 'RIVER', 'ROBIN', 'ROGER', 'ROMAN', 'ROUGH',
    'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE',
    'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE',
    'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIGHT', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED',
    'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SOLID', 'SOLVE',
    'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT',
    'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM', 'STEEL',
    'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP', 'STUCK',
    'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN', 'TASTE',
    'TAXES', 'TEACH', 'TERRY', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE',
    'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'TIGHT', 'TIMES',
    'TITLE', 'TODAY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIN',
    'TREAT', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP', 'TRUCK', 'TRULY',
    'TRUST', 'TRUTH', 'TWICE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'URBAN',
    'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE',
    'WASTE', 'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE',
    'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WRITE',
    'WRONG', 'WROTE', 'YIELD', 'YOUNG', 'YOUTH'
];

// Game State
let targetWord = '';
let currentRow = 0;
let currentGuess = '';
let gameOver = false;
let statistics = {
    played: 0,
    won: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: [0, 0, 0, 0, 0, 0]
};

// DOM Elements
const gameBoard = document.getElementById('game-board');
const keyboard = document.getElementById('keyboard');
const statsModal = document.getElementById('stats-modal');
const gameOverModal = document.getElementById('game-over-modal');
const statsBtn = document.getElementById('stats-btn');
const closeStatsBtn = document.getElementById('close-stats');
const playAgainBtn = document.getElementById('play-again-btn');

// Initialize Game
function init() {
    loadStatistics();
    createBoard();
    setupKeyboard();
    setupModals();
    startNewGame();
}

// Create Game Board
function createBoard() {
    gameBoard.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${i}`;
        
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            row.appendChild(tile);
        }
        
        gameBoard.appendChild(row);
    }
}

// Setup Keyboard
function setupKeyboard() {
    const keys = keyboard.querySelectorAll('.key');
    
    keys.forEach(key => {
        key.addEventListener('click', () => {
            handleKeyPress(key.dataset.key);
        });
    });
    
    // Physical keyboard support
    document.addEventListener('keydown', (e) => {
        if (gameOver) return;
        
        if (e.key === 'Enter') {
            handleKeyPress('Enter');
        } else if (e.key === 'Backspace') {
            handleKeyPress('Backspace');
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            handleKeyPress(e.key.toUpperCase());
        }
    });
}

// Setup Modals
function setupModals() {
    statsBtn.addEventListener('click', () => {
        showStatistics();
    });
    
    closeStatsBtn.addEventListener('click', () => {
        statsModal.classList.remove('active');
    });
    
    playAgainBtn.addEventListener('click', () => {
        gameOverModal.classList.remove('active');
        startNewGame();
    });
    
    // Close modal on background click
    [statsModal, gameOverModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// Start New Game
function startNewGame() {
    targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    currentRow = 0;
    currentGuess = '';
    gameOver = false;
    
    // Reset board
    createBoard();
    
    // Reset keyboard
    const keys = keyboard.querySelectorAll('.key');
    keys.forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });
    
    console.log('Target word:', targetWord); // For testing
}

// Handle Key Press
function handleKeyPress(key) {
    if (gameOver) return;
    
    if (key === 'Enter') {
        submitGuess();
    } else if (key === 'Backspace') {
        removeLetter();
    } else if (currentGuess.length < 5) {
        addLetter(key);
    }
}

// Add Letter
function addLetter(letter) {
    if (currentGuess.length >= 5) return;
    
    currentGuess += letter;
    const tile = document.getElementById(`tile-${currentRow}-${currentGuess.length - 1}`);
    tile.textContent = letter;
    tile.classList.add('filled');
}

// Remove Letter
function removeLetter() {
    if (currentGuess.length === 0) return;
    
    const tile = document.getElementById(`tile-${currentRow}-${currentGuess.length - 1}`);
    tile.textContent = '';
    tile.classList.remove('filled');
    currentGuess = currentGuess.slice(0, -1);
}

// Submit Guess
function submitGuess() {
    if (currentGuess.length !== 5) {
        shakeRow(currentRow);
        return;
    }
    
    if (!WORDS.includes(currentGuess)) {
        shakeRow(currentRow);
        return;
    }
    
    // Check guess and flip tiles
    checkGuess();
}

// Check Guess
function checkGuess() {
    const guess = currentGuess;
    const result = [];
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');
    
    // First pass: mark correct letters
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
            guessLetters[i] = null;
        }
    }
    
    // Second pass: mark present letters
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] !== null) {
            const index = targetLetters.indexOf(guessLetters[i]);
            if (index !== -1) {
                result[i] = 'present';
                targetLetters[index] = null;
            } else {
                result[i] = 'absent';
            }
        }
    }
    
    // Animate tiles
    flipTiles(result);
}

// Flip Tiles
function flipTiles(result) {
    const tiles = [];
    for (let i = 0; i < 5; i++) {
        tiles.push(document.getElementById(`tile-${currentRow}-${i}`));
    }
    
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip');
            
            setTimeout(() => {
                tile.classList.add(result[index]);
                updateKeyboard(currentGuess[index], result[index]);
            }, 250);
        }, index * 100);
    });
    
    // Check win/loss after animations
    setTimeout(() => {
        if (result.every(r => r === 'correct')) {
            winGame();
        } else if (currentRow === 5) {
            loseGame();
        } else {
            currentRow++;
            currentGuess = '';
        }
    }, 600);
}

// Update Keyboard
function updateKeyboard(letter, state) {
    const key = keyboard.querySelector(`[data-key="${letter}"]`);
    if (!key) return;
    
    const currentState = key.classList.contains('correct') ? 'correct' :
                        key.classList.contains('present') ? 'present' :
                        key.classList.contains('absent') ? 'absent' : '';
    
    // Only update if new state is better
    if (state === 'correct' || 
        (state === 'present' && currentState !== 'correct') ||
        (state === 'absent' && !currentState)) {
        key.classList.remove('correct', 'present', 'absent');
        key.classList.add(state);
    }
}

// Shake Row
function shakeRow(row) {
    const tiles = document.querySelectorAll(`#row-${row} .tile`);
    tiles.forEach(tile => {
        tile.classList.add('shake');
        setTimeout(() => tile.classList.remove('shake'), 400);
    });
}

// Win Game
function winGame() {
    gameOver = true;
    
    // Bounce animation
    const tiles = document.querySelectorAll(`#row-${currentRow} .tile`);
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('win');
        }, index * 100);
    });
    
    // Update statistics
    statistics.played++;
    statistics.won++;
    statistics.currentStreak++;
    statistics.maxStreak = Math.max(statistics.maxStreak, statistics.currentStreak);
    statistics.guessDistribution[currentRow]++;
    saveStatistics();
    
    // Show game over modal
    setTimeout(() => {
        showGameOver(true);
    }, 1500);
}

// Lose Game
function loseGame() {
    gameOver = true;
    
    // Update statistics
    statistics.played++;
    statistics.currentStreak = 0;
    saveStatistics();
    
    // Show game over modal
    setTimeout(() => {
        showGameOver(false);
    }, 500);
}

// Show Game Over Modal
function showGameOver(won) {
    const title = document.getElementById('game-over-title');
    const message = document.getElementById('game-over-message');
    const revealedWord = document.getElementById('revealed-word');
    
    if (won) {
        title.textContent = 'Congratulations! 🎉';
        message.textContent = `You guessed the word in ${currentRow + 1} ${currentRow === 0 ? 'try' : 'tries'}!`;
    } else {
        title.textContent = 'Game Over';
        message.textContent = 'Better luck next time!';
    }
    
    revealedWord.textContent = targetWord;
    gameOverModal.classList.add('active');
}

// Show Statistics
function showStatistics() {
    document.getElementById('stat-played').textContent = statistics.played;
    document.getElementById('stat-win-rate').textContent = 
        statistics.played > 0 ? Math.round((statistics.won / statistics.played) * 100) : 0;
    document.getElementById('stat-streak').textContent = statistics.currentStreak;
    document.getElementById('stat-max-streak').textContent = statistics.maxStreak;
    
    // Guess distribution chart
    const chartContainer = document.getElementById('distribution-chart');
    chartContainer.innerHTML = '';
    
    const maxGuesses = Math.max(...statistics.guessDistribution, 1);
    
    statistics.guessDistribution.forEach((count, index) => {
        const barContainer = document.createElement('div');
        barContainer.className = 'distribution-bar';
        
        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = index + 1;
        
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${(count / maxGuesses) * 100}%`;
        bar.textContent = count;
        
        barContainer.appendChild(label);
        barContainer.appendChild(bar);
        chartContainer.appendChild(barContainer);
    });
    
    statsModal.classList.add('active');
}

// Save Statistics
function saveStatistics() {
    localStorage.setItem('wordle-stats', JSON.stringify(statistics));
}

// Load Statistics
function loadStatistics() {
    const saved = localStorage.getItem('wordle-stats');
    if (saved) {
        statistics = JSON.parse(saved);
    }
}

// Start the game
init();

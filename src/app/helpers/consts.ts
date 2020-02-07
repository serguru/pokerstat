export const suites: string[] = ['s', 'c', 'd', 'h'];

//export const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export const ranks: string[] = [
    'A',
    'K', 
    'Q', 
    'J', 
    'T', 
    '9', 
    '8', 
    '7', 
    '6', 
    '5', 
    '4', 
    '3', 
    '2' 
];




export const rawHandRankings = [
    {
        name: 'Equity vs. 1 random hand',
        value: 'AA, KK, QQ, JJ, TT, 99, 88, AKs, 77, AQs, AJs, AKo, ATs, AQo, AJo, KQs, 66, A9s, ATo, KJs, A8s, KTs, KQo, A7s, A9o, KJo, 55, QJs, K9s, A5s, A6s, A8o, KTo, QTs, A4s, A7o, K8s, A3s, QJo, K9o, A5o, A6o, Q9s, K7s, JTs, A2s, QTo, 44, A4o, K6s, K8o, Q8s, A3o, K5s, J9s, Q9o, JTo, K7o, A2o, K4s, Q7s, K6o, K3s, T9s, J8s, 33, Q6s, Q8o, K5o, J9o, K2s, Q5s, T8s, K4o, J7s, Q4s, Q7o, T9o, J8o, K3o, Q6o, Q3s, 98s, T7s, J6s, K2o, 22, Q2s, Q5o, J5s, T8o, J7o, Q4o, 97s, J4s, T6s, J3s, Q3o, 98o, 87s, T7o, J6o, 96s, J2s, Q2o, T5s, J5o, T4s, 97o, 86s, J4o, T6o, 95s, T3s, 76s, J3o, 87o, T2s, 85s, 96o, J2o, T5o, 94s, 75s, T4o, 93s, 86o, 65s, 84s, 95o, T3o, 92s, 76o, 74s, T2o, 54s, 85o, 64s, 83s, 94o, 75o, 82s, 73s, 93o, 65o, 53s, 63s, 84o, 92o, 43s, 74o, 72s, 54o, 64o, 52s, 62s, 83o, 42s, 82o, 73o, 53o, 63o, 32s, 43o, 72o, 52o, 62o, 42o, 32o'
    }, {
        name: 'Equity vs. 2 random hands',
        value: 'AA, KK, QQ, JJ, TT, 99, AKs, 88, AQs, AKo, AJs, KQs, ATs, AQo, 77, KJs, AJo, KTs, A9s, KQo, ATo, QJs, 66, A8s, QTs, KJo, K9s, A7s, JTs, KTo, A9o, QJo, A5s, A6s, Q9s, A4s, 55, A8o, QTo, K8s, A3s, J9s, K9o, K7s, A7o, JTo, T9s, A2s, Q8s, K6s, A5o, A6o, Q9o, J8s, K5s, 44, A4o, K8o, T8s, K4s, Q7s, J9o, A3o, 98s, K7o, Q6s, K3s, T9o, J7s, Q8o, A2o, K2s, K6o, Q5s, T7s, J8o, 97s, Q4s, 33, K5o, 87s, T8o, J6s, Q3s, Q7o, K4o, J5s, T6s, 98o, Q2s, Q6o, 96s, K3o, 86s, J4s, J7o, 76s, Q5o, T7o, J3s, K2o, 22, T5s, 97o, J2s, 87o, Q4o, 65s, 95s, T4s, 75s, 85s, J6o, Q3o, T3s, T6o, J5o, 54s, T2s, Q2o, 96o, 64s, 94s, 86o, 76o, 74s, 84s, J4o, 93s, J3o, 53s, 92s, T5o, 63s, 65o, 95o, J2o, 43s, 75o, 73s, T4o, 83s, 85o, 82s, T3o, 52s, 54o, 62s, T2o, 42s, 64o, 72s, 94o, 74o, 84o, 32s, 93o, 53o, 92o, 63o, 43o, 73o, 83o, 82o, 52o, 62o, 42o, 72o, 32o'
    }, {
        name: 'Equity vs. 3 random hands (PokerStove)',
        value: 'AA, KK, QQ, JJ, TT, AKs, 99, AQs, AKo, AJs, KQs, 88, ATs, AQo, KJs, QJs, KTs, AJo, KQo, A9s, QTs, 77, ATo, JTs, KJo, A8s, K9s, QJo, A7s, KTo, Q9s, A5s, 66, A6s, QTo, J9s, A9o, A4s, T9s, K8s, JTo, A3s, K7s, A8o, Q8s, K9o, A2s, J8s, K6s, 55, T8s, A7o, 98s, Q9o, K5s, A5o, J9o, Q7s, T9o, A6o, K4s, A4o, K8o, J7s, Q6s, K3s, T7s, 87s, 97s, A3o, 44, Q5s, K2s, K7o, Q8o, Q4s, J8o, A2o, T8o, J6s, K6o, 76s, T6s, 86s, 98o, Q3s, 96s, J5s, K5o, Q2s, 33, J4s, Q7o, 65s, K4o, 75s, J7o, J3s, T5s, T7o, 85s, Q6o, 95s, 87o, 97o, K3o, 54s, T4s, J2s, Q5o, 64s, T3s, K2o, 22, 74s, Q4o, T2s, 84s, 76o, 94s, J6o, 53s, 86o, T6o, 96o, 93s, Q3o, J5o, 63s, 43s, 92s, 73s, Q2o, 65o, J4o, 83s, 75o, 52s, 82s, 85o, T5o, J3o, 95o, 42s, 54o, 62s, T4o, J2o, 72s, 64o, 32s, T3o, 74o, 84o, T2o, 94o, 53o, 93o, 63o, 43o, 92o, 73o, 83o, 52o, 82o, 42o, 62o, 72o, 32o'
    }, {
        name: 'Equity vs. 4 random hands',
        value: 'AA, KK, QQ, JJ, TT, AKs, AQs, 99, KQs, AKo, AJs, KJs, ATs, AQo, QJs, KTs, 88, KQo, QTs, AJo, JTs, A9s, KJo, ATo, A8s, K9s, QJo, 77, KTo, A7s, Q9s, A5s, J9s, T9s, QTo, A6s, A4s, JTo, K8s, A3s, A9o, 66, K7s, Q8s, A2s, J8s, T8s, K6s, 98s, A8o, K9o, K5s, Q9o, Q7s, 55, A7o, T9o, J9o, K4s, T7s, J7s, 87s, A5o, 97s, Q6s, K3s, A6o, K2s, Q5s, K8o, A4o, 76s, Q4s, A3o, 44, 86s, Q8o, J6s, K7o, T6s, 96s, T8o, J8o, Q3s, 98o, J5s, A2o, 65s, Q2s, K6o, J4s, 75s, 33, 85s, 54s, J3s, T5s, K5o, 95s, Q7o, T4s, J2s, 64s, 87o, T7o, 97o, J7o, K4o, T3s, 74s, Q6o, 22, 53s, K3o, 84s, T2s, 94s, Q5o, 76o, K2o, 43s, 63s, 93s, 86o, Q4o, 96o, T6o, 92s, 73s, J6o, 52s, 83s, Q3o, 65o, J5o, 42s, 82s, 75o, 62s, Q2o, J4o, 54o, 85o, 32s, 72s, T5o, 95o, J3o, 64o, T4o, J2o, 74o, T3o, 53o, 84o, T2o, 94o, 43o, 63o, 93o, 73o, 92o, 52o, 83o, 42o, 82o, 62o, 32o, 72o'
    }, {
        name: 'Equity vs. 5 random hands',
        value: 'AA, KK, QQ, JJ, AKs, TT, AQs, KQs, AKo, AJs, KJs, ATs, 99, QJs, AQo, KTs, QTs, KQo, JTs, AJo, A9s, 88, KJo, A8s, K9s, ATo, QJo, Q9s, A7s, T9s, J9s, A5s, KTo, 77, A4s, A6s, QTo, JTo, K8s, A3s, Q8s, K7s, A2s, T8s, J8s, 98s, A9o, 66, K6s, K5s, K9o, A8o, Q7s, K4s, 87s, T7s, Q9o, 97s, T9o, J7s, J9o, K3s, 55, Q6s, A7o, K2s, A5o, Q5s, 76s, 86s, Q4s, A4o, A6o, 96s, T6s, K8o, 44, J6s, Q3s, 65s, A3o, J5s, T8o, Q8o, Q2s, 75s, J8o, 98o, K7o, 54s, J4s, 33, A2o, 85s, J3s, T5s, 64s, 95s, K6o, J2s, T4s, 22, 53s, 74s, K5o, T3s, 87o, 97o, Q7o, T7o, 84s, J7o, T2s, 43s, K4o, 63s, 94s, Q6o, K3o, 93s, 76o, 52s, 73s, 92s, Q5o, 86o, K2o, 42s, 83s, 96o, T6o, 82s, 65o, Q4o, 62s, J6o, 32s, Q3o, 75o, 72s, J5o, 54o, Q2o, 85o, J4o, 64o, 95o, T5o, J3o, 53o, T4o, J2o, 74o, T3o, 43o, 84o, 63o, T2o, 94o, 93o, 52o, 73o, 92o, 42o, 83o, 62o, 82o, 32o, 72o'
    }, {
        name: 'Equity vs. 6 random hands',
        value: 'AA, KK, QQ, JJ, AKs, AQs, TT, KQs, AJs, AKo, KJs, ATs, QJs, KTs, AQo, 99, QTs, JTs, KQo, A9s, AJo, 88, K9s, KJo, A8s, Q9s, QJo, T9s, J9s, ATo, A7s, A5s, A4s, KTo, A6s, K8s, A3s, QTo, 77, JTo, A2s, Q8s, T8s, K7s, J8s, 98s, K6s, 66, A9o, K5s, 87s, K4s, 97s, Q7s, T7s, J7s, K9o, K3s, T9o, A8o, 55, Q6s, Q9o, K2s, J9o, 76s, Q5s, 86s, 44, Q4s, A7o, 65s, 96s, A5o, T6s, Q3s, J6s, 75s, 54s, A4o, Q2s, 33, J5s, A6o, K8o, J4s, T8o, A3o, 85s, 22, 64s, 98o, J8o, Q8o, J3s, 95s, T5s, 53s, K7o, J2s, A2o, T4s, 74s, 43s, T3s, K6o, 84s, T2s, 87o, 63s, 97o, 94s, K5o, T7o, 52s, 93s, Q7o, J7o, 73s, 42s, K4o, 92s, 76o, Q6o, K3o, 83s, 86o, 62s, 32s, 82s, K2o, 65o, Q5o, 72s, 96o, T6o, Q4o, 75o, 54o, J6o, Q3o, J5o, 85o, Q2o, 64o, J4o, 53o, 95o, T5o, J3o, 74o, J2o, T4o, 43o, 84o, T3o, 63o, T2o, 52o, 94o, 73o, 42o, 93o, 92o, 83o, 32o, 62o, 82o, 72o'
    }, {
        name: 'Equity vs. 7 random hands',
        value: 'AA, KK, QQ, AKs, JJ, AQs, KQs, AJs, TT, AKo, KJs, ATs, QJs, KTs, QTs, AQo, JTs, 99, KQo, A9s, AJo, K9s, A8s, 88, KJo, T9s, Q9s, J9s, A5s, A7s, QJo, ATo, A4s, A6s, A3s, KTo, K8s, A2s, 77, JTo, QTo, T8s, K7s, J8s, Q8s, 98s, K6s, 66, K5s, 87s, 97s, K4s, Q7s, T7s, A9o, K3s, J7s, 55, 76s, Q6s, K2s, T9o, K9o, 86s, Q5s, 44, 65s, Q9o, J9o, A8o, Q4s, 33, 96s, 54s, T6s, 75s, Q3s, J6s, 22, Q2s, A5o, A7o, J5s, 64s, 85s, J4s, A4o, 53s, J3s, A6o, T8o, T5s, 95s, K8o, 98o, J2s, A3o, 74s, T4s, J8o, 43s, Q8o, T3s, A2o, 63s, K7o, 84s, T2s, 52s, 87o, 94s, K6o, 42s, 93s, 73s, 97o, T7o, 92s, K5o, 32s, 76o, 62s, 83s, J7o, Q7o, K4o, 82s, 65o, 86o, K3o, 72s, Q6o, K2o, 54o, Q5o, 96o, 75o, T6o, Q4o, J6o, 64o, 85o, Q3o, J5o, 53o, Q2o, J4o, 95o, 74o, J3o, 43o, T5o, J2o, T4o, 63o, 84o, T3o, 52o, T2o, 42o, 94o, 73o, 93o, 32o, 92o, 62o, 83o, 82o, 72o'
    }, {
        name: 'Equity vs. 8 random hands',
        value: 'AA, KK, QQ, AKs, JJ, AQs, KQs, AJs, KJs, AKo, TT, ATs, QJs, KTs, QTs, JTs, 99, AQo, KQo, A9s, K9s, A8s, T9s, AJo, Q9s, A5s, J9s, 88, A7s, KJo, A4s, A6s, A3s, QJo, ATo, A2s, K8s, 77, T8s, KTo, 98s, JTo, QTo, K7s, Q8s, J8s, 66, K6s, 87s, K5s, 97s, T7s, 55, K4s, K3s, 76s, J7s, Q7s, K2s, 44, 86s, 65s, 33, Q6s, A9o, 22, T9o, Q5s, 54s, 96s, 75s, Q4s, K9o, T6s, Q9o, Q3s, J6s, J9o, 64s, Q2s, J5s, 85s, A8o, 53s, J4s, J3s, A5o, 43s, A7o, 95s, T5s, 74s, A4o, J2s, T8o, A3o, 63s, T3s, 98o, T4s, K8o, A6o, 52s, 84s, Q8o, T2s, J8o, 42s, A2o, 94s, 87o, 73s, 93s, K7o, 32s, 92s, K6o, 97o, 83s, 62s, 82s, 76o, T7o, K5o, 65o, 72s, J7o, 86o, K4o, Q7o, 54o, K3o, K2o, 75o, Q6o, 96o, Q5o, 64o, T6o, 53o, Q4o, 85o, J6o, Q3o, J5o, Q2o, 43o, 74o, J4o, 95o, J3o, T5o, 63o, J2o, 52o, T4o, 84o, T3o, 42o, T2o, 94o, 73o, 32o, 93o, 92o, 62o, 83o, 82o, 72o'
    }, {
        name: 'Equity vs. 9 random hands',
        value: 'AA, KK, QQ, AKs, JJ, AQs, KQs, AJs, KJs, AKo, TT, ATs, QJs, KTs, QTs, JTs, A9s, AQo, 99, KQo, T9s, K9s, A8s, Q9s, A5s, 88, J9s, AJo, A7s, A4s, A3s, A6s, KJo, 77, A2s, K8s, T8s, QJo, 98s, ATo, J8s, Q8s, K7s, JTo, 66, KTo, K6s, QTo, K5s, 87s, 76s, 97s, 55, K4s, 44, K3s, 65s, 22, T7s, 33, 86s, Q7s, K2s, J7s, Q6s, Q5s, 75s, 96s, 54s, T6s, Q4s, Q3s, A9o, 64s, Q2s, T9o, J6s, 85s, J9o, 53s, K9o, A8o, Q9o, J5s, 74s, 43s, J4s, J3s, T5s, 95s, J2s, 63s, A5o, T4s, T3s, 98o, T8o, 52s, A4o, A7o, 84s, A6o, T2s, 94s, A3o, 42s, 93s, J8o, A2o, K8o, 73s, 87o, 62s, Q8o, 32s, 83s, 92s, 76o, K7o, 97o, 82s, K6o, 65o, T7o, 72s, 54o, 86o, K5o, J7o, K4o, 75o, Q7o, K3o, 64o, 96o, Q6o, K2o, 53o, Q5o, T6o, 85o, J6o, Q4o, Q3o, 43o, 74o, J5o, Q2o, J4o, 95o, J3o, 63o, T5o, 52o, J2o, T4o, 84o, T3o, 42o, 73o, 94o, T2o, 32o, 62o, 93o, 92o, 83o, 82o, 72o'
    }, {
        name: 'Karlson-Sklansky (Sklansky Chubukov)',
        value: 'AA, KK, AKs, QQ, AKo, JJ, AQs, TT, AQo, 99, AJs, 88, ATs, AJo, 77, 66, ATo, A9s, 55, A8s, KQs, 44, A9o, A7s, KJs, A5s, A8o, A6s, A4s, 33, KTs, A7o, A3s, KQo, A2s, A5o, A6o, A4o, KJo, QJs, A3o, 22, K9s, A2o, KTo, QTs, K8s, K7s, JTs, K9o, K6s, QJo, Q9s, K5s, K8o, K4s, QTo, K7o, K3s, K2s, Q8s, K6o, J9s, K5o, Q9o, JTo, K4o, Q7s, T9s, Q6s, K3o, J8s, Q5s, K2o, Q8o, Q4s, J9o, Q3s, T8s, J7s, Q7o, Q2s, Q6o, 98s, Q5o, J8o, T9o, J6s, T7s, J5s, Q4o, J4s, J7o, Q3o, 97s, T8o, J3s, T6s, Q2o, J2s, 87s, J6o, 98o, T7o, 96s, J5o, T5s, T4s, 86s, J4o, T6o, 97o, T3s, 76s, 95s, J3o, T2s, 87o, 85s, 96o, T5o, J2o, 75s, 94s, T4o, 65s, 86o, 93s, 84s, 95o, T3o, 76o, 92s, 74s, 54s, T2o, 85o, 64s, 83s, 94o, 75o, 82s, 73s, 93o, 65o, 53s, 63s, 84o, 92o, 43s, 74o, 72s, 54o, 64o, 52s, 62s, 83o, 42s, 82o, 73o, 53o, 63o, 32s, 43o, 72o, 52o, 62o, 42o, 32o'
    }, {
        name: 'Sklansky-Malmuth Groups',
        value: 'AA, KK, QQ, JJ, AKs, TT, AQs, AJs, AKo, KQs, 99, ATs, AQo, KJs, QJs, JTs, 88, AJo, KTs, KQo, QTs, J9s, T9s, 98s, 77, A9s, A8s, A7s, KJo, A5s, A6s, A4s, A3s, QJo, Q9s, A2s, JTo, T8s, 97s, 87s, 76s, 65s, 66, ATo, 55, K9s, KTo, QTo, J8s, 86s, 75s, 54s, K8s, K7s, 44, K6s, Q8s, K5s, K4s, K3s, 33, J9o, K2s, T9o, T7s, 22, 98o, 64s, 53s, 43s, A9o, K9o, Q9o, J7s, J8o, T8o, 96s, 87o, 85s, 76o, 74s, 65o, 54o, 42s, 32s, A8o, A7o, A5o, A6o, A4o, K8o, A3o, K7o, A2o, Q7s, K6o, Q6s, Q8o, K5o, Q5s, K4o, Q4s, Q7o, K3o, Q6o, Q3s, J6s, K2o, Q2s, Q5o, J5s, J7o, Q4o, J4s, T6s, J3s, Q3o, T7o, J6o, J2s, Q2o, T5s, J5o, T4s, 97o, J4o, T6o, 95s, T3s, J3o, T2s, 96o, J2o, T5o, 94s, T4o, 93s, 86o, 84s, 95o, T3o, 92s, T2o, 85o, 83s, 94o, 75o, 82s, 73s, 93o, 63s, 84o, 92o, 74o, 72s, 64o, 52s, 62s, 83o, 82o, 73o, 53o, 63o, 43o, 72o, 52o, 62o, 42o, 32o'
    }, {
        name: 'Equity vs. 5 random hands',
        value: 'AA, KK, QQ, JJ, AKs, TT, AQs, KQs, AKo, AJs, KJs, ATs, 99, QJs, AQo, KTs, QTs, KQo, JTs, AJo, A9s, 88, KJo, A8s, K9s, ATo, QJo, Q9s, A7s, T9s, J9s, A5s, KTo, 77, A4s, A6s, QTo, JTo, K8s, A3s, Q8s, K7s, A2s, T8s, J8s, 98s, A9o, 66, K6s, K5s, K9o, A8o, Q7s, K4s, 87s, T7s, Q9o, 97s, T9o, J7s, J9o, K3s, 55, Q6s, A7o, K2s, A5o, Q5s, 76s, 86s, Q4s, A4o, A6o, 96s, T6s, K8o, 44, J6s, Q3s, 65s, A3o, J5s, T8o, Q8o, Q2s, 75s, J8o, 98o, K7o, 54s, J4s, 33, A2o, 85s, J3s, T5s, 64s, 95s, K6o, J2s, T4s, 22, 53s, 74s, K5o, T3s, 87o, 97o, Q7o, T7o, 84s, J7o, T2s, 43s, K4o, 63s, 94s, Q6o, K3o, 93s, 76o, 52s, 73s, 92s, Q5o, 86o, K2o, 42s, 83s, 96o, T6o, 82s, 65o, Q4o, 62s, J6o, 32s, Q3o, 75o, 72s, J5o, 54o, Q2o, 85o, J4o, 64o, 95o, T5o, J3o, 53o, T4o, J2o, 74o, T3o, 43o, 84o, 63o, T2o, 94o, 93o, 52o, 73o, 92o, 42o, 83o, 62o, 82o, 32o, 72o'
    }, {
        name: 'Real-play Statistics (PokerRoom.com)',
        value: 'AA, KK, QQ, JJ, AKs, AQs, TT, AKo, AJs, KQs, 99, ATs, AQo, KJs, 88, QJs, KTs, AJo, A9s, QTs, KQo, 77, JTs, A8s, K9s, ATo, A5s, A7s, 66, KJo, A4s, Q9s, T9s, J9s, A6s, QJo, 55, A3s, KTo, K8s, A2s, 98s, T8s, K7s, Q8s, 87s, QTo, 76s, JTo, 44, A9o, J8s, K6s, 97s, K5s, K4s, T7s, Q7s, K9o, 65s, 86s, A8o, J7s, 33, K2s, Q9o, J9o, T9o, 54s, Q6s, K3s, 96s, 75s, 22, 64s, T8o, Q5s, A7o, T7o, Q4s, J8o, 98o, 97o, J6s, 85o, T6s, 76o, Q8o, J5s, T6o, Q3s, 75o, J4s, 74s, K8o, 86o, 53s, K7o, 85s, 63s, T3o, 63o, K6o, J6o, 96o, 92o, 72o, 52o, A6o, T2o, 95s, 84o, 62o, T5s, 95o, A5o, Q7o, T5o, 87o, 83o, 65o, Q2s, 94o, 74o, A4o, T4o, 82o, 64o, 42o, J7o, 93o, 73o, 53o, A3o, Q5o, J2o, 84s, Q4o, K5o, J5o, 43s, Q3o, 43o, K4o, J4o, T4s, 54o, Q6o, Q2o, J3s, J3o, T3s, J2s, 92s, 52s, K2o, T2s, 62s, 32o, 82s, 42s, 93s, 73s, K3o, 72s, A2o, 83s, 94s, 32s'
    }, {
        name: 'Domination, Defensive',
        value: 'AA, AKs, AKo, KK, QQ, AQs, AQo, JJ, TT, AJs, AJo, 99, KQs, KQo, 88, ATs, ATo, 77, KJs, KJo, 66, A9s, A9o, KTs, 55, KTo, A8s, A8o, QJs, QJo, 44, K9s, K9o, 33, A7s, QTs, A7o, QTo, 22, K8s, K8o, A6s, A6o, Q9s, Q9o, K7s, JTs, K7o, JTo, A5s, A5o, Q8s, Q8o, K6s, J9s, K6o, J9o, A4s, A4o, Q7s, Q7o, K5s, J8s, K5o, J8o, A3s, A3o, T9s, Q6s, T9o, Q6o, K4s, K4o, J7s, J7o, A2s, A2o, Q5s, T8s, Q5o, T8o, K3s, K3o, J6s, J6o, Q4s, T7s, Q4o, T7o, K2s, 98s, K2o, J5s, 98o, J5o, Q3s, T6s, Q3o, T6o, J4s, 97s, 97o, J4o, Q2s, Q2o, T5s, T5o, J3s, 96s, J3o, 96o, 87s, T4s, 87o, T4o, J2s, 95s, J2o, 95o, 86s, T3s, 86o, T3o, 94s, 94o, T2s, 85s, T2o, 85o, 76s, 93s, 76o, 93o, 84s, 84o, 75s, 92s, 75o, 92o, 83s, 83o, 74s, 74o, 65s, 82s, 65o, 82o, 73s, 73o, 64s, 64o, 72s, 72o, 63s, 63o, 54s, 54o, 62s, 62o, 53s, 53o, 52s, 52o, 43s, 43o, 42s, 42o, 32s, 32o'
    }, {
        name: 'Domination, Offensive',
        value: 'AA, KK, QQ, JJ, TT, 99, 88, AKs, AKo, 77, AQs, AQo, AJs, AJo, KQs, KQo, ATs, ATo, KJs, KJo, 66, A9s, KTs, A9o, QJs, KTo, QJo, A8s, A8o, K9s, QTs, K9o, QTo, A7s, A7o, K8s, Q9s, JTs, K8o, Q9o, JTo, A6s, A6o, K7s, Q8s, J9s, K7o, Q8o, J9o, 55, A5s, A5o, K6s, K6o, Q7s, J8s, T9s, Q7o, T9o, J8o, A4s, A4o, K5s, Q6s, K5o, J7s, T8s, Q6o, T8o, J7o, A3s, A3o, K4s, Q5s, K4o, 98s, J6s, T7s, Q5o, 98o, T7o, J6o, A2s, A2o, K3s, Q4s, K3o, J5s, Q4o, 97s, T6s, J5o, 97o, T6o, 44, K2s, Q3s, K2o, J4s, Q3o, 87s, 96s, T5s, J4o, 87o, 96o, T5o, Q2s, J3s, Q2o, T4s, 86s, 95s, J3o, T4o, 86o, 95o, J2s, T3s, 76s, 85s, J2o, 94s, T3o, 76o, 85o, 94o, T2s, 75s, 93s, 84s, T2o, 75o, 93o, 84o, 65s, 92s, 74s, 83s, 65o, 92o, 74o, 83o, 33, 64s, 82s, 73s, 64o, 82o, 73o, 54s, 63s, 54o, 72s, 63o, 72o, 53s, 62s, 53o, 62o, 43s, 52s, 43o, 52o, 42s, 42o, 22, 32s, 32o'
    }, {
        name: 'High Card',
        value: 'AA, AKs, AKo, AQs, AQo, AJs, AJo, ATs, ATo, A9s, A9o, A8s, A8o, A7s, A7o, A6s, A6o, A5s, A5o, A4s, A4o, A3s, A3o, A2s, A2o, KK, KQs, KQo, KJs, KJo, KTs, KTo, K9s, K9o, K8s, K8o, K7s, K7o, K6s, K6o, K5s, K5o, K4s, K4o, K3s, K3o, K2s, K2o, QQ, QJs, QJo, QTs, QTo, Q9s, Q9o, Q8s, Q8o, Q7s, Q7o, Q6s, Q6o, Q5s, Q5o, Q4s, Q4o, Q3s, Q3o, Q2s, Q2o, JJ, JTs, JTo, J9s, J9o, J8s, J8o, J7s, J7o, J6s, J6o, J5s, J5o, J4s, J4o, J3s, J3o, J2s, J2o, TT, T9s, T9o, T8s, T8o, T7s, T7o, T6s, T6o, T5s, T5o, T4s, T4o, T3s, T3o, T2s, T2o, 99, 98s, 98o, 97s, 97o, 96s, 96o, 95s, 95o, 94s, 94o, 93s, 93o, 92s, 92o, 88, 87s, 87o, 86s, 86o, 85s, 85o, 84s, 84o, 83s, 83o, 82s, 82o, 77, 76s, 76o, 75s, 75o, 74s, 74o, 73s, 73o, 72s, 72o, 66, 65s, 65o, 64s, 64o, 63s, 63o, 62s, 62o, 55, 54s, 54o, 53s, 53o, 52s, 52o, 44, 43s, 43o, 42s, 42o, 33, 32s, 32o, 22'
    }, {
        name: 'Original Matrix',
        value: 'AA, AKs, AQs, AJs, ATs, A9s, A8s, A7s, A6s, A5s, A4s, A3s, A2s, AKo, KK, KQs, KJs, KTs, K9s, K8s, K7s, K6s, K5s, K4s, K3s, K2s, AQo, KQo, QQ, QJs, QTs, Q9s, Q8s, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s, AJo, KJo, QJo, JJ, JTs, J9s, J8s, J7s, J6s, J5s, J4s, J3s, J2s, ATo, KTo, QTo, JTo, TT, T9s, T8s, T7s, T6s, T5s, T4s, T3s, T2s, A9o, K9o, Q9o, J9o, T9o, 99, 98s, 97s, 96s, 95s, 94s, 93s, 92s, A8o, K8o, Q8o, J8o, T8o, 98o, 88, 87s, 86s, 85s, 84s, 83s, 82s, A7o, K7o, Q7o, J7o, T7o, 97o, 87o, 77, 76s, 75s, 74s, 73s, 72s, A6o, K6o, Q6o, J6o, T6o, 96o, 86o, 76o, 66, 65s, 64s, 63s, 62s, A5o, K5o, Q5o, J5o, T5o, 95o, 85o, 75o, 65o, 55, 54s, 53s, 52s, A4o, K4o, Q4o, J4o, T4o, 94o, 84o, 74o, 64o, 54o, 44, 43s, 42s, A3o, K3o, Q3o, J3o, T3o, 93o, 83o, 73o, 63o, 53o, 43o, 33, 32s, A2o, K2o, Q2o, J2o, T2o, 92o, 82o, 72o, 62o, 52o, 42o, 32o, 22'
    }
]


import { HandValue } from './hand-value';

export const suites: string[] = ['s', 'c', 'd', 'h'];

export const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export const handValues: HandValue[] = [

    new HandValue('AA', 1, 1),
    new HandValue('KK', 1, 1),
    new HandValue('QQ', 1, 1),
    new HandValue('JJ', 1, 1),
    new HandValue('TT', 2, 2),
    new HandValue('99', 3, 3),
    new HandValue('88', 4, 4),
    new HandValue('77', 5, 5),
    new HandValue('66', 6, 6),
    new HandValue('55', 6, 6),
    new HandValue('44', 7, 7),
    new HandValue('33', 7, 7),
    new HandValue('22', 7, 7),

    new HandValue('AK', 1, 2),
    new HandValue('AQ', 2, 3),
    new HandValue('AJ', 2, 4),
    new HandValue('AT', 3, 6),
    new HandValue('A9', 5, 8),
    new HandValue('A8', 5, 9),
    new HandValue('A7', 5, 9),
    new HandValue('A6', 5, 9),
    new HandValue('A5', 5, 9),
    new HandValue('A4', 5, 9),
    new HandValue('A3', 5, 9),
    new HandValue('A2', 5, 9),

    new HandValue('KQ', 2, 4),
    new HandValue('KJ', 3, 5),
    new HandValue('KT', 4, 6),
    new HandValue('K9', 6, 8),
    new HandValue('K8', 7, 9),
    new HandValue('K7', 7, 9),
    new HandValue('K6', 7, 9),
    new HandValue('K5', 7, 9),
    new HandValue('K4', 7, 9),
    new HandValue('K3', 7, 9),
    new HandValue('K2', 7, 9),

    new HandValue('QJ', 3, 5),
    new HandValue('QT', 4, 6),
    new HandValue('Q9', 5, 8),
    new HandValue('Q8', 7, 9),
    new HandValue('Q7', 9, 9),
    new HandValue('Q6', 9, 9),
    new HandValue('Q5', 9, 9),
    new HandValue('Q4', 9, 9),
    new HandValue('Q3', 9, 9),
    new HandValue('Q2', 9, 9),

    new HandValue('JT', 3, 5),
    new HandValue('J9', 4, 7),
    new HandValue('J8', 6, 8),
    new HandValue('J7', 8, 9),
    new HandValue('J6', 9, 9),
    new HandValue('J5', 9, 9),
    new HandValue('J4', 9, 9),
    new HandValue('J3', 9, 9),
    new HandValue('J2', 9, 9),

    new HandValue('T9', 4, 7),
    new HandValue('T8', 5, 8),
    new HandValue('T7', 7, 9),
    new HandValue('T6', 9, 9),
    new HandValue('T5', 9, 9),
    new HandValue('T4', 9, 9),
    new HandValue('T3', 9, 9),
    new HandValue('T2', 9, 9),

    new HandValue('98', 4, 7),
    new HandValue('97', 5, 9),
    new HandValue('96', 8, 9),
    new HandValue('95', 9, 9),
    new HandValue('94', 9, 9),
    new HandValue('93', 9, 9),
    new HandValue('92', 9, 9),

    new HandValue('87', 5, 8),
    new HandValue('86', 6, 9),
    new HandValue('85', 8, 9),
    new HandValue('84', 9, 9),
    new HandValue('83', 9, 9),
    new HandValue('82', 9, 9),

    new HandValue('76', 5, 8),
    new HandValue('75', 6, 9),
    new HandValue('74', 8, 9),
    new HandValue('73', 9, 9),
    new HandValue('72', 9, 9),

    new HandValue('65', 5, 8),
    new HandValue('64', 7, 9),
    new HandValue('63', 9, 9),
    new HandValue('62', 9, 9),
    
    new HandValue('54', 6, 8),
    new HandValue('53', 7, 9),
    new HandValue('52', 9, 9),
    
    new HandValue('43', 7, 9),
    new HandValue('42', 8, 9),

    new HandValue('32', 8, 9),
];
  
export const rawHandRankings = [
    {
        name: 'Karlson-Sklansky (Sklansky Chubukov)',
        value: 'AA, KK, AKs, QQ, AKo, JJ, AQs, TT, AQo, 99, AJs, 88, ATs, AJo, 77, 66, ATo, A9s, 55, A8s, KQs, 44, A9o, A7s, KJs, A5s, A8o, A6s, A4s, 33, KTs, A7o, A3s, KQo, A2s, A5o, A6o, A4o, KJo, QJs, A3o, 22, K9s, A2o, KTo, QTs, K8s, K7s, JTs, K9o, K6s, QJo, Q9s, K5s, K8o, K4s, QTo, K7o, K3s, K2s, Q8s, K6o, J9s, K5o, Q9o, JTo, K4o, Q7s, T9s, Q6s, K3o, J8s, Q5s, K2o, Q8o, Q4s, J9o, Q3s, T8s, J7s, Q7o, Q2s, Q6o, 98s, Q5o, J8o, T9o, J6s, T7s, J5s, Q4o, J4s, J7o, Q3o, 97s, T8o, J3s, T6s, Q2o, J2s, 87s, J6o, 98o, T7o, 96s, J5o, T5s, T4s, 86s, J4o, T6o, 97o, T3s, 76s, 95s, J3o, T2s, 87o, 85s, 96o, T5o, J2o, 75s, 94s, T4o, 65s, 86o, 93s, 84s, 95o, T3o, 76o, 92s, 74s, 54s, T2o, 85o, 64s, 83s, 94o, 75o, 82s, 73s, 93o, 65o, 53s, 63s, 84o, 92o, 43s, 74o, 72s, 54o, 64o, 52s, 62s, 83o, 42s, 82o, 73o, 53o, 63o, 32s, 43o, 72o, 52o, 62o, 42o, 32o'
    }, {
        name: 'Sklansky-Malmuth Groups',
        value: 'AA, KK, QQ, JJ, AKs, TT, AQs, AJs, AKo, KQs, 99, ATs, AQo, KJs, QJs, JTs, 88, AJo, KTs, KQo, QTs, J9s, T9s, 98s, 77, A9s, A8s, A7s, KJo, A5s, A6s, A4s, A3s, QJo, Q9s, A2s, JTo, T8s, 97s, 87s, 76s, 65s, 66, ATo, 55, K9s, KTo, QTo, J8s, 86s, 75s, 54s, K8s, K7s, 44, K6s, Q8s, K5s, K4s, K3s, 33, J9o, K2s, T9o, T7s, 22, 98o, 64s, 53s, 43s, A9o, K9o, Q9o, J7s, J8o, T8o, 96s, 87o, 85s, 76o, 74s, 65o, 54o, 42s, 32s, A8o, A7o, A5o, A6o, A4o, K8o, A3o, K7o, A2o, Q7s, K6o, Q6s, Q8o, K5o, Q5s, K4o, Q4s, Q7o, K3o, Q6o, Q3s, J6s, K2o, Q2s, Q5o, J5s, J7o, Q4o, J4s, T6s, J3s, Q3o, T7o, J6o, J2s, Q2o, T5s, J5o, T4s, 97o, J4o, T6o, 95s, T3s, J3o, T2s, 96o, J2o, T5o, 94s, T4o, 93s, 86o, 84s, 95o, T3o, 92s, T2o, 85o, 83s, 94o, 75o, 82s, 73s, 93o, 63s, 84o, 92o, 74o, 72s, 64o, 52s, 62s, 83o, 82o, 73o, 53o, 63o, 43o, 72o, 52o, 62o, 42o, 32o'
    }, {
        name: 'Equity vs. 9 random hands',
        value: 'AA, KK, QQ, AKs, JJ, AQs, KQs, AJs, KJs, AKo, TT, ATs, QJs, KTs, QTs, JTs, A9s, AQo, 99, KQo, T9s, K9s, A8s, Q9s, A5s, 88, J9s, AJo, A7s, A4s, A3s, A6s, KJo, 77, A2s, K8s, T8s, QJo, 98s, ATo, J8s, Q8s, K7s, JTo, 66, KTo, K6s, QTo, K5s, 87s, 76s, 97s, 55, K4s, 44, K3s, 65s, 22, T7s, 33, 86s, Q7s, K2s, J7s, Q6s, Q5s, 75s, 96s, 54s, T6s, Q4s, Q3s, A9o, 64s, Q2s, T9o, J6s, 85s, J9o, 53s, K9o, A8o, Q9o, J5s, 74s, 43s, J4s, J3s, T5s, 95s, J2s, 63s, A5o, T4s, T3s, 98o, T8o, 52s, A4o, A7o, 84s, A6o, T2s, 94s, A3o, 42s, 93s, J8o, A2o, K8o, 73s, 87o, 62s, Q8o, 32s, 83s, 92s, 76o, K7o, 97o, 82s, K6o, 65o, T7o, 72s, 54o, 86o, K5o, J7o, K4o, 75o, Q7o, K3o, 64o, 96o, Q6o, K2o, 53o, Q5o, T6o, 85o, J6o, Q4o, Q3o, 43o, 74o, J5o, Q2o, J4o, 95o, J3o, 63o, T5o, 52o, J2o, T4o, 84o, T3o, 42o, 73o, 94o, T2o, 32o, 62o, 93o, 92o, 83o, 82o, 72o'
    }, {
        name: 'Equity vs. 5 random hands',
        value: 'AA, KK, QQ, JJ, AKs, TT, AQs, KQs, AKo, AJs, KJs, ATs, 99, QJs, AQo, KTs, QTs, KQo, JTs, AJo, A9s, 88, KJo, A8s, K9s, ATo, QJo, Q9s, A7s, T9s, J9s, A5s, KTo, 77, A4s, A6s, QTo, JTo, K8s, A3s, Q8s, K7s, A2s, T8s, J8s, 98s, A9o, 66, K6s, K5s, K9o, A8o, Q7s, K4s, 87s, T7s, Q9o, 97s, T9o, J7s, J9o, K3s, 55, Q6s, A7o, K2s, A5o, Q5s, 76s, 86s, Q4s, A4o, A6o, 96s, T6s, K8o, 44, J6s, Q3s, 65s, A3o, J5s, T8o, Q8o, Q2s, 75s, J8o, 98o, K7o, 54s, J4s, 33, A2o, 85s, J3s, T5s, 64s, 95s, K6o, J2s, T4s, 22, 53s, 74s, K5o, T3s, 87o, 97o, Q7o, T7o, 84s, J7o, T2s, 43s, K4o, 63s, 94s, Q6o, K3o, 93s, 76o, 52s, 73s, 92s, Q5o, 86o, K2o, 42s, 83s, 96o, T6o, 82s, 65o, Q4o, 62s, J6o, 32s, Q3o, 75o, 72s, J5o, 54o, Q2o, 85o, J4o, 64o, 95o, T5o, J3o, 53o, T4o, J2o, 74o, T3o, 43o, 84o, 63o, T2o, 94o, 93o, 52o, 73o, 92o, 42o, 83o, 62o, 82o, 32o, 72o'
    }, {
        name: 'Real-play Statistics (PokerRoom.com)',
        value: 'AA, KK, QQ, JJ, AKs, AQs, TT, AKo, AJs, KQs, 99, ATs, AQo, KJs, 88, QJs, KTs, AJo, A9s, QTs, KQo, 77, JTs, A8s, K9s, ATo, A5s, A7s, 66, KJo, A4s, Q9s, T9s, J9s, A6s, QJo, 55, A3s, KTo, K8s, A2s, 98s, T8s, K7s, Q8s, 87s, QTo, 76s, JTo, 44, A9o, J8s, K6s, 97s, K5s, K4s, T7s, Q7s, K9o, 65s, 86s, A8o, J7s, 33, K2s, Q9o, J9o, T9o, 54s, Q6s, K3s, 96s, 75s, 22, 64s, T8o, Q5s, A7o, T7o, Q4s, J8o, 98o, 97o, J6s, 85o, T6s, 76o, Q8o, J5s, T6o, Q3s, 75o, J4s, 74s, K8o, 86o, 53s, K7o, 85s, 63s, T3o, 63o, K6o, J6o, 96o, 92o, 72o, 52o, A6o, T2o, 95s, 84o, 62o, T5s, 95o, A5o, Q7o, T5o, 87o, 83o, 65o, Q2s, 94o, 74o, A4o, T4o, 82o, 64o, 42o, J7o, 93o, 73o, 53o, A3o, Q5o, J2o, 84s, Q4o, K5o, J5o, 43s, Q3o, 43o, K4o, J4o, T4s, 54o, Q6o, Q2o, J3s, J3o, T3s, J2s, 92s, 52s, K2o, T2s, 62s, 32o, 82s, 42s, 93s, 73s, K3o, 72s, A2o, 83s, 94s, 32s'
    }
]


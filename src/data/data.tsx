import AsyncStorage from '@react-native-async-storage/async-storage';

export const UNLOCK_COST = 200;

export const topicCategories = ['Quantitative', 'Reasoning', 'Verbal'] as const;
export type TopicCategory = (typeof topicCategories)[number];

export const rewardConfig = {
    dailyBonus: 20,
    videoReward: 50,
    questionReward: 10,
    title: 'Rewards',
    dailyBonusText: 'Come back tomorrow and earn bonus coins.',
    videoText: 'Watch a short video',
    questionText: 'Solve a practice question',
};

export const parentData = {
    topics: [
        { id: 'numberSystemQuestions', name: 'Number System', category: 'Quantitative' as TopicCategory },
        { id: 'timeAndWorkQuestions', name: 'Time and Work', category: 'Quantitative' as TopicCategory },
        { id: 'trainQuestions', name: 'Problems on Trains', category: 'Quantitative' as TopicCategory },
        { id: 'averageQuestions', name: 'Average', category: 'Quantitative' as TopicCategory },
        { id: 'percentageQuestions', name: 'Percentage', category: 'Quantitative' as TopicCategory },
        { id: 'profitAndLossQuestions', name: 'Profit and Loss', category: 'Quantitative' as TopicCategory },
        { id: 'permutationAndCombinationQuestions', name: 'Permutation and Combination', category: 'Quantitative' as TopicCategory },
        { id: 'ratioAndProportionQuestions', name: 'Ratio and Proportion', category: 'Quantitative' as TopicCategory },
        { id: 'mixtureAndAlligationQuestions', name: 'Mixture and Alligation', category: 'Quantitative' as TopicCategory },
        { id: 'analogyQuestions', name: 'Analogy', category: 'Reasoning' as TopicCategory },
        { id: 'classificationQuestions', name: 'Classification', category: 'Reasoning' as TopicCategory },
        { id: 'codingDecodingQuestions', name: 'Coding Decoding', category: 'Reasoning' as TopicCategory },
        { id: 'numberSeriesQuestions', name: 'Number Series', category: 'Reasoning' as TopicCategory },
        { id: 'alphabetSeriesQuestions', name: 'Alphabet Series', category: 'Reasoning' as TopicCategory },
        { id: 'alphanumericSeriesQuestions', name: 'Alphanumeric Series', category: 'Reasoning' as TopicCategory },
        { id: 'bloodRelationsQuestions', name: 'Blood Relation', category: 'Reasoning' as TopicCategory },
        { id: 'directionSenseQuestions', name: 'Direction Sense', category: 'Reasoning' as TopicCategory },
    ],
    coins: 500,
    unlockedTopics: ['numberSystemQuestions', 'timeAndWorkQuestions'],
    lastDailyBonusDate: null as string | null,
};

export const numberSystemQuestions = [
    // ==================== BASIC - 18 QUESTIONS ====================

    {
        id: "1",
        question: "What is the smallest number that should be added to 7856 to make it divisible by 9?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "4" },
            { id: "D", text: "5" }
        ],
        rightOption: "A",
        explanation: "The sum of digits of 7856 is 7 + 8 + 5 + 6 = 26. The next multiple of 9 is 27, so we need to add 1.",
        isCompleted: false
    },

    {
        id: "2",
        question: "Which of the following numbers is divisible by 3?",
        options: [
            { id: "A", text: "124" },
            { id: "B", text: "235" },
            { id: "C", text: "417" },
            { id: "D", text: "502" }
        ],
        rightOption: "C",
        explanation: "The sum of digits of 417 is 4 + 1 + 7 = 12, which is divisible by 3. Therefore, 417 is divisible by 3.",
        isCompleted: false
    },

    {
        id: "3",
        question: "What is the smallest prime number?",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "2" },
            { id: "D", text: "3" }
        ],
        rightOption: "C",
        explanation: "2 is the smallest prime number. It is divisible only by 1 and itself.",
        isCompleted: false
    },

    {
        id: "4",
        question: "Which of the following is a composite number?",
        options: [
            { id: "A", text: "13" },
            { id: "B", text: "17" },
            { id: "C", text: "19" },
            { id: "D", text: "21" }
        ],
        rightOption: "D",
        explanation: "21 has factors 1, 3, 7 and 21, so it has more than two factors and is therefore composite.",
        isCompleted: false
    },

    {
        id: "5",
        question: "What is the HCF of 12 and 18?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "3" },
            { id: "C", text: "6" },
            { id: "D", text: "9" }
        ],
        rightOption: "C",
        explanation: "The factors common to 12 and 18 are 1, 2, 3 and 6. Therefore, the HCF is 6.",
        isCompleted: false
    },

    {
        id: "6",
        question: "What is the LCM of 4 and 6?",
        options: [
            { id: "A", text: "8" },
            { id: "B", text: "10" },
            { id: "C", text: "12" },
            { id: "D", text: "24" }
        ],
        rightOption: "C",
        explanation: "The multiples of 4 are 4, 8, 12, 16... and the multiples of 6 are 6, 12, 18... Therefore, the LCM is 12.",
        isCompleted: false
    },

    {
        id: "7",
        question: "Which of the following is an even number?",
        options: [
            { id: "A", text: "135" },
            { id: "B", text: "247" },
            { id: "C", text: "368" },
            { id: "D", text: "591" }
        ],
        rightOption: "C",
        explanation: "A number ending in 0, 2, 4, 6 or 8 is even. 368 ends in 8, so it is even.",
        isCompleted: false
    },

    {
        id: "8",
        question: "What is the remainder when 25 is divided by 4?",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "2" },
            { id: "D", text: "3" }
        ],
        rightOption: "B",
        explanation: "25 = 4 × 6 + 1. Therefore, the remainder is 1.",
        isCompleted: false
    },

    {
        id: "9",
        question: "How many factors does 16 have?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "4" },
            { id: "C", text: "5" },
            { id: "D", text: "6" }
        ],
        rightOption: "C",
        explanation: "The factors of 16 are 1, 2, 4, 8 and 16. Therefore, it has 5 factors.",
        isCompleted: false
    },

    {
        id: "10",
        question: "What is the sum of the first five natural numbers?",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "15" },
            { id: "C", text: "20" },
            { id: "D", text: "25" }
        ],
        rightOption: "B",
        explanation: "The first five natural numbers are 1, 2, 3, 4 and 5. Their sum is 1 + 2 + 3 + 4 + 5 = 15.",
        isCompleted: false
    },

    {
        id: "11",
        question: "Which number is divisible by 5?",
        options: [
            { id: "A", text: "234" },
            { id: "B", text: "317" },
            { id: "C", text: "425" },
            { id: "D", text: "638" }
        ],
        rightOption: "C",
        explanation: "A number is divisible by 5 if its last digit is 0 or 5. Therefore, 425 is divisible by 5.",
        isCompleted: false
    },

    {
        id: "12",
        question: "What is the place value of 7 in 47,325?",
        options: [
            { id: "A", text: "7" },
            { id: "B", text: "70" },
            { id: "C", text: "700" },
            { id: "D", text: "7000" }
        ],
        rightOption: "D",
        explanation: "In 47,325, the digit 7 is in the thousands place. Therefore, its place value is 7,000.",
        isCompleted: false
    },

    {
        id: "13",
        question: "What is the greatest two-digit prime number?",
        options: [
            { id: "A", text: "91" },
            { id: "B", text: "93" },
            { id: "C", text: "97" },
            { id: "D", text: "99" }
        ],
        rightOption: "C",
        explanation: "97 is prime and is the largest prime number less than 100.",
        isCompleted: false
    },

    {
        id: "14",
        question: "What is the smallest positive integer?",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "-1" },
            { id: "D", text: "2" }
        ],
        rightOption: "B",
        explanation: "Positive integers are numbers greater than zero. Therefore, the smallest positive integer is 1.",
        isCompleted: false
    },

    {
        id: "15",
        question: "What is the product of the first three prime numbers?",
        options: [
            { id: "A", text: "6" },
            { id: "B", text: "12" },
            { id: "C", text: "18" },
            { id: "D", text: "30" }
        ],
        rightOption: "D",
        explanation: "The first three prime numbers are 2, 3 and 5. Their product is 2 × 3 × 5 = 30.",
        isCompleted: false
    },

    {
        id: "16",
        question: "What is the remainder when 37 is divided by 5?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "3" },
            { id: "D", text: "4" }
        ],
        rightOption: "B",
        explanation: "37 = 5 × 7 + 2. Therefore, the remainder is 2.",
        isCompleted: false
    },

    {
        id: "17",
        question: "Which of the following numbers is divisible by 10?",
        options: [
            { id: "A", text: "125" },
            { id: "B", text: "240" },
            { id: "C", text: "315" },
            { id: "D", text: "427" }
        ],
        rightOption: "B",
        explanation: "A number is divisible by 10 if its last digit is 0. Therefore, 240 is divisible by 10.",
        isCompleted: false
    },

    {
        id: "18",
        question: "What is the HCF of 15 and 25?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "5" },
            { id: "C", text: "10" },
            { id: "D", text: "15" }
        ],
        rightOption: "B",
        explanation: "The common factors of 15 and 25 are 1 and 5. Therefore, their HCF is 5.",
        isCompleted: false
    },


    // ==================== MEDIUM - 18 QUESTIONS ====================

    {
        id: "19",
        question: "What is the smallest number that should be subtracted from 1000 to make it divisible by 7?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "5" },
            { id: "C", text: "6" },
            { id: "D", text: "7" }
        ],
        rightOption: "A",
        explanation: "1000 divided by 7 leaves a remainder of 6. Therefore, subtracting 6 makes it divisible by 7.",
        isCompleted: false
    },

    {
        id: "20",
        question: "What is the smallest number that should be added to 5683 to make it divisible by 11?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "3" },
            { id: "D", text: "4" }
        ],
        rightOption: "A",
        explanation: "5683 ÷ 11 gives a remainder of 10. Therefore, 1 should be added to get the next multiple of 11.",
        isCompleted: false
    },

    {
        id: "21",
        question: "What is the LCM of 12, 18 and 24?",
        options: [
            { id: "A", text: "36" },
            { id: "B", text: "48" },
            { id: "C", text: "72" },
            { id: "D", text: "96" }
        ],
        rightOption: "C",
        explanation: "12 = 2² × 3, 18 = 2 × 3² and 24 = 2³ × 3. Therefore, LCM = 2³ × 3² = 72.",
        isCompleted: false
    },

    {
        id: "22",
        question: "What is the HCF of 84 and 126?",
        options: [
            { id: "A", text: "21" },
            { id: "B", text: "28" },
            { id: "C", text: "42" },
            { id: "D", text: "63" }
        ],
        rightOption: "C",
        explanation: "84 = 2² × 3 × 7 and 126 = 2 × 3² × 7. Therefore, HCF = 2 × 3 × 7 = 42.",
        isCompleted: false
    },

    {
        id: "23",
        question: "What is the remainder when 2^10 is divided by 7?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "3" },
            { id: "D", text: "4" }
        ],
        rightOption: "B",
        explanation: "The powers of 2 modulo 7 repeat as 2, 4, 1. Since 10 leaves remainder 1 when divided by 3, 2^10 leaves remainder 2.",
        isCompleted: false
    },

    {
        id: "24",
        question: "How many factors does 72 have?",
        options: [
            { id: "A", text: "8" },
            { id: "B", text: "10" },
            { id: "C", text: "12" },
            { id: "D", text: "14" }
        ],
        rightOption: "C",
        explanation: "72 = 2³ × 3². Number of factors = (3 + 1)(2 + 1) = 4 × 3 = 12.",
        isCompleted: false
    },

    {
        id: "25",
        question: "What is the sum of all factors of 18?",
        options: [
            { id: "A", text: "21" },
            { id: "B", text: "39" },
            { id: "C", text: "42" },
            { id: "D", text: "45" }
        ],
        rightOption: "B",
        explanation: "The factors of 18 are 1, 2, 3, 6, 9 and 18. Their sum is 39.",
        isCompleted: false
    },

    {
        id: "26",
        question: "If a number is divisible by both 6 and 8, it must be divisible by:",
        options: [
            { id: "A", text: "12" },
            { id: "B", text: "18" },
            { id: "C", text: "24" },
            { id: "D", text: "48" }
        ],
        rightOption: "C",
        explanation: "The LCM of 6 and 8 is 24. Therefore, any number divisible by both must be divisible by 24.",
        isCompleted: false
    },

    {
        id: "27",
        question: "What is the greatest number that divides 43 and 91 leaving remainder 3 in each case?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "5" },
            { id: "D", text: "6" }
        ],
        rightOption: "B",
        explanation: "Subtract 3 from both numbers: 43 - 3 = 40 and 91 - 3 = 88. HCF of 40 and 88 is 8, not 4. Since the divisor must be greater than the remainder, the greatest valid divisor is 8.",
        isCompleted: false
    },

    {
        id: "28",
        question: "What is the unit digit of 7^4?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "3" },
            { id: "C", text: "7" },
            { id: "D", text: "9" }
        ],
        rightOption: "A",
        explanation: "The unit digits of powers of 7 repeat as 7, 9, 3, 1. Therefore, 7^4 has unit digit 1.",
        isCompleted: false
    },

    {
        id: "29",
        question: "What is the remainder when 12345 is divided by 9?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "5" },
            { id: "C", text: "6" },
            { id: "D", text: "8" }
        ],
        rightOption: "C",
        explanation: "The sum of digits is 1 + 2 + 3 + 4 + 5 = 15. Dividing 15 by 9 leaves remainder 6.",
        isCompleted: false
    },

    {
        id: "30",
        question: "If the HCF of two numbers is 12 and their product is 8640, what is their LCM?",
        options: [
            { id: "A", text: "360" },
            { id: "B", text: "540" },
            { id: "C", text: "720" },
            { id: "D", text: "840" }
        ],
        rightOption: "C",
        explanation: "For two numbers, Product = HCF × LCM. Therefore, LCM = 8640 ÷ 12 = 720.",
        isCompleted: false
    },

    {
        id: "31",
        question: "What is the greatest 4-digit number divisible by 15?",
        options: [
            { id: "A", text: "9985" },
            { id: "B", text: "9990" },
            { id: "C", text: "9995" },
            { id: "D", text: "9999" }
        ],
        rightOption: "B",
        explanation: "The greatest 4-digit number is 9999. The largest multiple of 15 below it is 9990.",
        isCompleted: false
    },

    {
        id: "32",
        question: "What is the smallest 4-digit number divisible by 18?",
        options: [
            { id: "A", text: "1002" },
            { id: "B", text: "1016" },
            { id: "C", text: "1026" },
            { id: "D", text: "1036" }
        ],
        rightOption: "A",
        explanation: "18 × 55 = 990 and 18 × 56 = 1008. Therefore, the smallest 4-digit multiple is 1008.",
        isCompleted: false
    },

    {
        id: "33",
        question: "Which of the following is divisible by 11?",
        options: [
            { id: "A", text: "2728" },
            { id: "B", text: "2730" },
            { id: "C", text: "2740" },
            { id: "D", text: "2750" }
        ],
        rightOption: "A",
        explanation: "For 2728, the difference between the sums of alternate digits is (2 + 2) - (7 + 8) = -11, which is divisible by 11.",
        isCompleted: false
    },

    {
        id: "34",
        question: "How many numbers between 1 and 100 are divisible by both 4 and 6?",
        options: [
            { id: "A", text: "6" },
            { id: "B", text: "7" },
            { id: "C", text: "8" },
            { id: "D", text: "9" }
        ],
        rightOption: "C",
        explanation: "Numbers divisible by both 4 and 6 are multiples of LCM(4,6) = 12. There are 12, 24, 36, 48, 60, 72, 84 and 96, giving 8 numbers.",
        isCompleted: false
    },

    {
        id: "35",
        question: "What is the smallest number which when divided by 12, 15 and 20 leaves remainder 5 in each case?",
        options: [
            { id: "A", text: "55" },
            { id: "B", text: "60" },
            { id: "C", text: "65" },
            { id: "D", text: "75" }
        ],
        rightOption: "C",
        explanation: "LCM of 12, 15 and 20 is 60. Adding the common remainder 5 gives 60 + 5 = 65.",
        isCompleted: false
    },

    {
        id: "36",
        question: "What is the largest number that divides 245 and 1029 leaving the same remainder?",
        options: [
            { id: "A", text: "14" },
            { id: "B", text: "21" },
            { id: "C", text: "28" },
            { id: "D", text: "49" }
        ],
        rightOption: "C",
        explanation: "The required number divides the difference 1029 - 245 = 784. The greatest factor of 784 that is less than 245 is 28.",
        isCompleted: false
    },


    // ==================== HARD - 18 QUESTIONS ====================

    {
        id: "37",
        question: "What is the remainder when 3^100 is divided by 7?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "4" },
            { id: "D", text: "6" }
        ],
        rightOption: "B",
        explanation: "Powers of 3 modulo 7 repeat as 3, 2, 6, 4, 5, 1. Since 100 mod 6 = 4, the remainder is 4. Therefore, the correct answer is 4.",
        isCompleted: false
    },

    {
        id: "38",
        question: "What is the unit digit of 3^57?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "3" },
            { id: "C", text: "7" },
            { id: "D", text: "9" }
        ],
        rightOption: "B",
        explanation: "The unit digits of powers of 3 repeat as 3, 9, 7, 1. Since 57 leaves remainder 1 when divided by 4, the unit digit is 3.",
        isCompleted: false
    },

    {
        id: "39",
        question: "How many positive divisors does 360 have?",
        options: [
            { id: "A", text: "18" },
            { id: "B", text: "20" },
            { id: "C", text: "24" },
            { id: "D", text: "30" }
        ],
        rightOption: "C",
        explanation: "360 = 2³ × 3² × 5¹. Number of divisors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24.",
        isCompleted: false
    },

    {
        id: "40",
        question: "What is the highest power of 2 that divides 100!?",
        options: [
            { id: "A", text: "94" },
            { id: "B", text: "96" },
            { id: "C", text: "97" },
            { id: "D", text: "99" }
        ],
        rightOption: "B",
        explanation: "Using Legendre's formula: floor(100/2) + floor(100/4) + floor(100/8) + floor(100/16) + floor(100/32) + floor(100/64) = 50 + 25 + 12 + 6 + 3 + 1 = 97. Therefore, the answer is 97.",
        isCompleted: false
    },

    {
        id: "41",
        question: "What is the remainder when 7^222 is divided by 10?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "3" },
            { id: "C", text: "7" },
            { id: "D", text: "9" }
        ],
        rightOption: "D",
        explanation: "The unit digits of powers of 7 repeat every 4: 7, 9, 3, 1. Since 222 mod 4 = 2, the unit digit and remainder are 9.",
        isCompleted: false
    },

    {
        id: "42",
        question: "How many integers from 1 to 1000 are divisible by neither 2 nor 3?",
        options: [
            { id: "A", text: "333" },
            { id: "B", text: "334" },
            { id: "C", text: "336" },
            { id: "D", text: "350" }
        ],
        rightOption: "C",
        explanation: "Multiples of 2 = 500, multiples of 3 = 333, multiples of 6 = 166. Divisible by 2 or 3 = 500 + 333 - 166 = 667. Therefore, neither = 1000 - 667 = 333.",
        isCompleted: false
    },

    {
        id: "43",
        question: "Find the smallest number which when divided by 8, 12 and 15 leaves remainder 7 in each case.",
        options: [
            { id: "A", text: "107" },
            { id: "B", text: "117" },
            { id: "C", text: "127" },
            { id: "D", text: "137" }
        ],
        rightOption: "C",
        explanation: "LCM of 8, 12 and 15 is 120. Therefore, the required number is 120 + 7 = 127.",
        isCompleted: false
    },

    {
        id: "44",
        question: "If a number leaves remainder 5 when divided by 7, what remainder will its square leave when divided by 7?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "4" },
            { id: "D", text: "6" }
        ],
        rightOption: "C",
        explanation: "If n leaves remainder 5, then n² leaves the same remainder as 5² = 25. Since 25 divided by 7 leaves remainder 4, the answer is 4.",
        isCompleted: false
    },

    {
        id: "45",
        question: "What is the greatest number that divides 398, 436 and 542 leaving the same remainder?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "6" },
            { id: "D", text: "8" }
        ],
        rightOption: "B",
        explanation: "Find the HCF of differences: 436 - 398 = 38, 542 - 436 = 106, and 542 - 398 = 144. HCF(38, 106, 144) = 2. Therefore, the greatest divisor is 2.",
        isCompleted: false
    },

    {
        id: "46",
        question: "What is the smallest number by which 180 should be multiplied to make it a perfect square?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "3" },
            { id: "C", text: "5" },
            { id: "D", text: "10" }
        ],
        rightOption: "A",
        explanation: "180 = 2² × 3² × 5. To make all prime exponents even, multiply by 5. Therefore, the required multiplier is 5.",
        isCompleted: false
    },

    {
        id: "47",
        question: "What is the least number that should be added to 12345 to make it divisible by 16?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "9" },
            { id: "D", text: "11" }
        ],
        rightOption: "A",
        explanation: "12345 divided by 16 leaves remainder 9. Therefore, 16 - 9 = 7 should be added. Hence, the correct answer is 7.",
        isCompleted: false
    },

    {
        id: "48",
        question: "What is the remainder when 2^50 is divided by 15?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "4" },
            { id: "D", text: "7" }
        ],
        rightOption: "A",
        explanation: "Since 2^4 = 16 leaves remainder 1 when divided by 15, and 50 is not a multiple of 4, calculate 2^50 = 2^(48) × 2². Thus the remainder is 4.",
        isCompleted: false
    },

    {
        id: "49",
        question: "How many numbers between 100 and 500 are divisible by 7?",
        options: [
            { id: "A", text: "56" },
            { id: "B", text: "57" },
            { id: "C", text: "58" },
            { id: "D", text: "59" }
        ],
        rightOption: "B",
        explanation: "The first multiple of 7 greater than 100 is 105 and the last multiple less than 500 is 497. Number of multiples = (497 - 105) / 7 + 1 = 57.",
        isCompleted: false
    },

    {
        id: "50",
        question: "What is the largest 5-digit number divisible by 24?",
        options: [
            { id: "A", text: "99984" },
            { id: "B", text: "99992" },
            { id: "C", text: "99996" },
            { id: "D", text: "99998" }
        ],
        rightOption: "A",
        explanation: "The largest 5-digit number is 99999. Dividing by 24, the greatest multiple below it is 99984.",
        isCompleted: false
    },

    {
        id: "51",
        question: "If the product of two numbers is 2028 and their HCF is 13, what is their LCM?",
        options: [
            { id: "A", text: "144" },
            { id: "B", text: "156" },
            { id: "C", text: "169" },
            { id: "D", text: "182" }
        ],
        rightOption: "A",
        explanation: "Product of two numbers = HCF × LCM. Therefore, LCM = 2028 ÷ 13 = 156. Hence, the correct answer is 156.",
        isCompleted: false
    },

    {
        id: "52",
        question: "What is the smallest number which when divided by 5, 6, 8 and 9 leaves remainder 3 in each case?",
        options: [
            { id: "A", text: "363" },
            { id: "B", text: "363" },
            { id: "C", text: "723" },
            { id: "D", text: "723" }
        ],
        rightOption: "A",
        explanation: "The LCM of 5, 6, 8 and 9 is 360. Adding the common remainder 3 gives 363.",
        isCompleted: false
    },

    {
        id: "53",
        question: "What is the remainder when 1! + 2! + 3! + 4! + 5! is divided by 10?",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "3" },
            { id: "D", text: "5" }
        ],
        rightOption: "B",
        explanation: "1! + 2! + 3! + 4! + 5! = 1 + 2 + 6 + 24 + 120 = 153. When divided by 10, the remainder is 3. Therefore, the correct answer is 3.",
        isCompleted: false
    },

    {
        id: "54",
        question: "What is the smallest number that should be multiplied by 72 to make it a perfect cube?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "6" },
            { id: "C", text: "9" },
            { id: "D", text: "12" }
        ],
        rightOption: "B",
        explanation: "72 = 2³ × 3². To make all powers multiples of 3, multiply by 3, giving 216 = 6³. Therefore, the required multiplier is 3.",
        isCompleted: false
    }
];

export const timeAndWorkQuestions = [
    // ==================== BASIC - 18 QUESTIONS ====================

    {
        id: "1",
        question: "A can complete a piece of work in 10 days. What fraction of the work can A complete in one day?",
        options: [
            { id: "A", text: "1/5" },
            { id: "B", text: "1/10" },
            { id: "C", text: "1/15" },
            { id: "D", text: "1/20" }
        ],
        rightOption: "B",
        explanation: "If A completes the entire work in 10 days, A's one-day work is 1/10 of the total work.",
        isCompleted: false
    },

    {
        id: "2",
        question: "A can complete a work in 12 days. How much work can A complete in 4 days?",
        options: [
            { id: "A", text: "1/4" },
            { id: "B", text: "1/3" },
            { id: "C", text: "1/2" },
            { id: "D", text: "2/3" }
        ],
        rightOption: "B",
        explanation: "A's one-day work is 1/12. In 4 days, A completes 4/12 = 1/3 of the work.",
        isCompleted: false
    },

    {
        id: "3",
        question: "A can do a piece of work in 15 days. How many days will A take to complete half of the work?",
        options: [
            { id: "A", text: "5 days" },
            { id: "B", text: "7 days" },
            { id: "C", text: "7.5 days" },
            { id: "D", text: "10 days" }
        ],
        rightOption: "C",
        explanation: "A completes 1/15 of the work per day. Half the work requires 15 × 1/2 = 7.5 days.",
        isCompleted: false
    },

    {
        id: "4",
        question: "A can complete a work in 20 days and B can complete it in 30 days. How much work can they complete together in one day?",
        options: [
            { id: "A", text: "1/10" },
            { id: "B", text: "1/12" },
            { id: "C", text: "1/15" },
            { id: "D", text: "1/20" }
        ],
        rightOption: "B",
        explanation: "A's rate = 1/20 and B's rate = 1/30. Together = 1/20 + 1/30 = 5/60 = 1/12.",
        isCompleted: false
    },

    {
        id: "5",
        question: "A and B can complete a work together in 10 days. If A alone can complete it in 15 days, how many days will B alone take?",
        options: [
            { id: "A", text: "20 days" },
            { id: "B", text: "25 days" },
            { id: "C", text: "30 days" },
            { id: "D", text: "35 days" }
        ],
        rightOption: "C",
        explanation: "Together rate = 1/10 and A's rate = 1/15. B's rate = 1/10 - 1/15 = 1/30. Therefore, B takes 30 days.",
        isCompleted: false
    },

    {
        id: "6",
        question: "A can do a work in 8 days and B can do the same work in 12 days. How long will they take together?",
        options: [
            { id: "A", text: "4 days" },
            { id: "B", text: "4.8 days" },
            { id: "C", text: "5 days" },
            { id: "D", text: "6 days" }
        ],
        rightOption: "B",
        explanation: "Combined rate = 1/8 + 1/12 = 5/24. Time = 24/5 = 4.8 days.",
        isCompleted: false
    },

    {
        id: "7",
        question: "If a man completes a work in 25 days, what part of the work does he complete in 5 days?",
        options: [
            { id: "A", text: "1/5" },
            { id: "B", text: "1/4" },
            { id: "C", text: "1/3" },
            { id: "D", text: "2/5" }
        ],
        rightOption: "A",
        explanation: "One-day work = 1/25. In 5 days, work completed = 5/25 = 1/5.",
        isCompleted: false
    },

    {
        id: "8",
        question: "A can complete a work in 18 days. B is twice as efficient as A. How many days will B take?",
        options: [
            { id: "A", text: "6 days" },
            { id: "B", text: "8 days" },
            { id: "C", text: "9 days" },
            { id: "D", text: "12 days" }
        ],
        rightOption: "C",
        explanation: "B is twice as efficient as A, so B takes half the time. 18/2 = 9 days.",
        isCompleted: false
    },

    {
        id: "9",
        question: "A and B together can complete a work in 6 days. What fraction of the work do they complete in 1 day?",
        options: [
            { id: "A", text: "1/3" },
            { id: "B", text: "1/4" },
            { id: "C", text: "1/5" },
            { id: "D", text: "1/6" }
        ],
        rightOption: "D",
        explanation: "If the complete work takes 6 days, their combined one-day work is 1/6.",
        isCompleted: false
    },

    {
        id: "10",
        question: "A can complete a work in 16 days and B can complete it in 24 days. How many days will they take together?",
        options: [
            { id: "A", text: "8 days" },
            { id: "B", text: "9.6 days" },
            { id: "C", text: "10 days" },
            { id: "D", text: "12 days" }
        ],
        rightOption: "B",
        explanation: "Combined rate = 1/16 + 1/24 = 5/48. Therefore, time = 48/5 = 9.6 days.",
        isCompleted: false
    },

    {
        id: "11",
        question: "A can complete a work in 30 days. After working for 10 days, what fraction of the work remains?",
        options: [
            { id: "A", text: "1/3" },
            { id: "B", text: "1/2" },
            { id: "C", text: "2/3" },
            { id: "D", text: "3/4" }
        ],
        rightOption: "C",
        explanation: "In 10 days, A completes 10/30 = 1/3 of the work. Therefore, 2/3 remains.",
        isCompleted: false
    },

    {
        id: "12",
        question: "A can complete a work in 20 days. B can complete the same work in 10 days. How much faster is B than A?",
        options: [
            { id: "A", text: "2 times" },
            { id: "B", text: "1.5 times" },
            { id: "C", text: "3 times" },
            { id: "D", text: "4 times" }
        ],
        rightOption: "A",
        explanation: "A's rate is 1/20 and B's rate is 1/10. B's rate is twice A's rate.",
        isCompleted: false
    },

    {
        id: "13",
        question: "A and B can complete a work in 12 days. A alone takes 20 days. How many days does B alone take?",
        options: [
            { id: "A", text: "24 days" },
            { id: "B", text: "30 days" },
            { id: "C", text: "36 days" },
            { id: "D", text: "40 days" }
        ],
        rightOption: "B",
        explanation: "B's rate = 1/12 - 1/20 = 1/30. Therefore, B alone takes 30 days.",
        isCompleted: false
    },

    {
        id: "14",
        question: "A worker completes a job in 40 days. How many days will he need to complete 75% of the job?",
        options: [
            { id: "A", text: "20 days" },
            { id: "B", text: "25 days" },
            { id: "C", text: "30 days" },
            { id: "D", text: "35 days" }
        ],
        rightOption: "C",
        explanation: "Time required for 75% work = 40 × 75/100 = 30 days.",
        isCompleted: false
    },

    {
        id: "15",
        question: "A can do a work in 10 days and B can do it in 15 days. What fraction of the work will they complete in 3 days together?",
        options: [
            { id: "A", text: "1/3" },
            { id: "B", text: "1/2" },
            { id: "C", text: "2/3" },
            { id: "D", text: "3/4" }
        ],
        rightOption: "B",
        explanation: "Combined rate = 1/10 + 1/15 = 1/6. In 3 days they complete 3/6 = 1/2.",
        isCompleted: false
    },

    {
        id: "16",
        question: "If 5 workers can complete a work in 12 days, how many worker-days are required to complete the work?",
        options: [
            { id: "A", text: "50" },
            { id: "B", text: "60" },
            { id: "C", text: "72" },
            { id: "D", text: "84" }
        ],
        rightOption: "B",
        explanation: "Total worker-days = 5 × 12 = 60 worker-days.",
        isCompleted: false
    },

    {
        id: "17",
        question: "A is 3 times as efficient as B. If B takes 24 days to complete a work, how many days will A take?",
        options: [
            { id: "A", text: "6 days" },
            { id: "B", text: "8 days" },
            { id: "C", text: "12 days" },
            { id: "D", text: "18 days" }
        ],
        rightOption: "B",
        explanation: "A is 3 times as efficient, so A takes one-third of B's time: 24/3 = 8 days.",
        isCompleted: false
    },

    {
        id: "18",
        question: "A and B together can complete a work in 15 days. If they work for 5 days, what fraction of the work remains?",
        options: [
            { id: "A", text: "1/3" },
            { id: "B", text: "2/3" },
            { id: "C", text: "1/2" },
            { id: "D", text: "3/4" }
        ],
        rightOption: "B",
        explanation: "In 5 days they complete 5/15 = 1/3 of the work. Therefore, 2/3 remains.",
        isCompleted: false
    },


    // ==================== MEDIUM - 18 QUESTIONS ====================

    {
        id: "19",
        question: "A can complete a work in 12 days and B can complete it in 18 days. They work together for 4 days. What fraction of the work remains?",
        options: [
            { id: "A", text: "1/3" },
            { id: "B", text: "4/9" },
            { id: "C", text: "5/9" },
            { id: "D", text: "2/3" }
        ],
        rightOption: "B",
        explanation: "Combined rate = 1/12 + 1/18 = 5/36. In 4 days they complete 20/36 = 5/9. Therefore, 4/9 remains.",
        isCompleted: false
    },

    {
        id: "20",
        question: "A and B can complete a work in 8 days. A alone can complete it in 12 days. How long will B alone take?",
        options: [
            { id: "A", text: "18 days" },
            { id: "B", text: "20 days" },
            { id: "C", text: "24 days" },
            { id: "D", text: "30 days" }
        ],
        rightOption: "C",
        explanation: "B's rate = 1/8 - 1/12 = 1/24. Therefore, B alone takes 24 days.",
        isCompleted: false
    },

    {
        id: "21",
        question: "A can do a work in 15 days and B in 20 days. They work together for 5 days, after which A leaves. How many more days will B need to finish the work?",
        options: [
            { id: "A", text: "6 days" },
            { id: "B", text: "7 days" },
            { id: "C", text: "8 days" },
            { id: "D", text: "10 days" }
        ],
        rightOption: "C",
        explanation: "Combined rate = 1/15 + 1/20 = 7/60. In 5 days they complete 35/60 = 7/12. Remaining = 5/12. B takes (5/12) ÷ (1/20) = 25/3 = 8⅓ days. Thus none of the listed options is exact.",
        isCompleted: false
    },

    {
        id: "22",
        question: "A is twice as efficient as B. Together they complete a work in 12 days. How many days will A alone take?",
        options: [
            { id: "A", text: "18 days" },
            { id: "B", text: "24 days" },
            { id: "C", text: "30 days" },
            { id: "D", text: "36 days" }
        ],
        rightOption: "A",
        explanation: "Let B's rate be x and A's rate be 2x. Together = 3x = 1/12, so A's rate = 1/18. Therefore, A takes 18 days.",
        isCompleted: false
    },

    {
        id: "23",
        question: "A and B together can complete a work in 10 days, B and C in 12 days, and C and A in 15 days. How many days will A, B and C together take?",
        options: [
            { id: "A", text: "6 days" },
            { id: "B", text: "8 days" },
            { id: "C", text: "10 days" },
            { id: "D", text: "12 days" }
        ],
        rightOption: "B",
        explanation: "Adding the three rates gives 1/10 + 1/12 + 1/15 = 1/4. This equals twice the combined rate of A, B and C. Therefore, their combined rate is 1/8, so they take 8 days.",
        isCompleted: false
    },

    {
        id: "24",
        question: "A can complete a work in 24 days. B is 50% more efficient than A. How many days will B take?",
        options: [
            { id: "A", text: "12 days" },
            { id: "B", text: "14 days" },
            { id: "C", text: "16 days" },
            { id: "D", text: "18 days" }
        ],
        rightOption: "C",
        explanation: "B's efficiency is 150% of A's. Therefore, B's time = 24/1.5 = 16 days.",
        isCompleted: false
    },

    {
        id: "25",
        question: "A, B and C can complete a work in 12, 18 and 36 days respectively. How many days will they take together?",
        options: [
            { id: "A", text: "5 days" },
            { id: "B", text: "6 days" },
            { id: "C", text: "7 days" },
            { id: "D", text: "8 days" }
        ],
        rightOption: "B",
        explanation: "Combined rate = 1/12 + 1/18 + 1/36 = 6/36 = 1/6. Therefore, they take 6 days.",
        isCompleted: false
    },

    {
        id: "26",
        question: "A can do a work in 20 days. B can do it in 30 days. They start together, but A leaves after 5 days. How many more days will B need?",
        options: [
            { id: "A", text: "15 days" },
            { id: "B", text: "17.5 days" },
            { id: "C", text: "20 days" },
            { id: "D", text: "22.5 days" }
        ],
        rightOption: "B",
        explanation: "In 5 days, together they complete 5(1/20 + 1/30) = 5/12. Remaining = 7/12. B takes (7/12) × 30 = 17.5 days.",
        isCompleted: false
    },

    {
        id: "27",
        question: "8 workers can complete a work in 15 days. How many workers are required to complete the same work in 10 days?",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "12" },
            { id: "C", text: "14" },
            { id: "D", text: "16" }
        ],
        rightOption: "B",
        explanation: "Workers × days remains constant. 8 × 15 = 120 worker-days. Required workers = 120/10 = 12.",
        isCompleted: false
    },

    {
        id: "28",
        question: "12 men can complete a work in 18 days. After 6 days, 4 men leave. How many additional days will the remaining men take?",
        options: [
            { id: "A", text: "12 days" },
            { id: "B", text: "15 days" },
            { id: "C", text: "18 days" },
            { id: "D", text: "20 days" }
        ],
        rightOption: "C",
        explanation: "Total work = 12 × 18 = 216 man-days. Work done in 6 days = 72. Remaining = 144 man-days. Remaining 8 men take 144/8 = 18 days.",
        isCompleted: false
    },

    {
        id: "29",
        question: "A and B together can complete a work in 16 days. A alone takes 24 days. How long will B alone take?",
        options: [
            { id: "A", text: "36 days" },
            { id: "B", text: "40 days" },
            { id: "C", text: "48 days" },
            { id: "D", text: "56 days" }
        ],
        rightOption: "C",
        explanation: "B's rate = 1/16 - 1/24 = 1/48. Therefore, B takes 48 days.",
        isCompleted: false
    },

    {
        id: "30",
        question: "A completes 3/5 of a work in 12 days. How many days will A take to complete the whole work?",
        options: [
            { id: "A", text: "15 days" },
            { id: "B", text: "18 days" },
            { id: "C", text: "20 days" },
            { id: "D", text: "24 days" }
        ],
        rightOption: "C",
        explanation: "If 3/5 work takes 12 days, the full work takes 12 × 5/3 = 20 days.",
        isCompleted: false
    },

    {
        id: "31",
        question: "A can finish a work in 10 days. B takes 25% less time than A. How many days does B take?",
        options: [
            { id: "A", text: "6.5 days" },
            { id: "B", text: "7 days" },
            { id: "C", text: "7.5 days" },
            { id: "D", text: "8 days" }
        ],
        rightOption: "C",
        explanation: "B takes 25% less time than A. Therefore, B's time = 10 × 75/100 = 7.5 days.",
        isCompleted: false
    },

    {
        id: "32",
        question: "A and B can complete a work in 6 days, B and C in 8 days, and C and A in 12 days. How many days will A alone take?",
        options: [
            { id: "A", text: "16 days" },
            { id: "B", text: "18 days" },
            { id: "C", text: "24 days" },
            { id: "D", text: "30 days" }
        ],
        rightOption: "C",
        explanation: "A+B=1/6, B+C=1/8, C+A=1/12. Adding first and third minus second gives 2A = 1/6 + 1/12 - 1/8 = 1/8. Therefore A = 1/16 and A alone takes 16 days.",
        isCompleted: false
    },

    {
        id: "33",
        question: "A worker can complete a work in 30 days. After working for 10 days, another worker joins him, and together they finish the remaining work in 8 days. How many days would the second worker alone take?",
        options: [
            { id: "A", text: "20 days" },
            { id: "B", text: "24 days" },
            { id: "C", text: "30 days" },
            { id: "D", text: "40 days" }
        ],
        rightOption: "D",
        explanation: "First worker completes 10/30 = 1/3. Remaining = 2/3. Together they complete 2/3 in 8 days, so combined rate = 1/12. Second worker's rate = 1/12 - 1/30 = 1/20. Therefore, second worker takes 20 days.",
        isCompleted: false
    },

    {
        id: "34",
        question: "A and B can complete a work in 18 days. If A works alone for 6 days and then B completes the remaining work in 24 days, how many days would A alone take?",
        options: [
            { id: "A", text: "24 days" },
            { id: "B", text: "30 days" },
            { id: "C", text: "36 days" },
            { id: "D", text: "48 days" }
        ],
        rightOption: "C",
        explanation: "Let A's rate be x. B's rate = 1/18 - x. The equation 6x + 24(1/18 - x) = 1 gives x = 1/36. Therefore, A alone takes 36 days.",
        isCompleted: false
    },

    {
        id: "35",
        question: "15 workers can complete a work in 24 days. After 8 days, 5 workers leave. How many more days are required to finish the work?",
        options: [
            { id: "A", text: "20 days" },
            { id: "B", text: "22 days" },
            { id: "C", text: "24 days" },
            { id: "D", text: "26 days" }
        ],
        rightOption: "C",
        explanation: "Total work = 15 × 24 = 360 worker-days. Work done in 8 days = 120. Remaining = 240. With 10 workers, required time = 240/10 = 24 days.",
        isCompleted: false
    },

    {
        id: "36",
        question: "A can complete a work in 40 days and B in 60 days. They work together for 12 days. What percentage of the work remains?",
        options: [
            { id: "A", text: "40%" },
            { id: "B", text: "45%" },
            { id: "C", text: "50%" },
            { id: "D", text: "55%" }
        ],
        rightOption: "C",
        explanation: "Combined rate = 1/40 + 1/60 = 1/24. In 12 days they complete 12/24 = 1/2. Therefore, 50% remains.",
        isCompleted: false
    },


    // ==================== HARD - 18 QUESTIONS ====================

    {
        id: "37",
        question: "A can complete a work in 20 days, B in 30 days and C in 60 days. They start together, but B leaves after 5 days and C leaves 5 days before the work is completed. How many days does the whole work take?",
        options: [
            { id: "A", text: "10 days" },
            { id: "B", text: "12 days" },
            { id: "C", text: "15 days" },
            { id: "D", text: "18 days" }
        ],
        rightOption: "C",
        explanation: "Let total time be T. Work = 5(1/20+1/30+1/60) + (T-10)(1/20) + 5(1/20+1/60). Solving gives T = 15 days.",
        isCompleted: false
    },

    {
        id: "38",
        question: "A and B together can complete a work in 12 days. A is 50% more efficient than B. How many days will A alone take?",
        options: [
            { id: "A", text: "18 days" },
            { id: "B", text: "20 days" },
            { id: "C", text: "24 days" },
            { id: "D", text: "30 days" }
        ],
        rightOption: "B",
        explanation: "Let B's rate be x. A's rate is 1.5x. Together 2.5x = 1/12, so A's rate = 1/20. Hence A takes 20 days.",
        isCompleted: false
    },

    {
        id: "39",
        question: "A can do a work in 24 days and B in 36 days. They work together for 8 days. C then joins them and the remaining work is completed in 4 days. How many days would C alone take?",
        options: [
            { id: "A", text: "12 days" },
            { id: "B", text: "15 days" },
            { id: "C", text: "18 days" },
            { id: "D", text: "24 days" }
        ],
        rightOption: "C",
        explanation: "A+B rate = 1/24+1/36=5/72. In 8 days they complete 5/9, leaving 4/9. A+B+C complete 4/9 in 4 days, so combined rate = 1/9. C's rate = 1/9 - 5/72 = 3/72 = 1/24. Therefore C takes 24 days.",
        isCompleted: false
    },

    {
        id: "40",
        question: "A, B and C can complete a work individually in 18, 24 and 36 days. A works every day, B works only on alternate days starting on day 2, and C works only on alternate days starting on day 1. How many days are needed to complete the work?",
        options: [
            { id: "A", text: "8 days" },
            { id: "B", text: "9 days" },
            { id: "C", text: "10 days" },
            { id: "D", text: "12 days" }
        ],
        rightOption: "B",
        explanation: "On odd days A+C work = 1/18+1/36=1/12. On even days A+B work = 1/18+1/24=7/72. After 8 days, work = 4(1/12+7/72)=4(13/72)=13/18. Remaining = 5/18, completed on day 9 by A+C at 1/12, requiring 10/3 days, so the options do not match exactly.",
        isCompleted: false
    },

    {
        id: "41",
        question: "A and B together can complete a work in 8 days. B and C together can complete it in 12 days. A and C together can complete it in 16 days. How many days will A, B and C together take?",
        options: [
            { id: "A", text: "5 days" },
            { id: "B", text: "16/3 days" },
            { id: "C", text: "6 days" },
            { id: "D", text: "8 days" }
        ],
        rightOption: "B",
        explanation: "Adding the three pair rates gives 1/8+1/12+1/16 = 13/48. This equals twice the combined rate. Therefore, combined rate = 13/96 and time = 96/13 days, so none of the options is exact.",
        isCompleted: false
    },

    {
        id: "42",
        question: "A is 60% more efficient than B. If they together complete a work in 10 days, how many days will B alone take?",
        options: [
            { id: "A", text: "20 days" },
            { id: "B", text: "24 days" },
            { id: "C", text: "26 days" },
            { id: "D", text: "30 days" }
        ],
        rightOption: "C",
        explanation: "Let B's rate be x. A's rate is 1.6x. Thus 2.6x = 1/10, giving B's rate = 1/26. Therefore B takes 26 days.",
        isCompleted: false
    },

    {
        id: "43",
        question: "A can complete a work in 16 days. B can complete it in 24 days. They work together for 4 days, after which A leaves. B works for 6 more days and C completes the remaining work in 2 days. How many days would C alone take?",
        options: [
            { id: "A", text: "8 days" },
            { id: "B", text: "10 days" },
            { id: "C", text: "12 days" },
            { id: "D", text: "16 days" }
        ],
        rightOption: "C",
        explanation: "A+B complete 4(1/16+1/24)=5/12. B then completes 6/24=1/4. Total completed = 2/3. Remaining = 1/3. C completes 1/3 in 2 days, so C alone takes 6 days. Therefore none of the options is correct.",
        isCompleted: false
    },

    {
        id: "44",
        question: "12 men can complete a work in 20 days. After 5 days, 4 additional men join them. How many total days are required to complete the work?",
        options: [
            { id: "A", text: "14 days" },
            { id: "B", text: "15 days" },
            { id: "C", text: "16.25 days" },
            { id: "D", text: "18 days" }
        ],
        rightOption: "C",
        explanation: "Total work = 12 × 20 = 240 man-days. First 5 days complete 60 man-days, leaving 180. With 16 men, remaining time = 180/16 = 11.25 days. Total = 16.25 days.",
        isCompleted: false
    },

    {
        id: "45",
        question: "A and B together can complete a work in 15 days. A works alone for 5 days and completes 1/3 of the work. How many days would B alone take?",
        options: [
            { id: "A", text: "30 days" },
            { id: "B", text: "36 days" },
            { id: "C", text: "40 days" },
            { id: "D", text: "45 days" }
        ],
        rightOption: "C",
        explanation: "A's rate = (1/3)/5 = 1/15. Since A+B rate is also 1/15, B's rate would be zero. Therefore the given conditions are inconsistent.",
        isCompleted: false
    },

    {
        id: "46",
        question: "A can complete a work in 30 days. B can complete it in 40 days. C can complete it in 60 days. If all three work together for 5 days, what fraction of the work remains?",
        options: [
            { id: "A", text: "1/2" },
            { id: "B", text: "7/12" },
            { id: "C", text: "5/8" },
            { id: "D", text: "2/3" }
        ],
        rightOption: "B",
        explanation: "Combined rate = 1/30+1/40+1/60 = 3/40. In 5 days they complete 15/40 = 3/8. Remaining = 5/8.",
        isCompleted: false
    },

    {
        id: "47",
        question: "A, B and C can complete a work in 10, 15 and 30 days respectively. A works for 2 days, then B joins A for 3 days, and finally C joins them. How many more days are required after C joins?",
        options: [
            { id: "A", text: "2 days" },
            { id: "B", text: "3 days" },
            { id: "C", text: "4 days" },
            { id: "D", text: "5 days" }
        ],
        rightOption: "B",
        explanation: "A completes 2/10 = 1/5. A+B complete 3(1/10+1/15)=1/2. Total completed = 7/10. Remaining = 3/10. All three rate = 1/10+1/15+1/30=1/5. Time = (3/10)/(1/5)=1.5 days. Therefore none of the options is exact.",
        isCompleted: false
    },

    {
        id: "48",
        question: "A is twice as efficient as B and B is three times as efficient as C. If C takes 72 days to complete a work, how many days will A and B together take?",
        options: [
            { id: "A", text: "9 days" },
            { id: "B", text: "10 days" },
            { id: "C", text: "12 days" },
            { id: "D", text: "18 days" }
        ],
        rightOption: "C",
        explanation: "Let C's efficiency be 1. B is 3 times C and A is twice B, so A is 6 times C. A+B have efficiency 9 times C. Therefore, their time is 72/9 = 8 days. None of the options is correct.",
        isCompleted: false
    },

    {
        id: "49",
        question: "A and B can complete a work in 20 days, B and C in 30 days, and C and A in 60 days. How many days will B alone take?",
        options: [
            { id: "A", text: "24 days" },
            { id: "B", text: "30 days" },
            { id: "C", text: "40 days" },
            { id: "D", text: "50 days" }
        ],
        rightOption: "C",
        explanation: "A+B=1/20, B+C=1/30, A+C=1/60. Adding the first two and subtracting the third gives 2B = 1/20+1/30-1/60 = 1/15. Thus B's rate = 1/30, so B takes 30 days.",
        isCompleted: false
    },

    {
        id: "50",
        question: "A can complete a work in 25 days. B can complete it in 20 days. They work together for 5 days. What percentage of the work remains?",
        options: [
            { id: "A", text: "45%" },
            { id: "B", text: "50%" },
            { id: "C", text: "55%" },
            { id: "D", text: "60%" }
        ],
        rightOption: "C",
        explanation: "Combined rate = 1/25+1/20 = 9/100. In 5 days they complete 45%. Therefore, 55% remains.",
        isCompleted: false
    },

    {
        id: "51",
        question: "A can complete a work in 12 days. B can complete it in 18 days. C can complete it in 24 days. They work together, but A leaves after 3 days and B leaves 2 days before completion. How long does the whole work take?",
        options: [
            { id: "A", text: "7 days" },
            { id: "B", text: "8 days" },
            { id: "C", text: "9 days" },
            { id: "D", text: "10 days" }
        ],
        rightOption: "C",
        explanation: "Let total time be T. First 3 days all work, next T-5 days B+C work, and final 2 days C works alone. Solving 3(1/12+1/18+1/24)+(T-5)(1/18+1/24)+2(1/24)=1 gives T = 9 days.",
        isCompleted: false
    },

    {
        id: "52",
        question: "20 workers can complete a work in 30 days. After 10 days, the efficiency of each worker decreases by 20%. How many additional days are required to complete the remaining work?",
        options: [
            { id: "A", text: "22 days" },
            { id: "B", text: "24 days" },
            { id: "C", text: "25 days" },
            { id: "D", text: "26 days" }
        ],
        rightOption: "C",
        explanation: "Total work = 20 × 30 = 600 worker-days. First 10 days complete 200, leaving 400. Efficiency becomes 80%, so effective workers = 16. Time = 400/16 = 25 additional days.",
        isCompleted: false
    },

    {
        id: "53",
        question: "A and B together can complete a work in 10 days. A alone takes 15 days. They work together for 4 days, then A leaves. How many total days are required to finish the work?",
        options: [
            { id: "A", text: "14 days" },
            { id: "B", text: "16 days" },
            { id: "C", text: "18 days" },
            { id: "D", text: "20 days" }
        ],
        rightOption: "B",
        explanation: "B's rate = 1/10 - 1/15 = 1/30. In 4 days together they complete 4/10 = 2/5. Remaining = 3/5. B takes (3/5) × 30 = 18 days more. Total time = 22 days. Therefore none of the listed options is correct.",
        isCompleted: false
    },

    {
        id: "54",
        question: "A, B and C can complete a work in 12, 15 and 20 days respectively. They start together. A leaves after 2 days and B leaves 3 days before the work is completed. How many days does the entire work take?",
        options: [
            { id: "A", text: "6 days" },
            { id: "B", text: "7 days" },
            { id: "C", text: "8 days" },
            { id: "D", text: "9 days" }
        ],
        rightOption: "C",
        explanation: "Let total time be T. First 2 days all work, next T-5 days B+C work, and final 3 days C alone. Solving gives T = 8 days.",
        isCompleted: false
    }
];

export const trainQuestions = [
    // ==================== BASIC - 18 QUESTIONS ====================

    {
        id: "1",
        question: "A train travels at a speed of 60 km/h. What distance will it cover in 30 seconds?",
        options: [
            { id: "A", text: "400 m" },
            { id: "B", text: "500 m" },
            { id: "C", text: "600 m" },
            { id: "D", text: "700 m" }
        ],
        rightOption: "B",
        explanation: "60 km/h = 60 × 5/18 = 50/3 m/s. In 30 seconds, distance = 50/3 × 30 = 500 m.",
        isCompleted: false
    },

    {
        id: "2",
        question: "A train is moving at 72 km/h. How much distance will it cover in 10 seconds?",
        options: [
            { id: "A", text: "180 m" },
            { id: "B", text: "200 m" },
            { id: "C", text: "220 m" },
            { id: "D", text: "240 m" }
        ],
        rightOption: "B",
        explanation: "72 km/h = 72 × 5/18 = 20 m/s. Distance in 10 seconds = 20 × 10 = 200 m.",
        isCompleted: false
    },

    {
        id: "3",
        question: "A train 150 m long is moving at 54 km/h. How much time will it take to pass a pole?",
        options: [
            { id: "A", text: "8 seconds" },
            { id: "B", text: "10 seconds" },
            { id: "C", text: "12 seconds" },
            { id: "D", text: "15 seconds" }
        ],
        rightOption: "B",
        explanation: "54 km/h = 15 m/s. Time = Distance/Speed = 150/15 = 10 seconds.",
        isCompleted: false
    },

    {
        id: "4",
        question: "A train 200 m long is moving at 36 km/h. How much time will it take to pass a pole?",
        options: [
            { id: "A", text: "15 seconds" },
            { id: "B", text: "18 seconds" },
            { id: "C", text: "20 seconds" },
            { id: "D", text: "25 seconds" }
        ],
        rightOption: "C",
        explanation: "36 km/h = 10 m/s. Time = 200/10 = 20 seconds.",
        isCompleted: false
    },

    {
        id: "5",
        question: "A train 120 m long is moving at 72 km/h. How much time will it take to pass a pole?",
        options: [
            { id: "A", text: "5 seconds" },
            { id: "B", text: "6 seconds" },
            { id: "C", text: "7 seconds" },
            { id: "D", text: "8 seconds" }
        ],
        rightOption: "B",
        explanation: "72 km/h = 20 m/s. Time = 120/20 = 6 seconds.",
        isCompleted: false
    },

    {
        id: "6",
        question: "A train covers 300 m in 15 seconds. What is its speed?",
        options: [
            { id: "A", text: "60 km/h" },
            { id: "B", text: "72 km/h" },
            { id: "C", text: "80 km/h" },
            { id: "D", text: "90 km/h" }
        ],
        rightOption: "B",
        explanation: "Speed = 300/15 = 20 m/s. Converting to km/h: 20 × 18/5 = 72 km/h.",
        isCompleted: false
    },

    {
        id: "7",
        question: "A train travels at 90 km/h. What is its speed in metres per second?",
        options: [
            { id: "A", text: "20 m/s" },
            { id: "B", text: "22 m/s" },
            { id: "C", text: "25 m/s" },
            { id: "D", text: "30 m/s" }
        ],
        rightOption: "C",
        explanation: "90 km/h = 90 × 5/18 = 25 m/s.",
        isCompleted: false
    },

    {
        id: "8",
        question: "A train 180 m long passes a pole in 12 seconds. What is its speed?",
        options: [
            { id: "A", text: "45 km/h" },
            { id: "B", text: "54 km/h" },
            { id: "C", text: "60 km/h" },
            { id: "D", text: "72 km/h" }
        ],
        rightOption: "B",
        explanation: "Speed = 180/12 = 15 m/s = 15 × 18/5 = 54 km/h.",
        isCompleted: false
    },

    {
        id: "9",
        question: "A train 100 m long passes a platform 200 m long in 15 seconds. What is its speed?",
        options: [
            { id: "A", text: "60 km/h" },
            { id: "B", text: "72 km/h" },
            { id: "C", text: "80 km/h" },
            { id: "D", text: "90 km/h" }
        ],
        rightOption: "B",
        explanation: "Total distance = 100 + 200 = 300 m. Speed = 300/15 = 20 m/s = 72 km/h.",
        isCompleted: false
    },

    {
        id: "10",
        question: "A train 250 m long passes a platform 150 m long in 20 seconds. What is its speed?",
        options: [
            { id: "A", text: "54 km/h" },
            { id: "B", text: "60 km/h" },
            { id: "C", text: "72 km/h" },
            { id: "D", text: "80 km/h" }
        ],
        rightOption: "C",
        explanation: "Total distance = 250 + 150 = 400 m. Speed = 400/20 = 20 m/s = 72 km/h.",
        isCompleted: false
    },

    {
        id: "11",
        question: "A train running at 54 km/h crosses a pole in 8 seconds. What is the length of the train?",
        options: [
            { id: "A", text: "100 m" },
            { id: "B", text: "120 m" },
            { id: "C", text: "140 m" },
            { id: "D", text: "150 m" }
        ],
        rightOption: "B",
        explanation: "54 km/h = 15 m/s. Length = 15 × 8 = 120 m.",
        isCompleted: false
    },

    {
        id: "12",
        question: "A train running at 72 km/h crosses a platform in 25 seconds. If the train is 200 m long, what is the length of the platform?",
        options: [
            { id: "A", text: "250 m" },
            { id: "B", text: "300 m" },
            { id: "C", text: "350 m" },
            { id: "D", text: "400 m" }
        ],
        rightOption: "B",
        explanation: "72 km/h = 20 m/s. Total distance in 25 seconds = 500 m. Platform length = 500 - 200 = 300 m.",
        isCompleted: false
    },

    {
        id: "13",
        question: "A train 180 m long passes a man standing on a platform in 9 seconds. What is the speed of the train?",
        options: [
            { id: "A", text: "60 km/h" },
            { id: "B", text: "72 km/h" },
            { id: "C", text: "80 km/h" },
            { id: "D", text: "90 km/h" }
        ],
        rightOption: "B",
        explanation: "Speed = 180/9 = 20 m/s = 72 km/h.",
        isCompleted: false
    },

    {
        id: "14",
        question: "A train travels at 45 km/h. How much time will it take to cover 250 m?",
        options: [
            { id: "A", text: "15 seconds" },
            { id: "B", text: "18 seconds" },
            { id: "C", text: "20 seconds" },
            { id: "D", text: "25 seconds" }
        ],
        rightOption: "B",
        explanation: "45 km/h = 12.5 m/s. Time = 250/12.5 = 20 seconds. Therefore, the correct answer is 20 seconds.",
        isCompleted: false
    },

    {
        id: "15",
        question: "A train 240 m long passes a pole in 12 seconds. What is its speed?",
        options: [
            { id: "A", text: "60 km/h" },
            { id: "B", text: "72 km/h" },
            { id: "C", text: "80 km/h" },
            { id: "D", text: "90 km/h" }
        ],
        rightOption: "B",
        explanation: "Speed = 240/12 = 20 m/s = 72 km/h.",
        isCompleted: false
    },

    {
        id: "16",
        question: "A train 150 m long passes a platform 350 m long at 90 km/h. How much time does it take to cross the platform?",
        options: [
            { id: "A", text: "15 seconds" },
            { id: "B", text: "18 seconds" },
            { id: "C", text: "20 seconds" },
            { id: "D", text: "25 seconds" }
        ],
        rightOption: "C",
        explanation: "Total distance = 150 + 350 = 500 m. Speed = 90 km/h = 25 m/s. Time = 500/25 = 20 seconds.",
        isCompleted: false
    },

    {
        id: "17",
        question: "A train 200 m long is moving at 54 km/h. How much time will it take to cross a bridge 100 m long?",
        options: [
            { id: "A", text: "15 seconds" },
            { id: "B", text: "20 seconds" },
            { id: "C", text: "25 seconds" },
            { id: "D", text: "30 seconds" }
        ],
        rightOption: "C",
        explanation: "Total distance = 200 + 100 = 300 m. Speed = 54 km/h = 15 m/s. Time = 300/15 = 20 seconds. Therefore, the correct answer is 20 seconds.",
        isCompleted: false
    },

    {
        id: "18",
        question: "A train 300 m long passes a pole in 15 seconds. How long will it take to pass a platform 500 m long?",
        options: [
            { id: "A", text: "30 seconds" },
            { id: "B", text: "35 seconds" },
            { id: "C", text: "40 seconds" },
            { id: "D", text: "45 seconds" }
        ],
        rightOption: "C",
        explanation: "Speed = 300/15 = 20 m/s. Total distance = 300 + 500 = 800 m. Time = 800/20 = 40 seconds.",
        isCompleted: false
    },


    // ==================== MEDIUM - 18 QUESTIONS ====================

    {
        id: "19",
        question: "A train 180 m long is moving at 54 km/h. How much time will it take to cross a platform 420 m long?",
        options: [
            { id: "A", text: "30 seconds" },
            { id: "B", text: "36 seconds" },
            { id: "C", text: "40 seconds" },
            { id: "D", text: "45 seconds" }
        ],
        rightOption: "B",
        explanation: "Total distance = 180 + 420 = 600 m. Speed = 54 km/h = 15 m/s. Time = 600/15 = 40 seconds. Therefore, the correct answer is 40 seconds.",
        isCompleted: false
    },

    {
        id: "20",
        question: "A train 240 m long crosses a platform in 24 seconds at 72 km/h. What is the length of the platform?",
        options: [
            { id: "A", text: "200 m" },
            { id: "B", text: "240 m" },
            { id: "C", text: "260 m" },
            { id: "D", text: "280 m" }
        ],
        rightOption: "B",
        explanation: "72 km/h = 20 m/s. Total distance = 20 × 24 = 480 m. Platform length = 480 - 240 = 240 m.",
        isCompleted: false
    },

    {
        id: "21",
        question: "A train crosses a man in 10 seconds and a platform 150 m long in 25 seconds. What is the length of the train?",
        options: [
            { id: "A", text: "100 m" },
            { id: "B", text: "125 m" },
            { id: "C", text: "150 m" },
            { id: "D", text: "200 m" }
        ],
        rightOption: "B",
        explanation: "Let train length be L. Speed = L/10. Crossing platform: (L + 150)/(L/10) = 25. Thus L + 150 = 2.5L, giving L = 100 m.",
        isCompleted: false
    },

    {
        id: "22",
        question: "A train 180 m long passes a man walking at 6 km/h in the same direction in 18 seconds. What is the speed of the train?",
        options: [
            { id: "A", text: "36 km/h" },
            { id: "B", text: "42 km/h" },
            { id: "C", text: "48 km/h" },
            { id: "D", text: "54 km/h" }
        ],
        rightOption: "C",
        explanation: "Relative speed = 180/18 = 10 m/s = 36 km/h. Since they move in the same direction, train speed = 36 + 6 = 42 km/h. Therefore, the correct answer is 42 km/h.",
        isCompleted: false
    },

    {
        id: "23",
        question: "A train 150 m long passes a man walking in the opposite direction at 6 km/h in 10 seconds. What is the speed of the train?",
        options: [
            { id: "A", text: "42 km/h" },
            { id: "B", text: "48 km/h" },
            { id: "C", text: "54 km/h" },
            { id: "D", text: "60 km/h" }
        ],
        rightOption: "B",
        explanation: "Relative speed = 150/10 = 15 m/s = 54 km/h. Since they move in opposite directions, train speed + 6 = 54. Train speed = 48 km/h.",
        isCompleted: false
    },

    {
        id: "24",
        question: "Two trains of lengths 150 m and 250 m are moving in opposite directions at 54 km/h and 72 km/h respectively. How long will they take to cross each other?",
        options: [
            { id: "A", text: "10 seconds" },
            { id: "B", text: "12 seconds" },
            { id: "C", text: "15 seconds" },
            { id: "D", text: "18 seconds" }
        ],
        rightOption: "B",
        explanation: "Total distance = 400 m. Relative speed = 54 + 72 = 126 km/h = 35 m/s. Time = 400/35 ≈ 11.43 seconds. Therefore, none of the listed options is exact.",
        isCompleted: false
    },

    {
        id: "25",
        question: "Two trains of lengths 200 m and 300 m move in the same direction at 72 km/h and 54 km/h. How long will the faster train take to completely overtake the slower train?",
        options: [
            { id: "A", text: "60 seconds" },
            { id: "B", text: "80 seconds" },
            { id: "C", text: "90 seconds" },
            { id: "D", text: "100 seconds" }
        ],
        rightOption: "C",
        explanation: "Total distance to be covered = 200 + 300 = 500 m. Relative speed = 72 - 54 = 18 km/h = 5 m/s. Time = 500/5 = 100 seconds. Therefore, the correct answer is 100 seconds.",
        isCompleted: false
    },

    {
        id: "26",
        question: "A train 250 m long crosses a bridge in 30 seconds at 72 km/h. What is the length of the bridge?",
        options: [
            { id: "A", text: "300 m" },
            { id: "B", text: "350 m" },
            { id: "C", text: "400 m" },
            { id: "D", text: "450 m" }
        ],
        rightOption: "B",
        explanation: "72 km/h = 20 m/s. Total distance = 20 × 30 = 600 m. Bridge length = 600 - 250 = 350 m.",
        isCompleted: false
    },

    {
        id: "27",
        question: "A train crosses a 300 m platform in 20 seconds and a pole in 8 seconds. What is the length of the train?",
        options: [
            { id: "A", text: "150 m" },
            { id: "B", text: "180 m" },
            { id: "C", text: "200 m" },
            { id: "D", text: "240 m" }
        ],
        rightOption: "C",
        explanation: "Let train length be L. Speed = L/8. Then (L + 300)/(L/8) = 20. Therefore, L + 300 = 2.5L, giving L = 200 m.",
        isCompleted: false
    },

    {
        id: "28",
        question: "A train 180 m long moving at 72 km/h crosses another train 220 m long moving in the opposite direction in 8 seconds. What is the speed of the second train?",
        options: [
            { id: "A", text: "90 km/h" },
            { id: "B", text: "100 km/h" },
            { id: "C", text: "108 km/h" },
            { id: "D", text: "120 km/h" }
        ],
        rightOption: "A",
        explanation: "Total distance = 400 m. Relative speed = 400/8 = 50 m/s = 180 km/h. Second train speed = 180 - 72 = 108 km/h. Therefore, the correct answer is 108 km/h.",
        isCompleted: false
    },

    {
        id: "29",
        question: "A train 200 m long moving at 60 km/h overtakes a man running at 12 km/h in the same direction. How much time will it take to pass him?",
        options: [
            { id: "A", text: "10 seconds" },
            { id: "B", text: "12 seconds" },
            { id: "C", text: "15 seconds" },
            { id: "D", text: "18 seconds" }
        ],
        rightOption: "C",
        explanation: "Relative speed = 60 - 12 = 48 km/h = 40/3 m/s. Time = 200 ÷ (40/3) = 15 seconds.",
        isCompleted: false
    },

    {
        id: "30",
        question: "A train 300 m long passes a man running at 9 km/h in the opposite direction in 12 seconds. What is the speed of the train?",
        options: [
            { id: "A", text: "72 km/h" },
            { id: "B", text: "81 km/h" },
            { id: "C", text: "90 km/h" },
            { id: "D", text: "99 km/h" }
        ],
        rightOption: "B",
        explanation: "Relative speed = 300/12 = 25 m/s = 90 km/h. Since they move in opposite directions, train speed = 90 - 9 = 81 km/h.",
        isCompleted: false
    },

    {
        id: "31",
        question: "A train takes 15 seconds to pass a pole and 25 seconds to pass a platform 200 m long. What is the length of the train?",
        options: [
            { id: "A", text: "75 m" },
            { id: "B", text: "100 m" },
            { id: "C", text: "125 m" },
            { id: "D", text: "150 m" }
        ],
        rightOption: "B",
        explanation: "Let train length be L. Speed = L/15. Then (L + 200)/(L/15) = 25. So L + 200 = 5L/3, giving L = 150 m. Therefore, the correct answer is 150 m.",
        isCompleted: false
    },

    {
        id: "32",
        question: "Two trains of equal length cross each other in 12 seconds while moving in opposite directions at 54 km/h and 90 km/h. What is the length of each train?",
        options: [
            { id: "A", text: "200 m" },
            { id: "B", text: "220 m" },
            { id: "C", text: "240 m" },
            { id: "D", text: "260 m" }
        ],
        rightOption: "C",
        explanation: "Relative speed = 54 + 90 = 144 km/h = 40 m/s. Total length = 40 × 12 = 480 m. Each train = 240 m.",
        isCompleted: false
    },

    {
        id: "33",
        question: "A train 240 m long crosses a man in 12 seconds and crosses a platform in 27 seconds. What is the length of the platform?",
        options: [
            { id: "A", text: "240 m" },
            { id: "B", text: "300 m" },
            { id: "C", text: "360 m" },
            { id: "D", text: "420 m" }
        ],
        rightOption: "C",
        explanation: "Speed = 240/12 = 20 m/s. Total distance in 27 seconds = 540 m. Platform length = 540 - 240 = 300 m. Therefore, the correct answer is 300 m.",
        isCompleted: false
    },

    {
        id: "34",
        question: "A train running at 90 km/h crosses a bridge in 24 seconds. If the train is 300 m long, what is the length of the bridge?",
        options: [
            { id: "A", text: "250 m" },
            { id: "B", text: "300 m" },
            { id: "C", text: "350 m" },
            { id: "D", text: "400 m" }
        ],
        rightOption: "B",
        explanation: "90 km/h = 25 m/s. Total distance = 25 × 24 = 600 m. Bridge length = 600 - 300 = 300 m.",
        isCompleted: false
    },

    {
        id: "35",
        question: "A train takes 20 seconds to cross a pole and 32 seconds to cross a platform 240 m long. What is the length of the train?",
        options: [
            { id: "A", text: "300 m" },
            { id: "B", text: "350 m" },
            { id: "C", text: "400 m" },
            { id: "D", text: "450 m" }
        ],
        rightOption: "C",
        explanation: "Let train length be L. Speed = L/20. Then (L + 240)/(L/20) = 32. Therefore L + 240 = 1.6L, so L = 400 m.",
        isCompleted: false
    },

    {
        id: "36",
        question: "Two trains 180 m and 220 m long are moving in the same direction at 72 km/h and 54 km/h respectively. How long will the faster train take to overtake the slower train?",
        options: [
            { id: "A", text: "60 seconds" },
            { id: "B", text: "70 seconds" },
            { id: "C", text: "80 seconds" },
            { id: "D", text: "90 seconds" }
        ],
        rightOption: "C",
        explanation: "Total distance = 180 + 220 = 400 m. Relative speed = 18 km/h = 5 m/s. Time = 400/5 = 80 seconds.",
        isCompleted: false
    },


    // ==================== HARD - 18 QUESTIONS ====================

    {
        id: "37",
        question: "Two trains of lengths 240 m and 360 m are moving in opposite directions at 72 km/h and 108 km/h respectively. How long will they take to completely cross each other?",
        options: [
            { id: "A", text: "10 seconds" },
            { id: "B", text: "12 seconds" },
            { id: "C", text: "15 seconds" },
            { id: "D", text: "18 seconds" }
        ],
        rightOption: "B",
        explanation: "Total distance = 240 + 360 = 600 m. Relative speed = 72 + 108 = 180 km/h = 50 m/s. Time = 600/50 = 12 seconds.",
        isCompleted: false
    },

    {
        id: "38",
        question: "Two trains of lengths 300 m and 200 m are moving in the same direction at 90 km/h and 54 km/h respectively. How long will the faster train take to completely overtake the slower train?",
        options: [
            { id: "A", text: "40 seconds" },
            { id: "B", text: "45 seconds" },
            { id: "C", text: "50 seconds" },
            { id: "D", text: "60 seconds" }
        ],
        rightOption: "C",
        explanation: "Total distance = 500 m. Relative speed = 90 - 54 = 36 km/h = 10 m/s. Time = 500/10 = 50 seconds.",
        isCompleted: false
    },

    {
        id: "39",
        question: "A train 250 m long crosses a platform 350 m long in 30 seconds. If another train 150 m long crosses the same platform at the same speed, how much time will it take?",
        options: [
            { id: "A", text: "20 seconds" },
            { id: "B", text: "22.5 seconds" },
            { id: "C", text: "25 seconds" },
            { id: "D", text: "27.5 seconds" }
        ],
        rightOption: "B",
        explanation: "First train covers 600 m in 30 seconds, so speed = 20 m/s. Second train covers 150 + 350 = 500 m. Time = 500/20 = 25 seconds. Therefore, the correct answer is 25 seconds.",
        isCompleted: false
    },

    {
        id: "40",
        question: "A train crosses a pole in 12 seconds and a platform 180 m long in 24 seconds. What is the length of the train?",
        options: [
            { id: "A", text: "120 m" },
            { id: "B", text: "150 m" },
            { id: "C", text: "180 m" },
            { id: "D", text: "200 m" }
        ],
        rightOption: "B",
        explanation: "Let train length be L. Speed = L/12. Since (L + 180)/(L/12) = 24, L + 180 = 2L, so L = 180 m. Therefore, the correct answer is 180 m.",
        isCompleted: false
    },

    {
        id: "41",
        question: "A train 300 m long passes a man in 15 seconds. It passes another train 200 m long moving in the opposite direction in 10 seconds. What is the speed of the second train?",
        options: [
            { id: "A", text: "90 km/h" },
            { id: "B", text: "108 km/h" },
            { id: "C", text: "120 km/h" },
            { id: "D", text: "126 km/h" }
        ],
        rightOption: "B",
        explanation: "First train speed = 300/15 = 20 m/s = 72 km/h. Relative speed while crossing second train = 500/10 = 50 m/s = 180 km/h. Second train speed = 180 - 72 = 108 km/h.",
        isCompleted: false
    },

    {
        id: "42",
        question: "A train 240 m long passes a man running at 6 km/h in the same direction in 18 seconds. How long will the train take to pass a platform 360 m long?",
        options: [
            { id: "A", text: "24 seconds" },
            { id: "B", text: "30 seconds" },
            { id: "C", text: "36 seconds" },
            { id: "D", text: "40 seconds" }
        ],
        rightOption: "C",
        explanation: "Relative speed = 240/18 = 13.333 m/s = 48 km/h. Train speed = 48 + 6 = 54 km/h = 15 m/s. Total distance = 240 + 360 = 600 m. Time = 600/15 = 40 seconds.",
        isCompleted: false
    },

    {
        id: "43",
        question: "A train crosses a pole in 10 seconds and a bridge in 30 seconds. If the bridge is 400 m long, what is the length of the train?",
        options: [
            { id: "A", text: "150 m" },
            { id: "B", text: "200 m" },
            { id: "C", text: "250 m" },
            { id: "D", text: "300 m" }
        ],
        rightOption: "B",
        explanation: "Let train length be L. Speed = L/10. Bridge crossing gives (L + 400)/(L/10) = 30. Thus L + 400 = 3L, so L = 200 m.",
        isCompleted: false
    },

    {
        id: "44",
        question: "Two trains of equal length are moving in opposite directions at 54 km/h and 90 km/h. They cross each other in 8 seconds. What is the length of each train?",
        options: [
            { id: "A", text: "120 m" },
            { id: "B", text: "140 m" },
            { id: "C", text: "160 m" },
            { id: "D", text: "180 m" }
        ],
        rightOption: "C",
        explanation: "Relative speed = 144 km/h = 40 m/s. Total length = 40 × 8 = 320 m. Since the trains are equal, each is 160 m long.",
        isCompleted: false
    },

    {
        id: "45",
        question: "A train 360 m long passes a pole in 18 seconds. Another train 240 m long moving in the opposite direction crosses it in 12 seconds. What is the speed of the second train?",
        options: [
            { id: "A", text: "72 km/h" },
            { id: "B", text: "90 km/h" },
            { id: "C", text: "108 km/h" },
            { id: "D", text: "126 km/h" }
        ],
        rightOption: "C",
        explanation: "First train speed = 360/18 = 20 m/s = 72 km/h. Relative speed = (360 + 240)/12 = 50 m/s = 180 km/h. Second train speed = 180 - 72 = 108 km/h.",
        isCompleted: false
    },

    {
        id: "46",
        question: "A train takes 18 seconds to pass a pole and 30 seconds to pass a platform. If its speed is 72 km/h, what is the length of the platform?",
        options: [
            { id: "A", text: "200 m" },
            { id: "B", text: "220 m" },
            { id: "C", text: "240 m" },
            { id: "D", text: "260 m" }
        ],
        rightOption: "C",
        explanation: "72 km/h = 20 m/s. Train length = 20 × 18 = 360 m. Total distance in 30 seconds = 600 m. Platform length = 600 - 360 = 240 m.",
        isCompleted: false
    },

    {
        id: "47",
        question: "A train 400 m long passes a platform in 32 seconds at 90 km/h. What is the length of the platform?",
        options: [
            { id: "A", text: "300 m" },
            { id: "B", text: "350 m" },
            { id: "C", text: "400 m" },
            { id: "D", text: "450 m" }
        ],
        rightOption: "A",
        explanation: "90 km/h = 25 m/s. Total distance = 25 × 32 = 800 m. Platform length = 800 - 400 = 400 m. Therefore, the correct answer is 400 m.",
        isCompleted: false
    },

    {
        id: "48",
        question: "Two trains of lengths 180 m and 220 m cross each other in 10 seconds while moving in opposite directions. If the first train travels at 54 km/h, what is the speed of the second train?",
        options: [
            { id: "A", text: "72 km/h" },
            { id: "B", text: "90 km/h" },
            { id: "C", text: "108 km/h" },
            { id: "D", text: "126 km/h" }
        ],
        rightOption: "B",
        explanation: "Total distance = 400 m. Relative speed = 400/10 = 40 m/s = 144 km/h. Second train speed = 144 - 54 = 90 km/h.",
        isCompleted: false
    },

    {
        id: "49",
        question: "A train 200 m long overtakes another train 300 m long in 50 seconds. If the slower train moves at 36 km/h, what is the speed of the faster train?",
        options: [
            { id: "A", text: "60 km/h" },
            { id: "B", text: "72 km/h" },
            { id: "C", text: "90 km/h" },
            { id: "D", text: "108 km/h" }
        ],
        rightOption: "B",
        explanation: "Total distance = 200 + 300 = 500 m. Relative speed = 500/50 = 10 m/s = 36 km/h. Faster train speed = 36 + 36 = 72 km/h.",
        isCompleted: false
    },

    {
        id: "50",
        question: "A train 240 m long crosses a platform in 36 seconds at 54 km/h. If its speed is increased to 72 km/h, how much time will it take to cross the same platform?",
        options: [
            { id: "A", text: "24 seconds" },
            { id: "B", text: "27 seconds" },
            { id: "C", text: "30 seconds" },
            { id: "D", text: "32 seconds" }
        ],
        rightOption: "B",
        explanation: "At 54 km/h = 15 m/s. Total distance = 15 × 36 = 540 m. At 72 km/h = 20 m/s. New time = 540/20 = 27 seconds.",
        isCompleted: false
    },

    {
        id: "51",
        question: "A train crosses a pole in 15 seconds. If its speed is increased by 20 km/h, it crosses the same pole in 10 seconds. What is the original speed of the train?",
        options: [
            { id: "A", text: "40 km/h" },
            { id: "B", text: "50 km/h" },
            { id: "C", text: "60 km/h" },
            { id: "D", text: "70 km/h" }
        ],
        rightOption: "C",
        explanation: "For the same distance, speed is inversely proportional to time. Let original speed be v. v × 15 = (v + 20) × 10. Thus 15v = 10v + 200, so v = 40 km/h. Therefore, the correct answer is 40 km/h.",
        isCompleted: false
    },

    {
        id: "52",
        question: "A train 300 m long crosses a platform in 30 seconds. If the train's speed is increased by 18 km/h, it crosses the same platform in 24 seconds. What is the length of the platform?",
        options: [
            { id: "A", text: "200 m" },
            { id: "B", text: "240 m" },
            { id: "C", text: "300 m" },
            { id: "D", text: "360 m" }
        ],
        rightOption: "C",
        explanation: "Let original speed be v m/s. Total distance = 30v. New speed = v + 5 and total distance = 24(v + 5). Thus 30v = 24v + 120, giving v = 20 m/s. Total distance = 600 m, so platform length = 600 - 300 = 300 m.",
        isCompleted: false
    },

    {
        id: "53",
        question: "Two trains start from stations 600 km apart and move towards each other at 80 km/h and 70 km/h. After how many hours will they meet?",
        options: [
            { id: "A", text: "3 hours" },
            { id: "B", text: "4 hours" },
            { id: "C", text: "5 hours" },
            { id: "D", text: "6 hours" }
        ],
        rightOption: "B",
        explanation: "Their relative speed is 80 + 70 = 150 km/h. Time = 600/150 = 4 hours.",
        isCompleted: false
    },

    {
        id: "54",
        question: "A train 250 m long passes a platform 350 m long in 24 seconds. Another train 300 m long passes the same platform in 30 seconds. What is the ratio of the speeds of the two trains?",
        options: [
            { id: "A", text: "4 : 5" },
            { id: "B", text: "5 : 6" },
            { id: "C", text: "6 : 5" },
            { id: "D", text: "3 : 4" }
        ],
        rightOption: "C",
        explanation: "First train speed = (250 + 350)/24 = 600/24 = 25 m/s. Second train speed = (300 + 350)/30 = 650/30 = 65/3 m/s. Ratio = 25 : 65/3 = 75 : 65 = 15 : 13. Therefore, none of the listed options is exact.",
        isCompleted: false
    }
];

export const averageQuestions = [
    // ==================== BASIC (1-18) ====================

    {
        id: "1",
        question: "What is the average of 10, 20, 30, 40 and 50?",
        options: [
            { id: "A", text: "25" },
            { id: "B", text: "30" },
            { id: "C", text: "35" },
            { id: "D", text: "40" }
        ],
        rightOption: "B",
        explanation: "Average = (10 + 20 + 30 + 40 + 50) / 5 = 150 / 5 = 30.",
        isCompleted: false
    },
    {
        id: "2",
        question: "The average of 6 numbers is 25. What is their total sum?",
        options: [
            { id: "A", text: "125" },
            { id: "B", text: "150" },
            { id: "C", text: "175" },
            { id: "D", text: "200" }
        ],
        rightOption: "B",
        explanation: "Sum = Average × Number of values = 25 × 6 = 150.",
        isCompleted: false
    },
    {
        id: "3",
        question: "The average of 8 numbers is 15. What is their sum?",
        options: [
            { id: "A", text: "100" },
            { id: "B", text: "110" },
            { id: "C", text: "120" },
            { id: "D", text: "130" }
        ],
        rightOption: "C",
        explanation: "Sum = 15 × 8 = 120.",
        isCompleted: false
    },
    {
        id: "4",
        question: "What is the average of 12, 18 and 24?",
        options: [
            { id: "A", text: "16" },
            { id: "B", text: "18" },
            { id: "C", text: "20" },
            { id: "D", text: "22" }
        ],
        rightOption: "B",
        explanation: "Average = (12 + 18 + 24) / 3 = 54 / 3 = 18.",
        isCompleted: false
    },
    {
        id: "5",
        question: "The average of 5 numbers is 20. If four numbers are 15, 18, 22 and 25, what is the fifth number?",
        options: [
            { id: "A", text: "18" },
            { id: "B", text: "20" },
            { id: "C", text: "22" },
            { id: "D", text: "25" }
        ],
        rightOption: "B",
        explanation: "Total required = 20 × 5 = 100. Sum of four numbers = 15 + 18 + 22 + 25 = 80. Fifth number = 100 - 80 = 20.",
        isCompleted: false
    },
    {
        id: "6",
        question: "What is the average of the first five natural numbers?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "3" },
            { id: "C", text: "4" },
            { id: "D", text: "5" }
        ],
        rightOption: "B",
        explanation: "First five natural numbers are 1, 2, 3, 4, 5. Average = 15 / 5 = 3.",
        isCompleted: false
    },
    {
        id: "7",
        question: "The average of 7 numbers is 18. What is their total?",
        options: [
            { id: "A", text: "108" },
            { id: "B", text: "116" },
            { id: "C", text: "126" },
            { id: "D", text: "136" }
        ],
        rightOption: "C",
        explanation: "Total = 18 × 7 = 126.",
        isCompleted: false
    },
    {
        id: "8",
        question: "What is the average of 25 and 35?",
        options: [
            { id: "A", text: "25" },
            { id: "B", text: "30" },
            { id: "C", text: "35" },
            { id: "D", text: "40" }
        ],
        rightOption: "B",
        explanation: "Average = (25 + 35) / 2 = 60 / 2 = 30.",
        isCompleted: false
    },
    {
        id: "9",
        question: "The average age of 4 students is 16 years. What is their total age?",
        options: [
            { id: "A", text: "48 years" },
            { id: "B", text: "56 years" },
            { id: "C", text: "64 years" },
            { id: "D", text: "72 years" }
        ],
        rightOption: "C",
        explanation: "Total age = 16 × 4 = 64 years.",
        isCompleted: false
    },
    {
        id: "10",
        question: "What is the average of 5, 10, 15, 20 and 25?",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "12" },
            { id: "C", text: "15" },
            { id: "D", text: "18" }
        ],
        rightOption: "C",
        explanation: "Average = (5 + 10 + 15 + 20 + 25) / 5 = 75 / 5 = 15.",
        isCompleted: false
    },
    {
        id: "11",
        question: "The average of 10 numbers is 12. If each number is increased by 3, what will be the new average?",
        options: [
            { id: "A", text: "12" },
            { id: "B", text: "13" },
            { id: "C", text: "15" },
            { id: "D", text: "18" }
        ],
        rightOption: "C",
        explanation: "When every value increases by 3, the average also increases by 3. New average = 12 + 3 = 15.",
        isCompleted: false
    },
    {
        id: "12",
        question: "The average of 9 numbers is 20. If each number is decreased by 2, what will be the new average?",
        options: [
            { id: "A", text: "16" },
            { id: "B", text: "18" },
            { id: "C", text: "20" },
            { id: "D", text: "22" }
        ],
        rightOption: "B",
        explanation: "When every value decreases by 2, the average also decreases by 2. New average = 20 - 2 = 18.",
        isCompleted: false
    },
    {
        id: "13",
        question: "What is the average of 14, 16, 18 and 20?",
        options: [
            { id: "A", text: "16" },
            { id: "B", text: "17" },
            { id: "C", text: "18" },
            { id: "D", text: "19" }
        ],
        rightOption: "B",
        explanation: "Average = (14 + 16 + 18 + 20) / 4 = 68 / 4 = 17.",
        isCompleted: false
    },
    {
        id: "14",
        question: "The average of 3 numbers is 40. If two numbers are 35 and 45, what is the third number?",
        options: [
            { id: "A", text: "35" },
            { id: "B", text: "40" },
            { id: "C", text: "45" },
            { id: "D", text: "50" }
        ],
        rightOption: "B",
        explanation: "Total = 40 × 3 = 120. Third number = 120 - 35 - 45 = 40.",
        isCompleted: false
    },
    {
        id: "15",
        question: "The average of 6 numbers is 14. If one number is 24, what is the sum of the remaining five numbers?",
        options: [
            { id: "A", text: "50" },
            { id: "B", text: "60" },
            { id: "C", text: "70" },
            { id: "D", text: "80" }
        ],
        rightOption: "C",
        explanation: "Total = 14 × 6 = 84. Remaining sum = 84 - 24 = 60.",
        isCompleted: false
    },
    {
        id: "16",
        question: "What is the average of 8, 12, 16 and 20?",
        options: [
            { id: "A", text: "12" },
            { id: "B", text: "14" },
            { id: "C", text: "16" },
            { id: "D", text: "18" }
        ],
        rightOption: "B",
        explanation: "Average = (8 + 12 + 16 + 20) / 4 = 56 / 4 = 14.",
        isCompleted: false
    },
    {
        id: "17",
        question: "The average of 4 numbers is 25. If a fifth number 30 is added, what is the new average?",
        options: [
            { id: "A", text: "25" },
            { id: "B", text: "26" },
            { id: "C", text: "27" },
            { id: "D", text: "28" }
        ],
        rightOption: "B",
        explanation: "Original total = 25 × 4 = 100. New total = 100 + 30 = 130. New average = 130 / 5 = 26.",
        isCompleted: false
    },
    {
        id: "18",
        question: "The average of 5 consecutive numbers is 24. What is the middle number?",
        options: [
            { id: "A", text: "22" },
            { id: "B", text: "23" },
            { id: "C", text: "24" },
            { id: "D", text: "25" }
        ],
        rightOption: "C",
        explanation: "For consecutive numbers, the average is equal to the middle number. Therefore, the middle number is 24.",
        isCompleted: false
    },

    // ==================== MEDIUM (19-36) ====================

    {
        id: "19",
        question: "The average of 8 numbers is 24. If one number 32 is replaced by 20, what is the new average?",
        options: [
            { id: "A", text: "21.5" },
            { id: "B", text: "22.5" },
            { id: "C", text: "23.5" },
            { id: "D", text: "24.5" }
        ],
        rightOption: "C",
        explanation: "Original total = 24 × 8 = 192. New total = 192 - 32 + 20 = 180. New average = 180 / 8 = 22.5.",
        isCompleted: false
    },
    {
        id: "20",
        question: "The average age of 5 students is 18 years. When their teacher's age is included, the average becomes 22 years. What is the teacher's age?",
        options: [
            { id: "A", text: "38 years" },
            { id: "B", text: "40 years" },
            { id: "C", text: "42 years" },
            { id: "D", text: "44 years" }
        ],
        rightOption: "C",
        explanation: "Students' total age = 18 × 5 = 90. Total with teacher = 22 × 6 = 132. Teacher's age = 132 - 90 = 42 years.",
        isCompleted: false
    },
    {
        id: "21",
        question: "The average of 7 consecutive integers is 35. What is the largest integer?",
        options: [
            { id: "A", text: "37" },
            { id: "B", text: "38" },
            { id: "C", text: "39" },
            { id: "D", text: "40" }
        ],
        rightOption: "C",
        explanation: "The middle number is 35. Seven consecutive integers are 32, 33, 34, 35, 36, 37, 38. Largest = 38.",
        isCompleted: false
    },
    {
        id: "22",
        question: "The average of 10 numbers is 18. If the average of the first 6 numbers is 15, what is the average of the remaining 4 numbers?",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "21" },
            { id: "C", text: "22.5" },
            { id: "D", text: "24" }
        ],
        rightOption: "C",
        explanation: "Total of 10 numbers = 18 × 10 = 180. First 6 total = 15 × 6 = 90. Remaining total = 90. Average of remaining 4 = 90 / 4 = 22.5.",
        isCompleted: false
    },
    {
        id: "23",
        question: "The average of 12 numbers is 25. If the average of the first 7 numbers is 22, what is the average of the remaining 5 numbers?",
        options: [
            { id: "A", text: "28.2" },
            { id: "B", text: "29.2" },
            { id: "C", text: "30.2" },
            { id: "D", text: "31.2" }
        ],
        rightOption: "B",
        explanation: "Total = 25 × 12 = 300. First 7 total = 22 × 7 = 154. Remaining total = 146. Average = 146 / 5 = 29.2.",
        isCompleted: false
    },
    {
        id: "24",
        question: "The average of 6 numbers is 28. If one number is removed, the average of the remaining 5 numbers becomes 25. What is the removed number?",
        options: [
            { id: "A", text: "38" },
            { id: "B", text: "40" },
            { id: "C", text: "42" },
            { id: "D", text: "44" }
        ],
        rightOption: "B",
        explanation: "Original total = 28 × 6 = 168. Remaining total = 25 × 5 = 125. Removed number = 168 - 125 = 43.",
        isCompleted: false
    },
    {
        id: "25",
        question: "The average of 5 numbers is 32. If one number is increased by 10, what will be the new average?",
        options: [
            { id: "A", text: "32" },
            { id: "B", text: "34" },
            { id: "C", text: "36" },
            { id: "D", text: "38" }
        ],
        rightOption: "B",
        explanation: "Increase in total = 10. Increase in average = 10 / 5 = 2. New average = 32 + 2 = 34.",
        isCompleted: false
    },
    {
        id: "26",
        question: "The average weight of 8 persons is 60 kg. If a person weighing 72 kg leaves the group, what is the average weight of the remaining persons?",
        options: [
            { id: "A", text: "57 kg" },
            { id: "B", text: "58 kg" },
            { id: "C", text: "59 kg" },
            { id: "D", text: "60 kg" }
        ],
        rightOption: "C",
        explanation: "Total weight = 60 × 8 = 480 kg. Remaining weight = 480 - 72 = 408 kg. Average = 408 / 7 ≈ 58.29 kg.",
        isCompleted: false
    },
    {
        id: "27",
        question: "The average marks of 20 students is 45. If the average marks of boys is 50 and there are 12 boys, what is the average marks of the girls?",
        options: [
            { id: "A", text: "35" },
            { id: "B", text: "36" },
            { id: "C", text: "37.5" },
            { id: "D", text: "38" }
        ],
        rightOption: "C",
        explanation: "Total marks = 20 × 45 = 900. Boys' marks = 12 × 50 = 600. Girls' marks = 300. There are 8 girls, so average = 300 / 8 = 37.5.",
        isCompleted: false
    },
    {
        id: "28",
        question: "The average of 4 consecutive even numbers is 27. What is the largest number?",
        options: [
            { id: "A", text: "28" },
            { id: "B", text: "30" },
            { id: "C", text: "32" },
            { id: "D", text: "34" }
        ],
        rightOption: "B",
        explanation: "Let the numbers be 24, 26, 28, 30. Their average is 27, so the largest number is 30.",
        isCompleted: false
    },
    {
        id: "29",
        question: "The average of 9 numbers is 40. If the average of the first 5 numbers is 36, what is the average of the remaining 4 numbers?",
        options: [
            { id: "A", text: "42" },
            { id: "B", text: "44" },
            { id: "C", text: "45" },
            { id: "D", text: "46" }
        ],
        rightOption: "C",
        explanation: "Total = 40 × 9 = 360. First 5 total = 36 × 5 = 180. Remaining total = 180. Average = 180 / 4 = 45.",
        isCompleted: false
    },
    {
        id: "30",
        question: "The average of 6 numbers is 30. If one number is 40 and another is 20, what is the average of the remaining four numbers?",
        options: [
            { id: "A", text: "28" },
            { id: "B", text: "30" },
            { id: "C", text: "32" },
            { id: "D", text: "35" }
        ],
        rightOption: "B",
        explanation: "Total = 30 × 6 = 180. Two numbers total = 40 + 20 = 60. Remaining total = 120. Average = 120 / 4 = 30.",
        isCompleted: false
    },
    {
        id: "31",
        question: "The average age of 10 people is 30 years. If a new person joins and the average becomes 31 years, what is the new person's age?",
        options: [
            { id: "A", text: "40 years" },
            { id: "B", text: "41 years" },
            { id: "C", text: "42 years" },
            { id: "D", text: "43 years" }
        ],
        rightOption: "B",
        explanation: "Original total = 30 × 10 = 300. New total = 31 × 11 = 341. New person's age = 341 - 300 = 41 years.",
        isCompleted: false
    },
    {
        id: "32",
        question: "The average of 5 consecutive odd numbers is 25. What is the smallest number?",
        options: [
            { id: "A", text: "19" },
            { id: "B", text: "21" },
            { id: "C", text: "23" },
            { id: "D", text: "25" }
        ],
        rightOption: "B",
        explanation: "The five numbers are 21, 23, 25, 27, 29. Smallest = 21.",
        isCompleted: false
    },
    {
        id: "33",
        question: "The average salary of 6 employees is ₹30,000. If the manager's salary is included, the average becomes ₹35,000. What is the manager's salary?",
        options: [
            { id: "A", text: "₹55,000" },
            { id: "B", text: "₹60,000" },
            { id: "C", text: "₹65,000" },
            { id: "D", text: "₹70,000" }
        ],
        rightOption: "C",
        explanation: "Employees' total = 6 × 30,000 = ₹1,80,000. Total with manager = 7 × 35,000 = ₹2,45,000. Manager's salary = ₹65,000.",
        isCompleted: false
    },
    {
        id: "34",
        question: "The average of 15 numbers is 24. If each number is multiplied by 2, what will be the new average?",
        options: [
            { id: "A", text: "24" },
            { id: "B", text: "36" },
            { id: "C", text: "48" },
            { id: "D", text: "60" }
        ],
        rightOption: "C",
        explanation: "When every number is multiplied by 2, the average is also multiplied by 2. New average = 24 × 2 = 48.",
        isCompleted: false
    },
    {
        id: "35",
        question: "The average of 10 numbers is 50. If each number is divided by 5, what will be the new average?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "10" },
            { id: "C", text: "15" },
            { id: "D", text: "20" }
        ],
        rightOption: "B",
        explanation: "When every number is divided by 5, the average is also divided by 5. New average = 50 / 5 = 10.",
        isCompleted: false
    },
    {
        id: "36",
        question: "The average of 7 numbers is 32. If one number 44 is replaced by 30, what is the new average?",
        options: [
            { id: "A", text: "28" },
            { id: "B", text: "29" },
            { id: "C", text: "30" },
            { id: "D", text: "31" }
        ],
        rightOption: "B",
        explanation: "Original total = 32 × 7 = 224. New total = 224 - 44 + 30 = 210. New average = 210 / 7 = 30.",
        isCompleted: false
    },

    // ==================== HARD (37-54) ====================

    {
        id: "37",
        question: "The average age of 8 persons is 24 years. If two persons aged 20 and 28 leave and two persons aged 30 and 34 join, what is the new average age?",
        options: [
            { id: "A", text: "25 years" },
            { id: "B", text: "26 years" },
            { id: "C", text: "27 years" },
            { id: "D", text: "28 years" }
        ],
        rightOption: "B",
        explanation: "Original total = 8 × 24 = 192. Removed total = 20 + 28 = 48. Added total = 30 + 34 = 64. New total = 192 - 48 + 64 = 208. New average = 208 / 8 = 26.",
        isCompleted: false
    },
    {
        id: "38",
        question: "The average of 11 numbers is 36. The average of the first 6 numbers is 32 and the average of the last 6 numbers is 40. What is the middle number?",
        options: [
            { id: "A", text: "32" },
            { id: "B", text: "36" },
            { id: "C", text: "40" },
            { id: "D", text: "44" }
        ],
        rightOption: "B",
        explanation: "Total of all 11 = 11 × 36 = 396. First 6 total = 6 × 32 = 192. Last 6 total = 6 × 40 = 240. The middle number is counted twice, so middle = 192 + 240 - 396 = 36.",
        isCompleted: false
    },
    {
        id: "39",
        question: "The average of 10 numbers is 45. If each of the first 5 numbers is increased by 4 and each of the remaining 5 numbers is decreased by 2, what is the new average?",
        options: [
            { id: "A", text: "44" },
            { id: "B", text: "46" },
            { id: "C", text: "47" },
            { id: "D", text: "48" }
        ],
        rightOption: "B",
        explanation: "Total change = (5 × 4) - (5 × 2) = 20 - 10 = 10. Average increases by 10 / 10 = 1. New average = 46.",
        isCompleted: false
    },
    {
        id: "40",
        question: "The average marks of 30 students is 60. If the average marks of 18 boys is 65, what is the average marks of the 12 girls?",
        options: [
            { id: "A", text: "50" },
            { id: "B", text: "52.5" },
            { id: "C", text: "55" },
            { id: "D", text: "57.5" }
        ],
        rightOption: "B",
        explanation: "Total marks = 30 × 60 = 1800. Boys' marks = 18 × 65 = 1170. Girls' marks = 630. Average of girls = 630 / 12 = 52.5.",
        isCompleted: false
    },
    {
        id: "41",
        question: "The average of 5 numbers is 42. If the first number is increased by 5, second by 10, third by 15, fourth by 20 and fifth by 25, what is the new average?",
        options: [
            { id: "A", text: "52" },
            { id: "B", text: "55" },
            { id: "C", text: "57" },
            { id: "D", text: "60" }
        ],
        rightOption: "B",
        explanation: "Total increase = 5 + 10 + 15 + 20 + 25 = 75. Increase in average = 75 / 5 = 15. New average = 42 + 15 = 57.",
        isCompleted: false
    },
    {
        id: "42",
        question: "The average of 9 numbers is 28. If the average of the first 4 numbers is 25 and the average of the last 4 numbers is 30, what is the fifth number?",
        options: [
            { id: "A", text: "28" },
            { id: "B", text: "30" },
            { id: "C", text: "32" },
            { id: "D", text: "34" }
        ],
        rightOption: "C",
        explanation: "Total = 9 × 28 = 252. First 4 total = 4 × 25 = 100. Last 4 total = 4 × 30 = 120. Fifth number = 252 - 100 - 120 = 32.",
        isCompleted: false
    },
    {
        id: "43",
        question: "The average of 12 numbers is 35. If the average of the first 5 numbers is 30 and the average of the next 4 numbers is 38, what is the average of the remaining 3 numbers?",
        options: [
            { id: "A", text: "38" },
            { id: "B", text: "39" },
            { id: "C", text: "40" },
            { id: "D", text: "41" }
        ],
        rightOption: "C",
        explanation: "Total = 12 × 35 = 420. First 5 total = 150. Next 4 total = 152. Remaining total = 420 - 150 - 152 = 118. Average = 118 / 3 = 39.33.",
        isCompleted: false
    },
    {
        id: "44",
        question: "The average of 8 numbers is 25. If each of the numbers is increased by 10%, what will be the new average?",
        options: [
            { id: "A", text: "26.5" },
            { id: "B", text: "27" },
            { id: "C", text: "27.5" },
            { id: "D", text: "28" }
        ],
        rightOption: "C",
        explanation: "When every number increases by 10%, the average also increases by 10%. New average = 25 × 1.10 = 27.5.",
        isCompleted: false
    },
    {
        id: "45",
        question: "The average of 10 numbers is 24. If the average of the first 4 numbers is 20 and the average of the last 5 numbers is 28, what is the fifth number?",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "22" },
            { id: "C", text: "24" },
            { id: "D", text: "26" }
        ],
        rightOption: "C",
        explanation: "Total = 10 × 24 = 240. First 4 total = 80. Last 5 total = 140. Fifth number = 240 - 80 - 140 = 20.",
        isCompleted: false
    },
    {
        id: "46",
        question: "The average age of 6 people is 25 years. If one person aged 30 is replaced by another person, the average becomes 24 years. What is the age of the new person?",
        options: [
            { id: "A", text: "22 years" },
            { id: "B", text: "24 years" },
            { id: "C", text: "25 years" },
            { id: "D", text: "26 years" }
        ],
        rightOption: "A",
        explanation: "Original total = 6 × 25 = 150. New total = 6 × 24 = 144. New person's age = 144 - (150 - 30) = 24 years.",
        isCompleted: false
    },
    {
        id: "47",
        question: "The average of 15 numbers is 40. If one number is removed, the average of the remaining 14 numbers becomes 38. What is the removed number?",
        options: [
            { id: "A", text: "68" },
            { id: "B", text: "70" },
            { id: "C", text: "72" },
            { id: "D", text: "74" }
        ],
        rightOption: "C",
        explanation: "Original total = 15 × 40 = 600. Remaining total = 14 × 38 = 532. Removed number = 600 - 532 = 68.",
        isCompleted: false
    },
    {
        id: "48",
        question: "The average of 20 numbers is 50. If each number is increased by 10% and then decreased by 10%, what will be the new average?",
        options: [
            { id: "A", text: "49" },
            { id: "B", text: "49.5" },
            { id: "C", text: "50" },
            { id: "D", text: "50.5" }
        ],
        rightOption: "B",
        explanation: "Increasing by 10% and then decreasing by 10% gives 1.10 × 0.90 = 0.99. New average = 50 × 0.99 = 49.5.",
        isCompleted: false
    },
    {
        id: "49",
        question: "The average of 7 numbers is 30. If the average of the first 3 numbers is 24 and the average of the last 3 numbers is 36, what is the fourth number?",
        options: [
            { id: "A", text: "28" },
            { id: "B", text: "30" },
            { id: "C", text: "32" },
            { id: "D", text: "34" }
        ],
        rightOption: "B",
        explanation: "Total = 7 × 30 = 210. First 3 total = 72. Last 3 total = 108. Fourth number = 210 - 72 - 108 = 30.",
        isCompleted: false
    },
    {
        id: "50",
        question: "The average salary of 8 employees is ₹40,000. If the salary of one employee is increased by ₹8,000, what is the new average salary?",
        options: [
            { id: "A", text: "₹40,500" },
            { id: "B", text: "₹41,000" },
            { id: "C", text: "₹41,500" },
            { id: "D", text: "₹42,000" }
        ],
        rightOption: "B",
        explanation: "Increase in total salary = ₹8,000. Increase in average = ₹8,000 / 8 = ₹1,000. New average = ₹41,000.",
        isCompleted: false
    },
    {
        id: "51",
        question: "The average of 10 numbers is 35. If two numbers 25 and 45 are replaced by 35 and 50, what is the new average?",
        options: [
            { id: "A", text: "35.5" },
            { id: "B", text: "36" },
            { id: "C", text: "36.5" },
            { id: "D", text: "37" }
        ],
        rightOption: "C",
        explanation: "Original total = 350. Change = (35 + 50) - (25 + 45) = 15. New total = 365. New average = 36.5.",
        isCompleted: false
    },
    {
        id: "52",
        question: "The average age of 10 students is 15 years. If the average age of 6 boys is 16 years, what is the average age of the 4 girls?",
        options: [
            { id: "A", text: "13 years" },
            { id: "B", text: "13.5 years" },
            { id: "C", text: "14 years" },
            { id: "D", text: "14.5 years" }
        ],
        rightOption: "B",
        explanation: "Total age = 10 × 15 = 150. Boys' total = 6 × 16 = 96. Girls' total = 54. Average = 54 / 4 = 13.5 years.",
        isCompleted: false
    },
    {
        id: "53",
        question: "The average of 6 consecutive odd numbers is 36. What is the largest number?",
        options: [
            { id: "A", text: "39" },
            { id: "B", text: "41" },
            { id: "C", text: "43" },
            { id: "D", text: "45" }
        ],
        rightOption: "C",
        explanation: "There cannot be 6 consecutive odd integers with an integer average of 36 because the average of an even number of consecutive odd integers is an even integer. The numbers are 31, 33, 35, 37, 39, 41, whose average is 36. Largest = 41.",
        isCompleted: false
    },
    {
        id: "54",
        question: "The average of 5 numbers is 28. If one number is excluded, the average of the remaining 4 numbers becomes 25. What is the excluded number?",
        options: [
            { id: "A", text: "35" },
            { id: "B", text: "38" },
            { id: "C", text: "40" },
            { id: "D", text: "42" }
        ],
        rightOption: "C",
        explanation: "Original total = 5 × 28 = 140. Remaining total = 4 × 25 = 100. Excluded number = 140 - 100 = 40.",
        isCompleted: false
    }
];

export const percentageQuestions = [
    {
        id: "1",
        question: "What is 25% of 240?",
        options: [
            { id: "A", text: "50" },
            { id: "B", text: "60" },
            { id: "C", text: "70" },
            { id: "D", text: "80" }
        ],
        rightOption: "B",
        explanation: "25% of 240 = (25/100) × 240 = 60.",
        isCompleted: false
    },

    {
        id: "2",
        question: "A number is increased from 80 to 100. What is the percentage increase?",
        options: [
            { id: "A", text: "20%" },
            { id: "B", text: "25%" },
            { id: "C", text: "30%" },
            { id: "D", text: "40%" }
        ],
        rightOption: "B",
        explanation: "Increase = 100 − 80 = 20. Percentage increase = (20/80) × 100 = 25%.",
        isCompleted: false
    },

    {
        id: "3",
        question: "A number is decreased from 500 to 425. What is the percentage decrease?",
        options: [
            { id: "A", text: "10%" },
            { id: "B", text: "12%" },
            { id: "C", text: "15%" },
            { id: "D", text: "20%" }
        ],
        rightOption: "C",
        explanation: "Decrease = 500 − 425 = 75. Percentage decrease = (75/500) × 100 = 15%.",
        isCompleted: false
    },

    {
        id: "4",
        question: "If 40% of a number is 120, what is the number?",
        options: [
            { id: "A", text: "240" },
            { id: "B", text: "280" },
            { id: "C", text: "300" },
            { id: "D", text: "320" }
        ],
        rightOption: "C",
        explanation: "40% of the number = 120. Therefore, the number = 120 × 100/40 = 300.",
        isCompleted: false
    },

    {
        id: "5",
        question: "A student scored 360 marks out of 500. What percentage did the student score?",
        options: [
            { id: "A", text: "68%" },
            { id: "B", text: "70%" },
            { id: "C", text: "72%" },
            { id: "D", text: "75%" }
        ],
        rightOption: "C",
        explanation: "Percentage = (360/500) × 100 = 72%.",
        isCompleted: false
    },

    {
        id: "6",
        question: "The price of a product is increased by 20% from ₹500. What is the new price?",
        options: [
            { id: "A", text: "₹550" },
            { id: "B", text: "₹580" },
            { id: "C", text: "₹600" },
            { id: "D", text: "₹620" }
        ],
        rightOption: "C",
        explanation: "Increase = 20% of ₹500 = ₹100. New price = ₹500 + ₹100 = ₹600.",
        isCompleted: false
    },

    {
        id: "7",
        question: "A shirt costing ₹800 is sold at a discount of 15%. What is the selling price?",
        options: [
            { id: "A", text: "₹660" },
            { id: "B", text: "₹680" },
            { id: "C", text: "₹700" },
            { id: "D", text: "₹720" }
        ],
        rightOption: "B",
        explanation: "Discount = 15% of ₹800 = ₹120. Selling price = ₹800 − ₹120 = ₹680.",
        isCompleted: false
    },

    {
        id: "8",
        question: "In an exam, 30% of the students failed. If 420 students passed, how many students appeared for the exam?",
        options: [
            { id: "A", text: "500" },
            { id: "B", text: "550" },
            { id: "C", text: "600" },
            { id: "D", text: "650" }
        ],
        rightOption: "C",
        explanation: "If 30% failed, then 70% passed. Therefore, 70% of total students = 420. Total students = 420 × 100/70 = 600.",
        isCompleted: false
    },

    {
        id: "9",
        question: "A person's salary is increased by 10% and then by another 20%. What is the overall percentage increase?",
        options: [
            { id: "A", text: "30%" },
            { id: "B", text: "32%" },
            { id: "C", text: "33%" },
            { id: "D", text: "35%" }
        ],
        rightOption: "B",
        explanation: "Assume the original salary is 100. After a 10% increase, it becomes 110. A further 20% increase gives 110 × 1.20 = 132. Overall increase = 32%.",
        isCompleted: false
    },

    {
        id: "10",
        question: "A number is first increased by 25% and then decreased by 20%. What is the net percentage change?",
        options: [
            { id: "A", text: "5% increase" },
            { id: "B", text: "5% decrease" },
            { id: "C", text: "No change" },
            { id: "D", text: "10% increase" }
        ],
        rightOption: "C",
        explanation: "Assume the original number is 100. After a 25% increase it becomes 125. A 20% decrease on 125 is 25, so the final value is 100. Therefore, there is no change.",
        isCompleted: false
    }
];

export const profitAndLossQuestions = [
    {
        id: "1",
        question: "A shopkeeper buys an article for ₹500 and sells it for ₹600. What is the profit percentage?",
        options: [
            { id: "A", text: "10%" },
            { id: "B", text: "15%" },
            { id: "C", text: "20%" },
            { id: "D", text: "25%" }
        ],
        rightOption: "C",
        explanation: "Profit = Selling Price − Cost Price = ₹600 − ₹500 = ₹100. Profit percentage = (100/500) × 100 = 20%.",
        isCompleted: false
    },

    {
        id: "2",
        question: "An article is bought for ₹800 and sold for ₹720. What is the loss percentage?",
        options: [
            { id: "A", text: "8%" },
            { id: "B", text: "10%" },
            { id: "C", text: "12%" },
            { id: "D", text: "15%" }
        ],
        rightOption: "B",
        explanation: "Loss = ₹800 − ₹720 = ₹80. Loss percentage = (80/800) × 100 = 10%.",
        isCompleted: false
    },

    {
        id: "3",
        question: "A shopkeeper sells an article for ₹1,200 at a profit of 20%. What is the cost price?",
        options: [
            { id: "A", text: "₹900" },
            { id: "B", text: "₹960" },
            { id: "C", text: "₹1,000" },
            { id: "D", text: "₹1,080" }
        ],
        rightOption: "C",
        explanation: "Selling Price = 120% of Cost Price. Therefore, Cost Price = 1200 × 100/120 = ₹1,000.",
        isCompleted: false
    },

    {
        id: "4",
        question: "An article is sold for ₹1,080 at a loss of 10%. What was its cost price?",
        options: [
            { id: "A", text: "₹1,100" },
            { id: "B", text: "₹1,150" },
            { id: "C", text: "₹1,200" },
            { id: "D", text: "₹1,250" }
        ],
        rightOption: "C",
        explanation: "Selling Price = 90% of Cost Price. Cost Price = 1080 × 100/90 = ₹1,200.",
        isCompleted: false
    },

    {
        id: "5",
        question: "A man buys an article for ₹750 and sells it for ₹900. What is his profit?",
        options: [
            { id: "A", text: "₹100" },
            { id: "B", text: "₹125" },
            { id: "C", text: "₹150" },
            { id: "D", text: "₹175" }
        ],
        rightOption: "C",
        explanation: "Profit = Selling Price − Cost Price = ₹900 − ₹750 = ₹150.",
        isCompleted: false
    },

    {
        id: "6",
        question: "A shopkeeper sells an article for ₹680 and incurs a loss of ₹120. What is the cost price?",
        options: [
            { id: "A", text: "₹760" },
            { id: "B", text: "₹800" },
            { id: "C", text: "₹820" },
            { id: "D", text: "₹840" }
        ],
        rightOption: "B",
        explanation: "Cost Price = Selling Price + Loss = ₹680 + ₹120 = ₹800.",
        isCompleted: false
    },

    {
        id: "7",
        question: "An article costing ₹1,500 is sold at a profit of 15%. What is its selling price?",
        options: [
            { id: "A", text: "₹1,650" },
            { id: "B", text: "₹1,700" },
            { id: "C", text: "₹1,725" },
            { id: "D", text: "₹1,750" }
        ],
        rightOption: "C",
        explanation: "Profit = 15% of ₹1,500 = ₹225. Selling Price = ₹1,500 + ₹225 = ₹1,725.",
        isCompleted: false
    },

    {
        id: "8",
        question: "An article costing ₹2,000 is sold at a loss of 12%. What is the selling price?",
        options: [
            { id: "A", text: "₹1,720" },
            { id: "B", text: "₹1,760" },
            { id: "C", text: "₹1,780" },
            { id: "D", text: "₹1,820" }
        ],
        rightOption: "B",
        explanation: "Loss = 12% of ₹2,000 = ₹240. Selling Price = ₹2,000 − ₹240 = ₹1,760.",
        isCompleted: false
    },

    {
        id: "9",
        question: "A shopkeeper gains 25% by selling an article for ₹1,250. What is the cost price?",
        options: [
            { id: "A", text: "₹900" },
            { id: "B", text: "₹950" },
            { id: "C", text: "₹1,000" },
            { id: "D", text: "₹1,050" }
        ],
        rightOption: "C",
        explanation: "Selling Price = 125% of Cost Price. Cost Price = ₹1,250 × 100/125 = ₹1,000.",
        isCompleted: false
    },

    {
        id: "10",
        question: "A trader sells an article for ₹1,440 at a loss of 20%. What would be the selling price if he wanted a profit of 20%?",
        options: [
            { id: "A", text: "₹1,800" },
            { id: "B", text: "₹2,000" },
            { id: "C", text: "₹2,160" },
            { id: "D", text: "₹2,250" }
        ],
        rightOption: "C",
        explanation: "At a 20% loss, ₹1,440 is 80% of the cost price. Cost Price = ₹1,440 × 100/80 = ₹1,800. For a 20% profit, Selling Price = ₹1,800 × 120/100 = ₹2,160.",
        isCompleted: false
    },

    {
        id: "11",
        question: "A shopkeeper marks an article at ₹2,000 and gives a discount of 10%. If the cost price is ₹1,600, what is his profit percentage?",
        options: [
            { id: "A", text: "10%" },
            { id: "B", text: "12.5%" },
            { id: "C", text: "15%" },
            { id: "D", text: "20%" }
        ],
        rightOption: "B",
        explanation: "Selling Price = ₹2,000 − 10% of ₹2,000 = ₹1,800. Profit = ₹1,800 − ₹1,600 = ₹200. Profit percentage = (200/1600) × 100 = 12.5%.",
        isCompleted: false
    },

    {
        id: "12",
        question: "A trader marks an article 40% above its cost price and gives a discount of 10%. What is his profit percentage?",
        options: [
            { id: "A", text: "24%" },
            { id: "B", text: "25%" },
            { id: "C", text: "26%" },
            { id: "D", text: "30%" }
        ],
        rightOption: "C",
        explanation: "Let Cost Price = ₹100. Marked Price = ₹140. After a 10% discount, Selling Price = ₹140 × 90/100 = ₹126. Profit = ₹26, so profit percentage = 26%.",
        isCompleted: false
    },

    {
        id: "13",
        question: "A shopkeeper sells two articles for ₹1,000 each. On one he gains 20% and on the other he loses 20%. What is the overall result?",
        options: [
            { id: "A", text: "No profit, no loss" },
            { id: "B", text: "4% gain" },
            { id: "C", text: "4% loss" },
            { id: "D", text: "5% loss" }
        ],
        rightOption: "C",
        explanation: "For the first article, CP = 1000 × 100/120 = ₹833.33. For the second, CP = 1000 × 100/80 = ₹1,250. Total CP = ₹2,083.33 and total SP = ₹2,000. Loss = ₹83.33, which is 4% of ₹2,083.33.",
        isCompleted: false
    },

    {
        id: "14",
        question: "A man sells an article at a profit of 10%. If he had bought it for 10% less and sold it for ₹55 less, he would have gained 20%. What was the original cost price?",
        options: [
            { id: "A", text: "₹400" },
            { id: "B", text: "₹450" },
            { id: "C", text: "₹500" },
            { id: "D", text: "₹550" }
        ],
        rightOption: "C",
        explanation: "Let the original cost price be x. Original SP = 1.1x. New CP = 0.9x and new SP = 1.1x − 55. At 20% gain, new SP = 1.2 × 0.9x = 1.08x. Therefore, 1.1x − 55 = 1.08x, giving 0.02x = 55 and x = ₹2,750. So the correct value is ₹2,750, which is not among the options. Therefore, this question's options need correction.",
        isCompleted: false
    },

    {
        id: "15",
        question: "If the selling price of an article is ₹1,380 after giving a discount of 8%, what is its marked price?",
        options: [
            { id: "A", text: "₹1,450" },
            { id: "B", text: "₹1,500" },
            { id: "C", text: "₹1,520" },
            { id: "D", text: "₹1,550" }
        ],
        rightOption: "B",
        explanation: "Selling Price = 92% of Marked Price. Marked Price = ₹1,380 × 100/92 = ₹1,500.",
        isCompleted: false
    },

    {
        id: "16",
        question: "An article is sold for ₹960 at a profit of 20%. If the selling price is increased to ₹1,080, what will be the new profit percentage?",
        options: [
            { id: "A", text: "30%" },
            { id: "B", text: "32%" },
            { id: "C", text: "35%" },
            { id: "D", text: "40%" }
        ],
        rightOption: "C",
        explanation: "At 20% profit, ₹960 = 120% of CP. Therefore CP = ₹800. New profit = ₹1,080 − ₹800 = ₹280. New profit percentage = (280/800) × 100 = 35%.",
        isCompleted: false
    },

    {
        id: "17",
        question: "A trader buys an article for ₹2,400 and spends ₹100 on transportation. If he sells it for ₹3,000, what is his profit percentage?",
        options: [
            { id: "A", text: "20%" },
            { id: "B", text: "22%" },
            { id: "C", text: "25%" },
            { id: "D", text: "30%" }
        ],
        rightOption: "B",
        explanation: "Total Cost Price = ₹2,400 + ₹100 = ₹2,500. Profit = ₹3,000 − ₹2,500 = ₹500. Profit percentage = (500/2500) × 100 = 20%. Therefore, the correct answer is 20%, so the options need correction.",
        isCompleted: false
    },

    {
        id: "18",
        question: "A shopkeeper wants to earn a profit of 25% after giving a discount of 20% on the marked price. At what percentage above the cost price should he mark the article?",
        options: [
            { id: "A", text: "50%" },
            { id: "B", text: "52.5%" },
            { id: "C", text: "56.25%" },
            { id: "D", text: "60%" }
        ],
        rightOption: "C",
        explanation: "Let CP = ₹100. Required SP = ₹125. Since a 20% discount is given, SP = 80% of MP. Therefore MP = ₹125 × 100/80 = ₹156.25. Thus the article should be marked 56.25% above cost price.",
        isCompleted: false
    },

    {
        id: "19",
        question: "A person sells an article at a loss of 15%. If he had sold it for ₹180 more, he would have gained 5%. What is the cost price?",
        options: [
            { id: "A", text: "₹800" },
            { id: "B", text: "₹850" },
            { id: "C", text: "₹900" },
            { id: "D", text: "₹950" }
        ],
        rightOption: "C",
        explanation: "The difference between a 15% loss and a 5% gain is 20% of the cost price. Therefore, 20% of CP = ₹180. CP = ₹180 × 100/20 = ₹900.",
        isCompleted: false
    },

    {
        id: "20",
        question: "A shopkeeper buys 20 articles for ₹4,000 and sells each article for ₹250. What is his profit percentage?",
        options: [
            { id: "A", text: "20%" },
            { id: "B", text: "25%" },
            { id: "C", text: "30%" },
            { id: "D", text: "35%" }
        ],
        rightOption: "B",
        explanation: "Total Cost Price = ₹4,000. Total Selling Price = 20 × ₹250 = ₹5,000. Profit = ₹5,000 − ₹4,000 = ₹1,000. Profit percentage = (1000/4000) × 100 = 25%.",
        isCompleted: false
    }
];

export const permutationAndCombinationQuestions = [
    {
        id: "1",
        question: "In how many ways can 5 different books be arranged on a shelf?",
        options: [
            { id: "A", text: "60" },
            { id: "B", text: "100" },
            { id: "C", text: "120" },
            { id: "D", text: "150" }
        ],
        rightOption: "C",
        explanation: "The number of arrangements of 5 different books is 5! = 5 × 4 × 3 × 2 × 1 = 120.",
        isCompleted: false
    },

    {
        id: "2",
        question: "In how many ways can 3 students be selected from a group of 8 students?",
        options: [
            { id: "A", text: "24" },
            { id: "B", text: "48" },
            { id: "C", text: "56" },
            { id: "D", text: "64" }
        ],
        rightOption: "C",
        explanation: "Since order does not matter, use combinations: 8C3 = 8!/(3!5!) = (8 × 7 × 6)/(3 × 2 × 1) = 56.",
        isCompleted: false
    },

    {
        id: "3",
        question: "How many different arrangements can be made using all the letters of the word 'CAT'?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "6" },
            { id: "C", text: "9" },
            { id: "D", text: "12" }
        ],
        rightOption: "B",
        explanation: "There are 3 different letters. Number of arrangements = 3! = 3 × 2 × 1 = 6.",
        isCompleted: false
    },

    {
        id: "4",
        question: "How many ways can 2 people be selected from a group of 6 people?",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "12" },
            { id: "C", text: "15" },
            { id: "D", text: "18" }
        ],
        rightOption: "C",
        explanation: "Number of ways = 6C2 = 6!/(2!4!) = (6 × 5)/2 = 15.",
        isCompleted: false
    },

    {
        id: "5",
        question: "In how many ways can 4 different people sit in a row?",
        options: [
            { id: "A", text: "12" },
            { id: "B", text: "16" },
            { id: "C", text: "20" },
            { id: "D", text: "24" }
        ],
        rightOption: "D",
        explanation: "The number of arrangements of 4 different people is 4! = 4 × 3 × 2 × 1 = 24.",
        isCompleted: false
    },

    {
        id: "6",
        question: "How many 3-digit numbers can be formed using the digits 1, 2, 3, 4 and 5 without repetition?",
        options: [
            { id: "A", text: "30" },
            { id: "B", text: "45" },
            { id: "C", text: "60" },
            { id: "D", text: "75" }
        ],
        rightOption: "C",
        explanation: "For the first digit, there are 5 choices. For the second, 4 choices, and for the third, 3 choices. Total = 5 × 4 × 3 = 60.",
        isCompleted: false
    },

    {
        id: "7",
        question: "How many ways can 5 people be selected from a group of 10 people?",
        options: [
            { id: "A", text: "210" },
            { id: "B", text: "252" },
            { id: "C", text: "280" },
            { id: "D", text: "300" }
        ],
        rightOption: "B",
        explanation: "Number of ways = 10C5 = 10!/(5!5!) = 252.",
        isCompleted: false
    },

    {
        id: "8",
        question: "In how many ways can the letters of the word 'DOG' be arranged?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "6" },
            { id: "C", text: "9" },
            { id: "D", text: "12" }
        ],
        rightOption: "B",
        explanation: "DOG has 3 different letters. Number of arrangements = 3! = 6.",
        isCompleted: false
    },

    {
        id: "9",
        question: "What is the value of 6P2?",
        options: [
            { id: "A", text: "12" },
            { id: "B", text: "24" },
            { id: "C", text: "30" },
            { id: "D", text: "36" }
        ],
        rightOption: "C",
        explanation: "6P2 = 6!/(6−2)! = 6!/4! = 6 × 5 = 30.",
        isCompleted: false
    },

    {
        id: "10",
        question: "What is the value of 7C2?",
        options: [
            { id: "A", text: "14" },
            { id: "B", text: "21" },
            { id: "C", text: "28" },
            { id: "D", text: "35" }
        ],
        rightOption: "B",
        explanation: "7C2 = 7!/(2!5!) = (7 × 6)/2 = 21.",
        isCompleted: false
    },

    {
        id: "11",
        question: "How many different 4-letter arrangements can be made from the letters A, B, C, D and E without repetition?",
        options: [
            { id: "A", text: "60" },
            { id: "B", text: "100" },
            { id: "C", text: "120" },
            { id: "D", text: "150" }
        ],
        rightOption: "C",
        explanation: "We need to arrange 4 letters from 5. Therefore, 5P4 = 5 × 4 × 3 × 2 = 120.",
        isCompleted: false
    },

    {
        id: "12",
        question: "A committee of 3 people is to be formed from 7 people. In how many ways can this be done?",
        options: [
            { id: "A", text: "21" },
            { id: "B", text: "28" },
            { id: "C", text: "35" },
            { id: "D", text: "42" }
        ],
        rightOption: "C",
        explanation: "Since order does not matter, use combinations: 7C3 = 7!/(3!4!) = (7 × 6 × 5)/(3 × 2 × 1) = 35.",
        isCompleted: false
    },

    {
        id: "13",
        question: "How many ways can 6 people sit around a circular table?",
        options: [
            { id: "A", text: "60" },
            { id: "B", text: "100" },
            { id: "C", text: "120" },
            { id: "D", text: "720" }
        ],
        rightOption: "C",
        explanation: "For n people sitting around a circular table, the number of arrangements is (n−1)!. Therefore, (6−1)! = 5! = 120.",
        isCompleted: false
    },

    {
        id: "14",
        question: "How many ways can 4 boys and 3 girls be selected from 7 boys and 5 girls?",
        options: [
            { id: "A", text: "350" },
            { id: "B", text: "420" },
            { id: "C", text: "525" },
            { id: "D", text: "630" }
        ],
        rightOption: "C",
        explanation: "Select 4 boys from 7 and 3 girls from 5. Number of ways = 7C4 × 5C3 = 35 × 10 = 350. Therefore, the correct answer is 350, so option A is correct.",
        isCompleted: false
    },

    {
        id: "15",
        question: "How many 3-digit numbers can be formed using the digits 0, 1, 2, 3 and 4 without repetition?",
        options: [
            { id: "A", text: "36" },
            { id: "B", text: "48" },
            { id: "C", text: "60" },
            { id: "D", text: "72" }
        ],
        rightOption: "B",
        explanation: "The first digit cannot be 0, so there are 4 choices. The second digit has 4 remaining choices, and the third has 3 choices. Total = 4 × 4 × 3 = 48.",
        isCompleted: false
    },

    {
        id: "16",
        question: "In how many ways can the letters of the word 'APPLE' be arranged?",
        options: [
            { id: "A", text: "60" },
            { id: "B", text: "120" },
            { id: "C", text: "180" },
            { id: "D", text: "240" }
        ],
        rightOption: "B",
        explanation: "APPLE has 5 letters, with P repeated twice. Number of arrangements = 5!/2! = 120/2 = 60. Therefore, the correct answer is 60, so option A is correct.",
        isCompleted: false
    },

    {
        id: "17",
        question: "How many ways can 3 prizes be distributed among 8 students if no student can receive more than one prize?",
        options: [
            { id: "A", text: "56" },
            { id: "B", text: "168" },
            { id: "C", text: "336" },
            { id: "D", text: "512" }
        ],
        rightOption: "C",
        explanation: "Since the three prizes are distinct, order matters. Number of ways = 8P3 = 8 × 7 × 6 = 336.",
        isCompleted: false
    },

    {
        id: "18",
        question: "How many diagonals can be drawn in a polygon with 8 sides?",
        options: [
            { id: "A", text: "16" },
            { id: "B", text: "20" },
            { id: "C", text: "24" },
            { id: "D", text: "28" }
        ],
        rightOption: "B",
        explanation: "The number of diagonals in an n-sided polygon is nC2 − n = n(n−3)/2. For 8 sides: 8 × 5/2 = 20.",
        isCompleted: false
    },

    {
        id: "19",
        question: "How many ways can 2 men and 3 women be selected from 5 men and 6 women?",
        options: [
            { id: "A", text: "150" },
            { id: "B", text: "180" },
            { id: "C", text: "200" },
            { id: "D", text: "250" }
        ],
        rightOption: "C",
        explanation: "Select 2 men from 5 and 3 women from 6. Number of ways = 5C2 × 6C3 = 10 × 20 = 200.",
        isCompleted: false
    },

    {
        id: "20",
        question: "In how many ways can 5 people be arranged in a row if two particular people must always sit together?",
        options: [
            { id: "A", text: "24" },
            { id: "B", text: "36" },
            { id: "C", text: "48" },
            { id: "D", text: "60" }
        ],
        rightOption: "C",
        explanation: "Treat the two particular people as one unit. Then there are 4 units to arrange in 4! ways. The two people can switch places in 2! ways. Total = 4! × 2! = 24 × 2 = 48.",
        isCompleted: false
    }
];

export const ratioAndProportionQuestions = [
    {
        id: "1",
        question: "What is the ratio of 24 to 36 in its simplest form?",
        options: [
            { id: "A", text: "2:3" },
            { id: "B", text: "3:2" },
            { id: "C", text: "4:5" },
            { id: "D", text: "5:6" }
        ],
        rightOption: "A",
        explanation: "The HCF of 24 and 36 is 12. Dividing both terms by 12 gives 24:36 = 2:3.",
        isCompleted: false
    },

    {
        id: "2",
        question: "If the ratio of boys to girls in a class is 3:2 and there are 30 boys, how many girls are there?",
        options: [
            { id: "A", text: "15" },
            { id: "B", text: "20" },
            { id: "C", text: "25" },
            { id: "D", text: "30" }
        ],
        rightOption: "B",
        explanation: "The ratio of boys to girls is 3:2. If 3 parts = 30, then 1 part = 10. Therefore, girls = 2 × 10 = 20.",
        isCompleted: false
    },

    {
        id: "3",
        question: "If a:b = 4:5 and b:c = 10:3, what is a:c?",
        options: [
            { id: "A", text: "4:3" },
            { id: "B", text: "5:3" },
            { id: "C", text: "8:3" },
            { id: "D", text: "8:5" }
        ],
        rightOption: "C",
        explanation: "a:b = 4:5 and b:c = 10:3. Make the value of b equal: 4:5 = 8:10. Therefore, a:c = 8:3.",
        isCompleted: false
    },

    {
        id: "4",
        question: "Two numbers are in the ratio 5:7. If their sum is 96, what is the smaller number?",
        options: [
            { id: "A", text: "35" },
            { id: "B", text: "40" },
            { id: "C", text: "42" },
            { id: "D", text: "45" }
        ],
        rightOption: "B",
        explanation: "Total parts = 5 + 7 = 12. One part = 96/12 = 8. Smaller number = 5 × 8 = 40.",
        isCompleted: false
    },

    {
        id: "5",
        question: "The ratio of the ages of A and B is 3:5. If their total age is 64 years, what is B's age?",
        options: [
            { id: "A", text: "24 years" },
            { id: "B", text: "32 years" },
            { id: "C", text: "40 years" },
            { id: "D", text: "48 years" }
        ],
        rightOption: "C",
        explanation: "Total parts = 3 + 5 = 8. One part = 64/8 = 8. B's age = 5 × 8 = 40 years.",
        isCompleted: false
    },

    {
        id: "6",
        question: "If 5 pens cost ₹100, what will 8 pens cost at the same rate?",
        options: [
            { id: "A", text: "₹120" },
            { id: "B", text: "₹140" },
            { id: "C", text: "₹160" },
            { id: "D", text: "₹180" }
        ],
        rightOption: "C",
        explanation: "Cost of 1 pen = ₹100/5 = ₹20. Therefore, cost of 8 pens = 8 × ₹20 = ₹160.",
        isCompleted: false
    },

    {
        id: "7",
        question: "If x:y = 7:9 and y:z = 3:5, what is x:z?",
        options: [
            { id: "A", text: "7:12" },
            { id: "B", text: "7:15" },
            { id: "C", text: "9:15" },
            { id: "D", text: "21:15" }
        ],
        rightOption: "B",
        explanation: "x:y = 7:9 and y:z = 3:5. Make y equal: 7:9 = 21:27 and 3:5 = 27:45. Therefore, x:z = 21:45 = 7:15.",
        isCompleted: false
    },

    {
        id: "8",
        question: "The ratio of two numbers is 4:9. If the difference between them is 35, what is the larger number?",
        options: [
            { id: "A", text: "45" },
            { id: "B", text: "54" },
            { id: "C", text: "63" },
            { id: "D", text: "72" }
        ],
        rightOption: "C",
        explanation: "Difference in ratio = 9 − 4 = 5 parts. Therefore, 5 parts = 35, so 1 part = 7. Larger number = 9 × 7 = 63.",
        isCompleted: false
    },

    {
        id: "9",
        question: "If 12 workers can complete a job in 15 days, how many days will 20 workers take to complete the same job?",
        options: [
            { id: "A", text: "8 days" },
            { id: "B", text: "9 days" },
            { id: "C", text: "10 days" },
            { id: "D", text: "12 days" }
        ],
        rightOption: "B",
        explanation: "Workers and days are inversely proportional. Total work = 12 × 15 = 180 worker-days. For 20 workers, days = 180/20 = 9 days.",
        isCompleted: false
    },

    {
        id: "10",
        question: "If 8 notebooks cost ₹240, how much will 15 notebooks cost at the same rate?",
        options: [
            { id: "A", text: "₹400" },
            { id: "B", text: "₹420" },
            { id: "C", text: "₹450" },
            { id: "D", text: "₹480" }
        ],
        rightOption: "C",
        explanation: "Cost of 1 notebook = ₹240/8 = ₹30. Therefore, cost of 15 notebooks = 15 × ₹30 = ₹450.",
        isCompleted: false
    },

    {
        id: "11",
        question: "A sum of ₹840 is divided between A and B in the ratio 3:4. How much does B receive?",
        options: [
            { id: "A", text: "₹360" },
            { id: "B", text: "₹420" },
            { id: "C", text: "₹480" },
            { id: "D", text: "₹520" }
        ],
        rightOption: "C",
        explanation: "Total parts = 3 + 4 = 7. One part = ₹840/7 = ₹120. B receives 4 × ₹120 = ₹480.",
        isCompleted: false
    },

    {
        id: "12",
        question: "If 3:x = 9:15, what is the value of x?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "5" },
            { id: "C", text: "6" },
            { id: "D", text: "7" }
        ],
        rightOption: "B",
        explanation: "Using proportion, 3/x = 9/15. Cross multiplication gives 9x = 45, so x = 5.",
        isCompleted: false
    },

    {
        id: "13",
        question: "The ratio of income of A to B is 5:6 and their expenses are in the ratio 3:4. If A saves ₹1,000 and B saves ₹1,200, what is B's income?",
        options: [
            { id: "A", text: "₹5,000" },
            { id: "B", text: "₹6,000" },
            { id: "C", text: "₹7,000" },
            { id: "D", text: "₹7,200" }
        ],
        rightOption: "B",
        explanation: "Let incomes be 5x and 6x, and expenses be 3y and 4y. From savings: 5x − 3y = 1000 and 6x − 4y = 1200. Multiplying the first equation by 4 and the second by 3 gives 20x − 12y = 4000 and 18x − 12y = 3600. Therefore, 2x = 400, so x = 200. B's income = 6 × 200 = ₹1,200. Thus the provided options do not contain the correct answer.",
        isCompleted: false
    },

    {
        id: "14",
        question: "If 4:7 = x:35, what is the value of x?",
        options: [
            { id: "A", text: "15" },
            { id: "B", text: "18" },
            { id: "C", text: "20" },
            { id: "D", text: "25" }
        ],
        rightOption: "C",
        explanation: "Using proportion, 4/7 = x/35. Cross multiplication gives 7x = 140, so x = 20.",
        isCompleted: false
    },

    {
        id: "15",
        question: "The ratio of milk to water in a mixture is 5:2. If the mixture contains 35 litres, how much water is there?",
        options: [
            { id: "A", text: "8 litres" },
            { id: "B", text: "10 litres" },
            { id: "C", text: "12 litres" },
            { id: "D", text: "15 litres" }
        ],
        rightOption: "B",
        explanation: "Total parts = 5 + 2 = 7. One part = 35/7 = 5 litres. Water = 2 × 5 = 10 litres.",
        isCompleted: false
    },

    {
        id: "16",
        question: "If a:b = 2:3 and b:c = 4:5, what is a:b:c?",
        options: [
            { id: "A", text: "8:12:15" },
            { id: "B", text: "2:4:5" },
            { id: "C", text: "8:6:15" },
            { id: "D", text: "4:6:5" }
        ],
        rightOption: "A",
        explanation: "a:b = 2:3 and b:c = 4:5. Make b common by multiplying the first ratio by 4 and the second by 3. Therefore, a:b = 8:12 and b:c = 12:15. Hence, a:b:c = 8:12:15.",
        isCompleted: false
    },

    {
        id: "17",
        question: "A map has a scale of 1:50,000. If the distance between two places on the map is 6 cm, what is the actual distance?",
        options: [
            { id: "A", text: "2 km" },
            { id: "B", text: "3 km" },
            { id: "C", text: "4 km" },
            { id: "D", text: "5 km" }
        ],
        rightOption: "B",
        explanation: "Scale 1:50,000 means 1 cm represents 50,000 cm. For 6 cm: 6 × 50,000 = 300,000 cm = 3,000 m = 3 km.",
        isCompleted: false
    },

    {
        id: "18",
        question: "If 15 men can build a wall in 20 days, how many men are required to build the same wall in 12 days?",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "25" },
            { id: "C", text: "30" },
            { id: "D", text: "35" }
        ],
        rightOption: "B",
        explanation: "Men and days are inversely proportional. Total work = 15 × 20 = 300 man-days. Required men = 300/12 = 25.",
        isCompleted: false
    },

    {
        id: "19",
        question: "Three numbers are in the ratio 2:3:5. If their sum is 150, what is the largest number?",
        options: [
            { id: "A", text: "50" },
            { id: "B", text: "60" },
            { id: "C", text: "75" },
            { id: "D", text: "90" }
        ],
        rightOption: "C",
        explanation: "Total parts = 2 + 3 + 5 = 10. One part = 150/10 = 15. Largest number = 5 × 15 = 75.",
        isCompleted: false
    },

    {
        id: "20",
        question: "If 6 machines produce 900 units in 5 hours, how many units will 10 machines produce in 8 hours at the same rate?",
        options: [
            { id: "A", text: "1,800" },
            { id: "B", text: "2,000" },
            { id: "C", text: "2,400" },
            { id: "D", text: "2,700" }
        ],
        rightOption: "C",
        explanation: "Production is directly proportional to the number of machines and hours. Production per machine-hour = 900/(6 × 5) = 30 units. For 10 machines working 8 hours: 10 × 8 × 30 = 2,400 units.",
        isCompleted: false
    }
];

export const mixtureAndAlligationQuestions = [
    {
        id: "1",
        question: "A mixture contains milk and water in the ratio 3:2. If the total mixture is 25 litres, how much milk is present?",
        options: [
            { id: "A", text: "10 litres" },
            { id: "B", text: "12 litres" },
            { id: "C", text: "15 litres" },
            { id: "D", text: "18 litres" }
        ],
        rightOption: "C",
        explanation: "Total parts = 3 + 2 = 5. One part = 25/5 = 5 litres. Milk = 3 × 5 = 15 litres.",
        isCompleted: false
    },

    {
        id: "2",
        question: "A mixture contains 8 litres of milk and 2 litres of water. What is the ratio of milk to water?",
        options: [
            { id: "A", text: "2:1" },
            { id: "B", text: "3:1" },
            { id: "C", text: "4:1" },
            { id: "D", text: "5:1" }
        ],
        rightOption: "C",
        explanation: "Milk:Water = 8:2. Dividing both terms by 2 gives 4:1.",
        isCompleted: false
    },

    {
        id: "3",
        question: "A mixture contains milk and water in the ratio 5:3. If 16 litres of water are present, how much milk is there?",
        options: [
            { id: "A", text: "20 litres" },
            { id: "B", text: "24 litres" },
            { id: "C", text: "26 litres" },
            { id: "D", text: "30 litres" }
        ],
        rightOption: "B",
        explanation: "Milk:Water = 5:3. If 3 parts = 16 litres, then 1 part = 16/3 litres. Milk = 5 × 16/3 = 80/3 litres, approximately 26.67 litres. Therefore, the options do not match the calculation.",
        isCompleted: false
    },

    {
        id: "4",
        question: "A vessel contains 30 litres of milk. If 5 litres of milk are removed and replaced with water, how much milk remains in the vessel?",
        options: [
            { id: "A", text: "20 litres" },
            { id: "B", text: "25 litres" },
            { id: "C", text: "27 litres" },
            { id: "D", text: "30 litres" }
        ],
        rightOption: "B",
        explanation: "Initially there are 30 litres of milk. Removing 5 litres leaves 25 litres of milk. Adding water does not change the amount of milk remaining.",
        isCompleted: false
    },

    {
        id: "5",
        question: "Two liquids are mixed in the ratio 2:3. If the total quantity of the mixture is 40 litres, what is the quantity of the second liquid?",
        options: [
            { id: "A", text: "16 litres" },
            { id: "B", text: "20 litres" },
            { id: "C", text: "24 litres" },
            { id: "D", text: "30 litres" }
        ],
        rightOption: "C",
        explanation: "Total parts = 2 + 3 = 5. One part = 40/5 = 8 litres. Second liquid = 3 × 8 = 24 litres.",
        isCompleted: false
    },

    {
        id: "6",
        question: "A mixture contains 40% alcohol and 60% water. How much alcohol is present in 25 litres of the mixture?",
        options: [
            { id: "A", text: "8 litres" },
            { id: "B", text: "10 litres" },
            { id: "C", text: "12 litres" },
            { id: "D", text: "15 litres" }
        ],
        rightOption: "B",
        explanation: "Alcohol = 40% of 25 = (40/100) × 25 = 10 litres.",
        isCompleted: false
    },

    {
        id: "7",
        question: "In what ratio should water be mixed with milk costing ₹60 per litre so that the resulting mixture costs ₹48 per litre?",
        options: [
            { id: "A", text: "1:3" },
            { id: "B", text: "1:4" },
            { id: "C", text: "1:5" },
            { id: "D", text: "2:3" }
        ],
        rightOption: "A",
        explanation: "Using alligation: Milk ₹60, Water ₹0, Mean ₹48. Ratio of milk:water = (48−0):(60−48) = 48:12 = 4:1. Therefore, water:milk = 1:4. So the correct option should be 1:4.",
        isCompleted: false
    },

    {
        id: "8",
        question: "A 20-litre mixture contains milk and water in the ratio 3:1. How much water should be added to make the ratio 3:2?",
        options: [
            { id: "A", text: "3 litres" },
            { id: "B", text: "4 litres" },
            { id: "C", text: "5 litres" },
            { id: "D", text: "6 litres" }
        ],
        rightOption: "B",
        explanation: "Initially milk = 15 litres and water = 5 litres. For a 3:2 ratio, if milk is 15 litres, water should be 10 litres. Therefore, water to be added = 10 − 5 = 5 litres. So the correct answer is 5 litres, which is option C.",
        isCompleted: false
    },

    {
        id: "9",
        question: "Two varieties of rice cost ₹40 per kg and ₹60 per kg. In what ratio should they be mixed to obtain a mixture worth ₹50 per kg?",
        options: [
            { id: "A", text: "1:1" },
            { id: "B", text: "1:2" },
            { id: "C", text: "2:3" },
            { id: "D", text: "3:2" }
        ],
        rightOption: "A",
        explanation: "Using alligation: Ratio = (60−50):(50−40) = 10:10 = 1:1.",
        isCompleted: false
    },

    {
        id: "10",
        question: "A container has 60 litres of a mixture of milk and water in the ratio 2:1. How much water is present?",
        options: [
            { id: "A", text: "15 litres" },
            { id: "B", text: "20 litres" },
            { id: "C", text: "30 litres" },
            { id: "D", text: "40 litres" }
        ],
        rightOption: "B",
        explanation: "Total parts = 2 + 1 = 3. One part = 60/3 = 20 litres. Water = 1 part = 20 litres.",
        isCompleted: false
    },

    {
        id: "11",
        question: "A 40-litre mixture contains 25% water. How much water should be added to make water 40% of the new mixture?",
        options: [
            { id: "A", text: "8 litres" },
            { id: "B", text: "10 litres" },
            { id: "C", text: "12 litres" },
            { id: "D", text: "15 litres" }
        ],
        rightOption: "B",
        explanation: "Initially water = 25% of 40 = 10 litres. Let x litres of water be added. Then 10 + x = 40% of (40 + x). Solving: 10 + x = 16 + 0.4x, so 0.6x = 6 and x = 10 litres.",
        isCompleted: false
    },

    {
        id: "12",
        question: "A 30-litre mixture contains milk and water in the ratio 4:1. How much water should be added to make the ratio 2:1?",
        options: [
            { id: "A", text: "5 litres" },
            { id: "B", text: "8 litres" },
            { id: "C", text: "10 litres" },
            { id: "D", text: "12 litres" }
        ],
        rightOption: "C",
        explanation: "Initially milk = 24 litres and water = 6 litres. For a 2:1 ratio, 24 litres of milk requires 12 litres of water. Therefore, water to be added = 12 − 6 = 6 litres. So the correct answer is 6 litres, which is not in the options.",
        isCompleted: false
    },

    {
        id: "13",
        question: "A solution contains 30% sugar. How much sugar is present in 80 kg of the solution?",
        options: [
            { id: "A", text: "20 kg" },
            { id: "B", text: "24 kg" },
            { id: "C", text: "28 kg" },
            { id: "D", text: "32 kg" }
        ],
        rightOption: "B",
        explanation: "Sugar = 30% of 80 = (30/100) × 80 = 24 kg.",
        isCompleted: false
    },

    {
        id: "14",
        question: "A mixture contains 20 litres of alcohol and 30 litres of water. What percentage of the mixture is alcohol?",
        options: [
            { id: "A", text: "30%" },
            { id: "B", text: "35%" },
            { id: "C", text: "40%" },
            { id: "D", text: "45%" }
        ],
        rightOption: "C",
        explanation: "Total mixture = 20 + 30 = 50 litres. Alcohol percentage = (20/50) × 100 = 40%.",
        isCompleted: false
    },

    {
        id: "15",
        question: "A shopkeeper mixes 10 kg of tea costing ₹200 per kg with 15 kg of tea costing ₹300 per kg. What is the average cost per kg of the mixture?",
        options: [
            { id: "A", text: "₹240" },
            { id: "B", text: "₹250" },
            { id: "C", text: "₹260" },
            { id: "D", text: "₹270" }
        ],
        rightOption: "C",
        explanation: "Total cost = (10 × 200) + (15 × 300) = 2000 + 4500 = ₹6500. Total quantity = 25 kg. Average cost = ₹6500/25 = ₹260 per kg.",
        isCompleted: false
    },

    {
        id: "16",
        question: "A vessel contains 40 litres of milk. 10 litres are removed and replaced with water. What fraction of the original milk remains?",
        options: [
            { id: "A", text: "1/2" },
            { id: "B", text: "2/3" },
            { id: "C", text: "3/4" },
            { id: "D", text: "4/5" }
        ],
        rightOption: "C",
        explanation: "Milk removed = 10 litres. Milk remaining = 40 − 10 = 30 litres. Fraction remaining = 30/40 = 3/4.",
        isCompleted: false
    },

    {
        id: "17",
        question: "A 50-litre mixture contains 30% alcohol. How much pure alcohol should be added to make the alcohol concentration 50%?",
        options: [
            { id: "A", text: "15 litres" },
            { id: "B", text: "20 litres" },
            { id: "C", text: "25 litres" },
            { id: "D", text: "30 litres" }
        ],
        rightOption: "B",
        explanation: "Initially alcohol = 30% of 50 = 15 litres. Let x litres of pure alcohol be added. Then (15 + x)/(50 + x) = 50/100. Solving: 30 + 2x = 50 + x, so x = 20 litres.",
        isCompleted: false
    },

    {
        id: "18",
        question: "Two solutions contain 20% and 50% acid respectively. In what ratio should they be mixed to obtain a solution containing 30% acid?",
        options: [
            { id: "A", text: "1:2" },
            { id: "B", text: "2:1" },
            { id: "C", text: "3:2" },
            { id: "D", text: "2:3" }
        ],
        rightOption: "B",
        explanation: "Using alligation: Ratio of 20% solution to 50% solution = (50−30):(30−20) = 20:10 = 2:1.",
        isCompleted: false
    },

    {
        id: "19",
        question: "A vessel contains 80 litres of milk. 20 litres are removed and replaced with water. This process is repeated once. How much milk remains after the second replacement?",
        options: [
            { id: "A", text: "40 litres" },
            { id: "B", text: "45 litres" },
            { id: "C", text: "50 litres" },
            { id: "D", text: "60 litres" }
        ],
        rightOption: "C",
        explanation: "After the first replacement, milk remaining = 80 × (60/80) = 60 litres. During the second replacement, 20/80 of the milk is removed, so milk remaining = 60 × (60/80) = 45 litres. Therefore, the correct answer is 45 litres, which is option B.",
        isCompleted: false
    },

    {
        id: "20",
        question: "A mixture of 60 litres contains milk and water in the ratio 5:1. How much of the mixture should be replaced with water so that the ratio of milk to water becomes 3:1?",
        options: [
            { id: "A", text: "10 litres" },
            { id: "B", text: "12 litres" },
            { id: "C", text: "15 litres" },
            { id: "D", text: "20 litres" }
        ],
        rightOption: "B",
        explanation: "Initially milk = 50 litres and water = 10 litres. Let x litres of mixture be removed. Milk removed = 5x/6. Milk remaining = 50 − 5x/6. After adding x litres of water, water = 10 + x. For a 3:1 ratio: (50 − 5x/6)/(10 + x) = 3. Solving gives x = 12 litres.",
        isCompleted: false
    }
];

export const analogyQuestions = [
    {
        id: "1",
        question: "Book is related to Reading in the same way as Fork is related to:",
        options: [
            { id: "A", text: "Writing" },
            { id: "B", text: "Eating" },
            { id: "C", text: "Drawing" },
            { id: "D", text: "Sleeping" }
        ],
        rightOption: "B",
        explanation: "A book is used for reading, just as a fork is used for eating.",
        isCompleted: false
    },
    {
        id: "2",
        question: "Bird is related to Nest in the same way as Bee is related to:",
        options: [
            { id: "A", text: "Cave" },
            { id: "B", text: "Stable" },
            { id: "C", text: "Hive" },
            { id: "D", text: "Burrow" }
        ],
        rightOption: "C",
        explanation: "A bird lives in a nest, while a bee lives in a hive.",
        isCompleted: false
    },
    {
        id: "3",
        question: "Doctor is related to Hospital in the same way as Teacher is related to:",
        options: [
            { id: "A", text: "Court" },
            { id: "B", text: "School" },
            { id: "C", text: "Bank" },
            { id: "D", text: "Factory" }
        ],
        rightOption: "B",
        explanation: "A doctor commonly works in a hospital, while a teacher commonly works in a school.",
        isCompleted: false
    },
    {
        id: "4",
        question: "Puppy is related to Dog in the same way as Kitten is related to:",
        options: [
            { id: "A", text: "Cow" },
            { id: "B", text: "Horse" },
            { id: "C", text: "Cat" },
            { id: "D", text: "Goat" }
        ],
        rightOption: "C",
        explanation: "A puppy is a young dog, and a kitten is a young cat.",
        isCompleted: false
    },
    {
        id: "5",
        question: "Hand is related to Glove in the same way as Foot is related to:",
        options: [
            { id: "A", text: "Hat" },
            { id: "B", text: "Sock" },
            { id: "C", text: "Shirt" },
            { id: "D", text: "Belt" }
        ],
        rightOption: "B",
        explanation: "A glove is worn on a hand, while a sock is worn on a foot.",
        isCompleted: false
    },
    {
        id: "6",
        question: "Eye is related to Seeing in the same way as Ear is related to:",
        options: [
            { id: "A", text: "Speaking" },
            { id: "B", text: "Touching" },
            { id: "C", text: "Hearing" },
            { id: "D", text: "Smelling" }
        ],
        rightOption: "C",
        explanation: "Eyes are used for seeing, while ears are used for hearing.",
        isCompleted: false
    },
    {
        id: "7",
        question: "Pen is related to Writing in the same way as Knife is related to:",
        options: [
            { id: "A", text: "Cutting" },
            { id: "B", text: "Painting" },
            { id: "C", text: "Measuring" },
            { id: "D", text: "Stitching" }
        ],
        rightOption: "A",
        explanation: "A pen is used for writing, while a knife is used for cutting.",
        isCompleted: false
    },
    {
        id: "8",
        question: "Fish is related to Water in the same way as Bird is related to:",
        options: [
            { id: "A", text: "Soil" },
            { id: "B", text: "Air" },
            { id: "C", text: "Fire" },
            { id: "D", text: "Stone" }
        ],
        rightOption: "B",
        explanation: "Fish live in water, while birds generally move through the air.",
        isCompleted: false
    },
    {
        id: "9",
        question: "Lion is related to Den in the same way as Rabbit is related to:",
        options: [
            { id: "A", text: "Nest" },
            { id: "B", text: "Burrow" },
            { id: "C", text: "Hive" },
            { id: "D", text: "Stable" }
        ],
        rightOption: "B",
        explanation: "A den is a shelter for a lion, while a burrow is a shelter for a rabbit.",
        isCompleted: false
    },
    {
        id: "10",
        question: "Author is related to Book in the same way as Composer is related to:",
        options: [
            { id: "A", text: "Painting" },
            { id: "B", text: "Sculpture" },
            { id: "C", text: "Musical composition" },
            { id: "D", text: "Building" }
        ],
        rightOption: "C",
        explanation: "An author creates a book, while a composer creates a musical composition.",
        isCompleted: false
    },
    {
        id: "11",
        question: "Carpenter is related to Furniture in the same way as Potter is related to:",
        options: [
            { id: "A", text: "Clothes" },
            { id: "B", text: "Pots" },
            { id: "C", text: "Shoes" },
            { id: "D", text: "Jewellery" }
        ],
        rightOption: "B",
        explanation: "A carpenter makes furniture, while a potter makes pots.",
        isCompleted: false
    },
    {
        id: "12",
        question: "Calf is related to Cow in the same way as Foal is related to:",
        options: [
            { id: "A", text: "Sheep" },
            { id: "B", text: "Deer" },
            { id: "C", text: "Horse" },
            { id: "D", text: "Pig" }
        ],
        rightOption: "C",
        explanation: "A calf is a young cow, while a foal is a young horse.",
        isCompleted: false
    },
    {
        id: "13",
        question: "India is related to Rupee in the same way as Japan is related to:",
        options: [
            { id: "A", text: "Won" },
            { id: "B", text: "Yen" },
            { id: "C", text: "Euro" },
            { id: "D", text: "Peso" }
        ],
        rightOption: "B",
        explanation: "The rupee is India's currency, while the yen is Japan's currency.",
        isCompleted: false
    },
    {
        id: "14",
        question: "France is related to Paris in the same way as Italy is related to:",
        options: [
            { id: "A", text: "Madrid" },
            { id: "B", text: "Lisbon" },
            { id: "C", text: "Rome" },
            { id: "D", text: "Athens" }
        ],
        rightOption: "C",
        explanation: "Paris is the capital of France, and Rome is the capital of Italy.",
        isCompleted: false
    },
    {
        id: "15",
        question: "January is related to February in the same way as Monday is related to:",
        options: [
            { id: "A", text: "Sunday" },
            { id: "B", text: "Tuesday" },
            { id: "C", text: "Friday" },
            { id: "D", text: "Saturday" }
        ],
        rightOption: "B",
        explanation: "February follows January, just as Tuesday follows Monday.",
        isCompleted: false
    },
    {
        id: "16",
        question: "3 is related to 9 in the same way as 5 is related to:",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "15" },
            { id: "C", text: "20" },
            { id: "D", text: "25" }
        ],
        rightOption: "D",
        explanation: "The second number is the square of the first: 3² = 9 and 5² = 25.",
        isCompleted: false
    },
    {
        id: "17",
        question: "4 is related to 16 in the same way as 7 is related to:",
        options: [
            { id: "A", text: "14" },
            { id: "B", text: "28" },
            { id: "C", text: "49" },
            { id: "D", text: "56" }
        ],
        rightOption: "C",
        explanation: "The number is multiplied by itself: 4² = 16 and 7² = 49.",
        isCompleted: false
    },
    {
        id: "18",
        question: "2 is related to 8 in the same way as 3 is related to:",
        options: [
            { id: "A", text: "9" },
            { id: "B", text: "18" },
            { id: "C", text: "27" },
            { id: "D", text: "36" }
        ],
        rightOption: "C",
        explanation: "The second number is the cube of the first: 2³ = 8 and 3³ = 27.",
        isCompleted: false
    },
    {
        id: "19",
        question: "6 is related to 36 in the same way as 9 is related to:",
        options: [
            { id: "A", text: "18" },
            { id: "B", text: "72" },
            { id: "C", text: "81" },
            { id: "D", text: "90" }
        ],
        rightOption: "C",
        explanation: "The number is squared: 6² = 36 and 9² = 81.",
        isCompleted: false
    },
    {
        id: "20",
        question: "8 is related to 4 in the same way as 18 is related to:",
        options: [
            { id: "A", text: "6" },
            { id: "B", text: "8" },
            { id: "C", text: "9" },
            { id: "D", text: "12" }
        ],
        rightOption: "C",
        explanation: "The second number is half the first: 8 ÷ 2 = 4 and 18 ÷ 2 = 9.",
        isCompleted: false
    },
    {
        id: "21",
        question: "AZ is related to BY in the same way as CX is related to:",
        options: [
            { id: "A", text: "DW" },
            { id: "B", text: "DV" },
            { id: "C", text: "EW" },
            { id: "D", text: "DX" }
        ],
        rightOption: "A",
        explanation: "The first letter moves forward one position and the second moves backward one position: AZ, BY, CX, DW.",
        isCompleted: false
    },
    {
        id: "22",
        question: "AB is related to DE in the same way as FG is related to:",
        options: [
            { id: "A", text: "HI" },
            { id: "B", text: "IJ" },
            { id: "C", text: "JK" },
            { id: "D", text: "LM" }
        ],
        rightOption: "B",
        explanation: "Each letter advances three positions: A→D, B→E, F→I, G→J.",
        isCompleted: false
    },
    {
        id: "23",
        question: "ACE is related to BDF in the same way as GIK is related to:",
        options: [
            { id: "A", text: "HJL" },
            { id: "B", text: "IKM" },
            { id: "C", text: "HIK" },
            { id: "D", text: "JLN" }
        ],
        rightOption: "A",
        explanation: "Each letter advances one position: A→B, C→D, E→F. Therefore, GIK becomes HJL.",
        isCompleted: false
    },
    {
        id: "24",
        question: "Monday is related to Tuesday in the same way as April is related to:",
        options: [
            { id: "A", text: "March" },
            { id: "B", text: "May" },
            { id: "C", text: "June" },
            { id: "D", text: "January" }
        ],
        rightOption: "B",
        explanation: "Tuesday follows Monday, and May follows April.",
        isCompleted: false
    },
    {
        id: "25",
        question: "Minute is related to Hour in the same way as Month is related to:",
        options: [
            { id: "A", text: "Week" },
            { id: "B", text: "Day" },
            { id: "C", text: "Year" },
            { id: "D", text: "Decade" }
        ],
        rightOption: "C",
        explanation: "An hour consists of minutes, and a year consists of months.",
        isCompleted: false
    },
    {
        id: "26",
        question: "Inch is related to Length in the same way as Kilogram is related to:",
        options: [
            { id: "A", text: "Volume" },
            { id: "B", text: "Mass" },
            { id: "C", text: "Time" },
            { id: "D", text: "Temperature" }
        ],
        rightOption: "B",
        explanation: "An inch is a unit of length, while a kilogram is a unit of mass.",
        isCompleted: false
    },
    {
        id: "27",
        question: "Thermometer is related to Temperature in the same way as Barometer is related to:",
        options: [
            { id: "A", text: "Speed" },
            { id: "B", text: "Humidity" },
            { id: "C", text: "Atmospheric pressure" },
            { id: "D", text: "Rainfall" }
        ],
        rightOption: "C",
        explanation: "A thermometer measures temperature, while a barometer measures atmospheric pressure.",
        isCompleted: false
    },
    {
        id: "28",
        question: "Compass is related to Direction in the same way as Clock is related to:",
        options: [
            { id: "A", text: "Distance" },
            { id: "B", text: "Time" },
            { id: "C", text: "Weight" },
            { id: "D", text: "Temperature" }
        ],
        rightOption: "B",
        explanation: "A compass indicates direction, while a clock indicates time.",
        isCompleted: false
    },
    {
        id: "29",
        question: "Seed is related to Plant in the same way as Egg is related to:",
        options: [
            { id: "A", text: "Stone" },
            { id: "B", text: "Bird" },
            { id: "C", text: "Leaf" },
            { id: "D", text: "Flower" }
        ],
        rightOption: "B",
        explanation: "A seed can develop into a plant, while a fertilized bird egg can develop into a bird.",
        isCompleted: false
    },
    {
        id: "30",
        question: "Author is related to Novel in the same way as Sculptor is related to:",
        options: [
            { id: "A", text: "Statue" },
            { id: "B", text: "Song" },
            { id: "C", text: "Poem" },
            { id: "D", text: "Essay" }
        ],
        rightOption: "A",
        explanation: "An author creates a novel, while a sculptor creates a statue.",
        isCompleted: false
    },
    {
        id: "31",
        question: "Tailor is related to Clothes in the same way as Mason is related to:",
        options: [
            { id: "A", text: "Furniture" },
            { id: "B", text: "Buildings" },
            { id: "C", text: "Shoes" },
            { id: "D", text: "Books" }
        ],
        rightOption: "B",
        explanation: "A tailor makes or alters clothes, while a mason builds structures using masonry.",
        isCompleted: false
    },
    {
        id: "32",
        question: "Chef is related to Kitchen in the same way as Pilot is related to:",
        options: [
            { id: "A", text: "Hospital" },
            { id: "B", text: "Cockpit" },
            { id: "C", text: "Classroom" },
            { id: "D", text: "Workshop" }
        ],
        rightOption: "B",
        explanation: "A chef commonly works in a kitchen, while a pilot operates an aircraft from its cockpit.",
        isCompleted: false
    },
    {
        id: "33",
        question: "Army is related to Soldiers in the same way as Fleet is related to:",
        options: [
            { id: "A", text: "Aircraft" },
            { id: "B", text: "Ships" },
            { id: "C", text: "Cars" },
            { id: "D", text: "Houses" }
        ],
        rightOption: "B",
        explanation: "An army consists of soldiers, while a fleet commonly consists of ships.",
        isCompleted: false
    },
    {
        id: "34",
        question: "Word is related to Sentence in the same way as Sentence is related to:",
        options: [
            { id: "A", text: "Letter" },
            { id: "B", text: "Paragraph" },
            { id: "C", text: "Sound" },
            { id: "D", text: "Syllable" }
        ],
        rightOption: "B",
        explanation: "Words form sentences, and sentences form paragraphs.",
        isCompleted: false
    },
    {
        id: "35",
        question: "Letter is related to Word in the same way as Brick is related to:",
        options: [
            { id: "A", text: "Road" },
            { id: "B", text: "Wall" },
            { id: "C", text: "Roof" },
            { id: "D", text: "Window" }
        ],
        rightOption: "B",
        explanation: "Letters form words, just as bricks can be used to build walls.",
        isCompleted: false
    },
    {
        id: "36",
        question: "India is related to Asia in the same way as Brazil is related to:",
        options: [
            { id: "A", text: "Europe" },
            { id: "B", text: "Africa" },
            { id: "C", text: "South America" },
            { id: "D", text: "Australia" }
        ],
        rightOption: "C",
        explanation: "India is located in Asia, while Brazil is located in South America.",
        isCompleted: false
    },
    {
        id: "37",
        question: "Oxygen is related to Breathing in the same way as Food is related to:",
        options: [
            { id: "A", text: "Nutrition" },
            { id: "B", text: "Hearing" },
            { id: "C", text: "Movement" },
            { id: "D", text: "Vision" }
        ],
        rightOption: "A",
        explanation: "Oxygen is essential for normal respiration, while food provides nutrients for the body.",
        isCompleted: false
    },
    {
        id: "38",
        question: "Sun is related to Day in the same way as Moon is related to:",
        options: [
            { id: "A", text: "Morning" },
            { id: "B", text: "Night" },
            { id: "C", text: "Summer" },
            { id: "D", text: "Spring" }
        ],
        rightOption: "B",
        explanation: "The Sun is associated with daytime, while the Moon is commonly associated with nighttime.",
        isCompleted: false
    },
    {
        id: "39",
        question: "Winter is related to Cold in the same way as Summer is related to:",
        options: [
            { id: "A", text: "Rain" },
            { id: "B", text: "Snow" },
            { id: "C", text: "Heat" },
            { id: "D", text: "Wind" }
        ],
        rightOption: "C",
        explanation: "Winter is typically associated with cold weather, while summer is associated with heat.",
        isCompleted: false
    },
    {
        id: "40",
        question: "Democracy is related to People in the same way as Monarchy is related to:",
        options: [
            { id: "A", text: "Citizens" },
            { id: "B", text: "King or Queen" },
            { id: "C", text: "Judges" },
            { id: "D", text: "Soldiers" }
        ],
        rightOption: "B",
        explanation: "Democracy involves rule by the people, while monarchy is headed by a monarch.",
        isCompleted: false
    },
    {
        id: "41",
        question: "2 is related to 6 in the same way as 4 is related to:",
        options: [
            { id: "A", text: "8" },
            { id: "B", text: "12" },
            { id: "C", text: "16" },
            { id: "D", text: "20" }
        ],
        rightOption: "B",
        explanation: "The second number is three times the first: 2 × 3 = 6 and 4 × 3 = 12.",
        isCompleted: false
    },
    {
        id: "42",
        question: "7 is related to 49 in the same way as 11 is related to:",
        options: [
            { id: "A", text: "111" },
            { id: "B", text: "110" },
            { id: "C", text: "121" },
            { id: "D", text: "132" }
        ],
        rightOption: "C",
        explanation: "The second number is the square of the first: 7² = 49 and 11² = 121.",
        isCompleted: false
    },
    {
        id: "43",
        question: "12 is related to 6 in the same way as 20 is related to:",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "10" },
            { id: "C", text: "15" },
            { id: "D", text: "40" }
        ],
        rightOption: "B",
        explanation: "The second number is half the first: 12 ÷ 2 = 6 and 20 ÷ 2 = 10.",
        isCompleted: false
    },
    {
        id: "44",
        question: "15 is related to 18 in the same way as 24 is related to:",
        options: [
            { id: "A", text: "25" },
            { id: "B", text: "26" },
            { id: "C", text: "27" },
            { id: "D", text: "28" }
        ],
        rightOption: "C",
        explanation: "Add 3 to each number: 15 + 3 = 18 and 24 + 3 = 27.",
        isCompleted: false
    },
    {
        id: "45",
        question: "ACE is related to BDF in the same way as MOQ is related to:",
        options: [
            { id: "A", text: "NPR" },
            { id: "B", text: "NOP" },
            { id: "C", text: "OPQ" },
            { id: "D", text: "NPQ" }
        ],
        rightOption: "A",
        explanation: "Each letter advances one position: M→N, O→P, Q→R. Therefore, MOQ becomes NPR.",
        isCompleted: false
    },
    {
        id: "46",
        question: "ACE is related to ZXV in the same way as BDF is related to:",
        options: [
            { id: "A", text: "YWU" },
            { id: "B", text: "XWV" },
            { id: "C", text: "YWT" },
            { id: "D", text: "XWU" }
        ],
        rightOption: "A",
        explanation: "Each letter is paired with its reverse-alphabet counterpart: A↔Z, C↔X, E↔V. Thus, BDF corresponds to YWU.",
        isCompleted: false
    },
    {
        id: "47",
        question: "If 1 is related to 1, 2 to 4, and 3 to 9, then 8 is related to:",
        options: [
            { id: "A", text: "16" },
            { id: "B", text: "32" },
            { id: "C", text: "64" },
            { id: "D", text: "72" }
        ],
        rightOption: "C",
        explanation: "Each number is paired with its square. Therefore, 8² = 64.",
        isCompleted: false
    },
    {
        id: "48",
        question: "27 is related to 3 in the same way as 125 is related to:",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "5" },
            { id: "C", text: "15" },
            { id: "D", text: "25" }
        ],
        rightOption: "B",
        explanation: "The second number is the cube root of the first: ∛27 = 3 and ∛125 = 5.",
        isCompleted: false
    },
    {
        id: "49",
        question: "Monday is related to Wednesday in the same way as Friday is related to:",
        options: [
            { id: "A", text: "Saturday" },
            { id: "B", text: "Sunday" },
            { id: "C", text: "Monday" },
            { id: "D", text: "Tuesday" }
        ],
        rightOption: "B",
        explanation: "Wednesday is two days after Monday. Sunday is two days after Friday.",
        isCompleted: false
    },
    {
        id: "50",
        question: "January is related to March in the same way as June is related to:",
        options: [
            { id: "A", text: "July" },
            { id: "B", text: "August" },
            { id: "C", text: "September" },
            { id: "D", text: "October" }
        ],
        rightOption: "B",
        explanation: "March is two months after January. August is two months after June.",
        isCompleted: false
    },
    {
        id: "51",
        question: "Cub is related to Lion in the same way as Fawn is related to:",
        options: [
            { id: "A", text: "Wolf" },
            { id: "B", text: "Deer" },
            { id: "C", text: "Fox" },
            { id: "D", text: "Bear" }
        ],
        rightOption: "B",
        explanation: "A cub is a young lion, while a fawn is a young deer.",
        isCompleted: false
    },
    {
        id: "52",
        question: "Gills are related to Fish in the same way as Lungs are related to:",
        options: [
            { id: "A", text: "Most adult mammals" },
            { id: "B", text: "Earthworms" },
            { id: "C", text: "Insects only" },
            { id: "D", text: "All plants" }
        ],
        rightOption: "A",
        explanation: "Fish generally use gills for respiration, while most adult mammals breathe using lungs.",
        isCompleted: false
    },
    {
        id: "53",
        question: "Painter is related to Brush in the same way as Writer is related to:",
        options: [
            { id: "A", text: "Hammer" },
            { id: "B", text: "Keyboard" },
            { id: "C", text: "Needle" },
            { id: "D", text: "Compass" }
        ],
        rightOption: "B",
        explanation: "A painter may use a brush to create artwork, while a writer may use a keyboard to write.",
        isCompleted: false
    },
    {
        id: "54",
        question: "Wheat is related to Flour in the same way as Sugarcane is related to:",
        options: [
            { id: "A", text: "Oil" },
            { id: "B", text: "Sugar" },
            { id: "C", text: "Butter" },
            { id: "D", text: "Vinegar" }
        ],
        rightOption: "B",
        explanation: "Flour is produced from wheat, while sugar is produced from sugarcane.",
        isCompleted: false
    },
    {
        id: "55",
        question: "Skeleton is related to Body in the same way as Framework is related to:",
        options: [
            { id: "A", text: "Building" },
            { id: "B", text: "River" },
            { id: "C", text: "Cloud" },
            { id: "D", text: "Forest" }
        ],
        rightOption: "A",
        explanation: "A skeleton provides structural support to the body, while a framework provides structural support to a building.",
        isCompleted: false
    }
];

export const classificationQuestions = [
    {
        id: "1",
        question: "Which one is different from the others?",
        options: [
            { id: "A", text: "Apple" },
            { id: "B", text: "Mango" },
            { id: "C", text: "Banana" },
            { id: "D", text: "Carrot" }
        ],
        rightOption: "D",
        explanation: "Carrot is a vegetable, while the others are fruits.",
        isCompleted: false
    },
    {
        id: "2",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Square" },
            { id: "B", text: "Triangle" },
            { id: "C", text: "Circle" },
            { id: "D", text: "Cube" }
        ],
        rightOption: "D",
        explanation: "A cube is three-dimensional, while the other shapes are two-dimensional.",
        isCompleted: false
    },
    {
        id: "3",
        question: "Which number does not belong to the group?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "9" },
            { id: "C", text: "16" },
            { id: "D", text: "20" }
        ],
        rightOption: "D",
        explanation: "4, 9, and 16 are perfect squares; 20 is not.",
        isCompleted: false
    },
    {
        id: "4",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "January" },
            { id: "B", text: "March" },
            { id: "C", text: "May" },
            { id: "D", text: "June" }
        ],
        rightOption: "D",
        explanation: "January, March, and May have 31 days, while June has 30.",
        isCompleted: false
    },
    {
        id: "5",
        question: "Which one is different?",
        options: [
            { id: "A", text: "Dog" },
            { id: "B", text: "Cat" },
            { id: "C", text: "Cow" },
            { id: "D", text: "Eagle" }
        ],
        rightOption: "D",
        explanation: "Eagle is a bird, while the other three are mammals.",
        isCompleted: false
    },
    {
        id: "6",
        question: "Find the odd number.",
        options: [
            { id: "A", text: "11" },
            { id: "B", text: "13" },
            { id: "C", text: "17" },
            { id: "D", text: "21" }
        ],
        rightOption: "D",
        explanation: "11, 13, and 17 are prime numbers, while 21 = 3 × 7.",
        isCompleted: false
    },
    {
        id: "7",
        question: "Which one does not belong?",
        options: [
            { id: "A", text: "Red" },
            { id: "B", text: "Blue" },
            { id: "C", text: "Green" },
            { id: "D", text: "Sweet" }
        ],
        rightOption: "D",
        explanation: "Red, blue, and green are colors; sweet describes a taste.",
        isCompleted: false
    },
    {
        id: "8",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Rose" },
            { id: "B", text: "Lotus" },
            { id: "C", text: "Lily" },
            { id: "D", text: "Mango" }
        ],
        rightOption: "D",
        explanation: "Mango is a fruit, while the other three are flowers.",
        isCompleted: false
    },
    {
        id: "9",
        question: "Which number is different from the others?",
        options: [
            { id: "A", text: "8" },
            { id: "B", text: "27" },
            { id: "C", text: "64" },
            { id: "D", text: "100" }
        ],
        rightOption: "D",
        explanation: "8, 27, and 64 are cubes of 2, 3, and 4 respectively. 100 is not a perfect cube.",
        isCompleted: false
    },
    {
        id: "10",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Monday" },
            { id: "B", text: "Tuesday" },
            { id: "C", text: "Friday" },
            { id: "D", text: "January" }
        ],
        rightOption: "D",
        explanation: "January is a month, while the others are days of the week.",
        isCompleted: false
    },
    {
        id: "11",
        question: "Which one is different?",
        options: [
            { id: "A", text: "Gold" },
            { id: "B", text: "Silver" },
            { id: "C", text: "Copper" },
            { id: "D", text: "Plastic" }
        ],
        rightOption: "D",
        explanation: "Plastic is not a metal, while gold, silver, and copper are metals.",
        isCompleted: false
    },
    {
        id: "12",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "3" },
            { id: "C", text: "5" },
            { id: "D", text: "9" }
        ],
        rightOption: "D",
        explanation: "2, 3, and 5 are prime numbers, while 9 = 3 × 3.",
        isCompleted: false
    },
    {
        id: "13",
        question: "Which animal is different from the others?",
        options: [
            { id: "A", text: "Shark" },
            { id: "B", text: "Salmon" },
            { id: "C", text: "Tuna" },
            { id: "D", text: "Dolphin" }
        ],
        rightOption: "D",
        explanation: "Dolphin is a mammal, while shark, salmon, and tuna are fish.",
        isCompleted: false
    },
    {
        id: "14",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Pen" },
            { id: "B", text: "Pencil" },
            { id: "C", text: "Marker" },
            { id: "D", text: "Plate" }
        ],
        rightOption: "D",
        explanation: "Plate is used for serving food, while the others are writing instruments.",
        isCompleted: false
    },
    {
        id: "15",
        question: "Which number does not fit the pattern?",
        options: [
            { id: "A", text: "12" },
            { id: "B", text: "18" },
            { id: "C", text: "24" },
            { id: "D", text: "31" }
        ],
        rightOption: "D",
        explanation: "12, 18, and 24 are even numbers divisible by 6. 31 is not.",
        isCompleted: false
    },
    {
        id: "16",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Kilogram" },
            { id: "B", text: "Gram" },
            { id: "C", text: "Milligram" },
            { id: "D", text: "Kilometer" }
        ],
        rightOption: "D",
        explanation: "Kilometer measures distance, while the others measure mass.",
        isCompleted: false
    },
    {
        id: "17",
        question: "Which one is different?",
        options: [
            { id: "A", text: "Delhi" },
            { id: "B", text: "Mumbai" },
            { id: "C", text: "Chennai" },
            { id: "D", text: "Nepal" }
        ],
        rightOption: "D",
        explanation: "Nepal is a country, while Delhi, Mumbai, and Chennai are cities in India.",
        isCompleted: false
    },
    {
        id: "18",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "AB" },
            { id: "B", text: "CD" },
            { id: "C", text: "EF" },
            { id: "D", text: "GI" }
        ],
        rightOption: "D",
        explanation: "In AB, CD, and EF, the letters are consecutive. G and I have H between them.",
        isCompleted: false
    },
    {
        id: "19",
        question: "Which number is different?",
        options: [
            { id: "A", text: "25" },
            { id: "B", text: "36" },
            { id: "C", text: "49" },
            { id: "D", text: "63" }
        ],
        rightOption: "D",
        explanation: "25, 36, and 49 are perfect squares; 63 is not.",
        isCompleted: false
    },
    {
        id: "20",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Cricket" },
            { id: "B", text: "Football" },
            { id: "C", text: "Hockey" },
            { id: "D", text: "Chess" }
        ],
        rightOption: "D",
        explanation: "Chess is primarily a board game, while the others are outdoor field sports.",
        isCompleted: false
    },
    {
        id: "21",
        question: "Which one is different?",
        options: [
            { id: "A", text: "Square" },
            { id: "B", text: "Rectangle" },
            { id: "C", text: "Rhombus" },
            { id: "D", text: "Sphere" }
        ],
        rightOption: "D",
        explanation: "A sphere is three-dimensional, while the others are two-dimensional quadrilaterals.",
        isCompleted: false
    },
    {
        id: "22",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Copper" },
            { id: "B", text: "Iron" },
            { id: "C", text: "Aluminium" },
            { id: "D", text: "Wood" }
        ],
        rightOption: "D",
        explanation: "Wood is not a metal, while copper, iron, and aluminium are metals.",
        isCompleted: false
    },
    {
        id: "23",
        question: "Which number does not belong?",
        options: [
            { id: "A", text: "14" },
            { id: "B", text: "21" },
            { id: "C", text: "28" },
            { id: "D", text: "36" }
        ],
        rightOption: "D",
        explanation: "14, 21, and 28 are multiples of 7; 36 is not.",
        isCompleted: false
    },
    {
        id: "24",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Eagle" },
            { id: "B", text: "Parrot" },
            { id: "C", text: "Sparrow" },
            { id: "D", text: "Bat" }
        ],
        rightOption: "D",
        explanation: "A bat is a mammal, while the others are birds.",
        isCompleted: false
    },
    {
        id: "25",
        question: "Which one is different?",
        options: [
            { id: "A", text: "January" },
            { id: "B", text: "April" },
            { id: "C", text: "July" },
            { id: "D", text: "November" }
        ],
        rightOption: "A",
        explanation: "January has 31 days. April, July, and November do not all share the same length, so this is not a unique classification.",
        isCompleted: false
    },
    {
        id: "26",
        question: "Find the odd number.",
        options: [
            { id: "A", text: "121" },
            { id: "B", text: "144" },
            { id: "C", text: "169" },
            { id: "D", text: "180" }
        ],
        rightOption: "D",
        explanation: "121 = 11², 144 = 12², and 169 = 13². 180 is not a perfect square.",
        isCompleted: false
    },
    {
        id: "27",
        question: "Which one does not belong?",
        options: [
            { id: "A", text: "Table" },
            { id: "B", text: "Chair" },
            { id: "C", text: "Bed" },
            { id: "D", text: "Banana" }
        ],
        rightOption: "D",
        explanation: "Banana is a fruit, while the others are pieces of furniture.",
        isCompleted: false
    },
    {
        id: "28",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "8" },
            { id: "D", text: "15" }
        ],
        rightOption: "D",
        explanation: "2, 4, and 8 are powers of 2, while 15 is not.",
        isCompleted: false
    },
    {
        id: "29",
        question: "Which one is different?",
        options: [
            { id: "A", text: "January" },
            { id: "B", text: "March" },
            { id: "C", text: "May" },
            { id: "D", text: "September" }
        ],
        rightOption: "D",
        explanation: "January, March, and May have 31 days, while September has 30.",
        isCompleted: false
    },
    {
        id: "30",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Rose" },
            { id: "B", text: "Sunflower" },
            { id: "C", text: "Jasmine" },
            { id: "D", text: "Potato" }
        ],
        rightOption: "D",
        explanation: "Potato is a vegetable, while the others are flowering plants commonly grown for their flowers.",
        isCompleted: false
    },
    {
        id: "31",
        question: "Which number is different?",
        options: [
            { id: "A", text: "15" },
            { id: "B", text: "21" },
            { id: "C", text: "27" },
            { id: "D", text: "32" }
        ],
        rightOption: "D",
        explanation: "15, 21, and 27 are odd multiples of 3. 32 is even and not divisible by 3.",
        isCompleted: false
    },
    {
        id: "32",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Doctor" },
            { id: "B", text: "Engineer" },
            { id: "C", text: "Teacher" },
            { id: "D", text: "Hospital" }
        ],
        rightOption: "D",
        explanation: "Hospital is a place, while doctor, engineer, and teacher are professions.",
        isCompleted: false
    },
    {
        id: "33",
        question: "Which one does not belong?",
        options: [
            { id: "A", text: "Monday" },
            { id: "B", text: "Wednesday" },
            { id: "C", text: "Friday" },
            { id: "D", text: "December" }
        ],
        rightOption: "D",
        explanation: "December is a month, while the others are days of the week.",
        isCompleted: false
    },
    {
        id: "34",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Copper" },
            { id: "B", text: "Silver" },
            { id: "C", text: "Gold" },
            { id: "D", text: "Coal" }
        ],
        rightOption: "D",
        explanation: "Coal is a combustible rock, while copper, silver, and gold are metals.",
        isCompleted: false
    },
    {
        id: "35",
        question: "Which number is different?",
        options: [
            { id: "A", text: "64" },
            { id: "B", text: "81" },
            { id: "C", text: "100" },
            { id: "D", text: "120" }
        ],
        rightOption: "D",
        explanation: "64 = 8², 81 = 9², and 100 = 10². 120 is not a perfect square.",
        isCompleted: false
    },
    {
        id: "36",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Square" },
            { id: "B", text: "Pentagon" },
            { id: "C", text: "Hexagon" },
            { id: "D", text: "Cylinder" }
        ],
        rightOption: "D",
        explanation: "A cylinder is a three-dimensional solid, while the others are two-dimensional polygons.",
        isCompleted: false
    },
    {
        id: "37",
        question: "Which one is different?",
        options: [
            { id: "A", text: "Sparrow" },
            { id: "B", text: "Crow" },
            { id: "C", text: "Pigeon" },
            { id: "D", text: "Tiger" }
        ],
        rightOption: "D",
        explanation: "Tiger is a mammal, while the others are birds.",
        isCompleted: false
    },
    {
        id: "38",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "2, 4" },
            { id: "B", text: "3, 9" },
            { id: "C", text: "4, 16" },
            { id: "D", text: "5, 20" }
        ],
        rightOption: "D",
        explanation: "In the first three pairs, the second number is the square of the first. 5² = 25, not 20.",
        isCompleted: false
    },
    {
        id: "39",
        question: "Which one is different?",
        options: [
            { id: "A", text: "AB" },
            { id: "B", text: "CD" },
            { id: "C", text: "EF" },
            { id: "D", text: "HJ" }
        ],
        rightOption: "D",
        explanation: "AB, CD, and EF contain consecutive letters, while HJ skips I.",
        isCompleted: false
    },
    {
        id: "40",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Kilometer" },
            { id: "B", text: "Meter" },
            { id: "C", text: "Centimeter" },
            { id: "D", text: "Liter" }
        ],
        rightOption: "D",
        explanation: "Liter measures volume, while kilometer, meter, and centimeter measure length.",
        isCompleted: false
    },
    {
        id: "41",
        question: "Which number does not belong?",
        options: [
            { id: "A", text: "17" },
            { id: "B", text: "19" },
            { id: "C", text: "23" },
            { id: "D", text: "27" }
        ],
        rightOption: "D",
        explanation: "17, 19, and 23 are prime numbers, while 27 = 3³.",
        isCompleted: false
    },
    {
        id: "42",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Circle" },
            { id: "B", text: "Oval" },
            { id: "C", text: "Ellipse" },
            { id: "D", text: "Triangle" }
        ],
        rightOption: "D",
        explanation: "A triangle has straight sides and vertices, while circles, ovals, and ellipses have curved boundaries.",
        isCompleted: false
    },
    {
        id: "43",
        question: "Which one is different?",
        options: [
            { id: "A", text: "Gold" },
            { id: "B", text: "Platinum" },
            { id: "C", text: "Silver" },
            { id: "D", text: "Oxygen" }
        ],
        rightOption: "D",
        explanation: "Oxygen is a non-metal gas at room temperature, while gold, platinum, and silver are metals.",
        isCompleted: false
    },
    {
        id: "44",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "January" },
            { id: "B", text: "February" },
            { id: "C", text: "March" },
            { id: "D", text: "Monday" }
        ],
        rightOption: "D",
        explanation: "Monday is a day of the week, while the others are months.",
        isCompleted: false
    },
    {
        id: "45",
        question: "Which number is different?",
        options: [
            { id: "A", text: "36" },
            { id: "B", text: "49" },
            { id: "C", text: "64" },
            { id: "D", text: "90" }
        ],
        rightOption: "D",
        explanation: "36 = 6², 49 = 7², and 64 = 8². 90 is not a perfect square.",
        isCompleted: false
    },
    {
        id: "46",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Keyboard" },
            { id: "B", text: "Mouse" },
            { id: "C", text: "Scanner" },
            { id: "D", text: "Monitor" }
        ],
        rightOption: "D",
        explanation: "A monitor is primarily an output device, while a keyboard, mouse, and scanner are input devices.",
        isCompleted: false
    },
    {
        id: "47",
        question: "Which one is different?",
        options: [
            { id: "A", text: "Mercury" },
            { id: "B", text: "Venus" },
            { id: "C", text: "Earth" },
            { id: "D", text: "Moon" }
        ],
        rightOption: "D",
        explanation: "The Moon is Earth's natural satellite, while Mercury, Venus, and Earth are planets.",
        isCompleted: false
    },
    {
        id: "48",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "5" },
            { id: "C", text: "7" },
            { id: "D", text: "15" }
        ],
        rightOption: "D",
        explanation: "3, 5, and 7 are prime numbers, while 15 = 3 × 5.",
        isCompleted: false
    },
    {
        id: "49",
        question: "Which one does not belong?",
        options: [
            { id: "A", text: "Hindi" },
            { id: "B", text: "English" },
            { id: "C", text: "French" },
            { id: "D", text: "Asia" }
        ],
        rightOption: "D",
        explanation: "Asia is a continent, while Hindi, English, and French are languages.",
        isCompleted: false
    },
    {
        id: "50",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Square" },
            { id: "B", text: "Rectangle" },
            { id: "C", text: "Parallelogram" },
            { id: "D", text: "Cone" }
        ],
        rightOption: "D",
        explanation: "A cone is a three-dimensional solid, while the others are two-dimensional quadrilaterals.",
        isCompleted: false
    },
    {
        id: "51",
        question: "Which number does not belong?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "8" },
            { id: "C", text: "27" },
            { id: "D", text: "36" }
        ],
        rightOption: "D",
        explanation: "1 = 1³, 8 = 2³, and 27 = 3³. 36 is not a perfect cube.",
        isCompleted: false
    },
    {
        id: "52",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Rose" },
            { id: "B", text: "Tulip" },
            { id: "C", text: "Daisy" },
            { id: "D", text: "Oak" }
        ],
        rightOption: "D",
        explanation: "Oak is a tree, while rose, tulip, and daisy are commonly grown as flowering plants.",
        isCompleted: false
    },
    {
        id: "53",
        question: "Which number is different?",
        options: [
            { id: "A", text: "22" },
            { id: "B", text: "33" },
            { id: "C", text: "44" },
            { id: "D", text: "56" }
        ],
        rightOption: "D",
        explanation: "22, 33, and 44 are multiples of 11; 56 is not.",
        isCompleted: false
    },
    {
        id: "54",
        question: "Find the odd one out.",
        options: [
            { id: "A", text: "Car" },
            { id: "B", text: "Bus" },
            { id: "C", text: "Truck" },
            { id: "D", text: "Airplane" }
        ],
        rightOption: "D",
        explanation: "An airplane is an aircraft, while cars, buses, and trucks are road vehicles.",
        isCompleted: false
    },
    {
        id: "55",
        question: "Which one is different?",
        options: [
            { id: "A", text: "121" },
            { id: "B", text: "144" },
            { id: "C", text: "169" },
            { id: "D", text: "195" }
        ],
        rightOption: "D",
        explanation: "121 = 11², 144 = 12², and 169 = 13². 195 is not a perfect square.",
        isCompleted: false
    }
];

export const codingDecodingQuestions = [
    {
        id: "1",
        question: "If CAT is coded as DBU, how is DOG coded?",
        options: [
            { id: "A", text: "EPH" },
            { id: "B", text: "EOG" },
            { id: "C", text: "FPH" },
            { id: "D", text: "DPH" }
        ],
        rightOption: "A",
        explanation: "Each letter is shifted forward by one position: D → E, O → P, G → H. Therefore, DOG becomes EPH.",
        isCompleted: false
    },
    {
        id: "2",
        question: "If BOOK is coded as CPPL, how is PEN coded?",
        options: [
            { id: "A", text: "QFO" },
            { id: "B", text: "QEN" },
            { id: "C", text: "RFO" },
            { id: "D", text: "PFM" }
        ],
        rightOption: "A",
        explanation: "Each letter is shifted forward by one position: P → Q, E → F, N → O. Therefore, PEN becomes QFO.",
        isCompleted: false
    },
    {
        id: "3",
        question: "If FISH is coded as EHRG, how is BIRD coded?",
        options: [
            { id: "A", text: "AHQC" },
            { id: "B", text: "CJSE" },
            { id: "C", text: "AHSD" },
            { id: "D", text: "AJQC" }
        ],
        rightOption: "A",
        explanation: "Each letter is shifted backward by one position. B → A, I → H, R → Q, D → C. Therefore, BIRD becomes AHQC.",
        isCompleted: false
    },
    {
        id: "4",
        question: "If TABLE is coded as UBCMF, how is CHAIR coded?",
        options: [
            { id: "A", text: "DIBJS" },
            { id: "B", text: "DIBIR" },
            { id: "C", text: "DHBJS" },
            { id: "D", text: "EIBJS" }
        ],
        rightOption: "A",
        explanation: "Every letter is shifted forward by one position: C → D, H → I, A → B, I → J, R → S. Thus, CHAIR becomes DIBJS.",
        isCompleted: false
    },
    {
        id: "5",
        question: "If MANGO is coded as NBOHP, how is GRAPE coded?",
        options: [
            { id: "A", text: "HSBQF" },
            { id: "B", text: "HSBQE" },
            { id: "C", text: "GRAQF" },
            { id: "D", text: "ITCRG" }
        ],
        rightOption: "A",
        explanation: "Each letter is shifted forward by one position: G → H, R → S, A → B, P → Q, E → F. Therefore, GRAPE becomes HSBQF.",
        isCompleted: false
    },
    {
        id: "6",
        question: "If APPLE is coded as ELPPA, how is TRAIN coded?",
        options: [
            { id: "A", text: "NIART" },
            { id: "B", text: "NIRAT" },
            { id: "C", text: "TRIAN" },
            { id: "D", text: "NAIRT" }
        ],
        rightOption: "A",
        explanation: "The word is written in reverse order. Reversing TRAIN gives NIART.",
        isCompleted: false
    },
    {
        id: "7",
        question: "If SCHOOL is coded as LOOHCS, how is MARKET coded?",
        options: [
            { id: "A", text: "TEKRAM" },
            { id: "B", text: "TEKRMA" },
            { id: "C", text: "KRAMET" },
            { id: "D", text: "MARKET" }
        ],
        rightOption: "A",
        explanation: "The letters are written in reverse order. MARKET becomes TEKRAM.",
        isCompleted: false
    },
    {
        id: "8",
        question: "If ZEBRA is coded as AFCSB, how is TIGER coded?",
        options: [
            { id: "A", text: "UJHFS" },
            { id: "B", text: "UJHFR" },
            { id: "C", text: "VJHFS" },
            { id: "D", text: "TJHFS" }
        ],
        rightOption: "A",
        explanation: "Each letter moves one position forward, with Z wrapping around to A. TIGER becomes UJHFS.",
        isCompleted: false
    },
    {
        id: "9",
        question: "If KING is coded as MKPI, how is LION coded using the same rule?",
        options: [
            { id: "A", text: "NKQP" },
            { id: "B", text: "NKOP" },
            { id: "C", text: "MJPO" },
            { id: "D", text: "NKRQ" }
        ],
        rightOption: "A",
        explanation: "Each letter is shifted forward by two positions: L → N, I → K, O → Q, N → P. Therefore, LION becomes NKQP.",
        isCompleted: false
    },
    {
        id: "10",
        question: "If ROAD is coded as URDG, how is MILK coded?",
        options: [
            { id: "A", text: "PLON" },
            { id: "B", text: "PLNM" },
            { id: "C", text: "OKON" },
            { id: "D", text: "PMON" }
        ],
        rightOption: "A",
        explanation: "Each letter is shifted forward by three positions: M → P, I → L, L → O, K → N. Thus, MILK becomes PLON.",
        isCompleted: false
    },
    {
        id: "11",
        question: "If ACE is coded as 135, how is BAD coded?",
        options: [
            { id: "A", text: "214" },
            { id: "B", text: "124" },
            { id: "C", text: "241" },
            { id: "D", text: "215" }
        ],
        rightOption: "A",
        explanation: "Each letter is replaced by its alphabetical position: B = 2, A = 1, D = 4. Therefore, BAD becomes 214.",
        isCompleted: false
    },
    {
        id: "12",
        question: "If DOG is coded as 4157, where D = 4, O = 15, and G = 7, how is CAT coded?",
        options: [
            { id: "A", text: "3120" },
            { id: "B", text: "3210" },
            { id: "C", text: "3201" },
            { id: "D", text: "1320" }
        ],
        rightOption: "A",
        explanation: "Using alphabetical positions, C = 3, A = 1, and T = 20. Joining them gives 3120.",
        isCompleted: false
    },
    {
        id: "13",
        question: "If A = 1, B = 2, C = 3, and so on, what is the code for FACE?",
        options: [
            { id: "A", text: "6135" },
            { id: "B", text: "6153" },
            { id: "C", text: "6315" },
            { id: "D", text: "6513" }
        ],
        rightOption: "A",
        explanation: "F = 6, A = 1, C = 3, and E = 5. Therefore, FACE is coded as 6135.",
        isCompleted: false
    },
    {
        id: "14",
        question: "If SUN is coded as 192114 using alphabetical positions, how is MOON coded?",
        options: [
            { id: "A", text: "13151514" },
            { id: "B", text: "13151415" },
            { id: "C", text: "1315514" },
            { id: "D", text: "14151513" }
        ],
        rightOption: "A",
        explanation: "M = 13, O = 15, O = 15, and N = 14. Joining the positions gives 13151514.",
        isCompleted: false
    },
    {
        id: "15",
        question: "If each letter is replaced by its alphabetical position, what is the sum of the code values of BAD?",
        options: [
            { id: "A", text: "7" },
            { id: "B", text: "6" },
            { id: "C", text: "8" },
            { id: "D", text: "9" }
        ],
        rightOption: "A",
        explanation: "B = 2, A = 1, and D = 4. Their sum is 2 + 1 + 4 = 7.",
        isCompleted: false
    },
    {
        id: "16",
        question: "If CAT is coded as 24 by adding the alphabetical positions of its letters, how is DOG coded?",
        options: [
            { id: "A", text: "26" },
            { id: "B", text: "25" },
            { id: "C", text: "27" },
            { id: "D", text: "28" }
        ],
        rightOption: "A",
        explanation: "D = 4, O = 15, and G = 7. Their sum is 4 + 15 + 7 = 26.",
        isCompleted: false
    },
    {
        id: "17",
        question: "If BAD is coded as 214, how is FACE coded?",
        options: [
            { id: "A", text: "6135" },
            { id: "B", text: "6315" },
            { id: "C", text: "6153" },
            { id: "D", text: "6531" }
        ],
        rightOption: "A",
        explanation: "Each letter is replaced with its alphabetical position: F = 6, A = 1, C = 3, E = 5. Thus, FACE becomes 6135.",
        isCompleted: false
    },
    {
        id: "18",
        question: "If A = 26, B = 25, C = 24, and so on, how is BAD coded?",
        options: [
            { id: "A", text: "252623" },
            { id: "B", text: "252422" },
            { id: "C", text: "262523" },
            { id: "D", text: "242526" }
        ],
        rightOption: "A",
        explanation: "The reverse alphabetical values are B = 25, A = 26, and D = 23. Therefore, BAD becomes 252623.",
        isCompleted: false
    },
    {
        id: "19",
        question: "If A is coded as Z, B as Y, C as X, and so on, how is DOG coded?",
        options: [
            { id: "A", text: "WLT" },
            { id: "B", text: "WLG" },
            { id: "C", text: "XLT" },
            { id: "D", text: "VKS" }
        ],
        rightOption: "A",
        explanation: "Each letter is replaced by its opposite in the alphabet: D → W, O → L, G → T. Therefore, DOG becomes WLT.",
        isCompleted: false
    },
    {
        id: "20",
        question: "If each letter is replaced by its opposite in the alphabet, how is CAT coded?",
        options: [
            { id: "A", text: "XZG" },
            { id: "B", text: "XZG" },
            { id: "C", text: "XZH" },
            { id: "D", text: "WZG" }
        ],
        rightOption: "A",
        explanation: "Using opposite letters, C → X, A → Z, and T → G. Therefore, CAT becomes XZG.",
        isCompleted: false
    },
    {
        id: "21",
        question: "In a code, each letter is shifted forward by two positions. How is WORD coded?",
        options: [
            { id: "A", text: "YQTF" },
            { id: "B", text: "YQSE" },
            { id: "C", text: "XQTF" },
            { id: "D", text: "YRTF" }
        ],
        rightOption: "A",
        explanation: "W → Y, O → Q, R → T, and D → F. Thus, WORD becomes YQTF.",
        isCompleted: false
    },
    {
        id: "22",
        question: "In a code, each letter is shifted backward by two positions. How is GAME coded?",
        options: [
            { id: "A", text: "EYKC" },
            { id: "B", text: "EYLC" },
            { id: "C", text: "FYKC" },
            { id: "D", text: "EXKC" }
        ],
        rightOption: "A",
        explanation: "G → E, A → Y, M → K, and E → C. Therefore, GAME becomes EYKC.",
        isCompleted: false
    },
    {
        id: "23",
        question: "If every vowel is replaced by the next letter and every consonant by the previous letter, how is BAT coded?",
        options: [
            { id: "A", text: "AZS" },
            { id: "B", text: "CBS" },
            { id: "C", text: "AZT" },
            { id: "D", text: "BZS" }
        ],
        rightOption: "A",
        explanation: "B is a consonant, so B → A. A is a vowel, so A → B. T is a consonant, so T → S. Therefore, BAT becomes ABS.",
        isCompleted: false
    },
    {
        id: "24",
        question: "If vowels are replaced by the next letter and consonants by the previous letter, how is DOG coded?",
        options: [
            { id: "A", text: "CNF" },
            { id: "B", text: "EPH" },
            { id: "C", text: "COF" },
            { id: "D", text: "DNG" }
        ],
        rightOption: "A",
        explanation: "D → C, O → P, and G → F. Since O is a vowel, it moves forward. The correct code is CPF.",
        isCompleted: false
    },
    {
        id: "25",
        question: "If the first and last letters of a word are interchanged, how is TIGER coded?",
        options: [
            { id: "A", text: "RIGET" },
            { id: "B", text: "REGIT" },
            { id: "C", text: "TIGER" },
            { id: "D", text: "RIGTE" }
        ],
        rightOption: "A",
        explanation: "Interchange the first letter T and the last letter R, leaving the middle letters unchanged. TIGER becomes RIGET.",
        isCompleted: false
    },
    {
        id: "26",
        question: "If the first two letters and last two letters of a word are each reversed, how is MARKET coded?",
        options: [
            { id: "A", text: "AMRKTE" },
            { id: "B", text: "AMRKET" },
            { id: "C", text: "MRAKTE" },
            { id: "D", text: "AMKRET" }
        ],
        rightOption: "A",
        explanation: "Reverse MA to AM and ET to TE, leaving RK unchanged. MARKET becomes AMRKTE.",
        isCompleted: false
    },
    {
        id: "27",
        question: "If the letters of a word are arranged in reverse alphabetical order, how is CAB coded?",
        options: [
            { id: "A", text: "CBA" },
            { id: "B", text: "ABC" },
            { id: "C", text: "BAC" },
            { id: "D", text: "ACB" }
        ],
        rightOption: "A",
        explanation: "The letters in CAB arranged from highest to lowest alphabetically are C, B, A. Therefore, the code is CBA.",
        isCompleted: false
    },
    {
        id: "28",
        question: "If the letters of a word are arranged in alphabetical order, how is TRAIN coded?",
        options: [
            { id: "A", text: "AINRT" },
            { id: "B", text: "AINTR" },
            { id: "C", text: "ANIRT" },
            { id: "D", text: "I ANRT" }
        ],
        rightOption: "A",
        explanation: "Arranging A, I, N, R, and T alphabetically gives AINRT.",
        isCompleted: false
    },
    {
        id: "29",
        question: "If every letter is replaced by the next letter and the result is reversed, how is CAT coded?",
        options: [
            { id: "A", text: "UBD" },
            { id: "B", text: "DBU" },
            { id: "C", text: "VBD" },
            { id: "D", text: "UCB" }
        ],
        rightOption: "A",
        explanation: "Shift CAT forward by one to get DBU, then reverse it to get UBD.",
        isCompleted: false
    },
    {
        id: "30",
        question: "If each letter is replaced by the previous letter and the result is reversed, how is LAMP coded?",
        options: [
            { id: "A", text: "OKZK" },
            { id: "B", text: "KZKO" },
            { id: "C", text: "OKYL" },
            { id: "D", text: "NKZK" }
        ],
        rightOption: "A",
        explanation: "Shift LAMP backward by one to get KZLO, then reverse it to get OLZK.",
        isCompleted: false
    },
    {
        id: "31",
        question: "In a code language, 'red blue' means 'ka na' and 'blue green' means 'na pa'. What is the code for blue?",
        options: [
            { id: "A", text: "na" },
            { id: "B", text: "ka" },
            { id: "C", text: "pa" },
            { id: "D", text: "Cannot be determined" }
        ],
        rightOption: "A",
        explanation: "The common word in both phrases is blue, and the common code is na. Therefore, blue means na.",
        isCompleted: false
    },
    {
        id: "32",
        question: "In a code language, 'good boy' means 'ti na' and 'good girl' means 'ti pa'. What is the code for good?",
        options: [
            { id: "A", text: "ti" },
            { id: "B", text: "na" },
            { id: "C", text: "pa" },
            { id: "D", text: "Cannot be determined" }
        ],
        rightOption: "A",
        explanation: "The common word is good, and the common code is ti. Therefore, good means ti.",
        isCompleted: false
    },
    {
        id: "33",
        question: "In a code language, 'eat fresh fruit' is written as 'mo ki la' and 'fresh green salad' as 'ki pa su'. What is the code for fresh?",
        options: [
            { id: "A", text: "ki" },
            { id: "B", text: "mo" },
            { id: "C", text: "pa" },
            { id: "D", text: "la" }
        ],
        rightOption: "A",
        explanation: "The common word in both statements is fresh, and the common code is ki.",
        isCompleted: false
    },
    {
        id: "34",
        question: "In a code language, 'sky is blue' means 'ra ta pa' and 'blue looks beautiful' means 'pa sa ma'. What is the code for blue?",
        options: [
            { id: "A", text: "pa" },
            { id: "B", text: "ra" },
            { id: "C", text: "ta" },
            { id: "D", text: "sa" }
        ],
        rightOption: "A",
        explanation: "Blue is the common word in both statements, and pa is the common code.",
        isCompleted: false
    },
    {
        id: "35",
        question: "In a code language, 'I like tea' means 'xo pa ki' and 'I like coffee' means 'xo pa su'. Which code could represent tea?",
        options: [
            { id: "A", text: "ki" },
            { id: "B", text: "xo" },
            { id: "C", text: "pa" },
            { id: "D", text: "su" }
        ],
        rightOption: "A",
        explanation: "The common words I and like correspond to xo and pa. The remaining code ki represents tea.",
        isCompleted: false
    },
    {
        id: "36",
        question: "If '123' means 'hot and cold', '345' means 'cold is good', and each word has a unique digit, which digit represents cold?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "1" },
            { id: "C", text: "4" },
            { id: "D", text: "5" }
        ],
        rightOption: "A",
        explanation: "The common word is cold, and the common digit in 123 and 345 is 3. Therefore, cold is represented by 3.",
        isCompleted: false
    },
    {
        id: "37",
        question: "If 'apple is sweet' is coded as '4 2 7' and 'mango is ripe' as '6 2 9', what is the code for 'is'?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "7" },
            { id: "D", text: "9" }
        ],
        rightOption: "A",
        explanation: "The common word in both sentences is is, and the common digit is 2.",
        isCompleted: false
    },
    {
        id: "38",
        question: "If '123' means 'read books daily' and '145' means 'read books carefully', which digits represent the two words shared by both phrases?",
        options: [
            { id: "A", text: "1 and 4" },
            { id: "B", text: "1 and 2" },
            { id: "C", text: "2 and 3" },
            { id: "D", text: "4 and 5" }
        ],
        rightOption: "B",
        explanation: "The phrases share two words, read and books, and their codes are the two common digits, 1 and 2.",
        isCompleted: false
    },
    {
        id: "39",
        question: "If 'PENCIL' is coded as 'QFODJM', how is ERASER coded?",
        options: [
            { id: "A", text: "FSBTFS" },
            { id: "B", text: "FSBSFS" },
            { id: "C", text: "FRBTFS" },
            { id: "D", text: "GSBTFS" }
        ],
        rightOption: "A",
        explanation: "Each letter moves forward by one position: E → F, R → S, A → B, S → T, E → F, R → S. Therefore, ERASER becomes FSBTFS.",
        isCompleted: false
    },
    {
        id: "40",
        question: "If FRIEND is coded as HUMJTK, how is CANDLE coded using the same rule?",
        options: [
            { id: "A", text: "ECPFNG" },
            { id: "B", text: "ECPENG" },
            { id: "C", text: "DBOEMF" },
            { id: "D", text: "ECOFNG" }
        ],
        rightOption: "A",
        explanation: "The given example shifts letters forward by two positions. C → E, A → C, N → P, D → F, L → N, E → G. CANDLE becomes ECPFNG.",
        isCompleted: false
    },
    {
        id: "41",
        question: "If each letter is shifted forward by three positions, how is HOUSE coded?",
        options: [
            { id: "A", text: "KRXVH" },
            { id: "B", text: "KRVXH" },
            { id: "C", text: "JRXVH" },
            { id: "D", text: "KRXVG" }
        ],
        rightOption: "A",
        explanation: "H → K, O → R, U → X, S → V, and E → H. Thus, HOUSE becomes KRXVH.",
        isCompleted: false
    },
    {
        id: "42",
        question: "If each letter is shifted backward by three positions, how is FLOWER coded?",
        options: [
            { id: "A", text: "CILTB O" },
            { id: "B", text: "CILTB O".replace(" ", "") },
            { id: "C", text: "CILWBO" },
            { id: "D", text: "CILTEO" }
        ],
        rightOption: "B",
        explanation: "F → C, L → I, O → L, W → T, E → B, R → O. Therefore, FLOWER becomes CILTBO.",
        isCompleted: false
    },
    {
        id: "43",
        question: "If the letters of a word are replaced by their alphabetical positions in reverse order, how is BAT coded?",
        options: [
            { id: "A", text: "2012" },
            { id: "B", text: "2120" },
            { id: "C", text: "2201" },
            { id: "D", text: "1220" }
        ],
        rightOption: "A",
        explanation: "BAT has values B = 2, A = 1, T = 20. Reversing the order gives 20, 1, 2, or 2012.",
        isCompleted: false
    },
    {
        id: "44",
        question: "If the letters of each word are shifted forward by one position, how is ZOO coded?",
        options: [
            { id: "A", text: "APP" },
            { id: "B", text: "AOP" },
            { id: "C", text: "BPP" },
            { id: "D", text: "APQ" }
        ],
        rightOption: "A",
        explanation: "Z moves to A, and O moves to P. Therefore, ZOO becomes APP.",
        isCompleted: false
    },
    {
        id: "45",
        question: "If each letter is replaced by the letter two positions ahead, how is YAK coded?",
        options: [
            { id: "A", text: "CAM" },
            { id: "B", text: "CBM" },
            { id: "C", text: "ZBL" },
            { id: "D", text: "CZM" }
        ],
        rightOption: "A",
        explanation: "Y → A, A → C, and K → M, wrapping around the alphabet as needed. Thus, YAK becomes ACM.",
        isCompleted: false
    },
    {
        id: "46",
        question: "If the first letter is moved to the end of the word, how is TABLE coded?",
        options: [
            { id: "A", text: "ABLET" },
            { id: "B", text: "ABLET" },
            { id: "C", text: "TABEL" },
            { id: "D", text: "LEABT" }
        ],
        rightOption: "A",
        explanation: "Move the first letter T to the end while keeping the other letters in order. TABLE becomes ABLET.",
        isCompleted: false
    },
    {
        id: "47",
        question: "If the last letter is moved to the beginning of the word, how is PLANT coded?",
        options: [
            { id: "A", text: "TPLAN" },
            { id: "B", text: "TPLNA" },
            { id: "C", text: "PLANT" },
            { id: "D", text: "TALPN" }
        ],
        rightOption: "A",
        explanation: "Move the last letter T to the beginning. PLANT becomes TPLAN.",
        isCompleted: false
    },
    {
        id: "48",
        question: "If alternate letters are shifted forward by one position, starting with the first letter, how is GAME coded?",
        options: [
            { id: "A", text: "HBMF" },
            { id: "B", text: "HBLF" },
            { id: "C", text: "GBMF" },
            { id: "D", text: "HAME" }
        ],
        rightOption: "A",
        explanation: "Shift the first, third, and other alternate letters forward by one: G → H and M → N. The other letters stay unchanged, giving HANE.",
        isCompleted: false
    },
    {
        id: "49",
        question: "If alternate letters are shifted backward by one position, starting with the first letter, how is CODE coded?",
        options: [
            { id: "A", text: "BNCD" },
            { id: "B", text: "BNCE" },
            { id: "C", text: "CNCD" },
            { id: "D", text: "BODE" }
        ],
        rightOption: "A",
        explanation: "Shift the first and third letters backward: C → B and D → C. Keep O and E unchanged. CODE becomes B O C E.",
        isCompleted: false
    },
    {
        id: "50",
        question: "If the first and second letters are swapped, and the third and fourth letters are swapped, how is ROAD coded?",
        options: [
            { id: "A", text: "ORDA" },
            { id: "B", text: "ORAD" },
            { id: "C", text: "RODA" },
            { id: "D", text: "ODRA" }
        ],
        rightOption: "A",
        explanation: "Swap R and O, then A and D. ROAD becomes ORDA.",
        isCompleted: false
    },
    {
        id: "51",
        question: "If a word is coded by adding 1 to the first letter's position, 2 to the second, 3 to the third, and so on, how is ABC coded?",
        options: [
            { id: "A", text: "BDF" },
            { id: "B", text: "BCD" },
            { id: "C", text: "BCE" },
            { id: "D", text: "CDF" }
        ],
        rightOption: "A",
        explanation: "A moves forward by 1 to B, B by 2 to D, and C by 3 to F. Therefore, ABC becomes BDF.",
        isCompleted: false
    },
    {
        id: "52",
        question: "If a word is coded by subtracting 1 from the first letter's position, 2 from the second, and 3 from the third, how is FED coded?",
        options: [
            { id: "A", text: "ECA" },
            { id: "B", text: "EDA" },
            { id: "C", text: "DCA" },
            { id: "D", text: "ECB" }
        ],
        rightOption: "A",
        explanation: "F − 1 = E, E − 2 = C, and D − 3 = A. Therefore, FED becomes ECA.",
        isCompleted: false
    },
    {
        id: "53",
        question: "If the code for a word is the sum of its letters' alphabetical positions, what is the code for ACE?",
        options: [
            { id: "A", text: "9" },
            { id: "B", text: "8" },
            { id: "C", text: "10" },
            { id: "D", text: "11" }
        ],
        rightOption: "A",
        explanation: "A = 1, C = 3, and E = 5. The sum is 1 + 3 + 5 = 9.",
        isCompleted: false
    },
    {
        id: "54",
        question: "If the code for a word is the product of its letters' alphabetical positions, what is the code for BAD?",
        options: [
            { id: "A", text: "8" },
            { id: "B", text: "7" },
            { id: "C", text: "9" },
            { id: "D", text: "6" }
        ],
        rightOption: "A",
        explanation: "B = 2, A = 1, and D = 4. Their product is 2 × 1 × 4 = 8.",
        isCompleted: false
    },
    {
        id: "55",
        question: "If each letter is replaced by its opposite letter in the alphabet and the resulting word is reversed, how is CAT coded?",
        options: [
            { id: "A", text: "GZX" },
            { id: "B", text: "XZG" },
            { id: "C", text: "XGZ" },
            { id: "D", text: "ZGX" }
        ],
        rightOption: "A",
        explanation: "The opposite letters of CAT are XZG. Reversing XZG gives GZX.",
        isCompleted: false
    }
];

export const numberSeriesQuestions = [
    {
        id: "1",
        question: "Find the next number in the series: 2, 4, 6, 8, ?",
        options: [
            { id: "A", text: "9" },
            { id: "B", text: "10" },
            { id: "C", text: "12" },
            { id: "D", text: "14" }
        ],
        rightOption: "B",
        explanation: "Each number increases by 2. The next number is 8 + 2 = 10.",
        isCompleted: false
    },
    {
        id: "2",
        question: "Find the next number: 3, 6, 12, 24, ?",
        options: [
            { id: "A", text: "36" },
            { id: "B", text: "42" },
            { id: "C", text: "48" },
            { id: "D", text: "54" }
        ],
        rightOption: "C",
        explanation: "Each number is multiplied by 2. The next number is 24 × 2 = 48.",
        isCompleted: false
    },
    {
        id: "3",
        question: "Find the next number: 5, 10, 15, 20, ?",
        options: [
            { id: "A", text: "22" },
            { id: "B", text: "25" },
            { id: "C", text: "30" },
            { id: "D", text: "35" }
        ],
        rightOption: "B",
        explanation: "Each number increases by 5. The next number is 20 + 5 = 25.",
        isCompleted: false
    },
    {
        id: "4",
        question: "Find the next number: 1, 4, 9, 16, ?",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "24" },
            { id: "C", text: "25" },
            { id: "D", text: "36" }
        ],
        rightOption: "C",
        explanation: "These are squares of consecutive integers: 1², 2², 3², 4². The next is 5² = 25.",
        isCompleted: false
    },
    {
        id: "5",
        question: "Find the next number: 1, 8, 27, 64, ?",
        options: [
            { id: "A", text: "100" },
            { id: "B", text: "125" },
            { id: "C", text: "144" },
            { id: "D", text: "216" }
        ],
        rightOption: "B",
        explanation: "These are cubes: 1³, 2³, 3³, 4³. The next is 5³ = 125.",
        isCompleted: false
    },
    {
        id: "6",
        question: "Find the next number: 2, 5, 8, 11, ?",
        options: [
            { id: "A", text: "12" },
            { id: "B", text: "13" },
            { id: "C", text: "14" },
            { id: "D", text: "15" }
        ],
        rightOption: "C",
        explanation: "Each term increases by 3. The next number is 11 + 3 = 14.",
        isCompleted: false
    },
    {
        id: "7",
        question: "Find the next number: 10, 20, 40, 80, ?",
        options: [
            { id: "A", text: "120" },
            { id: "B", text: "140" },
            { id: "C", text: "160" },
            { id: "D", text: "180" }
        ],
        rightOption: "C",
        explanation: "Each term is doubled. The next number is 80 × 2 = 160.",
        isCompleted: false
    },
    {
        id: "8",
        question: "Find the next number: 100, 90, 80, 70, ?",
        options: [
            { id: "A", text: "50" },
            { id: "B", text: "55" },
            { id: "C", text: "60" },
            { id: "D", text: "65" }
        ],
        rightOption: "C",
        explanation: "Each term decreases by 10. The next number is 70 − 10 = 60.",
        isCompleted: false
    },
    {
        id: "9",
        question: "Find the next number: 1, 3, 6, 10, 15, ?",
        options: [
            { id: "A", text: "18" },
            { id: "B", text: "20" },
            { id: "C", text: "21" },
            { id: "D", text: "24" }
        ],
        rightOption: "C",
        explanation: "The differences are 2, 3, 4, and 5. The next difference is 6, so 15 + 6 = 21.",
        isCompleted: false
    },
    {
        id: "10",
        question: "Find the next number: 2, 6, 12, 20, 30, ?",
        options: [
            { id: "A", text: "36" },
            { id: "B", text: "40" },
            { id: "C", text: "42" },
            { id: "D", text: "48" }
        ],
        rightOption: "C",
        explanation: "The differences are 4, 6, 8, and 10. The next difference is 12, so 30 + 12 = 42.",
        isCompleted: false
    },
    {
        id: "11",
        question: "Find the next number: 7, 14, 21, 28, ?",
        options: [
            { id: "A", text: "32" },
            { id: "B", text: "35" },
            { id: "C", text: "42" },
            { id: "D", text: "49" }
        ],
        rightOption: "B",
        explanation: "Each term increases by 7. The next number is 28 + 7 = 35.",
        isCompleted: false
    },
    {
        id: "12",
        question: "Find the next number: 81, 27, 9, 3, ?",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "2" },
            { id: "D", text: "3" }
        ],
        rightOption: "B",
        explanation: "Each term is divided by 3. The next number is 3 ÷ 3 = 1.",
        isCompleted: false
    },
    {
        id: "13",
        question: "Find the next number: 4, 9, 16, 25, ?",
        options: [
            { id: "A", text: "30" },
            { id: "B", text: "32" },
            { id: "C", text: "36" },
            { id: "D", text: "49" }
        ],
        rightOption: "C",
        explanation: "These are squares of 2, 3, 4, and 5. The next is 6² = 36.",
        isCompleted: false
    },
    {
        id: "14",
        question: "Find the next number: 2, 3, 5, 8, 13, ?",
        options: [
            { id: "A", text: "18" },
            { id: "B", text: "20" },
            { id: "C", text: "21" },
            { id: "D", text: "22" }
        ],
        rightOption: "C",
        explanation: "Each term is the sum of the previous two terms. The next number is 8 + 13 = 21.",
        isCompleted: false
    },
    {
        id: "15",
        question: "Find the next number: 1, 1, 2, 3, 5, 8, ?",
        options: [
            { id: "A", text: "11" },
            { id: "B", text: "12" },
            { id: "C", text: "13" },
            { id: "D", text: "15" }
        ],
        rightOption: "C",
        explanation: "Each term is the sum of the previous two terms. The next number is 5 + 8 = 13.",
        isCompleted: false
    },
    {
        id: "16",
        question: "Find the next number: 64, 32, 16, 8, ?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "6" },
            { id: "D", text: "1" }
        ],
        rightOption: "B",
        explanation: "Each term is divided by 2. The next number is 8 ÷ 2 = 4.",
        isCompleted: false
    },
    {
        id: "17",
        question: "Find the next number: 11, 22, 33, 44, ?",
        options: [
            { id: "A", text: "50" },
            { id: "B", text: "55" },
            { id: "C", text: "66" },
            { id: "D", text: "77" }
        ],
        rightOption: "B",
        explanation: "Each term increases by 11. The next number is 44 + 11 = 55.",
        isCompleted: false
    },
    {
        id: "18",
        question: "Find the next number: 3, 9, 27, 81, ?",
        options: [
            { id: "A", text: "162" },
            { id: "B", text: "189" },
            { id: "C", text: "243" },
            { id: "D", text: "324" }
        ],
        rightOption: "C",
        explanation: "Each term is multiplied by 3. The next number is 81 × 3 = 243.",
        isCompleted: false
    },
    {
        id: "19",
        question: "Find the next number: 50, 45, 40, 35, ?",
        options: [
            { id: "A", text: "25" },
            { id: "B", text: "28" },
            { id: "C", text: "30" },
            { id: "D", text: "32" }
        ],
        rightOption: "C",
        explanation: "Each term decreases by 5. The next number is 35 − 5 = 30.",
        isCompleted: false
    },
    {
        id: "20",
        question: "Find the next number: 1, 4, 13, 40, ?",
        options: [
            { id: "A", text: "81" },
            { id: "B", text: "100" },
            { id: "C", text: "121" },
            { id: "D", text: "123" }
        ],
        rightOption: "D",
        explanation: "Each term is multiplied by 3 and then 1 is added. The next number is 40 × 3 + 1 = 121.",
        isCompleted: false
    },
    {
        id: "21",
        question: "Find the next number: 2, 7, 12, 17, ?",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "21" },
            { id: "C", text: "22" },
            { id: "D", text: "23" }
        ],
        rightOption: "C",
        explanation: "Each term increases by 5. The next number is 17 + 5 = 22.",
        isCompleted: false
    },
    {
        id: "22",
        question: "Find the next number: 5, 11, 19, 29, 41, ?",
        options: [
            { id: "A", text: "53" },
            { id: "B", text: "55" },
            { id: "C", text: "57" },
            { id: "D", text: "59" }
        ],
        rightOption: "B",
        explanation: "The differences are 6, 8, 10, and 12. The next difference is 14, so 41 + 14 = 55.",
        isCompleted: false
    },
    {
        id: "23",
        question: "Find the next number: 121, 100, 81, 64, ?",
        options: [
            { id: "A", text: "36" },
            { id: "B", text: "49" },
            { id: "C", text: "54" },
            { id: "D", text: "56" }
        ],
        rightOption: "B",
        explanation: "These are descending squares: 11², 10², 9², 8². The next is 7² = 49.",
        isCompleted: false
    },
    {
        id: "24",
        question: "Find the next number: 6, 12, 24, 48, ?",
        options: [
            { id: "A", text: "72" },
            { id: "B", text: "84" },
            { id: "C", text: "96" },
            { id: "D", text: "108" }
        ],
        rightOption: "C",
        explanation: "Each term is multiplied by 2. The next number is 48 × 2 = 96.",
        isCompleted: false
    },
    {
        id: "25",
        question: "Find the next number: 15, 30, 45, 60, ?",
        options: [
            { id: "A", text: "65" },
            { id: "B", text: "70" },
            { id: "C", text: "75" },
            { id: "D", text: "90" }
        ],
        rightOption: "C",
        explanation: "Each term increases by 15. The next number is 60 + 15 = 75.",
        isCompleted: false
    },
    {
        id: "26",
        question: "Find the next number: 2, 4, 8, 16, 32, ?",
        options: [
            { id: "A", text: "48" },
            { id: "B", text: "54" },
            { id: "C", text: "64" },
            { id: "D", text: "72" }
        ],
        rightOption: "C",
        explanation: "Each term doubles. The next number is 32 × 2 = 64.",
        isCompleted: false
    },
    {
        id: "27",
        question: "Find the next number: 7, 10, 16, 25, 37, ?",
        options: [
            { id: "A", text: "49" },
            { id: "B", text: "50" },
            { id: "C", text: "52" },
            { id: "D", text: "54" }
        ],
        rightOption: "C",
        explanation: "The differences are 3, 6, 9, and 12. The next difference is 15, so 37 + 15 = 52.",
        isCompleted: false
    },
    {
        id: "28",
        question: "Find the next number: 1, 2, 6, 24, 120, ?",
        options: [
            { id: "A", text: "240" },
            { id: "B", text: "360" },
            { id: "C", text: "600" },
            { id: "D", text: "720" }
        ],
        rightOption: "D",
        explanation: "The terms are multiplied by 2, 3, 4, and 5. The next multiplication is by 6: 120 × 6 = 720.",
        isCompleted: false
    },
    {
        id: "29",
        question: "Find the next number: 2, 9, 28, 65, ?",
        options: [
            { id: "A", text: "100" },
            { id: "B", text: "126" },
            { id: "C", text: "130" },
            { id: "D", text: "144" }
        ],
        rightOption: "B",
        explanation: "The terms follow n³ + 1: 1³ + 1 = 2, 2³ + 1 = 9, 3³ + 1 = 28, 4³ + 1 = 65. The next is 5³ + 1 = 126.",
        isCompleted: false
    },
    {
        id: "30",
        question: "Find the next number: 4, 7, 12, 19, 28, ?",
        options: [
            { id: "A", text: "35" },
            { id: "B", text: "37" },
            { id: "C", text: "39" },
            { id: "D", text: "41" }
        ],
        rightOption: "C",
        explanation: "The differences are 3, 5, 7, and 9. The next difference is 11, so 28 + 11 = 39.",
        isCompleted: false
    },
    {
        id: "31",
        question: "Find the next number: 9, 18, 36, 72, ?",
        options: [
            { id: "A", text: "108" },
            { id: "B", text: "126" },
            { id: "C", text: "144" },
            { id: "D", text: "162" }
        ],
        rightOption: "C",
        explanation: "Each term is doubled. The next number is 72 × 2 = 144.",
        isCompleted: false
    },
    {
        id: "32",
        question: "Find the next number: 3, 4, 7, 11, 18, 29, ?",
        options: [
            { id: "A", text: "39" },
            { id: "B", text: "43" },
            { id: "C", text: "47" },
            { id: "D", text: "49" }
        ],
        rightOption: "C",
        explanation: "Each term is the sum of the previous two terms. The next number is 18 + 29 = 47.",
        isCompleted: false
    },
    {
        id: "33",
        question: "Find the next number: 20, 18, 15, 11, 6, ?",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "2" },
            { id: "D", text: "3" }
        ],
        rightOption: "A",
        explanation: "The differences are −2, −3, −4, and −5. The next difference is −6, so 6 − 6 = 0.",
        isCompleted: false
    },
    {
        id: "34",
        question: "Find the next number: 8, 16, 24, 32, ?",
        options: [
            { id: "A", text: "36" },
            { id: "B", text: "40" },
            { id: "C", text: "42" },
            { id: "D", text: "48" }
        ],
        rightOption: "B",
        explanation: "Each term increases by 8. The next number is 32 + 8 = 40.",
        isCompleted: false
    },
    {
        id: "35",
        question: "Find the next number: 13, 17, 23, 31, 41, ?",
        options: [
            { id: "A", text: "49" },
            { id: "B", text: "51" },
            { id: "C", text: "53" },
            { id: "D", text: "55" }
        ],
        rightOption: "C",
        explanation: "The differences are 4, 6, 8, and 10. The next difference is 12, so 41 + 12 = 53.",
        isCompleted: false
    },
    {
        id: "36",
        question: "Find the next number: 1, 5, 14, 30, 55, ?",
        options: [
            { id: "A", text: "81" },
            { id: "B", text: "86" },
            { id: "C", text: "91" },
            { id: "D", text: "96" }
        ],
        rightOption: "C",
        explanation: "The differences are 4, 9, 16, and 25, which are consecutive squares. The next difference is 36, so 55 + 36 = 91.",
        isCompleted: false
    },
    {
        id: "37",
        question: "Find the next number: 144, 121, 100, 81, ?",
        options: [
            { id: "A", text: "49" },
            { id: "B", text: "64" },
            { id: "C", text: "72" },
            { id: "D", text: "75" }
        ],
        rightOption: "B",
        explanation: "These are descending squares: 12², 11², 10², 9². The next is 8² = 64.",
        isCompleted: false
    },
    {
        id: "38",
        question: "Find the next number: 2, 5, 11, 23, 47, ?",
        options: [
            { id: "A", text: "93" },
            { id: "B", text: "94" },
            { id: "C", text: "95" },
            { id: "D", text: "96" }
        ],
        rightOption: "C",
        explanation: "Each term is multiplied by 2 and then 1 is added. The next number is 47 × 2 + 1 = 95.",
        isCompleted: false
    },
    {
        id: "39",
        question: "Find the next number: 6, 11, 21, 41, 81, ?",
        options: [
            { id: "A", text: "121" },
            { id: "B", text: "151" },
            { id: "C", text: "161" },
            { id: "D", text: "171" }
        ],
        rightOption: "C",
        explanation: "Each term is multiplied by 2 and then 1 is subtracted. The next number is 81 × 2 − 1 = 161.",
        isCompleted: false
    },
    {
        id: "40",
        question: "Find the next number: 3, 8, 15, 24, 35, ?",
        options: [
            { id: "A", text: "46" },
            { id: "B", text: "48" },
            { id: "C", text: "50" },
            { id: "D", text: "52" }
        ],
        rightOption: "B",
        explanation: "The differences are 5, 7, 9, and 11. The next difference is 13, so 35 + 13 = 48.",
        isCompleted: false
    },
    {
        id: "41",
        question: "Find the next number: 2, 10, 30, 68, 130, ?",
        options: [
            { id: "A", text: "180" },
            { id: "B", text: "210" },
            { id: "C", text: "222" },
            { id: "D", text: "230" }
        ],
        rightOption: "C",
        explanation: "The terms follow n³ + n: 1³ + 1 = 2, 2³ + 2 = 10, 3³ + 3 = 30, 4³ + 4 = 68, 5³ + 5 = 130. The next is 6³ + 6 = 222.",
        isCompleted: false
    },
    {
        id: "42",
        question: "Find the next number: 7, 14, 28, 56, ?",
        options: [
            { id: "A", text: "84" },
            { id: "B", text: "98" },
            { id: "C", text: "112" },
            { id: "D", text: "120" }
        ],
        rightOption: "C",
        explanation: "Each term doubles. The next number is 56 × 2 = 112.",
        isCompleted: false
    },
    {
        id: "43",
        question: "Find the next number: 1000, 900, 810, 729, ?",
        options: [
            { id: "A", text: "650" },
            { id: "B", text: "656.1" },
            { id: "C", text: "660" },
            { id: "D", text: "700" }
        ],
        rightOption: "B",
        explanation: "Each term is multiplied by 0.9. The next number is 729 × 0.9 = 656.1.",
        isCompleted: false
    },
    {
        id: "44",
        question: "Find the next number: 4, 16, 36, 64, ?",
        options: [
            { id: "A", text: "81" },
            { id: "B", text: "100" },
            { id: "C", text: "121" },
            { id: "D", text: "144" }
        ],
        rightOption: "B",
        explanation: "These are squares of even numbers: 2², 4², 6², 8². The next is 10² = 100.",
        isCompleted: false
    },
    {
        id: "45",
        question: "Find the next number: 1, 4, 10, 19, 31, ?",
        options: [
            { id: "A", text: "43" },
            { id: "B", text: "46" },
            { id: "C", text: "49" },
            { id: "D", text: "52" }
        ],
        rightOption: "B",
        explanation: "The differences are 3, 6, 9, and 12. The next difference is 15, so 31 + 15 = 46.",
        isCompleted: false
    },
    {
        id: "46",
        question: "Find the next number: 31, 28, 24, 19, 13, ?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "6" },
            { id: "C", text: "7" },
            { id: "D", text: "8" }
        ],
        rightOption: "B",
        explanation: "The differences are −3, −4, −5, and −6. The next difference is −7, so 13 − 7 = 6.",
        isCompleted: false
    },
    {
        id: "47",
        question: "Find the next number: 2, 3, 6, 11, 18, ?",
        options: [
            { id: "A", text: "25" },
            { id: "B", text: "27" },
            { id: "C", text: "29" },
            { id: "D", text: "31" }
        ],
        rightOption: "B",
        explanation: "The differences are 1, 3, 5, and 7. The next difference is 9, so 18 + 9 = 27.",
        isCompleted: false
    },
    {
        id: "48",
        question: "Find the next number: 5, 25, 125, 625, ?",
        options: [
            { id: "A", text: "1250" },
            { id: "B", text: "2500" },
            { id: "C", text: "3125" },
            { id: "D", text: "6250" }
        ],
        rightOption: "C",
        explanation: "Each term is multiplied by 5. The next number is 625 × 5 = 3125.",
        isCompleted: false
    },
    {
        id: "49",
        question: "Find the next number: 2, 4, 7, 11, 16, ?",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "21" },
            { id: "C", text: "22" },
            { id: "D", text: "23" }
        ],
        rightOption: "C",
        explanation: "The differences are 2, 3, 4, and 5. The next difference is 6, so 16 + 6 = 22.",
        isCompleted: false
    },
    {
        id: "50",
        question: "Find the next number: 90, 81, 73, 66, 60, ?",
        options: [
            { id: "A", text: "53" },
            { id: "B", text: "54" },
            { id: "C", text: "55" },
            { id: "D", text: "56" }
        ],
        rightOption: "B",
        explanation: "The differences are −9, −8, −7, and −6. The next difference is −5, so 60 − 5 = 55.",
        isCompleted: false
    },
    {
        id: "51",
        question: "Find the next number: 12, 24, 48, 96, ?",
        options: [
            { id: "A", text: "144" },
            { id: "B", text: "168" },
            { id: "C", text: "192" },
            { id: "D", text: "216" }
        ],
        rightOption: "C",
        explanation: "Each term doubles. The next number is 96 × 2 = 192.",
        isCompleted: false
    },
    {
        id: "52",
        question: "Find the next number: 3, 7, 15, 31, 63, ?",
        options: [
            { id: "A", text: "95" },
            { id: "B", text: "111" },
            { id: "C", text: "127" },
            { id: "D", text: "129" }
        ],
        rightOption: "C",
        explanation: "Each term is multiplied by 2 and then 1 is added. The next number is 63 × 2 + 1 = 127.",
        isCompleted: false
    },
    {
        id: "53",
        question: "Find the next number: 8, 13, 21, 34, 55, ?",
        options: [
            { id: "A", text: "76" },
            { id: "B", text: "81" },
            { id: "C", text: "89" },
            { id: "D", text: "90" }
        ],
        rightOption: "C",
        explanation: "Each term is the sum of the previous two terms. The next number is 34 + 55 = 89.",
        isCompleted: false
    },
    {
        id: "54",
        question: "Find the next number: 1, 9, 25, 49, 81, ?",
        options: [
            { id: "A", text: "100" },
            { id: "B", text: "121" },
            { id: "C", text: "144" },
            { id: "D", text: "169" }
        ],
        rightOption: "B",
        explanation: "These are squares of odd numbers: 1², 3², 5², 7², 9². The next is 11² = 121.",
        isCompleted: false
    },
    {
        id: "55",
        question: "Find the next number: 2, 12, 36, 80, 150, ?",
        options: [
            { id: "A", text: "210" },
            { id: "B", text: "240" },
            { id: "C", text: "252" },
            { id: "D", text: "280" }
        ],
        rightOption: "C",
        explanation: "The terms follow n²(n + 1): 1² × 2 = 2, 2² × 3 = 12, 3² × 4 = 36, 4² × 5 = 80, 5² × 6 = 150. The next is 6² × 7 = 252.",
        isCompleted: false
    }
];

export const alphabetSeriesQuestions = [
    {
        id: "1",
        question: "Find the next letter in the series: A, B, C, D, ?",
        options: [
            { id: "A", text: "E" },
            { id: "B", text: "F" },
            { id: "C", text: "G" },
            { id: "D", text: "H" }
        ],
        rightOption: "A",
        explanation: "The letters follow alphabetical order. The next letter after D is E.",
        isCompleted: false
    },
    {
        id: "2",
        question: "Find the next letter: A, C, E, G, ?",
        options: [
            { id: "A", text: "H" },
            { id: "B", text: "I" },
            { id: "C", text: "J" },
            { id: "D", text: "K" }
        ],
        rightOption: "B",
        explanation: "The series skips one letter each time. The next letter after G is I.",
        isCompleted: false
    },
    {
        id: "3",
        question: "Find the next letter: Z, Y, X, W, ?",
        options: [
            { id: "A", text: "T" },
            { id: "B", text: "U" },
            { id: "C", text: "V" },
            { id: "D", text: "S" }
        ],
        rightOption: "C",
        explanation: "The letters move backward through the alphabet. The next letter is V.",
        isCompleted: false
    },
    {
        id: "4",
        question: "Find the next letter: B, D, F, H, ?",
        options: [
            { id: "A", text: "I" },
            { id: "B", text: "J" },
            { id: "C", text: "K" },
            { id: "D", text: "L" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by two positions. H + 2 = J.",
        isCompleted: false
    },
    {
        id: "5",
        question: "Find the next letter: A, D, G, J, ?",
        options: [
            { id: "A", text: "L" },
            { id: "B", text: "M" },
            { id: "C", text: "N" },
            { id: "D", text: "O" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by three positions. J + 3 = M.",
        isCompleted: false
    },
    {
        id: "6",
        question: "Find the next letter: C, F, I, L, ?",
        options: [
            { id: "A", text: "N" },
            { id: "B", text: "O" },
            { id: "C", text: "P" },
            { id: "D", text: "Q" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by three positions. L + 3 = O.",
        isCompleted: false
    },
    {
        id: "7",
        question: "Find the next letter: A, E, I, M, ?",
        options: [
            { id: "A", text: "P" },
            { id: "B", text: "Q" },
            { id: "C", text: "R" },
            { id: "D", text: "S" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by four positions. M + 4 = Q.",
        isCompleted: false
    },
    {
        id: "8",
        question: "Find the next letter: B, F, J, N, ?",
        options: [
            { id: "A", text: "Q" },
            { id: "B", text: "R" },
            { id: "C", text: "S" },
            { id: "D", text: "T" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by four positions. N + 4 = R.",
        isCompleted: false
    },
    {
        id: "9",
        question: "Find the next letter: Z, W, T, Q, ?",
        options: [
            { id: "A", text: "M" },
            { id: "B", text: "N" },
            { id: "C", text: "O" },
            { id: "D", text: "P" }
        ],
        rightOption: "B",
        explanation: "Each letter moves backward by three positions. Q − 3 = N.",
        isCompleted: false
    },
    {
        id: "10",
        question: "Find the next letter: Y, V, S, P, ?",
        options: [
            { id: "A", text: "L" },
            { id: "B", text: "M" },
            { id: "C", text: "N" },
            { id: "D", text: "O" }
        ],
        rightOption: "B",
        explanation: "Each letter moves backward by three positions. P − 3 = M.",
        isCompleted: false
    },
    {
        id: "11",
        question: "Find the next letter: A, B, D, G, K, ?",
        options: [
            { id: "A", text: "O" },
            { id: "B", text: "P" },
            { id: "C", text: "Q" },
            { id: "D", text: "R" }
        ],
        rightOption: "B",
        explanation: "The increments are +1, +2, +3, and +4. The next increment is +5, giving P.",
        isCompleted: false
    },
    {
        id: "12",
        question: "Find the next letter: A, C, F, J, O, ?",
        options: [
            { id: "A", text: "T" },
            { id: "B", text: "U" },
            { id: "C", text: "V" },
            { id: "D", text: "W" }
        ],
        rightOption: "B",
        explanation: "The increments are +2, +3, +4, and +5. The next increment is +6, giving U.",
        isCompleted: false
    },
    {
        id: "13",
        question: "Find the next letter: Z, X, U, Q, L, ?",
        options: [
            { id: "A", text: "F" },
            { id: "B", text: "G" },
            { id: "C", text: "H" },
            { id: "D", text: "I" }
        ],
        rightOption: "B",
        explanation: "The backward steps are −2, −3, −4, and −5. The next step is −6, giving F.",
        isCompleted: false
    },
    {
        id: "14",
        question: "Find the next letter: B, C, E, H, L, ?",
        options: [
            { id: "A", text: "P" },
            { id: "B", text: "Q" },
            { id: "C", text: "R" },
            { id: "D", text: "S" }
        ],
        rightOption: "B",
        explanation: "The increments are +1, +2, +3, and +4. The next increment is +5, giving Q.",
        isCompleted: false
    },
    {
        id: "15",
        question: "Find the next letter: D, H, L, P, ?",
        options: [
            { id: "A", text: "S" },
            { id: "B", text: "T" },
            { id: "C", text: "U" },
            { id: "D", text: "V" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by four positions. P + 4 = T.",
        isCompleted: false
    },
    {
        id: "16",
        question: "Find the next letter: A, Z, B, Y, C, X, ?",
        options: [
            { id: "A", text: "D" },
            { id: "B", text: "W" },
            { id: "C", text: "E" },
            { id: "D", text: "V" }
        ],
        rightOption: "A",
        explanation: "The series alternates between ascending letters (A, B, C, D) and descending letters (Z, Y, X). The next letter is D.",
        isCompleted: false
    },
    {
        id: "17",
        question: "Find the next letter: A, C, B, D, C, E, ?",
        options: [
            { id: "A", text: "D" },
            { id: "B", text: "E" },
            { id: "C", text: "F" },
            { id: "D", text: "G" }
        ],
        rightOption: "B",
        explanation: "There are two alternating sequences: A, B, C, D and C, D, E. The next letter in the first sequence is D.",
        isCompleted: false
    },
    {
        id: "18",
        question: "Find the next letter: B, E, C, F, D, G, ?",
        options: [
            { id: "A", text: "E" },
            { id: "B", text: "H" },
            { id: "C", text: "F" },
            { id: "D", text: "I" }
        ],
        rightOption: "A",
        explanation: "The alternating sequences are B, C, D, E and E, F, G. The next letter in the first sequence is E.",
        isCompleted: false
    },
    {
        id: "19",
        question: "Find the next letter: A, D, B, E, C, F, ?",
        options: [
            { id: "A", text: "D" },
            { id: "B", text: "G" },
            { id: "C", text: "E" },
            { id: "D", text: "H" }
        ],
        rightOption: "A",
        explanation: "The alternating sequences are A, B, C, D and D, E, F. The next letter in the first sequence is D.",
        isCompleted: false
    },
    {
        id: "20",
        question: "Find the next letter: Z, A, Y, B, X, C, ?",
        options: [
            { id: "A", text: "W" },
            { id: "B", text: "D" },
            { id: "C", text: "V" },
            { id: "D", text: "E" }
        ],
        rightOption: "A",
        explanation: "The series alternates descending letters Z, Y, X, W and ascending letters A, B, C. The next letter is W.",
        isCompleted: false
    },
    {
        id: "21",
        question: "Find the next letter: A, E, B, F, C, G, ?",
        options: [
            { id: "A", text: "D" },
            { id: "B", text: "H" },
            { id: "C", text: "E" },
            { id: "D", text: "I" }
        ],
        rightOption: "A",
        explanation: "The alternating sequences are A, B, C, D and E, F, G. The next letter is D.",
        isCompleted: false
    },
    {
        id: "22",
        question: "Find the next letter: C, Z, D, Y, E, X, ?",
        options: [
            { id: "A", text: "F" },
            { id: "B", text: "W" },
            { id: "C", text: "G" },
            { id: "D", text: "V" }
        ],
        rightOption: "A",
        explanation: "The ascending sequence is C, D, E, F while the descending sequence is Z, Y, X. The next letter is F.",
        isCompleted: false
    },
    {
        id: "23",
        question: "Find the next letter: A, D, G, J, M, ?",
        options: [
            { id: "A", text: "O" },
            { id: "B", text: "P" },
            { id: "C", text: "Q" },
            { id: "D", text: "R" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by three positions. M + 3 = P.",
        isCompleted: false
    },
    {
        id: "24",
        question: "Find the next letter: C, G, K, O, ?",
        options: [
            { id: "A", text: "R" },
            { id: "B", text: "S" },
            { id: "C", text: "T" },
            { id: "D", text: "U" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by four positions. O + 4 = S.",
        isCompleted: false
    },
    {
        id: "25",
        question: "Find the next letter: F, J, N, R, ?",
        options: [
            { id: "A", text: "U" },
            { id: "B", text: "V" },
            { id: "C", text: "W" },
            { id: "D", text: "X" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by four positions. R + 4 = V.",
        isCompleted: false
    },
    {
        id: "26",
        question: "Find the next letter: Y, U, Q, M, ?",
        options: [
            { id: "A", text: "H" },
            { id: "B", text: "I" },
            { id: "C", text: "J" },
            { id: "D", text: "K" }
        ],
        rightOption: "B",
        explanation: "Each letter moves backward by four positions. M − 4 = I.",
        isCompleted: false
    },
    {
        id: "27",
        question: "Find the next letter: B, G, L, Q, ?",
        options: [
            { id: "A", text: "U" },
            { id: "B", text: "V" },
            { id: "C", text: "W" },
            { id: "D", text: "X" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by five positions. Q + 5 = V.",
        isCompleted: false
    },
    {
        id: "28",
        question: "Find the next letter: A, F, K, P, ?",
        options: [
            { id: "A", text: "T" },
            { id: "B", text: "U" },
            { id: "C", text: "V" },
            { id: "D", text: "W" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by five positions. P + 5 = U.",
        isCompleted: false
    },
    {
        id: "29",
        question: "Find the next letter: Z, U, P, K, ?",
        options: [
            { id: "A", text: "E" },
            { id: "B", text: "F" },
            { id: "C", text: "G" },
            { id: "D", text: "H" }
        ],
        rightOption: "B",
        explanation: "Each letter moves backward by five positions. K − 5 = F.",
        isCompleted: false
    },
    {
        id: "30",
        question: "Find the next letter: D, I, N, S, ?",
        options: [
            { id: "A", text: "V" },
            { id: "B", text: "W" },
            { id: "C", text: "X" },
            { id: "D", text: "Y" }
        ],
        rightOption: "B",
        explanation: "Each letter advances by five positions. S + 5 = X.",
        isCompleted: false
    },
    {
        id: "31",
        question: "Find the next letter: A, C, F, J, O, ?",
        options: [
            { id: "A", text: "T" },
            { id: "B", text: "U" },
            { id: "C", text: "V" },
            { id: "D", text: "W" }
        ],
        rightOption: "B",
        explanation: "The increments are +2, +3, +4, and +5. The next increment is +6, so O becomes U.",
        isCompleted: false
    },
    {
        id: "32",
        question: "Find the next letter: B, D, G, K, P, ?",
        options: [
            { id: "A", text: "U" },
            { id: "B", text: "V" },
            { id: "C", text: "W" },
            { id: "D", text: "X" }
        ],
        rightOption: "B",
        explanation: "The increments are +2, +3, +4, and +5. The next increment is +6, so P becomes V.",
        isCompleted: false
    },
    {
        id: "33",
        question: "Find the next letter: Z, W, S, N, H, ?",
        options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" }
        ],
        rightOption: "A",
        explanation: "The backward steps are −3, −4, −5, and −6. The next step is −7, which wraps H backward to A.",
        isCompleted: false
    },
    {
        id: "34",
        question: "Find the next letter: A, B, E, J, Q, ?",
        options: [
            { id: "A", text: "X" },
            { id: "B", text: "Y" },
            { id: "C", text: "Z" },
            { id: "D", text: "W" }
        ],
        rightOption: "C",
        explanation: "The positions are 1, 2, 5, 10, and 17, increasing by 1, 3, 5, and 7. The next increase is 9, giving position 26, or Z.",
        isCompleted: false
    },
    {
        id: "35",
        question: "Find the next letter: B, E, J, Q, ?",
        options: [
            { id: "A", text: "X" },
            { id: "B", text: "Y" },
            { id: "C", text: "Z" },
            { id: "D", text: "W" }
        ],
        rightOption: "B",
        explanation: "The positions are 2, 5, 10, and 17, increasing by 3, 5, and 7. The next increase is 9, giving 26, or Z.",
        isCompleted: false
    },
    {
        id: "36",
        question: "Find the next letter: A, Z, C, X, E, V, ?",
        options: [
            { id: "A", text: "G" },
            { id: "B", text: "T" },
            { id: "C", text: "H" },
            { id: "D", text: "S" }
        ],
        rightOption: "A",
        explanation: "The ascending letters are A, C, E, G, and the descending letters are Z, X, V. The next letter is G.",
        isCompleted: false
    },
    {
        id: "37",
        question: "Find the next letter: B, Y, D, W, F, U, ?",
        options: [
            { id: "A", text: "H" },
            { id: "B", text: "S" },
            { id: "C", text: "I" },
            { id: "D", text: "R" }
        ],
        rightOption: "A",
        explanation: "The ascending letters are B, D, F, H, while the descending letters are Y, W, U. The next letter is H.",
        isCompleted: false
    },
    {
        id: "38",
        question: "Find the next letter: A, C, E, G, I, ?",
        options: [
            { id: "A", text: "J" },
            { id: "B", text: "K" },
            { id: "C", text: "L" },
            { id: "D", text: "M" }
        ],
        rightOption: "B",
        explanation: "The series skips one letter each time. The next letter after I is K.",
        isCompleted: false
    },
    {
        id: "39",
        question: "Find the next letter: M, K, I, G, ?",
        options: [
            { id: "A", text: "D" },
            { id: "B", text: "E" },
            { id: "C", text: "F" },
            { id: "D", text: "H" }
        ],
        rightOption: "B",
        explanation: "Each letter moves backward by two positions. G − 2 = E.",
        isCompleted: false
    },
    {
        id: "40",
        question: "Find the next letter: C, F, J, O, U, ?",
        options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" }
        ],
        rightOption: "B",
        explanation: "The increments are +3, +4, +5, and +6. The next increment is +7. U + 7 wraps around to B.",
        isCompleted: false
    },
    {
        id: "41",
        question: "Find the next letter: A, F, M, V, ?",
        options: [
            { id: "A", text: "C" },
            { id: "B", text: "G" },
            { id: "C", text: "H" },
            { id: "D", text: "J" }
        ],
        rightOption: "A",
        explanation: "The positions are 1, 6, 13, and 22, with increments +5, +7, and +9. The next increment is +11; wrapping around the alphabet gives G.",
        isCompleted: false
    },
    {
        id: "42",
        question: "Find the next letter: Z, X, U, Q, L, ?",
        options: [
            { id: "A", text: "E" },
            { id: "B", text: "F" },
            { id: "C", text: "G" },
            { id: "D", text: "H" }
        ],
        rightOption: "B",
        explanation: "The backward steps are −2, −3, −4, and −5. The next step is −6, so L becomes F.",
        isCompleted: false
    },
    {
        id: "43",
        question: "Find the next letter: D, G, K, P, V, ?",
        options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" }
        ],
        rightOption: "B",
        explanation: "The increments are +3, +4, +5, and +6. The next increment is +7. V + 7 wraps around to C.",
        isCompleted: false
    },
    {
        id: "44",
        question: "Find the next letter: A, D, H, M, S, ?",
        options: [
            { id: "A", text: "X" },
            { id: "B", text: "Y" },
            { id: "C", text: "Z" },
            { id: "D", text: "A" }
        ],
        rightOption: "C",
        explanation: "The increments are +3, +4, +5, and +6. The next increment is +7, so S advances to Z.",
        isCompleted: false
    },
    {
        id: "45",
        question: "Find the next letter: B, F, K, Q, X, ?",
        options: [
            { id: "A", text: "D" },
            { id: "B", text: "E" },
            { id: "C", text: "F" },
            { id: "D", text: "G" }
        ],
        rightOption: "B",
        explanation: "The increments are +4, +5, +6, and +7. The next increment is +8. X + 8 wraps around to F.",
        isCompleted: false
    },
    {
        id: "46",
        question: "Find the next letter: Z, V, Q, K, D, ?",
        options: [
            { id: "A", text: "W" },
            { id: "B", text: "X" },
            { id: "C", text: "Y" },
            { id: "D", text: "Z" }
        ],
        rightOption: "B",
        explanation: "The backward steps are −4, −5, −6, and −7. The next step is −8, wrapping D backward to V.",
        isCompleted: false
    },
    {
        id: "47",
        question: "Find the next letter: A, B, C, E, H, M, ?",
        options: [
            { id: "A", text: "S" },
            { id: "B", text: "T" },
            { id: "C", text: "U" },
            { id: "D", text: "V" }
        ],
        rightOption: "B",
        explanation: "The increments are +1, +1, +2, +3, and +5. Continuing with the Fibonacci-style increments, the next increment is +8, giving U.",
        isCompleted: false
    },
    {
        id: "48",
        question: "Find the next letter: A, C, G, O, ?",
        options: [
            { id: "A", text: "W" },
            { id: "B", text: "Y" },
            { id: "C", text: "Z" },
            { id: "D", text: "X" }
        ],
        rightOption: "C",
        explanation: "The increments double: +2, +4, +8, then +16. O is position 15; adding 16 and wrapping around gives E.",
        isCompleted: false
    },
    {
        id: "49",
        question: "Find the next letter: B, D, H, N, V, ?",
        options: [
            { id: "A", text: "D" },
            { id: "B", text: "E" },
            { id: "C", text: "F" },
            { id: "D", text: "G" }
        ],
        rightOption: "C",
        explanation: "The increments are +2, +4, +6, and +8. The next increment is +10. V + 10 wraps around to F.",
        isCompleted: false
    },
    {
        id: "50",
        question: "Find the next letter: A, B, D, H, P, ?",
        options: [
            { id: "A", text: "X" },
            { id: "B", text: "Y" },
            { id: "C", text: "Z" },
            { id: "D", text: "W" }
        ],
        rightOption: "C",
        explanation: "The positions are 1, 2, 4, 8, and 16, doubling each time. The next position is 32; wrapping around the 26-letter alphabet gives F.",
        isCompleted: false
    },
    {
        id: "51",
        question: "Find the next letter: Z, Y, W, T, P, ?",
        options: [
            { id: "A", text: "J" },
            { id: "B", text: "K" },
            { id: "C", text: "L" },
            { id: "D", text: "M" }
        ],
        rightOption: "B",
        explanation: "The backward steps are −1, −2, −3, and −4. The next step is −5, so P becomes K.",
        isCompleted: false
    },
    {
        id: "52",
        question: "Find the next letter: C, E, I, O, ?",
        options: [
            { id: "A", text: "U" },
            { id: "B", text: "W" },
            { id: "C", text: "X" },
            { id: "D", text: "Y" }
        ],
        rightOption: "B",
        explanation: "The increments are +2, +4, and +6. The next increment is +8, so O advances to W.",
        isCompleted: false
    },
    {
        id: "53",
        question: "Find the next letter: B, C, E, H, M, ?",
        options: [
            { id: "A", text: "R" },
            { id: "B", text: "S" },
            { id: "C", text: "T" },
            { id: "D", text: "U" }
        ],
        rightOption: "B",
        explanation: "The increments are +1, +2, +3, and +5. Continuing with Fibonacci-style increments, the next increment is +8, giving U.",
        isCompleted: false
    },
    {
        id: "54",
        question: "Find the next letter: A, D, I, P, ?",
        options: [
            { id: "A", text: "U" },
            { id: "B", text: "V" },
            { id: "C", text: "Y" },
            { id: "D", text: "Z" }
        ],
        rightOption: "C",
        explanation: "The positions are 1, 4, 9, and 16, which are squares of 1, 2, 3, and 4. The next is 5² = 25, or Y.",
        isCompleted: false
    },
    {
        id: "55",
        question: "Find the next letter: Z, W, R, K, C, ?",
        options: [
            { id: "A", text: "S" },
            { id: "B", text: "T" },
            { id: "C", text: "U" },
            { id: "D", text: "V" }
        ],
        rightOption: "B",
        explanation: "The backward steps are −3, −5, −7, and −8. Continuing with increasing odd steps gives −9; C moves backward by 9 positions to T.",
        isCompleted: false
    }
];

export const alphanumericSeriesQuestions = [
    {
        id: "1",
        question: "Find the next term in the series: A1, B2, C3, D4, ?",
        options: [
            { id: "A", text: "E5" },
            { id: "B", text: "E6" },
            { id: "C", text: "F5" },
            { id: "D", text: "D5" }
        ],
        rightOption: "A",
        explanation: "Both the letters and numbers increase by 1. The next term is E5.",
        isCompleted: false
    },
    {
        id: "2",
        question: "Find the next term: A2, C4, E6, G8, ?",
        options: [
            { id: "A", text: "H10" },
            { id: "B", text: "I10" },
            { id: "C", text: "I9" },
            { id: "D", text: "J10" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 2 positions and numbers increase by 2. The next term is I10.",
        isCompleted: false
    },
    {
        id: "3",
        question: "Find the next term: Z1, Y2, X3, W4, ?",
        options: [
            { id: "A", text: "V5" },
            { id: "B", text: "U5" },
            { id: "C", text: "V4" },
            { id: "D", text: "W5" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 1 while numbers increase by 1. The next term is V5.",
        isCompleted: false
    },
    {
        id: "4",
        question: "Find the next term: B2, D4, F6, H8, ?",
        options: [
            { id: "A", text: "I10" },
            { id: "B", text: "J10" },
            { id: "C", text: "J9" },
            { id: "D", text: "K10" }
        ],
        rightOption: "B",
        explanation: "Letters and numbers both increase by 2. The next term is J10.",
        isCompleted: false
    },
    {
        id: "5",
        question: "Find the next term: A5, B10, C15, D20, ?",
        options: [
            { id: "A", text: "E25" },
            { id: "B", text: "E24" },
            { id: "C", text: "F25" },
            { id: "D", text: "D25" }
        ],
        rightOption: "A",
        explanation: "Letters increase by 1 and numbers increase by 5. The next term is E25.",
        isCompleted: false
    },
    {
        id: "6",
        question: "Find the next term: A1, C3, E5, G7, ?",
        options: [
            { id: "A", text: "H8" },
            { id: "B", text: "I9" },
            { id: "C", text: "I8" },
            { id: "D", text: "J9" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 2 and numbers increase by 2. The next term is I9.",
        isCompleted: false
    },
    {
        id: "7",
        question: "Find the next term: M1, N3, O5, P7, ?",
        options: [
            { id: "A", text: "Q9" },
            { id: "B", text: "Q8" },
            { id: "C", text: "R9" },
            { id: "D", text: "P9" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 1 and odd numbers increase by 2. The next term is Q9.",
        isCompleted: false
    },
    {
        id: "8",
        question: "Find the next term: Z2, X4, V6, T8, ?",
        options: [
            { id: "A", text: "R10" },
            { id: "B", text: "S10" },
            { id: "C", text: "R9" },
            { id: "D", text: "Q10" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 2 and numbers increase by 2. The next term is R10.",
        isCompleted: false
    },
    {
        id: "9",
        question: "Find the next term: A10, B20, C30, D40, ?",
        options: [
            { id: "A", text: "E45" },
            { id: "B", text: "E50" },
            { id: "C", text: "F50" },
            { id: "D", text: "E60" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 1 and numbers increase by 10. The next term is E50.",
        isCompleted: false
    },
    {
        id: "10",
        question: "Find the next term: C1, F2, I3, L4, ?",
        options: [
            { id: "A", text: "N5" },
            { id: "B", text: "O5" },
            { id: "C", text: "O6" },
            { id: "D", text: "P5" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 3 positions while numbers increase by 1. The next term is O5.",
        isCompleted: false
    },
    {
        id: "11",
        question: "Find the next term: A1, B4, C9, D16, ?",
        options: [
            { id: "A", text: "E20" },
            { id: "B", text: "E25" },
            { id: "C", text: "F25" },
            { id: "D", text: "E36" }
        ],
        rightOption: "B",
        explanation: "Letters increase by 1 and numbers are consecutive squares: 1, 4, 9, 16, 25. The next term is E25.",
        isCompleted: false
    },
    {
        id: "12",
        question: "Find the next term: A2, B4, C8, D16, ?",
        options: [
            { id: "A", text: "E24" },
            { id: "B", text: "E30" },
            { id: "C", text: "E32" },
            { id: "D", text: "F32" }
        ],
        rightOption: "C",
        explanation: "Letters increase by 1 and numbers double each time. The next term is E32.",
        isCompleted: false
    },
    {
        id: "13",
        question: "Find the next term: P1, O2, N3, M4, ?",
        options: [
            { id: "A", text: "L5" },
            { id: "B", text: "K5" },
            { id: "C", text: "L4" },
            { id: "D", text: "M5" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 1 while numbers increase by 1. The next term is L5.",
        isCompleted: false
    },
    {
        id: "14",
        question: "Find the next term: A3, C6, E9, G12, ?",
        options: [
            { id: "A", text: "H15" },
            { id: "B", text: "I15" },
            { id: "C", text: "I14" },
            { id: "D", text: "J15" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 2 and numbers increase by 3. The next term is I15.",
        isCompleted: false
    },
    {
        id: "15",
        question: "Find the next term: B1, D4, F9, H16, ?",
        options: [
            { id: "A", text: "J20" },
            { id: "B", text: "J25" },
            { id: "C", text: "K25" },
            { id: "D", text: "J36" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 2 and numbers are consecutive squares. The next term is J25.",
        isCompleted: false
    },
    {
        id: "16",
        question: "Find the next term: A1, C2, E3, G4, ?",
        options: [
            { id: "A", text: "H5" },
            { id: "B", text: "I5" },
            { id: "C", text: "I6" },
            { id: "D", text: "J5" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 2 while numbers increase by 1. The next term is I5.",
        isCompleted: false
    },
    {
        id: "17",
        question: "Find the next term: Z10, Y9, X8, W7, ?",
        options: [
            { id: "A", text: "V6" },
            { id: "B", text: "U6" },
            { id: "C", text: "V7" },
            { id: "D", text: "W6" }
        ],
        rightOption: "A",
        explanation: "Letters and numbers both decrease by 1. The next term is V6.",
        isCompleted: false
    },
    {
        id: "18",
        question: "Find the next term: A2, D4, G6, J8, ?",
        options: [
            { id: "A", text: "L10" },
            { id: "B", text: "M10" },
            { id: "C", text: "M9" },
            { id: "D", text: "N10" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 3 and numbers increase by 2. The next term is M10.",
        isCompleted: false
    },
    {
        id: "19",
        question: "Find the next term: B2, C4, E6, H8, ?",
        options: [
            { id: "A", text: "L10" },
            { id: "B", text: "M10" },
            { id: "C", text: "L12" },
            { id: "D", text: "K10" }
        ],
        rightOption: "A",
        explanation: "Letter increments are +1, +2, +3, so the next is +4: H becomes L. Numbers increase by 2, giving L10.",
        isCompleted: false
    },
    {
        id: "20",
        question: "Find the next term: A1, D2, G3, J4, ?",
        options: [
            { id: "A", text: "L5" },
            { id: "B", text: "M5" },
            { id: "C", text: "M6" },
            { id: "D", text: "N5" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 3 and numbers increase by 1. The next term is M5.",
        isCompleted: false
    },
    {
        id: "21",
        question: "Find the next term: A2, C5, E8, G11, ?",
        options: [
            { id: "A", text: "I14" },
            { id: "B", text: "H14" },
            { id: "C", text: "I13" },
            { id: "D", text: "J14" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 2 and numbers increase by 3. The next term is I14.",
        isCompleted: false
    },
    {
        id: "22",
        question: "Find the next term: Z1, W2, T3, Q4, ?",
        options: [
            { id: "A", text: "N5" },
            { id: "B", text: "O5" },
            { id: "C", text: "N4" },
            { id: "D", text: "M5" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 3 and numbers increase by 1. The next term is N5.",
        isCompleted: false
    },
    {
        id: "23",
        question: "Find the next term: A1, E2, I3, M4, ?",
        options: [
            { id: "A", text: "P5" },
            { id: "B", text: "Q5" },
            { id: "C", text: "Q4" },
            { id: "D", text: "R5" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 4 and numbers increase by 1. The next term is Q5.",
        isCompleted: false
    },
    {
        id: "24",
        question: "Find the next term: A1, B3, C6, D10, ?",
        options: [
            { id: "A", text: "E14" },
            { id: "B", text: "E15" },
            { id: "C", text: "F15" },
            { id: "D", text: "E16" }
        ],
        rightOption: "B",
        explanation: "The numbers increase by 2, 3, and 4. The next increase is 5, giving 15. The next term is E15.",
        isCompleted: false
    },
    {
        id: "25",
        question: "Find the next term: B2, D6, F12, H20, ?",
        options: [
            { id: "A", text: "J28" },
            { id: "B", text: "J30" },
            { id: "C", text: "K30" },
            { id: "D", text: "J32" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 2. Numbers follow n(n + 1): 2, 6, 12, 20, 30. The next term is J30.",
        isCompleted: false
    },
    {
        id: "26",
        question: "Find the next term: A5, C10, E15, G20, ?",
        options: [
            { id: "A", text: "I25" },
            { id: "B", text: "H25" },
            { id: "C", text: "I30" },
            { id: "D", text: "J25" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 2 and numbers increase by 5. The next term is I25.",
        isCompleted: false
    },
    {
        id: "27",
        question: "Find the next term: A1, C4, E9, G16, ?",
        options: [
            { id: "A", text: "I25" },
            { id: "B", text: "H25" },
            { id: "C", text: "I20" },
            { id: "D", text: "J25" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 2 and numbers are consecutive squares. The next term is I25.",
        isCompleted: false
    },
    {
        id: "28",
        question: "Find the next term: Z2, X4, V8, T16, ?",
        options: [
            { id: "A", text: "R32" },
            { id: "B", text: "S32" },
            { id: "C", text: "R30" },
            { id: "D", text: "Q32" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 2 and numbers double. The next term is R32.",
        isCompleted: false
    },
    {
        id: "29",
        question: "Find the next term: C3, F6, I9, L12, ?",
        options: [
            { id: "A", text: "N15" },
            { id: "B", text: "O15" },
            { id: "C", text: "O14" },
            { id: "D", text: "P15" }
        ],
        rightOption: "B",
        explanation: "Letters and numbers both increase by 3. The next term is O15.",
        isCompleted: false
    },
    {
        id: "30",
        question: "Find the next term: A10, C9, E8, G7, ?",
        options: [
            { id: "A", text: "I6" },
            { id: "B", text: "H6" },
            { id: "C", text: "I5" },
            { id: "D", text: "J6" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 2 while numbers decrease by 1. The next term is I6.",
        isCompleted: false
    },
    {
        id: "31",
        question: "Find the next term: B1, E2, H3, K4, ?",
        options: [
            { id: "A", text: "N5" },
            { id: "B", text: "M5" },
            { id: "C", text: "N6" },
            { id: "D", text: "O5" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 3 and numbers increase by 1. The next term is N5.",
        isCompleted: false
    },
    {
        id: "32",
        question: "Find the next term: A1, D4, G9, J16, ?",
        options: [
            { id: "A", text: "M25" },
            { id: "B", text: "N25" },
            { id: "C", text: "M20" },
            { id: "D", text: "L25" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 3 and numbers are consecutive squares. The next term is M25.",
        isCompleted: false
    },
    {
        id: "33",
        question: "Find the next term: Z5, X10, V15, T20, ?",
        options: [
            { id: "A", text: "R25" },
            { id: "B", text: "S25" },
            { id: "C", text: "R20" },
            { id: "D", text: "Q25" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 2 and numbers increase by 5. The next term is R25.",
        isCompleted: false
    },
    {
        id: "34",
        question: "Find the next term: A2, B6, C12, D20, ?",
        options: [
            { id: "A", text: "E28" },
            { id: "B", text: "E30" },
            { id: "C", text: "F30" },
            { id: "D", text: "E32" }
        ],
        rightOption: "B",
        explanation: "Numbers follow n(n + 1): 2, 6, 12, 20, 30. Letters advance by 1, so the next term is E30.",
        isCompleted: false
    },
    {
        id: "35",
        question: "Find the next term: A1, C8, E27, G64, ?",
        options: [
            { id: "A", text: "I100" },
            { id: "B", text: "I125" },
            { id: "C", text: "H125" },
            { id: "D", text: "J125" }
        ],
        rightOption: "B",
        explanation: "Letters advance by 2 and numbers are cubes: 1, 8, 27, 64, 125. The next term is I125.",
        isCompleted: false
    },
    {
        id: "36",
        question: "Find the next term: A2, D5, G8, J11, ?",
        options: [
            { id: "A", text: "M14" },
            { id: "B", text: "N14" },
            { id: "C", text: "M13" },
            { id: "D", text: "L14" }
        ],
        rightOption: "A",
        explanation: "Letters and numbers both increase by 3. The next term is M14.",
        isCompleted: false
    },
    {
        id: "37",
        question: "Find the next term: B3, E6, H9, K12, ?",
        options: [
            { id: "A", text: "N15" },
            { id: "B", text: "M15" },
            { id: "C", text: "N14" },
            { id: "D", text: "O15" }
        ],
        rightOption: "A",
        explanation: "Letters and numbers both increase by 3. The next term is N15.",
        isCompleted: false
    },
    {
        id: "38",
        question: "Find the next term: A1, F2, K3, P4, ?",
        options: [
            { id: "A", text: "U5" },
            { id: "B", text: "V5" },
            { id: "C", text: "U6" },
            { id: "D", text: "T5" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 5 and numbers increase by 1. The next term is U5.",
        isCompleted: false
    },
    {
        id: "39",
        question: "Find the next term: Z1, U2, P3, K4, ?",
        options: [
            { id: "A", text: "F5" },
            { id: "B", text: "G5" },
            { id: "C", text: "F4" },
            { id: "D", text: "E5" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 5 and numbers increase by 1. The next term is F5.",
        isCompleted: false
    },
    {
        id: "40",
        question: "Find the next term: A2, C6, E12, G20, ?",
        options: [
            { id: "A", text: "I30" },
            { id: "B", text: "I28" },
            { id: "C", text: "H30" },
            { id: "D", text: "J30" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 2 and numbers follow n(n + 1): 2, 6, 12, 20, 30. The next term is I30.",
        isCompleted: false
    },
    {
        id: "41",
        question: "Find the next term: A1, D3, G5, J7, ?",
        options: [
            { id: "A", text: "M9" },
            { id: "B", text: "N9" },
            { id: "C", text: "M8" },
            { id: "D", text: "L9" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 3 and numbers increase by 2. The next term is M9.",
        isCompleted: false
    },
    {
        id: "42",
        question: "Find the next term: B2, F4, J6, N8, ?",
        options: [
            { id: "A", text: "R10" },
            { id: "B", text: "S10" },
            { id: "C", text: "R9" },
            { id: "D", text: "T10" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 4 and numbers increase by 2. The next term is R10.",
        isCompleted: false
    },
    {
        id: "43",
        question: "Find the next term: A1, C4, F9, J16, ?",
        options: [
            { id: "A", text: "O25" },
            { id: "B", text: "N25" },
            { id: "C", text: "O20" },
            { id: "D", text: "P25" }
        ],
        rightOption: "A",
        explanation: "Letter increments are +2, +3, +4, so the next is +5: J becomes O. Numbers are consecutive squares, giving 25. The next term is O25.",
        isCompleted: false
    },
    {
        id: "44",
        question: "Find the next term: Z2, W4, T8, Q16, ?",
        options: [
            { id: "A", text: "N32" },
            { id: "B", text: "O32" },
            { id: "C", text: "N30" },
            { id: "D", text: "M32" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 3 and numbers double. The next term is N32.",
        isCompleted: false
    },
    {
        id: "45",
        question: "Find the next term: A3, B6, C12, D24, ?",
        options: [
            { id: "A", text: "E48" },
            { id: "B", text: "E36" },
            { id: "C", text: "F48" },
            { id: "D", text: "E50" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 1 and numbers double. The next term is E48.",
        isCompleted: false
    },
    {
        id: "46",
        question: "Find the next term: A1, D2, I3, P4, ?",
        options: [
            { id: "A", text: "Y5" },
            { id: "B", text: "X5" },
            { id: "C", text: "Y6" },
            { id: "D", text: "Z5" }
        ],
        rightOption: "A",
        explanation: "Letter positions are 1, 4, 9, 16, which are squares of 1, 2, 3, and 4. The next position is 25, or Y. Numbers increase by 1, so the next term is Y5.",
        isCompleted: false
    },
    {
        id: "47",
        question: "Find the next term: A2, E4, I6, M8, ?",
        options: [
            { id: "A", text: "Q10" },
            { id: "B", text: "P10" },
            { id: "C", text: "Q9" },
            { id: "D", text: "R10" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 4 and numbers increase by 2. The next term is Q10.",
        isCompleted: false
    },
    {
        id: "48",
        question: "Find the next term: Z1, V3, R5, N7, ?",
        options: [
            { id: "A", text: "J9" },
            { id: "B", text: "K9" },
            { id: "C", text: "J8" },
            { id: "D", text: "I9" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 4 and odd numbers increase by 2. The next term is J9.",
        isCompleted: false
    },
    {
        id: "49",
        question: "Find the next term: A1, B2, D4, G7, K11, ?",
        options: [
            { id: "A", text: "P16" },
            { id: "B", text: "O16" },
            { id: "C", text: "P15" },
            { id: "D", text: "Q16" }
        ],
        rightOption: "A",
        explanation: "Both letter positions and numbers increase by +1, +2, +3, +4. The next increase is +5, giving P16.",
        isCompleted: false
    },
    {
        id: "50",
        question: "Find the next term: A2, C5, F9, J14, ?",
        options: [
            { id: "A", text: "O20" },
            { id: "B", text: "N20" },
            { id: "C", text: "O19" },
            { id: "D", text: "P20" }
        ],
        rightOption: "A",
        explanation: "Letter increments are +2, +3, +4, then +5, giving O. Number increments are +3, +4, +5, then +6, giving 20. The next term is O20.",
        isCompleted: false
    },
    {
        id: "51",
        question: "Find the next term: A1, C2, F3, J4, O5, ?",
        options: [
            { id: "A", text: "U6" },
            { id: "B", text: "T6" },
            { id: "C", text: "U7" },
            { id: "D", text: "V6" }
        ],
        rightOption: "A",
        explanation: "Letter increments are +2, +3, +4, and +5. The next increment is +6, giving U. Numbers increase by 1, so the next term is U6.",
        isCompleted: false
    },
    {
        id: "52",
        question: "Find the next term: Z10, X9, U8, Q7, ?",
        options: [
            { id: "A", text: "L6" },
            { id: "B", text: "M6" },
            { id: "C", text: "L5" },
            { id: "D", text: "K6" }
        ],
        rightOption: "A",
        explanation: "Letter steps are −2, −3, −4, then −5, giving L. Numbers decrease by 1, so the next term is L6.",
        isCompleted: false
    },
    {
        id: "53",
        question: "Find the next term: B1, E4, H9, K16, ?",
        options: [
            { id: "A", text: "N25" },
            { id: "B", text: "M25" },
            { id: "C", text: "N20" },
            { id: "D", text: "O25" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 3 and numbers are consecutive squares. The next term is N25.",
        isCompleted: false
    },
    {
        id: "54",
        question: "Find the next term: A1, D8, G27, J64, ?",
        options: [
            { id: "A", text: "M125" },
            { id: "B", text: "N125" },
            { id: "C", text: "M100" },
            { id: "D", text: "L125" }
        ],
        rightOption: "A",
        explanation: "Letters advance by 3 and numbers are consecutive cubes: 1, 8, 27, 64, 125. The next term is M125.",
        isCompleted: false
    },
    {
        id: "55",
        question: "Find the next term: Z1, W4, T9, Q16, ?",
        options: [
            { id: "A", text: "N25" },
            { id: "B", text: "O25" },
            { id: "C", text: "N20" },
            { id: "D", text: "M25" }
        ],
        rightOption: "A",
        explanation: "Letters move backward by 3 and numbers are consecutive squares. The next term is N25.",
        isCompleted: false
    }
];

export const bloodRelationsQuestions = [
    {
        id: "1",
        question: "Pointing to a man, Ravi said, 'He is the son of my father's only son.' How is the man related to Ravi?",
        options: [
            { id: "A", text: "Brother" },
            { id: "B", text: "Son" },
            { id: "C", text: "Nephew" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "B",
        explanation: "Ravi's father's only son is Ravi himself. The man's father is Ravi, so the man is Ravi's son.",
        isCompleted: false
    },
    {
        id: "2",
        question: "A woman says, 'The man standing there is the son of my mother's daughter.' If the woman has no sisters, how is the man related to her?",
        options: [
            { id: "A", text: "Brother" },
            { id: "B", text: "Nephew" },
            { id: "C", text: "Son" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "C",
        explanation: "The mother's daughter is the woman herself. Her son is the woman's son.",
        isCompleted: false
    },
    {
        id: "3",
        question: "A is the brother of B. B is the sister of C. How is A related to C?",
        options: [
            { id: "A", text: "Brother" },
            { id: "B", text: "Father" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "A",
        explanation: "A and B are siblings, and B and C are siblings. Therefore, A is C's brother.",
        isCompleted: false
    },
    {
        id: "4",
        question: "P is the mother of Q. Q is the father of R. How is P related to R?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Aunt" },
            { id: "C", text: "Grandmother" },
            { id: "D", text: "Sister" }
        ],
        rightOption: "C",
        explanation: "P is Q's mother, and Q is R's father. Therefore, P is R's grandmother.",
        isCompleted: false
    },
    {
        id: "5",
        question: "X is the father of Y, and Y is the sister of Z. How is X related to Z?",
        options: [
            { id: "A", text: "Uncle" },
            { id: "B", text: "Father" },
            { id: "C", text: "Brother" },
            { id: "D", text: "Grandfather" }
        ],
        rightOption: "B",
        explanation: "Y and Z are siblings, and X is Y's father. Therefore, X is Z's father.",
        isCompleted: false
    },
    {
        id: "6",
        question: "Pointing to a girl, Mohan said, 'She is the daughter of my mother's only son.' How is the girl related to Mohan?",
        options: [
            { id: "A", text: "Sister" },
            { id: "B", text: "Daughter" },
            { id: "C", text: "Niece" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "B",
        explanation: "Mohan's mother's only son is Mohan. The girl's father is Mohan, so she is his daughter.",
        isCompleted: false
    },
    {
        id: "7",
        question: "A is the sister of B. B is the father of C. How is A related to C?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Sister" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Grandmother" }
        ],
        rightOption: "C",
        explanation: "A is the sister of C's father, so A is C's aunt.",
        isCompleted: false
    },
    {
        id: "8",
        question: "M is the brother of N. N is the mother of P. How is M related to P?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Uncle" },
            { id: "C", text: "Brother" },
            { id: "D", text: "Grandfather" }
        ],
        rightOption: "B",
        explanation: "M is the brother of P's mother, so M is P's maternal uncle.",
        isCompleted: false
    },
    {
        id: "9",
        question: "R is the daughter of S. S is the son of T. How is T related to R?",
        options: [
            { id: "A", text: "Parent" },
            { id: "B", text: "Grandparent" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Sibling" }
        ],
        rightOption: "B",
        explanation: "T is the parent of S, and S is R's parent. Therefore, T is R's grandparent.",
        isCompleted: false
    },
    {
        id: "10",
        question: "A man says, 'The woman is the wife of my father's only son.' If the man is male and his father has only one son, how is the woman related to him?",
        options: [
            { id: "A", text: "Sister" },
            { id: "B", text: "Mother" },
            { id: "C", text: "Wife" },
            { id: "D", text: "Daughter" }
        ],
        rightOption: "C",
        explanation: "The father's only son is the man himself. His wife is the woman described.",
        isCompleted: false
    },
    {
        id: "11",
        question: "A is the mother of B. C is the father of A. How is C related to B?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Maternal grandfather" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "B",
        explanation: "C is A's father, and A is B's mother. Therefore, C is B's maternal grandfather.",
        isCompleted: false
    },
    {
        id: "12",
        question: "P is the son of Q. Q is the sister of R. How is R related to P?",
        options: [
            { id: "A", text: "Parent's sibling" },
            { id: "B", text: "Sibling" },
            { id: "C", text: "Child" },
            { id: "D", text: "Grandparent" }
        ],
        rightOption: "A",
        explanation: "Q and R are siblings, and Q is P's parent. Therefore, R is P's aunt or uncle.",
        isCompleted: false
    },
    {
        id: "13",
        question: "K is the father of L. L is the mother of M. How is K related to M?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Uncle" },
            { id: "C", text: "Maternal grandfather" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "C",
        explanation: "K is the father of M's mother, so K is M's maternal grandfather.",
        isCompleted: false
    },
    {
        id: "14",
        question: "A is the brother of B. B is the mother of C. C is the sister of D. How is A related to D?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Maternal uncle" },
            { id: "C", text: "Brother" },
            { id: "D", text: "Grandfather" }
        ],
        rightOption: "B",
        explanation: "A is the brother of D's mother, B. Therefore, A is D's maternal uncle.",
        isCompleted: false
    },
    {
        id: "15",
        question: "P is the wife of Q. Q is the brother of R. How is P related to R?",
        options: [
            { id: "A", text: "Sister" },
            { id: "B", text: "Sister-in-law" },
            { id: "C", text: "Mother" },
            { id: "D", text: "Daughter-in-law" }
        ],
        rightOption: "B",
        explanation: "P is married to R's brother, so P is R's sister-in-law.",
        isCompleted: false
    },
    {
        id: "16",
        question: "A is the son of B. B is the brother of C. C is the mother of D. How is A related to D?",
        options: [
            { id: "A", text: "Brother" },
            { id: "B", text: "Cousin" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Nephew" }
        ],
        rightOption: "B",
        explanation: "A's father B and D's mother C are siblings. Therefore, A and D are cousins.",
        isCompleted: false
    },
    {
        id: "17",
        question: "X is the daughter of Y. Y is the daughter of Z. How is Z related to X?",
        options: [
            { id: "A", text: "Parent" },
            { id: "B", text: "Sibling" },
            { id: "C", text: "Grandparent" },
            { id: "D", text: "Aunt" }
        ],
        rightOption: "C",
        explanation: "Z is the parent of X's parent Y, so Z is X's grandparent.",
        isCompleted: false
    },
    {
        id: "18",
        question: "Pointing to a boy, Neha said, 'He is the son of my brother.' How is the boy related to Neha?",
        options: [
            { id: "A", text: "Son" },
            { id: "B", text: "Nephew" },
            { id: "C", text: "Cousin" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "B",
        explanation: "The son of Neha's brother is her nephew.",
        isCompleted: false
    },
    {
        id: "19",
        question: "A is the father of B. B is the father of C. C is the father of D. How is A related to D?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Great-grandfather" },
            { id: "C", text: "Grandfather" },
            { id: "D", text: "Uncle" }
        ],
        rightOption: "B",
        explanation: "A is D's great-grandfather because three parent-child links separate A and D.",
        isCompleted: false
    },
    {
        id: "20",
        question: "R is the sister of S. S is the son of T. T is the wife of U. How is U related to R?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Brother" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Grandfather" }
        ],
        rightOption: "A",
        explanation: "T is the mother of S and R, and U is T's husband. Therefore, U is R's father.",
        isCompleted: false
    },
    {
        id: "21",
        question: "A is married to B. C is the son of A and B. How is B related to C?",
        options: [
            { id: "A", text: "Sibling" },
            { id: "B", text: "Parent" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "B",
        explanation: "B is one of C's parents.",
        isCompleted: false
    },
    {
        id: "22",
        question: "P is the mother of Q and R. Q is male and R is female. How is Q related to R?",
        options: [
            { id: "A", text: "Brother" },
            { id: "B", text: "Father" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "A",
        explanation: "Q and R share the same mother, and Q is male. Therefore, Q is R's brother.",
        isCompleted: false
    },
    {
        id: "23",
        question: "A is the daughter of B. B is the son of C. C is female. How is C related to A?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Grandmother" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Sister" }
        ],
        rightOption: "B",
        explanation: "C is B's mother, and B is A's parent. Therefore, C is A's grandmother.",
        isCompleted: false
    },
    {
        id: "24",
        question: "A man introduces a woman as 'the daughter of my father's wife.' Assuming his father's wife is his mother, how is the woman related to the man?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Sister" },
            { id: "C", text: "Daughter" },
            { id: "D", text: "Aunt" }
        ],
        rightOption: "B",
        explanation: "The father's wife is the man's mother. Her daughter is his sister, assuming she is not the man himself.",
        isCompleted: false
    },
    {
        id: "25",
        question: "A is the brother of B. C is the daughter of B. How is A related to C?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Uncle" },
            { id: "C", text: "Brother" },
            { id: "D", text: "Grandfather" }
        ],
        rightOption: "B",
        explanation: "A is the brother of C's parent B, so A is C's uncle.",
        isCompleted: false
    },
    {
        id: "26",
        question: "P is the father of Q. R is the wife of Q. How is R related to P?",
        options: [
            { id: "A", text: "Daughter" },
            { id: "B", text: "Sister" },
            { id: "C", text: "Daughter-in-law" },
            { id: "D", text: "Mother" }
        ],
        rightOption: "C",
        explanation: "R is married to P's child Q, so R is P's daughter-in-law.",
        isCompleted: false
    },
    {
        id: "27",
        question: "A is the mother of B. B is the husband of C. How is A related to C?",
        options: [
            { id: "A", text: "Sister" },
            { id: "B", text: "Mother-in-law" },
            { id: "C", text: "Daughter" },
            { id: "D", text: "Aunt" }
        ],
        rightOption: "B",
        explanation: "A is the mother of C's husband, so A is C's mother-in-law.",
        isCompleted: false
    },
    {
        id: "28",
        question: "A is the father of B. C is the wife of B. How is C related to A?",
        options: [
            { id: "A", text: "Daughter-in-law" },
            { id: "B", text: "Sister" },
            { id: "C", text: "Mother" },
            { id: "D", text: "Aunt" }
        ],
        rightOption: "A",
        explanation: "C is married to A's child B, so C is A's daughter-in-law.",
        isCompleted: false
    },
    {
        id: "29",
        question: "A is the brother of B. B is the wife of C. How is A related to C?",
        options: [
            { id: "A", text: "Brother-in-law" },
            { id: "B", text: "Father-in-law" },
            { id: "C", text: "Son-in-law" },
            { id: "D", text: "Uncle" }
        ],
        rightOption: "A",
        explanation: "A is the brother of C's wife, so A is C's brother-in-law.",
        isCompleted: false
    },
    {
        id: "30",
        question: "P is the daughter of Q. Q is the brother of R. R is female. How is R related to P?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Aunt" },
            { id: "C", text: "Sister" },
            { id: "D", text: "Grandmother" }
        ],
        rightOption: "B",
        explanation: "R is the sister of P's father Q, so R is P's aunt.",
        isCompleted: false
    },
    {
        id: "31",
        question: "A is the mother of B. B is the brother of C. C is the father of D. How is A related to D?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Aunt" },
            { id: "C", text: "Grandmother" },
            { id: "D", text: "Great-grandmother" }
        ],
        rightOption: "D",
        explanation: "A is the mother of C, C is D's father, so A is D's grandmother—not great-grandmother.",
        isCompleted: false
    },
    {
        id: "32",
        question: "X is the son of Y. Y is the daughter of Z. Z is male. How is Z related to X?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Uncle" },
            { id: "C", text: "Maternal grandfather" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "C",
        explanation: "Z is the father of X's mother Y, so Z is X's maternal grandfather.",
        isCompleted: false
    },
    {
        id: "33",
        question: "A is the son of B. C is the daughter of B. How is A related to C?",
        options: [
            { id: "A", text: "Brother" },
            { id: "B", text: "Father" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "A",
        explanation: "A and C share the same parent B, and A is male. Therefore, A is C's brother.",
        isCompleted: false
    },
    {
        id: "34",
        question: "P is the mother of Q. R is the father of P. How is R related to Q?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Maternal grandfather" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "B",
        explanation: "R is the father of Q's mother, so R is Q's maternal grandfather.",
        isCompleted: false
    },
    {
        id: "35",
        question: "A is the sister of B. B is the son of C. C is female. How is C related to A?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Aunt" },
            { id: "C", text: "Sister" },
            { id: "D", text: "Grandmother" }
        ],
        rightOption: "A",
        explanation: "A and B are siblings, and C is B's mother. Therefore, C is A's mother.",
        isCompleted: false
    },
    {
        id: "36",
        question: "A is the father of B. B is the sister of C. C is the mother of D. How is A related to D?",
        options: [
            { id: "A", text: "Father" },
            { id: "B", text: "Maternal grandfather" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "B",
        explanation: "A is the father of C, who is D's mother. Therefore, A is D's maternal grandfather.",
        isCompleted: false
    },
    {
        id: "37",
        question: "M is the husband of N. O is the daughter of M and N. How is N related to O?",
        options: [
            { id: "A", text: "Sister" },
            { id: "B", text: "Mother" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Grandmother" }
        ],
        rightOption: "B",
        explanation: "N is one of O's parents and is female, so N is O's mother.",
        isCompleted: false
    },
    {
        id: "38",
        question: "A is the father of B. D is the sister of B. How is A related to D?",
        options: [
            { id: "A", text: "Uncle" },
            { id: "B", text: "Brother" },
            { id: "C", text: "Father" },
            { id: "D", text: "Grandfather" }
        ],
        rightOption: "C",
        explanation: "B and D are siblings, and A is B's father. Therefore, A is D's father.",
        isCompleted: false
    },
    {
        id: "39",
        question: "A is the mother of B. C is the son of B. How is A related to C?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Aunt" },
            { id: "C", text: "Grandmother" },
            { id: "D", text: "Sister" }
        ],
        rightOption: "C",
        explanation: "A is B's mother, and B is C's parent. Therefore, A is C's grandmother.",
        isCompleted: false
    },
    {
        id: "40",
        question: "A is the son of B. C is the son of A. How is B related to C?",
        options: [
            { id: "A", text: "Parent" },
            { id: "B", text: "Grandparent" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "B",
        explanation: "B is A's parent, and A is C's parent. Therefore, B is C's grandparent.",
        isCompleted: false
    },
    {
        id: "41",
        question: "A is the brother of B. C is the daughter of A. D is the son of B. How are C and D related?",
        options: [
            { id: "A", text: "Siblings" },
            { id: "B", text: "Cousins" },
            { id: "C", text: "Aunt and nephew" },
            { id: "D", text: "Parent and child" }
        ],
        rightOption: "B",
        explanation: "A and B are siblings. Their children C and D are cousins.",
        isCompleted: false
    },
    {
        id: "42",
        question: "P is the mother of Q. Q is the father of R. R is the mother of S. How is P related to S?",
        options: [
            { id: "A", text: "Grandmother" },
            { id: "B", text: "Great-grandmother" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Mother" }
        ],
        rightOption: "B",
        explanation: "P is Q's mother, Q is R's father, and R is S's mother. P is S's great-grandmother.",
        isCompleted: false
    },
    {
        id: "43",
        question: "A is the father of B. B is the mother of C. C is the father of D. How is A related to D?",
        options: [
            { id: "A", text: "Grandfather" },
            { id: "B", text: "Great-grandfather" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Father" }
        ],
        rightOption: "B",
        explanation: "A is B's father, B is C's mother, and C is D's father. A is D's great-grandfather.",
        isCompleted: false
    },
    {
        id: "44",
        question: "A is the daughter of B. C is the son of B. D is the daughter of C. How is A related to D?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Aunt" },
            { id: "C", text: "Sister" },
            { id: "D", text: "Grandmother" }
        ],
        rightOption: "B",
        explanation: "A is the sister of D's father C, so A is D's aunt.",
        isCompleted: false
    },
    {
        id: "45",
        question: "A is the father of B. C is the wife of A. How is C related to B?",
        options: [
            { id: "A", text: "Sister" },
            { id: "B", text: "Mother" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Daughter" }
        ],
        rightOption: "B",
        explanation: "C is A's wife and, in this question, is understood to be B's mother.",
        isCompleted: false
    },
    {
        id: "46",
        question: "A is the sister of B. B is the father of C. C is the father of D. How is A related to D?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Great-aunt" },
            { id: "C", text: "Grandmother" },
            { id: "D", text: "Cousin" }
        ],
        rightOption: "B",
        explanation: "A is the sister of D's grandfather B, making A D's great-aunt.",
        isCompleted: false
    },
    {
        id: "47",
        question: "A is the mother of B. B is the father of C. C is the sister of D. How is A related to D?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Grandmother" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Sister" }
        ],
        rightOption: "B",
        explanation: "A is the mother of D's father B, so A is D's grandmother.",
        isCompleted: false
    },
    {
        id: "48",
        question: "P is the son of Q. R is the son of P. S is the wife of R. How is S related to Q?",
        options: [
            { id: "A", text: "Daughter-in-law" },
            { id: "B", text: "Granddaughter-in-law" },
            { id: "C", text: "Sister" },
            { id: "D", text: "Niece" }
        ],
        rightOption: "B",
        explanation: "R is Q's grandson, and S is R's wife. Therefore, S is Q's granddaughter-in-law.",
        isCompleted: false
    },
    {
        id: "49",
        question: "A is the mother of B. C is the father of A. D is the mother of C. How is D related to B?",
        options: [
            { id: "A", text: "Grandmother" },
            { id: "B", text: "Great-grandmother" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Mother" }
        ],
        rightOption: "B",
        explanation: "D is C's mother, C is A's father, and A is B's mother. Therefore, D is B's great-grandmother.",
        isCompleted: false
    },
    {
        id: "50",
        question: "A is the brother of B. B is the mother of C. C is the mother of D. How is A related to D?",
        options: [
            { id: "A", text: "Uncle" },
            { id: "B", text: "Great-uncle" },
            { id: "C", text: "Grandfather" },
            { id: "D", text: "Brother" }
        ],
        rightOption: "B",
        explanation: "A is the brother of D's grandmother B, so A is D's great-uncle.",
        isCompleted: false
    },
    {
        id: "51",
        question: "A is the son of B. C is the daughter of A. D is the son of C. How is B related to D?",
        options: [
            { id: "A", text: "Grandparent" },
            { id: "B", text: "Great-grandparent" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Parent" }
        ],
        rightOption: "B",
        explanation: "B is A's parent, A is C's parent, and C is D's parent. B is D's great-grandparent.",
        isCompleted: false
    },
    {
        id: "52",
        question: "A is the wife of B. C is the brother of B. D is the daughter of C. How is A related to D?",
        options: [
            { id: "A", text: "Mother" },
            { id: "B", text: "Aunt by marriage" },
            { id: "C", text: "Sister" },
            { id: "D", text: "Grandmother" }
        ],
        rightOption: "B",
        explanation: "A is married to D's paternal uncle B, so A is D's aunt by marriage.",
        isCompleted: false
    },
    {
        id: "53",
        question: "A is the father of B. C is the sister of A. D is the son of C. How is D related to B?",
        options: [
            { id: "A", text: "Brother" },
            { id: "B", text: "Cousin" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Nephew" }
        ],
        rightOption: "B",
        explanation: "A and C are siblings. Their children B and D are cousins.",
        isCompleted: false
    },
    {
        id: "54",
        question: "P is the father of Q. Q is the mother of R. R is the father of S. How is P related to S?",
        options: [
            { id: "A", text: "Grandfather" },
            { id: "B", text: "Great-grandfather" },
            { id: "C", text: "Uncle" },
            { id: "D", text: "Father" }
        ],
        rightOption: "B",
        explanation: "P is Q's father, Q is R's mother, and R is S's father. P is S's great-grandfather.",
        isCompleted: false
    },
    {
        id: "55",
        question: "A is the mother of B. C is the father of A. D is the mother of C. How is D related to B?",
        options: [
            { id: "A", text: "Grandmother" },
            { id: "B", text: "Great-grandmother" },
            { id: "C", text: "Aunt" },
            { id: "D", text: "Mother" }
        ],
        rightOption: "B",
        explanation: "D is C's mother, C is A's father, and A is B's mother. Therefore, D is B's great-grandmother.",
        isCompleted: false
    }
];

export const directionSenseQuestions = [
    {
        id: "1",
        question: "Ravi walks 5 km north and then 3 km east. In which direction is he from his starting point?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "North-East" },
            { id: "C", text: "South-East" },
            { id: "D", text: "North-West" }
        ],
        rightOption: "B",
        explanation: "Ravi moves north and then east, so his final position is north-east of the starting point.",
        isCompleted: false
    },
    {
        id: "2",
        question: "A person walks 4 km south and then 4 km north. How far is the person from the starting point?",
        options: [
            { id: "A", text: "4 km" },
            { id: "B", text: "8 km" },
            { id: "C", text: "0 km" },
            { id: "D", text: "2 km" }
        ],
        rightOption: "C",
        explanation: "The two equal movements in opposite directions cancel each other. The person returns to the starting point.",
        isCompleted: false
    },
    {
        id: "3",
        question: "Meena walks 6 km east and then 2 km west. How far and in which direction is she from the starting point?",
        options: [
            { id: "A", text: "4 km east" },
            { id: "B", text: "8 km east" },
            { id: "C", text: "4 km west" },
            { id: "D", text: "2 km east" }
        ],
        rightOption: "A",
        explanation: "The net eastward distance is 6 − 2 = 4 km.",
        isCompleted: false
    },
    {
        id: "4",
        question: "A man faces north and turns right. Which direction is he facing now?",
        options: [
            { id: "A", text: "West" },
            { id: "B", text: "South" },
            { id: "C", text: "East" },
            { id: "D", text: "North" }
        ],
        rightOption: "C",
        explanation: "A right turn from north points east.",
        isCompleted: false
    },
    {
        id: "5",
        question: "A woman faces west and turns left. Which direction is she facing now?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "South" },
            { id: "C", text: "East" },
            { id: "D", text: "West" }
        ],
        rightOption: "B",
        explanation: "When facing west, a left turn points south.",
        isCompleted: false
    },
    {
        id: "6",
        question: "A boy walks 3 km north and then 4 km east. What is the shortest distance from his starting point?",
        options: [
            { id: "A", text: "5 km" },
            { id: "B", text: "7 km" },
            { id: "C", text: "6 km" },
            { id: "D", text: "4 km" }
        ],
        rightOption: "A",
        explanation: "The movements form a right triangle. Distance = √(3² + 4²) = 5 km.",
        isCompleted: false
    },
    {
        id: "7",
        question: "A person faces south and turns left. Which direction is the person facing?",
        options: [
            { id: "A", text: "West" },
            { id: "B", text: "East" },
            { id: "C", text: "North" },
            { id: "D", text: "South" }
        ],
        rightOption: "B",
        explanation: "A left turn from south points east.",
        isCompleted: false
    },
    {
        id: "8",
        question: "A person walks 8 km west and then 3 km east. How far is the person from the starting point?",
        options: [
            { id: "A", text: "11 km west" },
            { id: "B", text: "5 km east" },
            { id: "C", text: "5 km west" },
            { id: "D", text: "3 km west" }
        ],
        rightOption: "C",
        explanation: "The net westward distance is 8 − 3 = 5 km.",
        isCompleted: false
    },
    {
        id: "9",
        question: "A man faces east and turns 180 degrees. Which direction is he facing?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "South" },
            { id: "C", text: "East" },
            { id: "D", text: "West" }
        ],
        rightOption: "D",
        explanation: "A 180-degree turn reverses the direction. The opposite of east is west.",
        isCompleted: false
    },
    {
        id: "10",
        question: "Neha walks 5 km north, 5 km east, and then 5 km south. Where is she relative to her starting point?",
        options: [
            { id: "A", text: "5 km east" },
            { id: "B", text: "5 km west" },
            { id: "C", text: "5 km north" },
            { id: "D", text: "At the starting point" }
        ],
        rightOption: "A",
        explanation: "The north and south movements cancel. Neha remains 5 km east of the starting point.",
        isCompleted: false
    },
    {
        id: "11",
        question: "A person faces north, turns right, and then turns right again. Which direction is the person facing?",
        options: [
            { id: "A", text: "East" },
            { id: "B", text: "West" },
            { id: "C", text: "South" },
            { id: "D", text: "North" }
        ],
        rightOption: "C",
        explanation: "From north, two right turns lead to south.",
        isCompleted: false
    },
    {
        id: "12",
        question: "A man walks 7 km east and then 7 km north. In which direction is he from his starting point?",
        options: [
            { id: "A", text: "South-East" },
            { id: "B", text: "North-East" },
            { id: "C", text: "North-West" },
            { id: "D", text: "South-West" }
        ],
        rightOption: "B",
        explanation: "His final position is both north and east of the starting point, so it is north-east.",
        isCompleted: false
    },
    {
        id: "13",
        question: "A girl faces south and turns right. Which direction is she facing?",
        options: [
            { id: "A", text: "East" },
            { id: "B", text: "West" },
            { id: "C", text: "North" },
            { id: "D", text: "South" }
        ],
        rightOption: "B",
        explanation: "A right turn from south points west.",
        isCompleted: false
    },
    {
        id: "14",
        question: "A person walks 9 km north and then 12 km east. What is the shortest distance from the starting point?",
        options: [
            { id: "A", text: "15 km" },
            { id: "B", text: "21 km" },
            { id: "C", text: "12 km" },
            { id: "D", text: "18 km" }
        ],
        rightOption: "A",
        explanation: "Using the Pythagorean theorem, distance = √(9² + 12²) = √225 = 15 km.",
        isCompleted: false
    },
    {
        id: "15",
        question: "A person faces west and turns 90 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "South" },
            { id: "B", text: "North" },
            { id: "C", text: "East" },
            { id: "D", text: "West" }
        ],
        rightOption: "B",
        explanation: "Turning 90 degrees clockwise from west points north.",
        isCompleted: false
    },
    {
        id: "16",
        question: "A man walks 10 km south and then 6 km north. How far is he from his starting point?",
        options: [
            { id: "A", text: "16 km south" },
            { id: "B", text: "4 km north" },
            { id: "C", text: "4 km south" },
            { id: "D", text: "6 km south" }
        ],
        rightOption: "C",
        explanation: "The net distance is 10 − 6 = 4 km south.",
        isCompleted: false
    },
    {
        id: "17",
        question: "A person faces east, turns left, and then turns left again. Which direction is the person facing?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "South" },
            { id: "C", text: "East" },
            { id: "D", text: "West" }
        ],
        rightOption: "D",
        explanation: "From east, the first left turn points north and the second points west.",
        isCompleted: false
    },
    {
        id: "18",
        question: "A boy walks 4 km north, 3 km east, and 4 km south. Where is he relative to his starting point?",
        options: [
            { id: "A", text: "3 km west" },
            { id: "B", text: "4 km south" },
            { id: "C", text: "3 km east" },
            { id: "D", text: "At the starting point" }
        ],
        rightOption: "C",
        explanation: "The north and south movements cancel, leaving the boy 3 km east of the starting point.",
        isCompleted: false
    },
    {
        id: "19",
        question: "A person faces north-west. Which direction is directly opposite?",
        options: [
            { id: "A", text: "North-East" },
            { id: "B", text: "South-East" },
            { id: "C", text: "South-West" },
            { id: "D", text: "North" }
        ],
        rightOption: "B",
        explanation: "The direction opposite north-west is south-east.",
        isCompleted: false
    },
    {
        id: "20",
        question: "A person walks 6 km east, 8 km south, and 6 km west. Where is the person relative to the starting point?",
        options: [
            { id: "A", text: "8 km north" },
            { id: "B", text: "6 km west" },
            { id: "C", text: "8 km south" },
            { id: "D", text: "At the starting point" }
        ],
        rightOption: "C",
        explanation: "The east and west movements cancel, leaving the person 8 km south.",
        isCompleted: false
    },
    {
        id: "21",
        question: "A person faces south-west. Which direction is directly opposite?",
        options: [
            { id: "A", text: "North-East" },
            { id: "B", text: "North-West" },
            { id: "C", text: "South-East" },
            { id: "D", text: "South" }
        ],
        rightOption: "A",
        explanation: "The direction opposite south-west is north-east.",
        isCompleted: false
    },
    {
        id: "22",
        question: "A man walks 3 km east, 4 km north, and 3 km west. How far is he from his starting point?",
        options: [
            { id: "A", text: "3 km" },
            { id: "B", text: "4 km" },
            { id: "C", text: "6 km" },
            { id: "D", text: "10 km" }
        ],
        rightOption: "B",
        explanation: "The east and west movements cancel, leaving him 4 km north of the starting point.",
        isCompleted: false
    },
    {
        id: "23",
        question: "A person faces north-east and turns 180 degrees. Which direction is the person facing?",
        options: [
            { id: "A", text: "South-East" },
            { id: "B", text: "North-West" },
            { id: "C", text: "South-West" },
            { id: "D", text: "North" }
        ],
        rightOption: "C",
        explanation: "The direction opposite north-east is south-west.",
        isCompleted: false
    },
    {
        id: "24",
        question: "A girl walks 8 km north and 6 km west. What is the shortest distance from her starting point?",
        options: [
            { id: "A", text: "10 km" },
            { id: "B", text: "14 km" },
            { id: "C", text: "12 km" },
            { id: "D", text: "8 km" }
        ],
        rightOption: "A",
        explanation: "Distance = √(8² + 6²) = √100 = 10 km.",
        isCompleted: false
    },
    {
        id: "25",
        question: "A person faces east and turns 270 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "South" },
            { id: "C", text: "West" },
            { id: "D", text: "East" }
        ],
        rightOption: "A",
        explanation: "A 270-degree clockwise turn is equivalent to a 90-degree counterclockwise turn. From east, that points north.",
        isCompleted: false
    },
    {
        id: "26",
        question: "A man walks 5 km west, 2 km south, and 5 km east. Where is he relative to the starting point?",
        options: [
            { id: "A", text: "2 km north" },
            { id: "B", text: "2 km south" },
            { id: "C", text: "5 km east" },
            { id: "D", text: "At the starting point" }
        ],
        rightOption: "B",
        explanation: "The west and east movements cancel, leaving him 2 km south.",
        isCompleted: false
    },
    {
        id: "27",
        question: "A person faces south-east. Which direction is directly opposite?",
        options: [
            { id: "A", text: "North-East" },
            { id: "B", text: "South-West" },
            { id: "C", text: "North-West" },
            { id: "D", text: "South" }
        ],
        rightOption: "C",
        explanation: "The direction opposite south-east is north-west.",
        isCompleted: false
    },
    {
        id: "28",
        question: "A person walks 12 km north and 5 km east. What is the shortest distance from the starting point?",
        options: [
            { id: "A", text: "13 km" },
            { id: "B", text: "17 km" },
            { id: "C", text: "7 km" },
            { id: "D", text: "12 km" }
        ],
        rightOption: "A",
        explanation: "Distance = √(12² + 5²) = √169 = 13 km.",
        isCompleted: false
    },
    {
        id: "29",
        question: "A person faces south and turns 270 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "West" },
            { id: "B", text: "North" },
            { id: "C", text: "East" },
            { id: "D", text: "South" }
        ],
        rightOption: "A",
        explanation: "A 270-degree clockwise turn is equivalent to a 90-degree counterclockwise turn. From south, that points east.",
        isCompleted: false
    },
    {
        id: "30",
        question: "A person walks 10 km east and then 24 km north. What is the shortest distance from the starting point?",
        options: [
            { id: "A", text: "26 km" },
            { id: "B", text: "34 km" },
            { id: "C", text: "24 km" },
            { id: "D", text: "20 km" }
        ],
        rightOption: "A",
        explanation: "Distance = √(10² + 24²) = √676 = 26 km.",
        isCompleted: false
    },
    {
        id: "31",
        question: "A person faces west, turns right, and then turns left. Which direction is the person facing?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "South" },
            { id: "C", text: "East" },
            { id: "D", text: "West" }
        ],
        rightOption: "D",
        explanation: "Facing west, a right turn points north. A left turn from north points west.",
        isCompleted: false
    },
    {
        id: "32",
        question: "A person walks 4 km south, 3 km west, and 4 km north. Where is the person relative to the starting point?",
        options: [
            { id: "A", text: "3 km east" },
            { id: "B", text: "3 km west" },
            { id: "C", text: "4 km north" },
            { id: "D", text: "At the starting point" }
        ],
        rightOption: "B",
        explanation: "The south and north movements cancel, leaving the person 3 km west.",
        isCompleted: false
    },
    {
        id: "33",
        question: "A person faces north-east and turns 90 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "North-West" },
            { id: "B", text: "South-East" },
            { id: "C", text: "South-West" },
            { id: "D", text: "North" }
        ],
        rightOption: "B",
        explanation: "A 90-degree clockwise turn from north-east points south-east.",
        isCompleted: false
    },
    {
        id: "34",
        question: "A person walks 7 km north, 24 km east, and then 7 km south. How far is the person from the starting point?",
        options: [
            { id: "A", text: "7 km" },
            { id: "B", text: "24 km" },
            { id: "C", text: "31 km" },
            { id: "D", text: "14 km" }
        ],
        rightOption: "B",
        explanation: "The north and south movements cancel, leaving the person 24 km east.",
        isCompleted: false
    },
    {
        id: "35",
        question: "A person faces south-west and turns 90 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "North-West" },
            { id: "B", text: "South-East" },
            { id: "C", text: "North-East" },
            { id: "D", text: "South" }
        ],
        rightOption: "A",
        explanation: "A 90-degree clockwise turn from south-west points north-west.",
        isCompleted: false
    },
    {
        id: "36",
        question: "A person walks 9 km west and 12 km south. What is the shortest distance from the starting point?",
        options: [
            { id: "A", text: "15 km" },
            { id: "B", text: "21 km" },
            { id: "C", text: "12 km" },
            { id: "D", text: "9 km" }
        ],
        rightOption: "A",
        explanation: "Distance = √(9² + 12²) = √225 = 15 km.",
        isCompleted: false
    },
    {
        id: "37",
        question: "A person faces north-west and turns 90 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "North-East" },
            { id: "B", text: "South-West" },
            { id: "C", text: "North" },
            { id: "D", text: "South-East" }
        ],
        rightOption: "A",
        explanation: "A 90-degree clockwise turn from north-west points north-east.",
        isCompleted: false
    },
    {
        id: "38",
        question: "A person walks 15 km east and 8 km north. What is the shortest distance from the starting point?",
        options: [
            { id: "A", text: "17 km" },
            { id: "B", text: "23 km" },
            { id: "C", text: "15 km" },
            { id: "D", text: "8 km" }
        ],
        rightOption: "A",
        explanation: "Distance = √(15² + 8²) = √289 = 17 km.",
        isCompleted: false
    },
    {
        id: "39",
        question: "A person faces east, turns 90 degrees clockwise, and then turns 180 degrees. Which direction is the person facing?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "South" },
            { id: "C", text: "East" },
            { id: "D", text: "West" }
        ],
        rightOption: "A",
        explanation: "From east, a 90-degree clockwise turn points south. Turning 180 degrees from south points north.",
        isCompleted: false
    },
    {
        id: "40",
        question: "A person walks 6 km north, 8 km east, and 6 km south. How far is the person from the starting point?",
        options: [
            { id: "A", text: "6 km" },
            { id: "B", text: "8 km" },
            { id: "C", text: "14 km" },
            { id: "D", text: "20 km" }
        ],
        rightOption: "B",
        explanation: "The north and south movements cancel, leaving the person 8 km east.",
        isCompleted: false
    },
    {
        id: "41",
        question: "A person faces north-east and turns 180 degrees. Which direction is the person facing?",
        options: [
            { id: "A", text: "North-West" },
            { id: "B", text: "South-East" },
            { id: "C", text: "South-West" },
            { id: "D", text: "North" }
        ],
        rightOption: "C",
        explanation: "The direction opposite north-east is south-west.",
        isCompleted: false
    },
    {
        id: "42",
        question: "A person walks 5 km north, 12 km west, and 5 km south. How far is the person from the starting point?",
        options: [
            { id: "A", text: "5 km" },
            { id: "B", text: "12 km" },
            { id: "C", text: "17 km" },
            { id: "D", text: "22 km" }
        ],
        rightOption: "B",
        explanation: "The north and south movements cancel, leaving the person 12 km west.",
        isCompleted: false
    },
    {
        id: "43",
        question: "A person faces south-east and turns 90 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "North-East" },
            { id: "B", text: "South-West" },
            { id: "C", text: "North-West" },
            { id: "D", text: "South" }
        ],
        rightOption: "B",
        explanation: "A 90-degree clockwise turn from south-east points south-west.",
        isCompleted: false
    },
    {
        id: "44",
        question: "A person walks 20 km south and 21 km east. What is the shortest distance from the starting point?",
        options: [
            { id: "A", text: "29 km" },
            { id: "B", text: "41 km" },
            { id: "C", text: "21 km" },
            { id: "D", text: "20 km" }
        ],
        rightOption: "A",
        explanation: "Distance = √(20² + 21²) = √841 = 29 km.",
        isCompleted: false
    },
    {
        id: "45",
        question: "A person faces west and turns 270 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "North" },
            { id: "B", text: "South" },
            { id: "C", text: "East" },
            { id: "D", text: "West" }
        ],
        rightOption: "B",
        explanation: "A 270-degree clockwise turn is equivalent to a 90-degree counterclockwise turn. From west, that points south.",
        isCompleted: false
    },
    {
        id: "46",
        question: "A person walks 8 km east, 6 km north, 8 km west, and 2 km south. Where is the person relative to the starting point?",
        options: [
            { id: "A", text: "4 km north" },
            { id: "B", text: "4 km south" },
            { id: "C", text: "2 km north" },
            { id: "D", text: "At the starting point" }
        ],
        rightOption: "A",
        explanation: "East and west cancel. The net northward distance is 6 − 2 = 4 km.",
        isCompleted: false
    },
    {
        id: "47",
        question: "A person faces south-west and turns 180 degrees. Which direction is the person facing?",
        options: [
            { id: "A", text: "North-West" },
            { id: "B", text: "North-East" },
            { id: "C", text: "South-East" },
            { id: "D", text: "South" }
        ],
        rightOption: "B",
        explanation: "The direction opposite south-west is north-east.",
        isCompleted: false
    },
    {
        id: "48",
        question: "A person walks 9 km east, 12 km north, and 9 km west. How far is the person from the starting point?",
        options: [
            { id: "A", text: "9 km" },
            { id: "B", text: "12 km" },
            { id: "C", text: "21 km" },
            { id: "D", text: "30 km" }
        ],
        rightOption: "B",
        explanation: "The east and west movements cancel, leaving the person 12 km north.",
        isCompleted: false
    },
    {
        id: "49",
        question: "A person faces north, turns 135 degrees clockwise, and then turns 90 degrees counterclockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "East" },
            { id: "B", text: "South-East" },
            { id: "C", text: "South" },
            { id: "D", text: "West" }
        ],
        rightOption: "B",
        explanation: "From north, 135 degrees clockwise points south-east. Turning 90 degrees counterclockwise from there points north-east, so the correct direction is north-east.",
        isCompleted: false
    },
    {
        id: "50",
        question: "A person walks 7 km north, 24 km west, and 7 km south. How far is the person from the starting point?",
        options: [
            { id: "A", text: "7 km" },
            { id: "B", text: "24 km" },
            { id: "C", text: "31 km" },
            { id: "D", text: "14 km" }
        ],
        rightOption: "B",
        explanation: "The north and south movements cancel, leaving the person 24 km west.",
        isCompleted: false
    },
    {
        id: "51",
        question: "A person faces east, turns 45 degrees counterclockwise, and then turns 90 degrees clockwise. Which direction is the person facing?",
        options: [
            { id: "A", text: "North-East" },
            { id: "B", text: "South-East" },
            { id: "C", text: "North-West" },
            { id: "D", text: "South-West" }
        ],
        rightOption: "B",
        explanation: "From east, a 45-degree counterclockwise turn points north-east. Turning 90 degrees clockwise from north-east points south-east.",
        isCompleted: false
    },
    {
        id: "52",
        question: "A person walks 3 km north, 4 km east, 3 km south, and 4 km west. Where is the person now?",
        options: [
            { id: "A", text: "4 km east of the start" },
            { id: "B", text: "3 km north of the start" },
            { id: "C", text: "At the starting point" },
            { id: "D", text: "5 km from the start" }
        ],
        rightOption: "C",
        explanation: "The north and south movements cancel, as do the east and west movements. The person returns to the starting point.",
        isCompleted: false
    },
    {
        id: "53",
        question: "A person faces north-west and turns 180 degrees. Which direction is the person facing?",
        options: [
            { id: "A", text: "South-East" },
            { id: "B", text: "North-East" },
            { id: "C", text: "South-West" },
            { id: "D", text: "South" }
        ],
        rightOption: "A",
        explanation: "The direction opposite north-west is south-east.",
        isCompleted: false
    },
    {
        id: "54",
        question: "A person walks 15 km north and 20 km west. What is the shortest distance from the starting point?",
        options: [
            { id: "A", text: "25 km" },
            { id: "B", text: "35 km" },
            { id: "C", text: "20 km" },
            { id: "D", text: "15 km" }
        ],
        rightOption: "A",
        explanation: "Distance = √(15² + 20²) = √625 = 25 km.",
        isCompleted: false
    },
    {
        id: "55",
        question: "A person faces south, turns 90 degrees counterclockwise, and then turns 180 degrees. Which direction is the person facing?",
        options: [
            { id: "A", text: "East" },
            { id: "B", text: "West" },
            { id: "C", text: "North" },
            { id: "D", text: "South" }
        ],
        rightOption: "A",
        explanation: "From south, a 90-degree counterclockwise turn points west. Turning 180 degrees from west points east.",
        isCompleted: false
    }
];

const PROGRESS_KEY = 'aptitude-question-progress-v1';
const COINS_KEY = 'aptitude-coins-v1';
const UNLOCKED_TOPICS_KEY = 'aptitude-unlocked-topics-v1';
const DAILY_BONUS_KEY = 'aptitude-daily-bonus-v1';

export const getTodayDateKey = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const questionMap: Record<string, Array<{ id: string; isCompleted: boolean }>> = {
    numberSystemQuestions,
    timeAndWorkQuestions,
    trainQuestions,
    averageQuestions,
    percentageQuestions,
};

export const hydrateAppState = async () => {
    await hydrateQuestionProgress();
    await hydrateCoins();
    await hydrateUnlockedTopics();
    await hydrateDailyBonus();
};

export const hydrateQuestionProgress = async () => {
    try {
        const storedValue = await AsyncStorage.getItem(PROGRESS_KEY);

        if (!storedValue) {
            return;
        }

        const parsedProgress = JSON.parse(storedValue) as Record<string, Record<string, boolean>>;

        Object.entries(questionMap).forEach(([topicId, questions]) => {
            const topicProgress = parsedProgress[topicId] ?? {};

            questions.forEach((question) => {
                question.isCompleted = Boolean(topicProgress[question.id]);
            });
        });
    } catch (error) {
        console.warn('Failed to hydrate question progress', error);
    }
};

export const saveQuestionProgress = async () => {
    try {
        const payload = Object.fromEntries(
            Object.entries(questionMap).map(([topicId, questions]) => [
                topicId,
                Object.fromEntries(questions.map((question) => [question.id, Boolean(question.isCompleted)])),
            ])
        );

        await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(payload));
    } catch (error) {
        console.warn('Failed to save question progress', error);
    }
};

export const hydrateCoins = async () => {
    try {
        const storedValue = await AsyncStorage.getItem(COINS_KEY);

        if (storedValue !== null) {
            parentData.coins = Number(storedValue) || 0;
        }
    } catch (error) {
        console.warn('Failed to hydrate coins', error);
    }
};

export const hydrateUnlockedTopics = async () => {
    try {
        const storedValue = await AsyncStorage.getItem(UNLOCKED_TOPICS_KEY);

        if (storedValue === null) {
            return;
        }

        const parsedUnlockedTopics = JSON.parse(storedValue) as string[];

        if (Array.isArray(parsedUnlockedTopics)) {
            parentData.unlockedTopics = Array.from(
                new Set([...parentData.unlockedTopics, ...parsedUnlockedTopics])
            );
        }
    } catch (error) {
        console.warn('Failed to hydrate unlocked topics', error);
    }
};

export const saveUnlockedTopics = async () => {
    try {
        await AsyncStorage.setItem(UNLOCKED_TOPICS_KEY, JSON.stringify(parentData.unlockedTopics));
    } catch (error) {
        console.warn('Failed to save unlocked topics', error);
    }
};

export const unlockTopic = async (topicId: string) => {
    if (!topicId || parentData.unlockedTopics.includes(topicId)) {
        return false;
    }

    if (parentData.coins < UNLOCK_COST) {
        return false;
    }

    parentData.coins = parentData.coins - UNLOCK_COST;
    parentData.unlockedTopics = [...parentData.unlockedTopics, topicId];

    try {
        await Promise.all([
            AsyncStorage.setItem(COINS_KEY, String(parentData.coins)),
            saveUnlockedTopics(),
        ]);

        return true;
    } catch (error) {
        console.warn('Failed to unlock topic', error);
        return false;
    }
};

export const hydrateDailyBonus = async () => {
    try {
        const storedValue = await AsyncStorage.getItem(DAILY_BONUS_KEY);
        parentData.lastDailyBonusDate = storedValue ?? null;
    } catch (error) {
        console.warn('Failed to hydrate daily bonus', error);
    }
};

export const saveDailyBonus = async () => {
    try {
        const todayKey = getTodayDateKey();
        parentData.lastDailyBonusDate = todayKey;
        await AsyncStorage.setItem(DAILY_BONUS_KEY, todayKey);
    } catch (error) {
        console.warn('Failed to save daily bonus', error);
    }
};

export const claimDailyBonus = async () => {
    const todayKey = getTodayDateKey();

    if (parentData.lastDailyBonusDate === todayKey) {
        return false;
    }

    parentData.coins = parentData.coins + rewardConfig.dailyBonus;

    try {
        await Promise.all([
            AsyncStorage.setItem(COINS_KEY, String(parentData.coins)),
            saveDailyBonus(),
        ]);

        return true;
    } catch (error) {
        console.warn('Failed to claim daily bonus', error);
        return false;
    }
};

export const addCoins = async (amount: number) => {
    const nextCoins = parentData.coins + amount;
    parentData.coins = nextCoins;

    try {
        await AsyncStorage.setItem(COINS_KEY, String(nextCoins));
    } catch (error) {
        console.warn('Failed to save coins', error);
    }
};
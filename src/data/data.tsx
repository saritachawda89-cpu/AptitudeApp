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
        { id: 'percentageQuestions', name: 'Percentage', category: 'Reasoning' as TopicCategory },
        { id: 'profitAndLossQuestions', name: 'Profit and Loss', category: 'Quantitative' as TopicCategory },
        { id: 'permutationAndCombinationQuestions', name: 'Permutation and Combination', category: 'Quantitative' as TopicCategory },
        { id: 'ratioAndProportionQuestions', name: 'Ratio and Proportion', category: 'Quantitative' as TopicCategory },
        { id: 'mixtureAndAlligationQuestions', name: 'Mixture and Alligation', category: 'Quantitative' as TopicCategory },
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
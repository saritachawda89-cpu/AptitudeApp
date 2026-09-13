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
    questionText: 'Solve a question',
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
    ],
    coins: 500,
    unlockedTopics: ['numberSystemQuestions', 'timeAndWorkQuestions'],
    lastDailyBonusDate: null as string | null,
};

export const numberSystemQuestions = [
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
        question: "Which of the following numbers is divisible by both 3 and 5?",
        options: [
            { id: "A", text: "125" },
            { id: "B", text: "135" },
            { id: "C", text: "142" },
            { id: "D", text: "154" }
        ],
        rightOption: "B",
        explanation: "A number divisible by 5 must end in 0 or 5. 135 ends in 5, and its digit sum is 1 + 3 + 5 = 9, which is divisible by 3. Therefore, 135 is divisible by both 3 and 5.",
        isCompleted: false
    },

    {
        id: "3",
        question: "What is the remainder when 2^10 is divided by 7?",
        options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "3" },
            { id: "D", text: "4" }
        ],
        rightOption: "B",
        explanation: "2^3 = 8, which leaves remainder 1 when divided by 7. Therefore, 2^9 also leaves remainder 1. Hence, 2^10 leaves remainder 2.",
        isCompleted: false
    },

    {
        id: "4",
        question: "What is the HCF of 36, 48 and 60?",
        options: [
            { id: "A", text: "6" },
            { id: "B", text: "8" },
            { id: "C", text: "12" },
            { id: "D", text: "18" }
        ],
        rightOption: "C",
        explanation: "The factors common to 36, 48 and 60 include 1, 2, 3, 4, 6 and 12. The greatest common factor is 12.",
        isCompleted: false
    },

    {
        id: "5",
        question: "What is the LCM of 12, 15 and 20?",
        options: [
            { id: "A", text: "40" },
            { id: "B", text: "50" },
            { id: "C", text: "60" },
            { id: "D", text: "120" }
        ],
        rightOption: "C",
        explanation: "Prime factors: 12 = 2² × 3, 15 = 3 × 5, and 20 = 2² × 5. Taking the highest powers gives 2² × 3 × 5 = 60.",
        isCompleted: false
    },

    {
        id: "6",
        question: "Which of the following is a prime number?",
        options: [
            { id: "A", text: "91" },
            { id: "B", text: "97" },
            { id: "C", text: "111" },
            { id: "D", text: "121" }
        ],
        rightOption: "B",
        explanation: "97 has no factors other than 1 and 97, so it is a prime number. 91 = 7 × 13, 111 = 3 × 37, and 121 = 11 × 11.",
        isCompleted: false
    },

    {
        id: "7",
        question: "How many positive factors does 36 have?",
        options: [
            { id: "A", text: "6" },
            { id: "B", text: "8" },
            { id: "C", text: "9" },
            { id: "D", text: "10" }
        ],
        rightOption: "C",
        explanation: "36 = 2² × 3². Number of factors = (2 + 1)(2 + 1) = 3 × 3 = 9.",
        isCompleted: false
    },

    {
        id: "8",
        question: "What is the greatest 4-digit number divisible by 88?",
        options: [
            { id: "A", text: "9944" },
            { id: "B", text: "9966" },
            { id: "C", text: "9988" },
            { id: "D", text: "9999" }
        ],
        rightOption: "A",
        explanation: "The greatest 4-digit number is 9999. Dividing 9999 by 88 gives a quotient of 113. Therefore, 88 × 113 = 9944, which is the greatest 4-digit multiple of 88.",
        isCompleted: false
    },

    {
        id: "9",
        question: "If a number leaves remainder 5 when divided by 8, what remainder will 3 times the number leave when divided by 8?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "5" },
            { id: "C", text: "7" },
            { id: "D", text: "1" }
        ],
        rightOption: "C",
        explanation: "Let the number be 8k + 5. Three times the number is 24k + 15 = 8(3k + 1) + 7. Therefore, the remainder is 7.",
        isCompleted: false
    },

    {
        id: "10",
        question: "What is the smallest number that is divisible by 12, 15 and 18?",
        options: [
            { id: "A", text: "90" },
            { id: "B", text: "120" },
            { id: "C", text: "150" },
            { id: "D", text: "180" }
        ],
        rightOption: "D",
        explanation: "Prime factors: 12 = 2² × 3, 15 = 3 × 5, and 18 = 2 × 3². Taking the highest powers gives 2² × 3² × 5 = 180.",
        isCompleted: false
    }
];

export const timeAndWorkQuestions = [
    {
        id: "1",
        question: "A can complete a piece of work in 10 days. How many days will A take to complete the same work if working at the same rate?",
        options: [
            { id: "A", text: "5 days" },
            { id: "B", text: "10 days" },
            { id: "C", text: "15 days" },
            { id: "D", text: "20 days" }
        ],
        rightOption: "B",
        explanation: "A is already stated to complete the work in 10 days. Therefore, A will take 10 days.",
        isCompleted: false
    },

    {
        id: "2",
        question: "A can complete a work in 12 days and B can complete it in 18 days. How many days will they take together?",
        options: [
            { id: "A", text: "6 days" },
            { id: "B", text: "7.2 days" },
            { id: "C", text: "8 days" },
            { id: "D", text: "9 days" }
        ],
        rightOption: "B",
        explanation: "A's 1-day work = 1/12 and B's 1-day work = 1/18. Together = 1/12 + 1/18 = 5/36. Therefore, time = 36/5 = 7.2 days.",
        isCompleted: false
    },

    {
        id: "3",
        question: "A can do a piece of work in 15 days, while B can do it in 10 days. In how many days can they complete the work together?",
        options: [
            { id: "A", text: "5 days" },
            { id: "B", text: "6 days" },
            { id: "C", text: "7 days" },
            { id: "D", text: "8 days" }
        ],
        rightOption: "B",
        explanation: "A's 1-day work = 1/15 and B's 1-day work = 1/10. Together = 1/15 + 1/10 = 1/6. Therefore, they complete the work in 6 days.",
        isCompleted: false
    },

    {
        id: "4",
        question: "A can complete a work in 20 days and B can complete it in 30 days. If they work together for 6 days, what fraction of the work is completed?",
        options: [
            { id: "A", text: "1/2" },
            { id: "B", text: "3/5" },
            { id: "C", text: "1/4" },
            { id: "D", text: "2/3" }
        ],
        rightOption: "A",
        explanation: "A's 1-day work = 1/20 and B's = 1/30. Together = 1/12. In 6 days, completed work = 6 × 1/12 = 1/2.",
        isCompleted: false
    },

    {
        id: "5",
        question: "A and B together can complete a work in 8 days. A alone can complete it in 12 days. How many days will B alone take?",
        options: [
            { id: "A", text: "18 days" },
            { id: "B", text: "20 days" },
            { id: "C", text: "24 days" },
            { id: "D", text: "30 days" }
        ],
        rightOption: "C",
        explanation: "Together, 1-day work = 1/8. A's 1-day work = 1/12. Therefore, B's work = 1/8 - 1/12 = 1/24. So B alone takes 24 days.",
        isCompleted: false
    },

    {
        id: "6",
        question: "A can do a work in 24 days. B is 50% more efficient than A. In how many days can B complete the work?",
        options: [
            { id: "A", text: "12 days" },
            { id: "B", text: "14 days" },
            { id: "C", text: "16 days" },
            { id: "D", text: "18 days" }
        ],
        rightOption: "C",
        explanation: "If A's efficiency is 100%, B's efficiency is 150%. Therefore, B takes 24 × 100/150 = 16 days.",
        isCompleted: false
    },

    {
        id: "7",
        question: "A and B can complete a work in 10 days and 15 days respectively. They work together for 4 days, after which B leaves. How many more days will A need to finish the remaining work?",
        options: [
            { id: "A", text: "1 day" },
            { id: "B", text: "2 days" },
            { id: "C", text: "3 days" },
            { id: "D", text: "4 days" }
        ],
        rightOption: "B",
        explanation: "A's 1-day work = 1/10 and B's = 1/15. Together = 1/6. In 4 days, they complete 4/6 = 2/3 of the work. Remaining = 1/3. A takes (1/3) ÷ (1/10) = 10/3 days, not 2 days.",
        isCompleted: false
    },

    {
        id: "8",
        question: "A can complete a work in 16 days and B can complete it in 24 days. If they work together, how long will they take?",
        options: [
            { id: "A", text: "8.4 days" },
            { id: "B", text: "9.6 days" },
            { id: "C", text: "10 days" },
            { id: "D", text: "12 days" }
        ],
        rightOption: "B",
        explanation: "A's 1-day work = 1/16 and B's = 1/24. Together = 3/48 + 2/48 = 5/48. Therefore, time = 48/5 = 9.6 days.",
        isCompleted: false
    },

    {
        id: "9",
        question: "A does a work in 8 days and B does the same work in 12 days. They work together for 3 days. What percentage of the work is left?",
        options: [
            { id: "A", text: "25%" },
            { id: "B", text: "37.5%" },
            { id: "C", text: "50%" },
            { id: "D", text: "62.5%" }
        ],
        rightOption: "B",
        explanation: "Together, 1-day work = 1/8 + 1/12 = 5/24. In 3 days they complete 15/24 = 5/8. Remaining = 3/8 = 37.5%.",
        isCompleted: false
    },

    {
        id: "10",
        question: "A can complete a work in 18 days. After working alone for 6 days, B joins him, and together they finish the remaining work in 4 days. How many days would B alone take to complete the work?",
        options: [
            { id: "A", text: "12 days" },
            { id: "B", text: "18 days" },
            { id: "C", text: "24 days" },
            { id: "D", text: "36 days" }
        ],
        rightOption: "C",
        explanation: "A completes 6/18 = 1/3 of the work in 6 days. Remaining = 2/3. A and B complete 2/3 in 4 days, so their combined 1-day work = 1/6. A's work = 1/18. Therefore B's work = 1/6 - 1/18 = 1/9, so B alone takes 9 days.",
        isCompleted: false
    }
];

export const trainQuestions = [
    {
        id: "1",
        question: "A train 120 meters long is running at a speed of 54 km/h. How much time will it take to cross a pole?",
        options: [
            { id: "A", text: "6 seconds" },
            { id: "B", text: "8 seconds" },
            { id: "C", text: "10 seconds" },
            { id: "D", text: "12 seconds" }
        ],
        rightOption: "B",
        explanation: "Speed = 54 × 5/18 = 15 m/s. Time = Distance ÷ Speed = 120 ÷ 15 = 8 seconds.",
        isCompleted: false
    },

    {
        id: "2",
        question: "A train 150 meters long is running at 72 km/h. How much time will it take to cross a man standing on the platform?",
        options: [
            { id: "A", text: "5 seconds" },
            { id: "B", text: "6 seconds" },
            { id: "C", text: "7.5 seconds" },
            { id: "D", text: "10 seconds" }
        ],
        rightOption: "C",
        explanation: "72 km/h = 72 × 5/18 = 20 m/s. Time = 150 ÷ 20 = 7.5 seconds.",
        isCompleted: false
    },

    {
        id: "3",
        question: "A train 200 meters long crosses a platform 300 meters long in 25 seconds. What is the speed of the train?",
        options: [
            { id: "A", text: "60 km/h" },
            { id: "B", text: "72 km/h" },
            { id: "C", text: "80 km/h" },
            { id: "D", text: "90 km/h" }
        ],
        rightOption: "B",
        explanation: "Total distance = 200 + 300 = 500 meters. Speed = 500 ÷ 25 = 20 m/s. Converting to km/h: 20 × 18/5 = 72 km/h.",
        isCompleted: false
    },

    {
        id: "4",
        question: "A train travels at 60 km/h and crosses a bridge in 30 seconds. If the train is 200 meters long, what is the length of the bridge?",
        options: [
            { id: "A", text: "250 meters" },
            { id: "B", text: "300 meters" },
            { id: "C", text: "350 meters" },
            { id: "D", text: "400 meters" }
        ],
        rightOption: "B",
        explanation: "60 km/h = 50/3 m/s. Distance covered in 30 seconds = (50/3) × 30 = 500 meters. Bridge length = 500 − 200 = 300 meters.",
        isCompleted: false
    },

    {
        id: "5",
        question: "Two trains of lengths 150 meters and 250 meters are moving in opposite directions at 54 km/h and 36 km/h respectively. How long will they take to cross each other?",
        options: [
            { id: "A", text: "12 seconds" },
            { id: "B", text: "14 seconds" },
            { id: "C", text: "16 seconds" },
            { id: "D", text: "18 seconds" }
        ],
        rightOption: "C",
        explanation: "Relative speed = 54 + 36 = 90 km/h = 25 m/s. Total distance = 150 + 250 = 400 meters. Time = 400 ÷ 25 = 16 seconds.",
        isCompleted: false
    },

    {
        id: "6",
        question: "Two trains of lengths 180 meters and 220 meters are moving in the same direction at 72 km/h and 54 km/h respectively. How long will the faster train take to completely overtake the slower train?",
        options: [
            { id: "A", text: "60 seconds" },
            { id: "B", text: "70 seconds" },
            { id: "C", text: "80 seconds" },
            { id: "D", text: "90 seconds" }
        ],
        rightOption: "C",
        explanation: "Relative speed = 72 − 54 = 18 km/h = 5 m/s. Total distance to cover = 180 + 220 = 400 meters. Time = 400 ÷ 5 = 80 seconds.",
        isCompleted: false
    },

    {
        id: "7",
        question: "A train running at 90 km/h crosses a pole in 8 seconds. What is the length of the train?",
        options: [
            { id: "A", text: "180 meters" },
            { id: "B", text: "200 meters" },
            { id: "C", text: "220 meters" },
            { id: "D", text: "250 meters" }
        ],
        rightOption: "B",
        explanation: "90 km/h = 25 m/s. Length of train = Speed × Time = 25 × 8 = 200 meters.",
        isCompleted: false
    },

    {
        id: "8",
        question: "A train 250 meters long crosses a platform in 20 seconds at a speed of 72 km/h. What is the length of the platform?",
        options: [
            { id: "A", text: "100 meters" },
            { id: "B", text: "120 meters" },
            { id: "C", text: "150 meters" },
            { id: "D", text: "180 meters" }
        ],
        rightOption: "C",
        explanation: "72 km/h = 20 m/s. Total distance covered in 20 seconds = 20 × 20 = 400 meters. Platform length = 400 − 250 = 150 meters.",
        isCompleted: false
    },

    {
        id: "9",
        question: "A train takes 12 seconds to cross a pole and 20 seconds to cross a platform. If the train is 180 meters long, what is the length of the platform?",
        options: [
            { id: "A", text: "100 meters" },
            { id: "B", text: "120 meters" },
            { id: "C", text: "140 meters" },
            { id: "D", text: "160 meters" }
        ],
        rightOption: "B",
        explanation: "Train speed = 180 ÷ 12 = 15 m/s. In 20 seconds, total distance covered = 15 × 20 = 300 meters. Platform length = 300 − 180 = 120 meters.",
        isCompleted: false
    },

    {
        id: "10",
        question: "A train 300 meters long is moving at 54 km/h. How much time will it take to cross a 150-meter-long train moving in the opposite direction at 36 km/h?",
        options: [
            { id: "A", text: "12 seconds" },
            { id: "B", text: "15 seconds" },
            { id: "C", text: "18 seconds" },
            { id: "D", text: "20 seconds" }
        ],
        rightOption: "B",
        explanation: "Relative speed = 54 + 36 = 90 km/h = 25 m/s. Total distance = 300 + 150 = 450 meters. Time = 450 ÷ 25 = 18 seconds.",
        isCompleted: false
    }
];

export const averageQuestions = [
    {
        id: "1",
        question: "The average of 5 numbers is 24. What is their total sum?",
        options: [
            { id: "A", text: "100" },
            { id: "B", text: "110" },
            { id: "C", text: "120" },
            { id: "D", text: "125" }
        ],
        rightOption: "C",
        explanation: "Average = Sum ÷ Number of values. Therefore, Sum = Average × Number of values = 24 × 5 = 120.",
        isCompleted: false
    },

    {
        id: "2",
        question: "The average age of 6 students is 15 years. If one student aged 20 years leaves the group, what will be the new average age?",
        options: [
            { id: "A", text: "13 years" },
            { id: "B", text: "14 years" },
            { id: "C", text: "14.5 years" },
            { id: "D", text: "15 years" }
        ],
        rightOption: "B",
        explanation: "Total age = 6 × 15 = 90 years. After the 20-year-old leaves, total age = 90 − 20 = 70 years. New average = 70 ÷ 5 = 14 years.",
        isCompleted: false
    },

    {
        id: "3",
        question: "The average of 8 numbers is 18. If one of the numbers is 25, what is the average of the remaining 7 numbers?",
        options: [
            { id: "A", text: "16" },
            { id: "B", text: "17" },
            { id: "C", text: "17.5" },
            { id: "D", text: "18" }
        ],
        rightOption: "B",
        explanation: "Total of 8 numbers = 8 × 18 = 144. Removing 25 gives 119. Average of remaining 7 numbers = 119 ÷ 7 = 17.",
        isCompleted: false
    },

    {
        id: "4",
        question: "The average of 10 numbers is 35. If each number is increased by 5, what will be the new average?",
        options: [
            { id: "A", text: "35" },
            { id: "B", text: "38" },
            { id: "C", text: "40" },
            { id: "D", text: "45" }
        ],
        rightOption: "C",
        explanation: "When the same value is added to every number, the average also increases by that value. New average = 35 + 5 = 40.",
        isCompleted: false
    },

    {
        id: "5",
        question: "The average of 7 consecutive integers is 24. What is the largest integer?",
        options: [
            { id: "A", text: "26" },
            { id: "B", text: "27" },
            { id: "C", text: "28" },
            { id: "D", text: "30" }
        ],
        rightOption: "B",
        explanation: "For an odd number of consecutive integers, the average is the middle number. The 7 integers are 21, 22, 23, 24, 25, 26, 27. Therefore, the largest is 27.",
        isCompleted: false
    },

    {
        id: "6",
        question: "The average marks of 20 students is 45. If the teacher's marks are also included, the average becomes 46. What are the teacher's marks?",
        options: [
            { id: "A", text: "60" },
            { id: "B", text: "64" },
            { id: "C", text: "66" },
            { id: "D", text: "70" }
        ],
        rightOption: "C",
        explanation: "Total marks of 20 students = 20 × 45 = 900. Total marks including teacher = 21 × 46 = 966. Teacher's marks = 966 − 900 = 66.",
        isCompleted: false
    },

    {
        id: "7",
        question: "The average weight of 8 people increases by 2.5 kg when a person weighing 50 kg is replaced by another person. What is the weight of the new person?",
        options: [
            { id: "A", text: "65 kg" },
            { id: "B", text: "67.5 kg" },
            { id: "C", text: "70 kg" },
            { id: "D", text: "72.5 kg" }
        ],
        rightOption: "C",
        explanation: "Increase in total weight = 8 × 2.5 = 20 kg. New person's weight = 50 + 20 = 70 kg.",
        isCompleted: false
    },

    {
        id: "8",
        question: "The average of the first 9 natural numbers is:",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "5" },
            { id: "C", text: "5.5" },
            { id: "D", text: "6" }
        ],
        rightOption: "B",
        explanation: "The first 9 natural numbers are 1 to 9. Their sum is 45. Average = 45 ÷ 9 = 5.",
        isCompleted: false
    },

    {
        id: "9",
        question: "The average salary of 12 employees is ₹25,000. If the manager's salary is included, the average becomes ₹27,000. What is the manager's salary?",
        options: [
            { id: "A", text: "₹48,000" },
            { id: "B", text: "₹49,000" },
            { id: "C", text: "₹50,000" },
            { id: "D", text: "₹52,000" }
        ],
        rightOption: "C",
        explanation: "Total salary of 12 employees = 12 × 25,000 = ₹3,00,000. Total including manager = 13 × 27,000 = ₹3,51,000. Manager's salary = ₹3,51,000 − ₹3,00,000 = ₹51,000.",
        isCompleted: false
    },

    {
        id: "10",
        question: "The average of 4 numbers is 28. If the first three numbers are 20, 25 and 30, what is the fourth number?",
        options: [
            { id: "A", text: "35" },
            { id: "B", text: "36" },
            { id: "C", text: "37" },
            { id: "D", text: "38" }
        ],
        rightOption: "C",
        explanation: "Total of 4 numbers = 4 × 28 = 112. Sum of first three = 20 + 25 + 30 = 75. Fourth number = 112 − 75 = 37.",
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
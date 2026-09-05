import AsyncStorage from '@react-native-async-storage/async-storage';

export const parentData = {
    topics: [
        { id: "numberSystemQuestions", name: "Number System" },
        { id: "timeAndWorkQuestions", name: "Time and Work" },
        { id: "trainQuestions", name: "Problems on Trains" },
        { id: "averageQuestions", name: "Average" },
        { id: "percentageQuestions", name: "Percentage" }
    ],
    coins: 50,
    unlockedTopics: ["numberSystemQuestions", "timeAndWorkQuestions", "trainQuestions", "averageQuestions"]
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

const STORAGE_KEY = 'aptitude-question-progress-v1';

export const questionMap: Record<string, Array<{ id: string; isCompleted: boolean }>> = {
    numberSystemQuestions,
    timeAndWorkQuestions,
    trainQuestions,
    averageQuestions,
    percentageQuestions,
};

export const hydrateQuestionProgress = async () => {
    try {
        const storedValue = await AsyncStorage.getItem(STORAGE_KEY);

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

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
        console.warn('Failed to save question progress', error);
    }
};
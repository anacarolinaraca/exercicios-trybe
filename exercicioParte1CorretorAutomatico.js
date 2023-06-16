const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (right, student) => {
    if (right === student) {
        return 1;
    }
    if (student === 'N.A') {
        return 0;
    }
    return -0.5;
};

const sumPoints = (right, student, verifyEquality) => {
    let sum = 0;

    for (let i = 0; i < right.length; i += 1) {
        const point = verifyEquality(right[i], student[i]);
        sum += point;
    }
    return `Os seus pontos são: ${sum}`;
}

console.log(sumPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers))
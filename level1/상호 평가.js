function solution(scores) {
    var answer = '';
    for(let i = 0; i < scores.length; i++) {
        let num = scores.length;
        let avg = 0;
        let max = { score : 0, index : -1 };
        let min = { score : 100, index : -1 };
        for(let j = 0; j < scores.length; j++) {
            if(scores[j][i] > max.score || (max.index === i && scores[j][i] === max.score)) {
                max = { score : scores[j][i], index : j };
            }
            if(scores[j][i] < min.score || (min.index === i && scores[j][i] === min.score)) {
                min = { score : scores[j][i], index : j };
            }
            avg += scores[j][i];
        }
        if(max.index === i) {
            avg -= max.score;
            num--;
        }
        if(min.index === i) {
            avg -= min.score;
            num--;
        }
        avg /= num;
        if(avg >= 90) { answer += 'A'}
        else if(avg >= 80 && avg < 90) { answer += 'B'}
        else if(avg >= 70 && avg < 80) { answer += 'C'}
        else if(avg >= 50 && avg < 70) { answer += 'D'}
        else if(avg < 50) { answer += 'F'}
    }
    return answer;
}
/* 
Climbing the Leaderboard

An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

Sample input 1: ranked = [100, 100, 50, 40, 40, 20, 10], player = [5, 25, 50, 120];
Sample output 1: [6, 4, 2, 1]

Sample input 2: ranked = [100, 90, 90, 80, 75, 60], player = [50, 65, 77, 90, 102];
Sample output 2: [6, 5, 4, 2, 1]
*/

function climbingLeaderboard(ranked, player) {

    const games = player.map(attempt => {
        const scores = [];

        ranked.forEach(e => {
            if (!scores.includes(e))
                scores.push(e);
        });

        scores.push(attempt);

        scores.sort((a, b) => b - a);

        return scores;
    });

    let position = 0;
    const result = [];
    for (let i = 0; i < player.length; i++) {
        position = games[i].indexOf(player[i]) + 1;
        result.push(position);
    }

    return result;
}

const ranked = [100, 100, 50, 40, 40, 20, 10];
const player = [5, 25, 50, 120];
climbingLeaderboard(ranked,player);
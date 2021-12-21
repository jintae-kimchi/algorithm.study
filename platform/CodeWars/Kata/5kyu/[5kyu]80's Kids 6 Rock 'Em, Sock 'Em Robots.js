/**
 * You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

Your job is to decide who wins.

Example:

 robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile"]
 }
 robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missile", "missile", "missile", "missile"]
 }
 tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 }
 
 fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."
robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

Rules

A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
Robots alternate turns attacking. Tactics are used in order.
A fight is over when a robot has 0 or less health or both robots have run out of tactics.
A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."
 */

/**
 * 알고리즘적인 난이도보단 요구사항을 충족시키는게 관건이었다.
 * 최대한 가독성을 생각해서 코딩해보았다.
 * @param {*} robot1
 * @param {*} robot2
 * @param {*} tactics
 */
function fight(robot1, robot2, tactics) {
    let whoWon = null;
    const [first, last] = robot1.speed >= robot2.speed ? [0, 1] : [1, 0];
    const robots = [robot1, robot2];

    const attack = (attacker, defender) => {
        const weapon = attacker.tactics.shift();
        if (weapon) {
            const damamge = tactics[weapon];
            defender.health -= damamge;
        }
    };
    const knockDown = (robot) => robot.health <= 0;
    const outOfAmmo = (robots) => robots.every((r) => r.tactics.length === 0);
    const decision = (robot1, robot2) =>
        robot1.health > robot2.health
            ? [robot1, robot2]
            : robot2.health > robot1.health
            ? [robot2, robot2]
            : [null];

    while (!whoWon) {
        if (outOfAmmo(robots)) {
            whoWon = decision(...robots)[0];
            break;
        }

        attack(robots[first], robots[last]);
        if (knockDown(robots[last])) {
            whoWon = robots[first];
            break;
        }
        attack(robots[last], robots[first]);
        if (knockDown(robots[first])) {
            whoWon = robots[last];
            break;
        }
    }

    const winner = whoWon ? whoWon.name : null;
    return winner ? `${winner} has won the fight.` : "The fight was a draw.";
}

const Test = {
    assertSimilar: (answer, expect) =>
        JSON.stringify(answer) === JSON.stringify(expect)
            ? console.log("pass")
            : console.error("fail", answer, expect),
    strictEqual: (answer, expect) =>
        answer === expect ? console.log("pass") : console.error(answer, expect),
};
const tcList = [];
const DRAW = "The fight was a draw.";
tcList.push(function () {
    const robot1 = {
        name: "Rocky",
        health: 100,
        speed: 20,
        tactics: ["punch", "punch", "laser", "missile"],
    };
    const robot2 = {
        name: "Missile Bob",
        health: 100,
        speed: 21,
        tactics: ["missile", "missile", "missile", "missile"],
    };
    const tactics = { punch: 20, laser: 30, missile: 35 };
    Test.assertSimilar(
        fight(robot1, robot2, tactics),
        "Missile Bob has won the fight."
    );
});

tcList.push(function () {
    const robot1 = {
        name: "Rocky",
        health: 200,
        speed: 20,
        tactics: ["punch", "punch", "laser", "missile"],
    };
    const robot2 = {
        name: "Missile Bob",
        health: 100,
        speed: 21,
        tactics: ["missile", "missile", "missile", "missile"],
    };
    const tactics = { punch: 20, laser: 30, missile: 35 };
    Test.assertSimilar(
        fight(robot1, robot2, tactics),
        "Rocky has won the fight."
    );
});
// 교착상태
tcList.push(function () {
    const robot1 = {
        name: "Rocky",
        health: 200,
        speed: 20,
        tactics: ["punch", "punch"],
    };
    const robot2 = {
        name: "Rocky Clone",
        health: 100,
        speed: 21,
        tactics: ["missile", "missile"],
    };
    const tactics = { punch: 20, laser: 30, missile: 35 };
    Test.assertSimilar(
        fight(robot1, robot2, tactics),
        "Rocky has won the fight."
    );
});
// random test
tcList.push(function () {
    const robot1 = {
        name: "Rocky",
        health: 886,
        speed: 44,
        tactics: [
            "punch",
            "punch",
            "laser",
            "missile",
            "punch",
            "laser",
            "missile",
            "punch",
            "laser",
            "missile",
            "punch",
            "laser",
            "missile",
        ],
    };
    const robot2 = {
        name: "Missile Bob",
        health: 730,
        speed: 87,
        tactics: [
            "punch",
            "punch",
            "laser",
            "missile",
            "punch",
            "laser",
            "missile",
            "punch",
            "laser",
            "missile",
            "punch",
            "laser",
            "missile",
        ],
    };
    const tactics = { punch: 20, laser: 30, missile: 35 };
    Test.assertSimilar(
        fight(robot1, robot2, tactics),
        "Rocky has won the fight."
    );
});
tcList.push(function () {
    const robot1 = { name: "Rocky", health: 100, speed: 20, tactics: [] };
    const robot2 = { name: "Missile Bob", health: 100, speed: 21, tactics: [] };
    const tactics = { punch: 20, laser: 30, missile: 35 };
    Test.assertSimilar(fight(robot1, robot2, tactics), DRAW);
});
tcList.forEach((tc) => tc());

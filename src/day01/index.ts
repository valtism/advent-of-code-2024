import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.split("   ").map(Number));

function part1(rawInput: string) {
  const input = parseInput(rawInput);
  const lefts = input.map((line) => line[0]).sort();
  const rights = input.map((line) => line[1]).sort();

  let result = 0;
  for (let i = 0; i < input.length; i++) {
    const distance = Math.abs(lefts[i] - rights[i]);
    result += distance;
  }

  return result;
}

function part2(rawInput: string) {
  const input = parseInput(rawInput);

  const lefts = input.map((line) => line[0]);
  const rights = input.map((line) => line[1]);

  let result = 0;
  for (let i = 0; i < input.length; i++) {
    const left = lefts[i];
    const matchCount = rights.filter((right) => right === left).length;
    const similarity = left * matchCount;
    result += similarity;
  }

  return result;
}

run({
  part1: {
    tests: [
      {
        input: `3   4
4   3
2   5
1   3
3   9
3   3`,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `3   4
4   3
2   5
1   3
3   9
3   3`,
        expected: 31,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

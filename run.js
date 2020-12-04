function do_math(str) {
  const words = str.split(" ");

  console.table(words);

  const arrNumberWithLetter = words.reduce((prev, curr) => {
    const letter = curr.match(/[a-zA-Z]+/)[0];
    const number = curr.replace(/[a-zA-Z]+/, "");
    prev.push({ letter, value: +number });
    return prev;
  }, []);

  console.table(arrNumberWithLetter);

  const sortedArrNumberWithLetter = arrNumberWithLetter.sort((a, b) => {
    return a.letter > b.letter ? 1 : a.letter < b.letter ? -1 : 0;
  });

  console.table(sortedArrNumberWithLetter);

  const numbers = sortedArrNumberWithLetter.map((object) => object.value);

  const operators = [
    (a, b) => {
      console.log(`${a} + ${b}`);
      return a + b;
    },
    (a, b) => {
      console.log(`${a} - ${b}`);
      return a - b;
    },
    (a, b) => {
      console.log(`${a} * ${b}`);
      return a * b;
    },
    (a, b) => {
      console.log(`${a} / ${b}`);
      return a / b;
    },
  ];

  const total = numbers.reduce((prev, _, index, arr) => {
    if (!arr[index + 1]) return prev;

    const operator = operators[index % 4];
    return operator(prev, arr[index + 1]);
  }, numbers[0]);

  console.log(Math.round(total));

  return total;
}


do_math("24z6 1x23 y369 89a 900b");

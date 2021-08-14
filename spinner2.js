// placed all the rotation needed in an array so I can call each element in the for loop

const spinner = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   '];
for (const i in spinner) {
  setTimeout(() => process.stdout.write(`\r${spinner[i]}`), 100 + i * 200);
}
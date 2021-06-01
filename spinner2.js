const symbols = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 0;

for (let symbol of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, time);
  time += 200;
}

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const _input = process.stdin.read();

  if (_input) {
    process.stdout.write(`Your name is: ${_input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

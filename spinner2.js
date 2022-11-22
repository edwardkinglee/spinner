for (let i = 100, j = 0; i < 2000; i += 200, j++) {
  const line = ['|', '/', '-', '\\'];
  setTimeout(() => {
    process.stdout.write('\r' + line[j] + '  ');
  }, i);
  if (j === 3)  j = 0;
}
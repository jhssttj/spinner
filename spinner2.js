let loadingCharacther = ['|','/','-','\\','|','/','-','\\','|'];

for (let i = 0; i < loadingCharacther.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${loadingCharacther[i]}   `)
  }, (0 + (i*200)))
};

const hammerTime = async (url, numCalls) => {
  const start = performance.now();
  const results = [];

  for(let i = 0; i < numCalls; i++) {
    const res = await fetch(url);
    const data = await res.text();

    results.push(data);
  }

  const end = performance.now();

  return `${numCalls} calls to ${url} took: ${end - start}ms`;
};

// send through 20 calls every second
setInterval(async () => {
  let result = await hammerTime('https://mattfinucane.com', 20);
  console.log(result);
}, 1000);

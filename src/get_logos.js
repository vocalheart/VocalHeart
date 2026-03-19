import https from 'https';

function fetchLogo(url) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      let match = data.match(/<svg[^>]*>.*?<\/svg>/isg);
      console.log(url, match ? match[0] : null);
    });
  }).on('error', (err) => {
    console.log("Error: " + err.message);
  });
}

fetchLogo('https://www.readymealz.in/');

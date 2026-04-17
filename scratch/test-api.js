const https = require('https');

https.get('https://scamfreeind.in/api/blogs', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log('Total blogs:', parsed?.data?.data?.length);
      const slugs = parsed?.data?.data?.map(p => p.slug);
      console.log('Slugs:', slugs);
    } catch (e) {
      console.error(e);
    }
  });
}).on('error', (err) => {
  console.error(err);
});

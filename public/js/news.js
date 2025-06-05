const rss_urls = [
  'https://spectrum.ieee.org/rss/robotics',
  'https://www.therobotreport.com/feed/',
  'https://roboticsbusinessreview.com/feed/',
  'https://robohub.org/feed',
  'https://blog.robotiq.com/rss.xml',
  'https://www.unite.ai/category/robotics/feed',
  'https://newatlas.com/robotics/index.rss',
  'https://www.roboticmagazine.com/feed',
  'https://community.robotshop.com/blog/feed',
  'https://techxplore.com/rss-feed/robotics-news/',
  'https://www.sciencedaily.com/rss/computers_math/robotics.xml',
  'https://news.mit.edu/rss/topic/robotics'
  
];

function fetchAllNews() {
  const all = rss_urls.map(url => {
    const api = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url);
    return fetch(api).then(res => res.json()).catch(() => null);
  });

  Promise.all(all).then(responses => {
    const seenTitles = new Set();
    const items = [];

    responses.forEach(res => {
      if (res && res.items) {
        res.items.forEach(item => {
          const key = item.title.trim().toLowerCase();
          if (!seenTitles.has(key)) {
            seenTitles.add(key);
            items.push(item);
          }
        });
      }
    });

    items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    const container = document.getElementById('robotics-news');

    items.slice(0, 25).forEach(item => {
      const news = document.createElement('div');
      news.className = 'news-item';

      const title = document.createElement('div');
      title.className = 'news-title';
      title.textContent = item.title;

      const date = document.createElement('div');
      date.className = 'news-date';
      date.textContent = new Date(item.pubDate).toLocaleString();

      const desc = document.createElement('div');
      desc.className = 'news-desc';
      desc.innerHTML = item.description.replace(/(<([^>]+)>)/gi, "").slice(0, 400) + '...';

      const link = document.createElement('a');
      link.href = item.link;
      link.target = '_blank';
      link.className = 'news-link';
      link.textContent = 'Read full article';

      desc.appendChild(link);

      title.addEventListener('click', () => {
        title.classList.toggle('open');
        desc.classList.toggle('open');
      });

      news.appendChild(title);
      news.appendChild(date);
      news.appendChild(desc);
      container.appendChild(news);
    });
  });
}

fetchAllNews();

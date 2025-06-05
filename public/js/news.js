const rss_url = 'https://spectrum.ieee.org/rss/robotics';
const api_url = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rss_url);

fetch(api_url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('robotics-news');
    data.items.slice(0, 10).forEach(item => {
      const news = document.createElement('div');
      news.className = 'news-item';

      const title = document.createElement('div');
      title.className = 'news-title';
      title.textContent = item.title;

      const date = document.createElement('div');
      date.className = 'news-date';
      date.textContent = new Date(item.pubDate).toLocaleDateString();

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
  })
  .catch(err => {
    const container = document.getElementById('robotics-news');
    container.innerHTML = '<p style="color:#f00; text-align:center;">Failed to load news. Try again later.</p>';
  });

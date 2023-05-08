const apiKey = '12b601c32ff64754b6260c7b63876a60';
const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const newsDiv = document.getElementById('news');

    for (let i = 0; i < data.articles.length; i++) {
      const article = data.articles[i];
      const title = document.createElement('h2');
      title.textContent = article.title;
      newsDiv.appendChild(title);

      const description = document.createElement('p');
      description.textContent = article.description;
      newsDiv.appendChild(description);

      const image = document.createElement('img');
      image.src = article.urlToImage;
      newsDiv.appendChild(image);

      const link = document.createElement('a');
      link.href = article.url;
      link.textContent = 'Leia mais';
      newsDiv.appendChild(link);

      const divider = document.createElement('hr');
      newsDiv.appendChild(divider);
    }
  })
  .catch(error => console.error(error));

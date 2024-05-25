document.addEventListener('DOMContentLoaded', function() {
  // Data array containing information about books
  const articles = [
      {
          id: 1,
          title: "Septimus Heap Book One: Magyk",
          date: "July 5, 2022",
          description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
          imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
          imgAlt: "Book cover for Septimus Heap 1",
          ages: "10-14",
          genre: "Fantasy",
          stars: "****"
      },
      {
          id: 2,
          title: "Magnus Chase Book One: Sword of Summer",
          date: "December 12, 2021",
          description: "The anticipated new novel by Rick Riordan...",
          imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
          imgAlt: "Book cover for Magnus Chase 1",
          ages: "12-16",
          genre: "Fantasy",
          stars: "⭐⭐⭐⭐"
      }
  ];

  // Select the container in the DOM where articles will be displayed
  const container = document.getElementById('articles-container');

  // Function to create and append articles to the container
  function createArticle(article) {
      const articleElement = document.createElement('article');
      articleElement.className = 'article-entry'; // Added a class for potential CSS styling

      // Creating a more structured and semantic HTML output
      articleElement.innerHTML = `
      
      <div class="article-meta">
          <p id="date"> ${article.date}</p>
          <p id="ages">${article.ages}</p>
          <p id="genre"> ${article.genre}</p>
          <p id="stars">${article.stars}</p>
      </div>
      <div class="article-content">
          <h2 id="book-title">${article.title}</h2>
          <img src="${article.imgSrc}" alt="${article.imgAlt}" style="width:250px;height:auto;">
          <p id="description">${article.description}</p>
      </div>
      `;

      container.appendChild(articleElement);
  }

  // Iterate through each article and create its HTML structure
  articles.forEach(createArticle);
});


  
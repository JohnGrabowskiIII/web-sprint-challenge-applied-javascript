import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let divCard = document.createElement('div');
  divCard.classList.add('card');
  let divHeadline = document.createElement('div');
  divHeadline.classList.add('headline');
  divHeadline.textContent = `${article.headline}`;
  divCard.appendChild(divHeadline);
  let divAuthor = document.createElement('div');
  divAuthor.classList.add('author');
  divCard.appendChild(divAuthor);
  let imgContain = document.createElement('div');
  imgContain.classList.add('img-container');
  divAuthor.appendChild(imgContain);
  let img = document.createElement('img');
  img.src = `${article.authorPhoto}`;
  imgContain.appendChild(img);
  let spanAuthor = document.createElement('span');
  spanAuthor.textContent = `By ${article.authorName}`;
  divAuthor.appendChild(spanAuthor);
  divCard.addEventListener('click', e => {
    console.log(article.headline);
  })
  return divCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let selectObj = document.querySelector(`${selector}`);
  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(eOne => {
      let articleGroup = eOne.data.articles;
      // I TRIED TO MAKE AN ARRAY OF ARTICLE TITLES, AND LOOP THROUGH THAT TO CREATE EACH ARTICLE CARD
      // I UNDERSTAND THIS METHOD IS DRY BUT WAS NOT ABLE TO WORK THROUGH ORIGINAL IDEA
      articleGroup.javascript.forEach(eJS => {
        let cardItem = Card(eJS);
        selectObj.appendChild(cardItem);
      })
      articleGroup.bootstrap.forEach(eBoot => {
        let cardItem = Card(eBoot);
        selectObj.appendChild(cardItem);
      })
      articleGroup.technology.forEach(eTech => {
        let cardItem = Card(eTech);
        selectObj.appendChild(cardItem);
      })
      articleGroup.jquery.forEach(eJQ => {
        let cardItem = Card(eJQ);
        selectObj.appendChild(cardItem);
      })
      articleGroup.node.forEach(eNode => {
        let cardItem = Card(eNode);
        selectObj.appendChild(cardItem);
      })
    });
}

export { Card, cardAppender }


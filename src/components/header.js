const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let divHead = document.createElement('div');
  divHead.classList.add('header');
  let spanDate = document.createElement('span');
  spanDate.classList.add('date');
  spanDate.textContent = `${date}`;
  divHead.appendChild(spanDate);
  let hOne = document.createElement('h1');
  hOne.textContent = `${title}`;
  divHead.appendChild(hOne);
  let spanTemp = document.createElement('span');
  spanTemp.classList.add('temp');
  spanTemp.textContent = `${temp}`;
  divHead.appendChild(spanTemp);
  return divHead;
  // console.log(divHead);
}

Header('title', 'date', 'temp');

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let headObj = Header('title', 'date', 'temp');
  let selectObj = document.querySelector(`${selector}`);
  // console.log(selectObj);
  selectObj.appendChild(headObj);
  // console.log(headObj);
}

// headerAppender();

export { Header, headerAppender }

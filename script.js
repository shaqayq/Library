const author = {
  a1: {
    name: 'Stephen Edwin',
    pic: './image/stephen.jpg',
    introduction: 'Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural fiction, suspense.',
    books: 'the Alex Cross, Michael Bennett, Womens Murder Club, Maximum Ride, Daniel X, NYPD Red, Witch and Wizard,',
  },
  a2: {
    name: 'Danielle Steel',
    pic: './image/DanielleSteel.jpg',
    introduction: 'an American writer, best known for her romance novels. She is the bestselling author ',
    books: 'the Alex Cross, Michael Bennett, Womens Murder Club, Maximum Ride, Daniel X, NYPD Red, Witch and Wizard,',
  },
  a3: {
    name: 'jamesPatterson',
    pic: './image/jamesPatterson.jpg',
    introduction: ' is an American author,His total income over a decade is estimated at $700 million.',
    books: 'the Alex Cross, Michael Bennett, Womens Murder Club, Maximum Ride, Daniel X, NYPD Red, Witch and Wizard,',
  },
  a4: {
    name: 'Stephenie Mayer',
    pic: './image/stephenieMayer.jpg',
    introduction: ' is an American author,His total income over a decade is estimated at $700 million.',
    books: 'the Alex Cross, Michael Bennett, Womens Murder Club, Maximum Ride, Daniel X, NYPD Red, Witch and Wizard,',
  },
  a5: {
    name: 'John Grisham',
    pic: './image/johnGrisham.jpg',
    introduction: ' is an American author,His total income over a decade is estimated at $700 million.',
    books: 'the Alex Cross, Michael Bennett, Womens Murder Club, Maximum Ride, Daniel X, NYPD Red, Witch and Wizard,',
  },
  a6: {
    name: 'Roleing',
    pic: './image/roleing.jpg',
    introduction: ' is an American author,His total income over a decade is estimated at $700 million.',
    books: 'the Alex Cross, Michael Bennett, Womens Murder Club, Maximum Ride, Daniel X, NYPD Red, Witch and Wizard,',
  },
};

const content = document.querySelector('.details');

function createSection(key) {
  const info = document.createElement('section');
  info.classList.add('info');
  content.appendChild(info);

  const cheesBg = document.createElement('div');
  cheesBg.classList.add('chess-bg');
  info.appendChild(cheesBg);

  const image = document.createElement('img');
  image.classList.add('profile');
  info.appendChild(image);
  image.src = author[key].pic;

  const descriptionSide = document.createElement('div');
  descriptionSide.classList.add('descSide');
  info.appendChild(descriptionSide);

  const name = document.createElement('h5');
  name.classList.add('authorName');
  descriptionSide.appendChild(name);
  name.innerHTML = author[key].name;

  const intro = document.createElement('p');
  intro.classList.add('intro');
  descriptionSide.appendChild(intro);
  intro.innerHTML = author[key].introduction;

  const space = document.createElement('hr');
  descriptionSide.appendChild(space);

  const book = document.createElement('p');
  book.classList.add('book');
  descriptionSide.appendChild(book);
  book.innerHTML = author[key].books;

  info.key = key;
  return info;
}

Object.keys(author).forEach((key) => {
  content.appendChild(createSection(key));
});

function show() {
  document.getElementById('menu').style.display = 'block';
  document.getElementsByClassName('fa-bars').style.display = 'none';
}

function hide() {
  document.getElementById('menu').style.display = 'none';
}

function more() {
  const info = document.querySelectorAll('.info');

  info.forEach((element) => {
    element.style.display = 'flex';
  });

  document.querySelector('.moreDetail').style.display = 'none';
}

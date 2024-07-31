const body = document.body;
const array = [
  "Hello World",
  "Good Morning",
  "Happy Day",
  "Good Evening",
  "Nice to see",
  "Take Care",
  "Sweet Dreams",
  "Have Fun",
  "Peaceful Night",
  "Enjoy Life",
  "Best Wishes",
  "Lovely Day",
  "Stay Safe",
  "Warm Regards",
  "Great Times",
  "Cheers Mate",
  "Hello Friend",
  "Good Luck",
  "Joyful Moments",
  "Kind Regards",
  "Hugs And Kisses",
  "Wonderful Evening",
  "Exciting Adventures",
  "Charming Smile",
  "Bright Future",
  "Joyful Greetings",
  "Happy Travels",
  "Endless Happiness",
  "Lovely Vibes",
  "Best Regards",
  "Shiny Days",
  "Radiant Joy",
  "Grateful Heart",
  "Friendly Waves",
  "Breezy Mornings",
  "Wondrous Times",
  "Gentle Touch",
  "Kind Spirits",
  "Blissful Moments",
  "Sunny Skies",
  "Cheery Attitude",
  "Heartfelt Thanks",
  "Uplifting News",
  "Fabulous Times",
  "Caring Thoughts",
  "Joyful Hearts",
  "Cheerful Spirit",
  "Thankful Days",
];
const background = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

const intervalId = setInterval(background, 2000);

body.innerHTML = `<p class="example">Hello World<p>`;
const x = body.getElementsByTagName("p");

const changeParagraph = () => {
  const paragraph = body.getElementsByTagName("p")[0];

  const arrIndex = Math.floor(Math.random() * array.length);
  while (paragraph == array[arrIndex]) {
    arrIndex = Math.floor(Math.random() * array.length);
    break;
  }
  paragraph.innerHTML = array[arrIndex];
};
changeParagraph = setInterval(changeParagraph, 2000);

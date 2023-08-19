const quotes = [
    {
      quote: "I’m tensai Sakuragi Hanamichi. I’m going to play basketball, because I’m the best basketball player.",
      author: "Hanamichi Sakuragi",
    },
    {
      quote: "It’s not too late to change ourselves and have a meaningful life.",
      author: "Hanamichi Sakuragi",
    },
    {
      quote: "Even geniuses make mistakes.",
      author: "Haruko",
    },
    {
      quote: "Masashi is Masashi, Akagi is Akagi. Then, who am I? Tell me... I'm Mitsui. A person who will never give up..",
      author: "Hisashi Mitsui",
    },
    {
      quote: "This guy always thinks he is the best. He is annoying, doesn't like to talk, and has no respect for the others. But I have to admit it, he is really strong.",
      author: "Hisashi Mitsui",
    },
    {
      quote: "OAnzai-sensei... I want to play basketball..",
      author: "Hisashi Mitsui",
    },
    {
      quote: "If you give up, that’s the end of the game.",
      author: "Coach Anzai",
    },
    {
      quote: "Everyone knows that an amateur like you will make mistakes. Like paying taxes, it’s unavoidable.",
      author: "Rukawa",
    },
    {
      quote: "If you don’t want to be subbed, then follow me with your life.",
      author: "Rukawa",
    },
    {
      quote: "No one can ever know how to do everything without learning it first.",
      author: "Haruko",
    },
    {
        quote: "Do you like Basketball?",
        author: "Haruko",
      }
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const quotes = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    name: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    name: "Theodore Roosevelt",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    name: "Sam Levenson",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    name: "Albert Einstein",
  },
  {
    quote: "The future depends on what you do today.",
    name: "Mahatma Gandhi",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    name: "Franklin D. Roosevelt",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    name: "Steve Jobs",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius",
  },
  {
    quote: "The harder the conflict, the greater the triumph.",
    name: "George Washington",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    name: "C.S. Lewis",
  },
  {
    quote: "The secret to getting ahead is getting started.",
    name: "Mark Twain",
  },
  {
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    name: "Christian D. Larson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    name: "Eleanor Roosevelt",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    name: "Jimmy Dean",
  },
  {
    quote:
      "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you.",
    name: "Mary Kay Ash",
  },
  {
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
    name: "Unknown",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    name: "Winston Churchill",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    name: "Walt Disney",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    name: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    name: "Roy T. Bennett",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    name: "C.S. Lewis",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    name: "Mark Twain",
  },
  {
    quote: "It always seems impossible until it's done.",
    name: "Nelson Mandela",
  },
  {
    quote: "Success is not in what you have, but who you are.",
    name: "Bo Bennett",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    name: "John D. Rockefeller",
  },
  {
    quote: "The future depends on what you do today.",
    name: "Mahatma Gandhi",
  },
  {
    quote:
      "The only way to achieve the impossible is to believe it is possible.",
    name: "Charles Kingsleigh",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    name: "Unknown",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    name: "Steve Jobs",
  },
  {
    quote:
      "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    name: "Joel Brown",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    name: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius",
  },
  {
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
    name: "Unknown",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    name: "Jimmy Dean",
  },
  {
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    name: "Christian D. Larson",
  },
  {
    quote:
      "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you.",
    name: "Mary Kay Ash",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    name: "Winston Churchill",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    name: "Walt Disney",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    name: "Sam Levenson",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    name: "Albert Einstein",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    name: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    name: "Roy T. Bennett",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    name: "C.S. Lewis",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    name: "Mark Twain",
  },
    {
      quote:
        "যদি আপনি আকাশে উড়তে চান, তবে পাখি হোন না। বরং একটি উড়ানশিল্পী হন।",
      name: "আব্রাহাম লিঙ্কন",
    },
    {
      quote:
        "সফলতা সবসময় সবটিই অসম্ভব দেখতে পাওয়া যায়, যখন আপনি আপনার সম্ভাবনার বাইরে যাচ্ছেন।",
      name: "আলডাস হাকসলি",
    },
    {
      quote:
        "অনেক চেষ্টা করার পরেও যদি আপনি লক্ষ্যে পৌঁছতে না পারেন, তাহলে লক্ষ্যটি পরিবর্তন করুন, কিন্তু লক্ষ্য ছেড়ে চলবেন না।",
      name: "আলবার্ট আইনস্টাইন",
    },
    {
      quote:
        "সফলতা হলো এমন একটি মুহূর্ত, যখন তোমার করা কাজগুলির সমষ্টি দুর্বলতা ও বিফলতা দ্বারা আঘাত পেতে চেষ্টা করবে, কিন্তু তুমি এগিয়ে এগিয়ে যাওয়া সত্যিকার প্রয়াসের মাধ্যমে তাদের পরিবর্তন করতে পারবে।",
      name: "চার্ল্‌স ডারউইন",
    },
    {
      quote:
        "সফলতা পেতে বিশেষ অবস্থানে পৌঁছানোর প্রয়োজন নেই, বরং সাধারণ কাজগুলি অসাধারণ উদ্যোগের মাধ্যমে সফলতা অর্জন করা যায়।",
      name: "উইলিয়াম জেমস",
    },
    {
      quote:
        "সফলতা হলো না যে আপনি কত পৌঁছাতে পারেন, বরং তা নির্ধারণ করে যে আপনি কতটুকু পরিস্থিতি এবং বিপদের মধ্যে থেকে গুজব উত্তর দেতে পারেন।",
      name: "বেনজামিন ডিস্রেলি",
    },
    {
      quote:
        "যদি আপনি সফল হতে চান, তাহলে সফলতার মাধ্যমে যেখানে পৌঁছাতে হবে তা নির্ধারণ করুন, না যে আপনি যেখানে আসতে চান।",
      name: "জিম রোয়েন",
    },
    {
      quote:
        "যদি তোমার কাছে একটি কর্মচেষ্টার সুযোগ নেই, তাহলে সফলতা তোমার কাছে একটি বিকল্প পথে এসেছে।",
      name: "জন ম্যাক্সওয়েল",
    },
    
];


document.getElementById('quoteId').addEventListener('click',function(){
     const content = document.getElementById('quote-content');
     const index = Math.floor(Math.random()*quotes.length);
     const unknown = document.getElementById('unknown');
     content.innerText =  quotes[index].quote;
     unknown.innerText = quotes[index].name;
    
})
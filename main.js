let quotes = [
  {
    quote:
      "“IF YOU DON’T LIKE THE HAND THAT FATE’S DEALT YOU WITH, FIGHT FOR A NEW ONE.”",
    person: "NARUTO UZUMAKI",
  },
  {
    quote:
      "“THE MOMENT PEOPLE COME TO KNOW LOVE, THEY RUN THE RISK OF CARRYING HATE.”",
    person: "OBITO UCHIHA",
  },
  {
    quote: "“SOMEBODY TOLD ME I’M A FAILURE, I’LL PROVE THEM WRONG.”",
    person: "NARUTO",
  },
  {
    quote:
      "“WHEN PEOPLE GET HURT, THEY LEARN TO HATE… WHEN PEOPLE HURT OTHERS, THEY BECOME HATED AND RACKED WITH GUILT. BUT KNOWING THAT PAIN ALLOWS PEOPLE TO BE KIND. PAIN ALLOWS PEOPLE TO GROW… AND HOW YOU GROW IS UP TO YOU.” ",
    person: "JIRAIYA",
  },
  {
    quote:
      "“PEOPLE WHO CONTINUE TO PUT THEIR LIVES ON THE LINE TO DEFEND THEIR FAITH BECOME HEROES AND CONTINUE TO EXIST ON IN LEGEND.”",
    person: "NARUTO",
  },
  {
    quote: "“A SMILE IS THE EASIEST WAY OUT OF A DIFFICULT SITUATION.” ",
    person: "SAKURA HARUNO",
  },
  {
    quote:
      "“FAILING DOESN’T GIVE YOU A REASON TO GIVE UP, AS LONG AS YOU BELIEVE.”",
    person: "NARUTO",
  },
  {
    quote:
      "“GROWTH OCCURS WHEN ONE GOES BEYOND ONE’S LIMITS. REALIZING THAT IS ALSO PART OF TRAINING.”",
    person: "ITACHI UCHIHA",
  },
  {
    quote:
      "“REJECTION IS A PART OF ANY MAN’S LIFE. IF YOU CAN’T ACCEPT AND MOVE PAST REJECTION, OR AT LEAST USE IT AS WRITING MATERIAL – YOU’RE NOT A REAL MAN.”",
    person: "JIRAIYA",
  },
  {
    quote:
      "“THOSE WHO FORGIVE THEMSELVES, AND ARE ABLE TO ACCEPT THEIR TRUE NATURE… THEY ARE THE STRONG ONES!”",
    person: "ITACHI UCHIHA",
  },
  {
    quote: "“WHEN YOU GIVE UP, YOUR DREAMS AND EVERYTHING ELSE, THEY'RE GONE.”",
    person: " NARUTO",
  },
  {
    quote:
      "“IT’S HUMAN NATURE NOT TO REALIZE THE TRUE VALUE OF SOMETHING, UNLESS THEY LOSE IT.”",
    person: " OROCHIMARU",
  },
  {
    quote:
      "“NEVER UNDERESTIMATE YOUR OPPONENT, NO MATTER HOW SMALL THEY MAY SEEM.”",
    person: "SHINO ABURAME",
  },
  {
    quote:
      "“IN THE NINJA WORLD, THOSE WHO DON’T FOLLOW THE RULES ARE TRASH. BUT, THOSE WHO ABANDON THEIR FRIENDS ARE EVEN WORSE THAN TRASH.”",
    person: "OBITO UCHIHA",
  },
  {
    quote:
      "“Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist”",
    person: "Madara Uchiha",
  },
  {
    quote: "“Every Day, I Eat, Sleep, & Worry About Stupid Things.”",
    person: "Kakashi ",
  },
];

let mainQuote = document.getElementById("quote");
let person = document.getElementById("person");
let btn = document.getElementById("changeQuote");

btn.addEventListener("click", () => {
  let result = Math.floor(Math.random() * quotes.length);

  mainQuote.innerText = quotes[result].quote.toUpperCase();
  person.innerText = "– " + quotes[result].person.toUpperCase();
});

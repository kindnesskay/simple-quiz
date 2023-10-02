import { ConfirmationBox } from "./dialogBox.js";

const main_element = document.querySelector("main");
const body_element=document.querySelector("body");
const data = [
  {
    picture_src: "./assets/images/code.jpg",
    question: "which company developed javascript?",
    options: ["Microsoft", "Netscape", "Facebook"],
    answer: "Netscape",
    item: 1,
  },
  {
    picture_src: "./assets/images/header.jpg",
    question: "when was javascript created?",
    options: ["1992", "1995", "1989"],
    answer: "1995",
    item: 2,
  },
  {
    picture_src: "./assets/images/html.jpg",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<javascript>", "<scripts>"],
    answer: "<script>",
    item: 3,
  },
  {
    picture_src: "./assets/images/keyboard.jpg",
    question: "Where is the correct place to insert a JavaScript?",
    options: ["<link>", "<head>", "<body>"],
    answer: "<body>",
    item: 4,
  },
  {
    picture_src: "./assets/images/laptop.jpg",
    question: 'How do you write "Hello World" in an alert box?',
    options: [
      'alertbox("Hello world")',
      'alert("Hello world")',
      "alert(hello world)",
    ],
    answer: 'alert("Hello world")',
    item: 5,
  },
  {
    picture_src: "./assets/images/table.jpg",
    question: "who created javascript",
    options: ["Brendan Eich", "Chris Beard", "Bill Gates"],
    answer: "Brendan Eich",
    item: 6,
  },
];

function new_div(x) {
  //add question to question box
  let question_text = document.createTextNode(data[x].question);
  let p = document.createElement("p");
  p.appendChild(question_text);

  //create the main box contents
  let content = document.createElement("div");
  content.className = "content";
  content.id = data[x].item;
  main_element.appendChild(content);

  let picture_box = document.createElement("div");
  let picture = document.createElement("img");
  picture_box.className = "picture";
  content.appendChild(picture_box);
  picture.src = data[x].picture_src;
  picture_box.appendChild(picture);

  let question = document.createElement("div");
  question.className = "question";
  question.appendChild(p);
  content.appendChild(question);

  let options_box = document.createElement("div");
  options_box.className = "option";
  content.appendChild(options_box);
  for (let i = 0; i < 3; i++) {
    //add three buttons to the container
    let option_text = document.createTextNode(data[x].options[i]);
    let option_para = document.createElement("p");
    option_para.appendChild(option_text);
    let options = document.createElement("button");
    options.className = "option_btn";
    options.id = data[x].options[i];
    options.appendChild(option_para);
    options_box.appendChild(options);

    let option = document.getElementById(data[x].options[i]);
    option.addEventListener("click", handleAnswer);

    function handleAnswer() {
      let position = this.parentNode.getBoundingClientRect();
      let yAxis = this.parentNode.offsetTop;
      let xAxis = this.parentNode.offsetLeft;
      
      const choice = { text: option.innerText, element: option };
      const answer = data[x].answer;
      const confirmation_box = new ConfirmationBox();
      console.log(position);
      let block=confirmation_box.createBlock()
      let yes = () => {
        checkAnswer(choice, answer);
        confirmation_box.removeBox();
        return true;
      };
      let no = () => {

        confirmation_box.removeBox();
        return false;
      };
      //   set dialog box extras//
      confirmation_box.setMessage("Are you sure?");
      confirmation_box.setPosition(xAxis,yAxis);
      confirmation_box.setYesCallback(yes);
      confirmation_box.setNoCallback(no);
      let box = confirmation_box.getBox();
      main_element.appendChild(box);
      body_element.appendChild(block);
    }
  }
}
// --------------------//
for (let i = 0; i < data.length; i++) {
  new_div(i);
}
// --------------------//

function checkAnswer(choice, answer) {
  if (choice.text == answer) {
    choice.element.className = "correct";
  } else {
    choice.element.className = "wrong";
  }
}

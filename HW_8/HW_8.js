/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body> */
let title = document.createElement("title");
let meta = document.createElement("meta");

title.innerHTML = "HW_8";
meta.setAttribute("charset", "UTF-8");

let header = document.createElement("header"),
  header_container = document.createElement("div");
(h1 = document.createElement("h1")), (subheader = document.createElement("p"));

h1.innerHTML = "Choose Your Option";
subheader.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing ";

let main = document.createElement("main");
let content = document.createElement("div"),
  card_left = document.createElement("div"),
  firstLine = document.createElement("span"),
  content_header = document.createElement("h1"),
  content_subheader = document.createElement("p"),
  content_button = document.createElement("button");

firstLine.innerHTML = "FREELANCER";
content_header.innerHTML = "Initially designed to";
content_subheader.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing ";
content_button.innerHTML = "START HERE";

document.head.appendChild(title);
document.head.appendChild(meta);
document.body.appendChild(header);
header.appendChild(header_container);
header_container.appendChild(h1);
header_container.appendChild(subheader);
document.body.appendChild(main);
main.appendChild(content);
content.appendChild(card_left);
card_left.appendChild(firstLine);
card_left.appendChild(content_header);
card_left.appendChild(content_subheader);
card_left.appendChild(content_button);

// param = parameter
header_container.classList.add("header_container__param");
h1.classList.add("content_header__font");
subheader.classList.add(
  "content_subheader__font",
  "content_subheader__fontsize"
);
content.classList.add("content__param");
card_left.classList.add("card__param");
firstLine.classList.add("firstLine__param");
firstLine.classList.add("firstLine__font");
content_header.classList.add("content_header__param");
content_header.classList.add("content_header__font");
content_subheader.classList.add("content_subheader__param");
content_subheader.classList.add("content_subheader__font");
content_button.classList.add("content_button__param");
content_button.classList.add("content_button__font");

let style = document.createElement("style");
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    .header_container__param {
        width: 800px;
        height: 64px;
        align-items: center;
    }
    .content__param {
        display: flex;
        flex-direction: row;
        width: 800px;
    }
    .card__param {
        display: flex;
        width: 400px;
        height: 480px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .firstLine__font {
        color: rgb(159, 163, 167);
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 2.4px;
        text-align: center;
    }
    .content_header__param {
        width: 210px;
        height: 92px;
        margin: 0px 0px;
    }
    .content_header__font {
        color: rgb(33, 33, 33);
        font-family: Arvo;
        font-size: 36px;
        font-weight: 400;
        line-height: 46px;
        letter-spacing: 0px;
        text-align: center;
    }
    .content_subheader__param {
        width: 210px;
        height: 44px;
    }
    .content_subheader__font {
        color: rgb(159, 163, 167);
        font-family: OpenSans;
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: center;
    }
    .content_button__param {
        width: 147px;
        height: 46px;
        border: 3px solid rgb(255, 200, 10);
        border-radius: 46px;
        background-color: white;
    }
    .content_button__font {
        color: rgb(33, 33, 33);
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 2.4px;
        text-align: center;
    }
    .content_subheader__fontsize {
        font-size: 14px;
        line-height: 22px;

    }
    .card_right__font {
        color: rgb(255, 200, 10);
    }
`;
document.head.appendChild(style);

let card_right = card_left.cloneNode(true);
content.appendChild(card_right);
console.log(card_right.querySelector("li:nth-child(1)"));

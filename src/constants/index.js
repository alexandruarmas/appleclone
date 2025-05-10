import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../assets";

export const navLists = ["Magazin", "Mac", "iPhone", "Suport"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Prezentăm A17 Pro.",
      "Cip revoluționar.",
      "Performanță extraordinară.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titan.", "Atât de puternic. Atât de ușor. Atât de Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max are",
      "cel mai lung zoom optic din",
      "istoria iPhone. Impresionant.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Butonul Action nou. Ce va face al tău?"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro în Titan Natural",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro în Titan Albastru",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro în Titan Alb",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro în Titan Negru",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Politica de Confidențialitate",
  "Termeni de Utilizare",
  "Politica de Vânzare",
  "Legal",
  "Hartă Site",
];

export const sourceCode = "https://github.com/sanidhyy/apple-clone";

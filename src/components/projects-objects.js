import etrackyImage from "../images/etracky.png";
import tonyartsImage from "../images/tonyarts.png";
import btImage from "../images/bt.png";
import jettImage from "../images/jett.png";

const etrackyTags = ["MongoDb", "ExpressJS", "ReactJS", "NodeJS"];
const etrackyDescription = `
  Etracky is a fullstack web app where users can track 
  and organize their workout routines. 
  Alot of people in my community use 
  this exercise tracker to help them keep track of their exercises`;

const etrackyProject = {
  projectTags: etrackyTags,
  projectDescription: etrackyDescription,
  projectGithubLink: "https://github.com/winnie-webb/basic-mvc-app",
  projectSiteLink: "https://etracky.herokuapp.com/",
  imgSrc: etrackyImage,
};
const tonyartsTags = ["Gatsby", "Getforms API", "SASS", "Gatsby Cloud"];
const tonyartsDescription = `Tonyarts is a business that sell various artworks. 
  This website is very basic but helped me to understand gatsby.`;

const tonyartsProject = {
  projectTags: tonyartsTags,
  projectDescription: tonyartsDescription,
  projectGithubLink: "https://github.com/winnie-webb/tonyarts",
  projectSiteLink: "https://tonyarts.gatsbyjs.io",
  imgSrc: tonyartsImage,
};
const btTags = ["HTML5", "CSS3", "JS", "NodeJS"];
const btDescription = `Brukieanime is a web application for streaming 
  almost every anime out there. As an anime lover I enjoyed making
   this and now many of my friends use it to watch their favourite anime.(still in dev) `;
const btProject = {
  projectTags: btTags,
  projectDescription: btDescription,
  projectGithubLink: "https://github.com/winnie-webb/brukieanime",
  projectSiteLink: "https://dananime.herokuapp.com/",
  imgSrc: btImage,
};
const jettTags = ["Paypal API", "PHP", "Laravel", "React JS"];
const jettDescription = `This is the first big project I've ever worked on and I learnt alot 
   I used paypal for making payments and everything. At the time I was not 
   good at designing.
  `;
const jettProject = {
  projectTags: jettTags,
  projectDescription: jettDescription,
  projectGithubLink: "https://github.com/winnie-webb/jamaicaeternaltours",
  projectSiteLink: "https://jamaicaeternaltours.herokuapp.com/",
  imgSrc: jettImage,
};
const projectsObject = {
  etrackyProject,
  tonyartsProject,
  btProject,
  jettProject,
};
export default projectsObject;

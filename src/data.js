import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"

export const pageLinks = [
  { Id: "1", link: "#home", text: "home" },
  { Id: "2", link: "#about", text: "about" },
  { Id: "3", link: "#services", text: "services" },
  { Id: "4", link: "#tours", text: "tours" },
]

export const socialLinks = [
  {
    Id: "1",
    link: "https://www.twitter.com",
    target: "blank",
    dclass: "nav-icon",
    iclass: "fab fa-facebook",
  },
  {
    Id: "2",
    link: "https://www.twitter.com",
    target: "blank",
    dclass: "nav-icon",
    iclass: "fab fa-twitter",
  },
  {
    Id: "3",
    link: "https://www.twitter.com",
    target: "blank",
    dclass: "nav-icon",
    iclass: "fab fa-squarespace",
  },
]

export const services = [
  {
    Id: "1",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    Id: "2",
    icon: "fas fa-tree fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    Id: "3",
    icon: "fas fa-socks fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
]

export const tourPackages = [
  {
    id: "1",
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: "2",
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: "3",
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: "4",
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    duration: "20 days",
    cost: "from $3300",
  },
]

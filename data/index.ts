import Link from "next/link";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I build modern and responsive websites with a focus on performance.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently grasping react native for App building",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    header: "Campistan",
    title: "Campistan- A camping mate",
    des: "Explore the Camps and enjoy the nature with Campistan. A camping mate for all the campers out there.",
    img: "/p11.png",
    link: "https://campistan.vercel.app/",
  },
  {
    id: 2,
    header: "Wiggle",
    title: "Wiggle - A social media platform",
    des: "Social media platform for all the wigglers out there. Share your thoughts and connect with others.",
    img: "/p4.png",
    link: "https://wiggle-v5ys.onrender.com/",
  },
  {
    id: 3,
    header: "Weathera",
    title: "Weathera - Know the weather",
    des: "A weather app that shows the current weather and forecast along with ad-on features.",
    img: "/p2.png",
    link: "https://05ambuj.github.io/Weathera/",
  },
  {
    id: 4,
    header: "Escapo",
    title: "Escapo - X clone",
    des: "Social media platform frontend clone.",
    img: "/p3.png",
    link: "https://esc-2.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Ambuj was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ambuj's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ambuj is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Ambuj was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ambuj's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ambuj is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Ambuj was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ambuj's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ambuj is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Ambuj was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ambuj's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ambuj is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Ambuj was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ambuj's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ambuj is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/05Ambuj",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ambujm05/",
  },
];

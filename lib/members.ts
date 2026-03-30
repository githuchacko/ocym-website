export type Member = {
  role: string;
  name: string;
  image1: string;
  image2?: string;
  ph?: string;
};

export const members: Member[] = [
  {
    role: "Vice President",
    name: "Roshin Philip",
    image1: "/images/roshin.jpg",
  },
  {
    role: "Secretary",
    name: "Amal K Santhosh",
    image1: "/images/amal.jpg",
    ph: "+91 7558043864",
  },
  {
    role: "Joint Secretary",
    name: "Alen Kurian & Manaswy Mariam Roy",
    image1: "/images/alen.jpg",
    image2: "/images/manaswy.jpg",
  },
  {
    role: "Treasurer",
    name: "Mintu Mathew",
    image1: "/images/mintu.jpg",
  },
  {
    role: "Georgian Editors",
    name: "Githu Chacko & Jerin Varghese",
    image1: "/images/githu.png",
    image2: "/images/jerin.jpg",
  },
  {
    role: "Media Wing",
    name: "Sherin Varghese & Amal Philip George",
    image1: "/images/sherin.jpg",
    image2: "/images/amalpg.jpg",
  },
  {
    role: "Pallom District Representative",
    name: "Kelvin T Varghese",
    image1: "/images/kelvin.jpg",
  },
];

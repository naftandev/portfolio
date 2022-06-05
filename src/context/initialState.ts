export default {
  about: {
    name: "Jhean Pacheco",
    position: "Frontend Developer",
    heroPicture: {
      hero640x479: "https://portfolio-statics.s3.amazonaws.com/images/hero-640x479.jpg",
      hero1280x959: "https://portfolio-statics.s3.amazonaws.com/images/hero-1280x959.jpg",
      hero1920x1439: "https://portfolio-statics.s3.amazonaws.com/images/hero-1920x1439.jpg",
      hero3353x2514: "https://portfolio-statics.s3.amazonaws.com/images/hero-3353x2514.jpg"
    },
    profilePicture: "https://portfolio-statics.s3.amazonaws.com/images/me.png",
    description: "Greetings, my name is Jhean Pacheco, I'm a Frontend Developer and I have collaborated actively for more than 5 years in the tech industry. My goal as web aplications developer is making creative designs and technologically advanced. I'm a proactive and dynamic person, used to solve problems and unforeseen events autonomously, without the need for a permanent supervision. I'm constantly training and updating myself with the use of new technologies that facilitate and optimize the web applications development.",
    softSkills: ["Autodidact", "Teamwork", "Time management"],
    socialNetworks: [
      {
        name: "GitHub",
        icon: "https://portfolio-statics.s3.amazonaws.com/icons/github-light.svg",
        url: "https://github.com/naftandev"
      },
      {
        name: "Twitter",
        icon: "https://portfolio-statics.s3.amazonaws.com/icons/twitter-light.svg",
        url: "https://twitter.com/naftandev"
      }
    ]
  },
  skills: [
    {
      name: "HTML",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/html.svg",
    },
    {
      name: "CSS",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/css.svg",
    },
    {
      name: "JavaScript",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/javascript.svg",
    },
    {
      name: "TypeScript",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/typescript.svg",
    },
    {
      name: "React",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/react.svg",
    },
    {
      name: "Webpack",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/webpack.svg",
    },
    {
      name: "NodeJS",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/nodejs.svg",
    },
    {
      name: "Jest",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/jest.svg",
    },
    {
      name: "npm",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/npm.svg",
    },
    {
      name: "Git",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/git.svg",
    },
    {
      name: "GraphQL",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/graphql.svg",
    },
    {
      name: "Sass",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/sass.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://portfolio-statics.s3.amazonaws.com/icons/bootstrap.svg",
    }
  ],
  projects: [
    {
      title: "COVID-19 Tracker",
      description: "This project helps track the global cases of COVID-19 disease.",
      picture: "https://portfolio-statics.s3.amazonaws.com/images/project_covid19-tracker.png",
      url: "https://naftandev.github.io/covid19-tracker/",
      theme: "light"
    },
    {
      title: "Shortly",
      description: "A responsive WebApp to shorten links quickly and safely using an API.",
      picture: "https://portfolio-statics.s3.amazonaws.com/images/project_url-shortening-api.png",
      url: "https://naftandev.github.io/url-shortening-api/",
      theme: "dark"
    },
    {
      title: "Naftan Movie",
      description: "In Naftan Movie you can download a large number of movies, as well as see a short review of each one.",
      picture: "https://portfolio-statics.s3.amazonaws.com/images/project_naftan-movie.png",
      url: "https://naftandev.github.io/naftan-movie/",
      theme: "dark"
    },
    {
      title: "Rock, paper or scissors - The Game",
      description: "Have fun playing this classic game now digitally.",
      picture: "https://portfolio-statics.s3.amazonaws.com/images/project_rock-paper-scissors.png",
      url: "https://naftandev.github.io/rock-paper-scissors/",
      theme: "light",
      topPosition: -235
    },
    {
      title: "Simón Dice - The Game",
      description: "Have fun playing this classic game now digitally.",
      picture: "https://portfolio-statics.s3.amazonaws.com/images/project_simon-dice.png",
      url: "https://naftandev.github.io/simon-dice/",
      theme: "light"
    }
  ],
  jobs: [
    {
      companyName: "Nixi1",
      companyLogo: "https://portfolio-statics.s3.amazonaws.com/images/nixi1-logo_100x100.jpg",
      seniority: 0,
      roles: [
        {
          name: "Senior Frontend Developer",
          type: "Full time",
          date: {
            start: "2021-07-01",
            end: ""
          },
          location: {
            country: "Spain",
            city: "Barcelona"
          },
          description: "React, Redux, TypeScript, REST API Request, SASS, styled-components, Bootstrap, BEM, Git, Agile."
        }
      ]
    },
    {
      companyName: "Freelance",
      companyLogo: "https://portfolio-statics.s3.amazonaws.com/images/nixi1-logo_100x100.jpg",
      seniority: 0,
      roles: [
        {
          name: "Frontend Developer",
          type: "Full time",
          date: {
            start: "2018-01-01",
            end: "2021-06-01"
          },
          location: {
            country: "Ecuador",
            city: "Puyo"
          },
          description: "React, Redux, TypeScript, Electron, GraphQL Request, REST API Request, Jest, SASS, styled-components, Bootstrap, BEM, Git, Webpack."
        }
      ]
    }
  ]
}

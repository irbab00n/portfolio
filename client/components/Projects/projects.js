module.exports.portfolio = {
  pictures: [
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design.jpg',
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design2.jpg',
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_fleshed.jpg'
  ],
  title: 'Portfolio Project',
  link: 'https://cos-bytes.com',
  description: 'This website has served as not only a display center for who I am, but also what I am capable of as a software engineer.',
  contributors: ['Thomas Cosby'],
  stackImage: '',
  about: 'Everything that you have seen so far has been composed of components I have created myself.  As a labor of love, my portfolio has been one of the best resources for my continually developing front-end skills.  I have combined the most popular JS front-end framework, React, with a technique known as CSS-in-JS to create a highly interactive and performant user experience.  It is packed full of unique features, inluding a custom built simulated scrolling navigation.  This project has inspired me to create a CSS-in-JS animation builder for React!',
};

module.exports.trainerFinder = {
  pictures: [
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_profile.jpg',
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_signup.jpg'
  ],
  title: 'TrainerFinder',
  link: 'http://trainerfinder.herokuapp.com',
  description: 'A platform for personal trainers to operate their businesses off of',
  contributors: ['Thomas Cosby', 'Gui Choupeaux', 'Chao Zeng', 'Andy Lien'],
  stackImage: '',
  about: 'TrainerFinder was my thesis project while I was student at Hack Reactor.  Within 4 weeks, my team and I had to jump into a semi-built codebase, figure out what pieces have already be implemented and then build our product on top of it.  We elected to build a platform for personal trainers and trainees alike to be able to connect and conduct their personal training business.  This project features a multi-tier user system, depending on the type of account that the user creates.  Trainers have access to an entire dashboard where they can create and view their appointments and message clients.  Clients who have trained with trainers from whom they purchased appointments are able to rate and review the trainer.  This was a great period of growth in my understanding of client-side rendering versus server-side rendering, and how to maintain pagination within a React application.',
};

module.exports.vagabondly = {
  pictures: [
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_fleshed.jpg',
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_trips.jpg',
    'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_skeleton.jpg'
  ],
  title: 'Vagabondly',
  link: 'http://vagabondly-staging.herokuapp.com/',
  description: 'A trip curation and exploration application',
  contributors: ['Thomas Cosby', 'Miles Sorce', 'Neal Williams', 'James Critelli'],
  stackImage: '',
  about: 'Vagabondly, the best app for trip curation and exploration!  Or in our minds at least that is how it felt to be able to re-design and re-implement the entire front-end.  This project was what is considered the Hack Reactor Legacy project.  Legacy meaning that this was a project that we inherited from another team within my cohort.  Very quickly, my team and I realized that the front-end on this project was in a desperate need of an overhaul.  We had to read and understand how the existing codebase on the back-end, and then design a new front-end to display information that we were retrieving from the Yelp Search API.  Built entirely in React, my code contains a blend of Material UI components with custom-built components to deliver a very guided step-by-step trip creation experience.',
};

module.exports.mock = {
  pictures: [
  ],
  title: 'Example Slide',
  link: '',
  description: 'This slide exists as an example to show how the content gets replaced dynamically',
  contributors: ['Thomas Cosby'],
  stackImage: '',
  about: 'This slide is not only meant as a temporary placeholder, but also to serve as a demonstration of my ability to create unique and re-useable components.  The text you have been seeing on these slides is being contained within object literals that I import within the application.  These components can be used with data that you can return from a server, too!  That is what is great about it!',
};

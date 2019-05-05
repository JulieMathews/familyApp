'use strict';

let article1 = `<p>As children, we learn who we are and how we are valued by the feedback we
receive from other people. If we do something and others respond with warmth, admiration, and
pleasure, we think of that action as reflecting the good part of ourselves. If, on the other
hand, we do something and it is met with disapproval or withdrawal of love, we have been bad
and we must not do it again.</p>

<h3>How Kids with ADHD Are Perceived and Judged</h3>

<p>There are three basic ways in which this feedback loop goes wrong for children with attention
deficit disorder. The first is that kids with ADHD rarely behave the same way consistently enough
to get a consistent stream of feedback. Sometimes they are empathic and other times self-absorbed.
If they find something interesting, they can achieve anything but they cannot do 20 minutes of
homework without a meltdown. It can be hard to develop a singular sense of self while evoking
contradictory feedback.</p>
`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Articles', [{
     title: 'Love, Actually! The Feedback Your Child Needs Most',
     article: article1,
     blurb: 'What feedback do our children need the most?',
     createdAt: new Date(),
     updatedAt: new Date(),
   }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};

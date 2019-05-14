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

let article2 = `<h3>You Are Not Broken:” How ADHD Erodes a Child’s Self-Confidence<h3>
<p>One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.
In my more than 20 years of mental health training and practice, I have yet to meet a child diagnosed with ADHD who doesn’t feel bad about him or herself from time to time. In addition to attention and concentration issues, children with ADHD struggle with an underlying belief that they are broken — that something’s wrong with them and they cannot control it.
In the very moments when they are trying to do their best, their bodies betray them. The world reprimands them for being “a little too much.” And they are externally stigmatized and internally shamed with the notion that, even if they want to be good — they can’t.
Parents whose children have ADHD know the scenario all too well: Your child gets overly excited at an inopportune moment. You see him try to control himself, but he can’t. You or someone else tells him to calm down or stop. Your child does the exact opposite. Your patience diminishes and your frustration increases; maybe you scold him more harshly than you mean to or maybe he feels the shame coming and act out even more.
In the end, your child feels worse about himself. It’s heartbreaking for parents and providers who know deep down that these kids are good kids trying every day to do their best.</p>

<h5> My work with brave, resilient, and astute children has taught me that children with ADHD can stop the cycle. Here are a few simple and fun mind-body awareness exercises that kids can do to begin to do to take back control:</h5>
<ol>
<li> 1. Deep breathing. Taking a big, deep belly breath teaches kids that they can stop themselves and regroup. And, even better, they often feel calmer afterwards.</li>
<li> 2. Progressive muscle relaxation. Children can learn body control and gain another tool for self-calming by practicing tightening and relaxing different muscle groups. In my own daily life, I have found that I can stop myself from saying or doing something I may otherwise regret by shrugging my shoulders in an exaggerated way and then dropping them back down.</li>
<li> 3. Taking your pulse and regulating it. Because heart rate is often linked to emotions, some kids find it useful to take their pulse when they feel excited, nervous, or angry as an indicator of their mind-body state. Gaining control of heart rate can be a wonderful proxy for developing emotional regulation.</li>
</ol>
<p>It is tremendously liberating when kids realize that they can stop the cycle of low self-esteem by controlling some part of their body. In fact, I distinctly remember the day when a patient of mine realized his own power of self-control. He was the youngest of four very successful over-achieving brothers. He was bright, articulate, sensitive, and reactive. He would often have an outburst in school settings surrounding math (a challenging subject for him). Then, he would feel terrible and act out even more because he couldn’t control his feelings of shame around his initial over-reaction.
All who knew him struggled to watch him in this cycle. After three days of mind-body work he came running into my office: “Erina, Erina, guess what I just realized! These games — they taught me that I CAN control myself. I don’t HAVE to be a bad kid. I can fix myself.”
Healthcare practitioners tend to look at ADHD as a deficit that needs to be fixed through medication or long-term therapy. What gets lost is the emotional burden that children with ADHD take on. Because they feel responsible for their behavior and the disruptions it can cause, they’re desperate for tools to self-regulate. Mind-body awareness is one of those tools, and it can be incredibly freeing and empowering for children who learn how to use it.</p>
`

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
   },
   {title: 'You Are Not Broken:” How ADHD Erodes a Child’s Self-Confidence',
   article: article2,
   blurb: 'One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.',
   createdAt: new Date(),
   updatedAt: new Date(),
  }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};

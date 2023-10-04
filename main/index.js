const express = require('express');
const app = express();
const port = 5000;
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
const commentRoute = require('./routes/commentRoute');
const postRoute = require('./routes/postRoute');
app.get('/', function (req, res) {
  res.render('home', {
      posts: [{
          author: 'Janith Kasun',
          image: 'https://picsum.photos/500/500',
          comments: ['Comment 1', 'Comment 2', 'Comment 3']
      },
      {
        author: 'Janith Kasun 2',
        image: 'https://picsum.photos/500/500',
        comments: ['Comment 4', 'Comment 5', 'Comment 6']
    }
    ]
  });
});
app.use('/posts', postRoute);
app.use('/posts/:postId/comments', commentRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

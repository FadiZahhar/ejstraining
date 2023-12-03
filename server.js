var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var saleNotice = "On sale today.";


var courses = [
    { 
      title: 'Hello Coding',
      topic: 'Programming',
      description: 'Learn to code.' 
    },
    {
      title: 'Web Developer Bootcamp',
      topic: 'Web Development',
      description: 'Everything web.'
    },
    {
      title: 'Excel Masterclass'
    },
    {
      title: 'Unreal and Unity Masterclass'
    }
];

app.get('/courses', function(req, res) {
  res.render('pages/courses', {
    courses: courses
  })
});

app.get('/about', function(req, res) {
   res.render('pages/about', {
     saleNotice: saleNotice
   }); 
});

app.get('/', function(req, res) {

  var limitedDescription = "Limited time only. This month, get 5 courses.";

  res.render('pages/index', {
    courses: courses,
    limitedDescription: limitedDescription
  }); 
})

app.listen(8080);

console.log("Server is started on port 8080.");
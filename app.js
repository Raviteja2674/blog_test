// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();





// mongoose.connect("mongodb+srv://raviteja_2674:Raviteja_2674@raviteja.4iejfqt.mongodb.net/BI_Blog?retryWrites=true&w=majority");

// // to db



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/main.html');
// });

// app.get('/myposts.html', (req, res) => {
//     res.sendFile(__dirname + '/myposts.html');
// });

// app.get('/newpost.html', (req, res) => {
//     res.sendFile(__dirname + '/newpost.html');
// });

// // 
// // 
// // 

// const blogSchema = new mongoose.Schema({
//     title: String,
//     content:String

// });

// const User = mongoose.model('User', blogSchema);
// // const User = mongoose.model('User', blogSchema);

// app.post('/register', (req, res) => {
//     // Extract user data from the form
//     const { title, content } = req.body;
//     // Create a new user
//     const newUser = new User({
//         title,
//         content
//     });





//     newUser.save()
//         .then(function (newUser) {

//             // res.status(200).send('User registered successfully');
//             res.sendFile(__dirname + '/afp.html');
//         })
//         .catch(function (err) {
//             res.status(500).send('Error registering user');
//         });


//     // newUser.save()
//     //     .then(function (newUser) {

//     //         // res.status(200).send('User registered successfully');
//     //         res.sendFile(__dirname + '/afp.html');
//     //     })
//     //     .catch(function (err) {
//     //         res.status(500).send('Error registering user');
//     //     });

// });
















// const blogs = mongoose.model('blogs', blogSchema);
// app.get('/mypostss', (req, res) => {
//     blogs.find({}, function (err, allblogs) {
//         res.render('myposts', {
//             blogList: allblogs
//         })
//     })
// })

// app.listen(4040, function () {
//     console.log('server is running');
// })








// harshith
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser', { UserNewUrlparser: true });
const app = express();

mongoose.connect("mongodb+srv://raviteja_2674:Raviteja_2674@raviteja.4iejfqt.mongodb.net/BI_Blog?retryWrites=true&w=majority");


// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});

app.get('/myposts.html', (req, res) => {
    res.sendFile(__dirname + '/myposts.html');
});

app.get('/newpost.html', (req, res) => {
    res.sendFile(__dirname + '/newpost.html');
});

const blogSchema = new mongoose.Schema({
    title: String,
    content:String

});

const User = mongoose.model('User', blogSchema);
// const User = mongoose.model('User', blogSchema);

app.post('/register', (req, res) => {
    var out = new User(req.body);
    out.save().then(() => {
        res.send("Success")
    }).catch(() => {
        res.status(400).send("Failed");
    });
});

    // newUser.save()
    //     .then(function (newUser) {

    //         // res.status(200).send('User registered successfully');
    //         res.sendFile(__dirname + '/afp.html');
    //     })
    //     .catch(function (err) {
    //         res.status(500).send('Error registering user');
    //     });

// });

// const blogs = mongoose.model('blogs', blogSchema);
// app.get('/mypostss', (req, res) => {
//     blogs.find({}, function (err, allblogs) {
//         res.render('myposts', {
//             blogList: allblogs
//         })
//     })
// })

app.listen(4040, function () {
    console.log('server is running');
})
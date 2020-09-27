const { query } = require('express');


//Module no: 47 video No:1/2 ------------------
// const express = require('express');

// const app = express();


// app.get('/',(req, res ) => {
//     res.send('thanks you very much rakid khan kjfslakfdlakj');
// })
// app.listen(3100, () => console.log("rakib khan3100"));


//Module no: 47 video No:1/2/4 ---install nodemon, api return object, create multiple api ---------------
// const express = require('express');

// const app = express();
// // 01--------------
// app.get('/',(req, res ) => {
//     const fruit = 
//         {
//             ada:'dim',
//             price:'100 tk',
//             dim:'kdsl'
//         }
//     res.send(fruit);
// })
// //02-------------------------------------
//  app.get('/fruits/banana', (req, res) => {
//    res.send({fruit:'banana', quantity:1000, price:10000});

//  });
// //03---------------------------------------
//  app.get('/fruits/rakib' ,(req,res) =>{
//     const data = ([{
//          name:'rakib',
//          job:'nai',
//          salary:'500'
//      }])
//      res.send(data)
//  })

// app.listen(3200);




// Module no: 47 video No:05------------ dynamic api, api parameter, access params, access query
// ----------------1-----------
// const express = require('express');

// const app = express();
// const users = ['asad','rakib','raju','plash'];
// // 01-----data^^---------
// app.get('/',(req, res ) => {
//     const fruit = 
//         {
//             ada:'dim',
//             price:'100 tk',
//             dim:'kdsl'
//         }
//     res.send(fruit);
// })
// //02-------------------------------------
//  app.get('/fruits/banana', (req, res) => {
//    res.send({fruit:'banana', quantity:1000, price:10000});

//  });
// //03---------------------------------------
//  app.get('/fruits/rakib' ,(req,res) =>{
//     const data = ([{
//          name:'rakib',
//          job:'nai',
//          salary:'500'
//      }])
//      res.send(data)
//  })
//  //00k1-------------------
//  app.get('/users/:id', (req, res) => {
//     //  Dynamic id ^/users/
//     // const id = req.params.id;
//     const userId = req.params.id;
//     const name = users[userId];
//     res.send(name)
//     // console.log(req.params)
//  })
// // 00k1  ei code diye Dynamic id set korte parbo users ze id dibe oi id amra peye zabo abong 
// oi id diye amader ze data ache oi data shathe compire kore oi name ba oi array bahir korte parbo...

// app.listen(3100);


//--------2------------ 

// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors())
// const users = ['asad','rakib','raju','plash'];
// // 01--------------
// app.get('/',(req, res ) => {
//     const fruit = 
//         {
//             ada:'dim',
//             price:'100 tk',
//             dim:'kdsl'
//         }
//     res.send(fruit);
// })
// //02-------------------------------------
//  app.get('/fruits/banana', (req, res) => {
//    res.send({fruit:'banana', quantity:1000, price:10000});

//  });
// //03---------------------------------------
//  app.get('/fruits/rakib' ,(req,res) =>{
//     const data = ([{
//          name:'rakib',
//          job:'nai',
//          salary:'500'
//      }])
//      res.send(data)
//  })
//  //00k1-------------------
//  app.get('/users/:name', (req, res) => {
//     //  Dynamic id ^/users/
//     // const id = req.params.id;
//     const id = req.params.name;
//     // console.log(req.query)
//     console.log(req.query.sort);
//     const name = users[id];
//     res.send({id, name})
//     // console.log(req.params)
//  })
// // 00k1  ei code diye Dynamic id set korte parbo users ze id dibe oi id amra peye zabo

// app.listen(3100);




//-Module no: 47 video No:06--use fetch to load data from server, middleware, handle cors--





// Module no: 47 video No:07----create POST api, install postman, read post data, use body parser--


    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser')

    const app = express();
    app.use(cors())
    app.use(bodyParser.json())
    const users = ['asad','rakib','raju','plash'];
    // 01--------------
    app.get('/',(req, res ) => {
        const fruit = 
            {
                ada:'dim',
                price:'100 tk',
                dim:'kdsl'
            }
        res.send(fruit);
    })
    //02-------------------------------------
    app.get('/fruits/banana', (req, res) => {
    res.send({fruit:'banana', quantity:1000, price:10000});

    });
    //03---------------------------------------
    app.get('/fruits/rakib' ,(req,res) =>{
        const data = ([{
            name:'rakib',
            job:'nai',
            salary:'500'
        }])
        res.send(data)
    })
    //00k1-------------------
    app.get('/users/:name', (req, res) => {
        //  Dynamic id ^/users/
        // const id = req.params.id;
        const id = req.params.name;
        // console.log(req.query)
        console.log(req.query.sort);
        const name = users[id];
        res.send({id, name})
        // console.log(req.params)
    })
    // 00k1  ei code diye Dynamic id set korte parbo users ze id dibe oi id amra peye zabo

    // Post
    app.post('/addUser', (req, res) => {
        // console.log('data rcived',req.body);
        // save to database
        const user = req.body;
        user.id = 55;
        res.send(user);

       

    })
    app.listen(3200);
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const port = 8000;

let users = []
// let counter = 1;  [ -- NO LONGER USED -- ]
let conn = null

 const initMySQL = async () => {
    conn = await mysql.createConnection({
        host:'localhost',
        user:     'root',  
        password: 'root',
        database: 'webdb',
        port: 8830
    })
 }

 app.get('/testdb-new', async (req, res) => {
    try{     
        const results = await conn.query('SELECT * FROM users')
         res.json(results[0])    
    } catch(error){     
        console.log('Error fetching users:', error.message)
        res.status(500).json({error: 'Error fetching users'})
    }
 })
 
// Path = / GET / Users
app.get('/users', async (req,res) => {
 // res.json(users); [ -- NO LONGER USED -- ]
    const result = await conn.query('SELECT * FROM users')
    res.json(result[0])
})

// path = POST / User
app.post('/user', async (req,res) => {
    try{
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user)
        res.json({
            message: 'User Created',
            data: results[0]

        })
    } catch (error){
        console.error('errorMessage',error.message)
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        })
    }
})

const checkConnection = (res) => {
    if (!conn) {
        res.status(500).json({ message: 'Database connection not established' });
        return false;
    }
    return true;
};

// แก้ API /users
app.get('/users', async (req, res) => {
    if (!checkConnection(res)) return;
    try {
        const result = await conn.query('SELECT * FROM users');
        res.json(result[0]);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Error fetching users' });
    }
});

app.get('/users/:id', async (req,res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?',id)
        if (results[0].length > 0){
            res.json(results[0][0])
        } else {
            res.status(404).json({
                message:'User not found'
            })
        }
    } catch (error) {
        console.error('errorMessage',error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: 'something went wrong',
            errorMessage: error.message
        })
    }

})
       

// path = PUT / user/:id
app.put('/user/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updateUser = req.body;
        const results = await conn.query(
            'UPDATE users SET ? WHERE id = ?',
            [updateUser, id]
        );
        res.json({
            message: 'Update User Completed',
            data: results[0]
        });
    } catch (error) {
        console.error('errorMessage', error.message);
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        });
    }
});

    
    // sent user info in update to where it belongs
    /* 
    GET / USERS = get all users
    POST / USERS = create new user in data
    GET /users/:id = get user by id
    PUT /users/:id = get user by id
    */


// Path = DELETE / user/:id
app.delete('/user/:id', async (req, res) => { // ✅ เพิ่ม async
    try {
        let id = req.params.id;
        const results = await conn.query(
            'DELETE FROM users WHERE id = ?',
            [id] // ✅ ต้องใส่ id ใน array
        );
        res.json({
            message: 'Delete User Completed',
            data: results[0]
        });
    } catch (error) {
        console.error('errorMessage', error.message);
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        });
    }
});
   

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on port`+ port);
});

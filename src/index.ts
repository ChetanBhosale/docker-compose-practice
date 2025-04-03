import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
import { connectDB, user } from "./db";

connectDB();

app.get('/', async(req, res) => {
    const users = await user.find()
    res.send(users)
})

app.post('/', async(req, res) => {
    await user.create({
        name : Math.random().toString(36).substring(2, 15),
        email : Math.random().toString(36).substring(2, 15) + '@gmail.com'
    })
    res.send('User created')
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import posts from './routers/posts.js'
import mongoose from 'mongoose';


const app =express();
const PORT = process.env.port || 5000;

const uri = 
"mongodb+srv://minhtu:minhtu@mern-blog.cwvfui4.mongodb.net/?retryWrites=true&w=majority";
app.use(bodyParser.json({ limit : '30mb' }))
app.use(bodyParser.urlencoded({ extended : true, limit : '30mb' })) // config này có thể tối đa dung lượng phía client có thể submit lên server
app.use(cors())

app.use('/posts', posts)

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Minh Tú đã thực hiện kết nối với MongoDB');
        app.listen(PORT, () => {
            console.log(`Server của Minh Tú chạy trên port ${PORT}`);
    });
})
.catch((error) => {
    console.log('error',error)
})




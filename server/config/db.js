const mongoose = require('mongoose');
// DB Config
const dbURL = require("./keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        dbURL,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });

// mongoose.connection.on('')

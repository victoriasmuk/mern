const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllRoutes = require("./routes/jokes.routes");
AllRoutes(app);
    
app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));
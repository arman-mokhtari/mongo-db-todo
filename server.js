const express = require("express");
const bodyParser = require("body-parser");

//* Database connection
require("./utils/database");
//* End database connection

const { setStatics } = require("./utils/statics");

const adminRoutes = require("./routes/admin");
const indexedRoutes = require("./routes/index");
const { get404 } = require("./controllers/error");

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
// middleware end

// ejs
app.set("view engine", "ejs");
// ejs end

//statics
setStatics(app);
//statics end

//routes
app.use(indexedRoutes);
app.use("/admin", adminRoutes);
//routes end

//404
app.use(get404);
//404 end

app.listen(3000, () => console.log("Server is running"));

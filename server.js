//here ill use environment variables and i'll start my server and other services

require("dotenv").config();

const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

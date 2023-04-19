//here ill use environment variables and i'll start my server and other services
const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

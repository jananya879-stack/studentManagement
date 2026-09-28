const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/students", studentRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
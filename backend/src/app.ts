import express from "express";
import cors from "cors";
import authRoutes from "./presentation/routes/AuthRoutes";
import recordRoutes from "./presentation/routes/RecordRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {

    res.status(200).json({
        success: true,
        message: "Multi Tenant Platform API"
    });

});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/records", recordRoutes);


export default app;
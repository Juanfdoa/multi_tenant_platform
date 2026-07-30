import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { environment } from "./config/environment";

app.listen(environment.port, () => {

    console.log(`
======================================
🚀 Server started successfully
🌐 http://localhost:${environment.port}
======================================
`);

});
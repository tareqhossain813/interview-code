import ReactDOM from "react-dom/client";
import App from "./modules/core/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Toaster />
        <App />
    </>
);

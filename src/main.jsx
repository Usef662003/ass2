import ReactDOM from "react-dom/client";
import App from "./App"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import"@fortawesome/fontawesome-free/css/all.min.css"

const elmentOfRoot=document.getElementById("root")
const rooot = ReactDOM.createRoot(elmentOfRoot)
rooot.render(<App />)

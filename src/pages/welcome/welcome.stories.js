import "./welcome.css";
import "./start-page.css";

import welcome from "./welcome.html";
import start from "./start-page.html";

export default { title: "Pages/Welcome" };

export const basic = () => welcome;
export const startPage = () => start;

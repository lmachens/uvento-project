import "./button.css";
import buttonText from "./button-text.html";
import buttonHome from "./button-home.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withText = () => buttonText;
export const withHome = () => buttonHome;

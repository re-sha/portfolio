import React from "react";
import { getImageFromUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer>
        <div>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul>
            <li>
                <img  src={getImageFromUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href = "mailto:?subject=Portfolio%20Inquiry&body=Hello,%0A%0AI%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,%0A[Your%20Name]">Email me</a>
            </li>
        </ul>
    </footer>
  );
};

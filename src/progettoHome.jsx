import { useState } from "react";
import "./progettoHome.css";

function ProgettoHome({ urlLink, urlImg }) {
  return (
    <>
      <div id="schedaHome">
        <a href={urlLink}>
          <img src={urlImg}></img>
        </a>
      </div>
    </>
  );
}

export default ProgettoHome;

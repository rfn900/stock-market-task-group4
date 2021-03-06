import React from "react";
import { Link, useLocation } from "react-router-dom";

import { CardStyled } from "./CardStyled";

export default function Card({ path, ticker, name, isHome }) {
  //If the name is empty, render ticket instead
  const renderedName = name === "" ? ticker : name;
  //To link URL if isHome is true then URL is path otherwise path + / + ticker (is a data of inside Markets, Crypto...)
  //(For the Markets card the url must contain the ticker prop)
  const url = isHome ? path : `${path}/${ticker}`;

  // Get all the URL path (ex.http://localhost:3000/crypto/usd).
  const location = useLocation();
  // Take the last part after (ex./crypto/usd).
  // (This allow us to check if we are on the MainPage)
  const testPath = location.pathname;

  // Check if it is MainPage by using the testPath. If it is MainPage, make let dynamicClassName = "col-sm-6" otheriwise let dynamicClassName = "col-sm-4" .
  const dynamicClassName = testPath === "/" ? "col-sm-6" : "col-md-4";

  // (Render different bootstrap style when we are on MainPage)
  return (
    // `p-2 ${dynamicClassName}` is the same as "p-2 " + dynamicClassName so give padding 2. Each card size depend on if MainPage.
    <div className={`p-2 ${dynamicClassName}`}>
      {/* Link to next url from line 12 */}
      <Link to={url}>
        <CardStyled className="card p-2 text-center">
          {/* (This prevents an empty Card to be rendered on MainPage) */}
          {path === "/markets" ? <p>{ticker}</p> : <p>{renderedName}</p>}
        </CardStyled>
      </Link>
    </div>
  );
}

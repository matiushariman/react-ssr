import React from "react";
import Link from "next/link";
import Router from "next/router";

export default () => (
  <div>
    <h1>This is the main page</h1>
    <p>Go to: </p>
    <ul>
      <li>
        <Link href="/test">
          <a>Test</a>
        </Link>
      </li>
      <li>
        <button onClick={() => Router.push("/test")}>Test with a Button</button>
      </li>
    </ul>
  </div>
);

import Link from "next/link";
import { Trans, Plural, DateFormat } from "lingui-react";

import { MyLink } from "./MyLink";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <MyLink href={{ pathname: "/" }}>
        <a>Homepage</a>
        </MyLink>
      </li>
      <li>
        <MyLink href={{ pathname: "/about" }}>
        <a>About</a>
        </MyLink>
      </li>
    </ul>
    <ul>
      <li>
        <Link href={{ query: { language: "en" } }}>
          <a>en</a>
        </Link>
      </li>
      <li>
        <Link href={{ query: { language: "fr" } }}>
          <a>fr</a>
        </Link>
      </li>
    </ul>
  </nav>
);

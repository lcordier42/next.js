import Link from "next/link";
import { Trans, Plural, DateFormat } from "lingui-react";

import { MyLink } from "./MyLink";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Trans>
        <MyLink href={{ pathname: "/" }}>
        Homepage
        </MyLink>
        </Trans>
      </li>
      <li>
        <Trans>
        <MyLink href={{ pathname: "/about" }}>
        About
        </MyLink>
        </Trans>
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

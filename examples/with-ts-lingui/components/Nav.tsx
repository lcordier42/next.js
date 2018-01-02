import Link from "next/link";
import * as React from "react";

export const Nav = () => (
    <ul>
        <li>
            <Link href="/">
                <a>Welcome</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>About</a>
            </Link>
        </li>
    </ul>
);

import Link from "next/link";
import { withRouter } from "next/router";

export const MyLink = withRouter(
  ({ router: { query: { language } }, children, href, ...rest }) => {
    href.query = { ...href.query, language };

    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
);

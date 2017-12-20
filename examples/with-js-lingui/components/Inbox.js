import React from "react";
import { Trans, Plural, DateFormat } from "lingui-react";

import { MyLink } from "./MyLink";

export const Inbox = () => {
  const countMessage = 1;
  return (
    <div>
      <h1>
        <Trans>English anthem</Trans>
      </h1>
      <p>
        <Trans>
          God save our gracious Queen, Long live our noble Queen, God save the
          Queen ! Send her victorious, Happy and glorious, Long to reign over
          us, God save the Queen !
        </Trans>
      </p>
    </div>
  );
};

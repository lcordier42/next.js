import * as React from "react";
import { I18nProvider } from "lingui-react";
import { unpackCatalog } from "lingui-i18n";
import { Trans, Plural, DateFormat } from "lingui-react";

import catalog from "locale/fr/messages.js";

export default () => {
  return (
    <I18nProvider
      language="fr"
      catalogs={{
        fr: unpackCatalog(catalog)
      }}
    >
      <div>
        <Trans>Hello World.</Trans>
      </div>
      <div>
          TEST
      </div>
    </I18nProvider>
  );
};

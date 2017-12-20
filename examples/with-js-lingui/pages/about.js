import Head from "next/head";
import { I18nProvider } from "lingui-react";
import { unpackCatalog } from "lingui-i18n";
import { Trans, Plural, DateFormat } from "lingui-react";

import { Nav } from "../components/Nav";
import catalog_fr from "../locale/fr/messages.js";
import catalog_en from "../locale/en/messages.js";

const dev =
  process.env.NODE_ENV !== "production"
    ? require("lingui-i18n/dev")
    : undefined;

export default ({ url: { query: { language } } }) => {
  if (!language) language = "en";
  if (language == "en") var catalog = catalog_en;
  else var catalog = catalog_fr;

  return (
    <I18nProvider
      language={language}
      catalogs={{ [language]: unpackCatalog(catalog) }}
      development={dev}
    >
      <div>
        <Head>
            <title>About</title>
        </Head>
        <Nav />
        <h1>
          <Trans>French anthem</Trans>
        </h1>
        <p>
          <Trans>
            To arms, citizens, form your battalions, march, march! Let unclean
            blood drink our furrows!
          </Trans>
        </p>
      </div>
    </I18nProvider>
  );
};

import Link from "next/link";
import Head from "next/head";
import { I18nProvider } from "lingui-react";
import { unpackCatalog } from "lingui-i18n";
import { Trans, Plural, DateFormat } from "lingui-react";

import { Nav } from "../components/Nav";
import frCatalog from "../locale/fr/messages.js";
import enCatalog from "../locale/en/messages.js";

const catalogs = {
  en: enCatalog,
  fr: frCatalog
};

export default ({ url: { query } }) => {
  const language = query.language ? query.language : "en";

  return (
    <I18nProvider
      language={language}
      catalogs={{
        [language]: unpackCatalog(catalogs[language])
      }}
    >
      <Head>
        <title>Welcome</title>
      </Head>
      <Nav />
      <h1>
        <Trans>Welcome</Trans>
      </h1>
    </I18nProvider>
  );
};

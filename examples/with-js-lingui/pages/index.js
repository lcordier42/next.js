import Link from "next/link";
import { I18nProvider } from "lingui-react";
import { unpackCatalog } from "lingui-i18n";
import { Trans, Plural, DateFormat } from "lingui-react";
import Head from "next/head";

import { Inbox } from "../components/Inbox";
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
      <Head>
        <title>Homepage</title>
      </Head>
      <Nav />
      <Inbox />
    </I18nProvider>
  );
};

import Link from "next/link";
import { I18nProvider } from "lingui-react";
import { unpackCatalog } from "lingui-i18n";

import { Inbox } from "../components/Inbox.js";
import catalog from "../locale/es/messages.js";

const dev =
  process.env.NODE_ENV !== "production"
    ? require("lingui-i18n/dev")
    : undefined;

export default () => (
  <I18nProvider
    language="es"
    catalogs={{ es: unpackCatalog(catalog) }}
    development={dev}
  >
    <ul>
      <li>
        <button
          onclick={() => {
            console.log("Switch to EN");
          }}
          type="buton"
        >
          EN
        </button>
      </li>
      <li>
        <button
          onclick={() => {
            console.log("Switch to ES");
          }}
          type="buton"
        >
          ES
        </button>
      </li>
    </ul>
    <div>
      <Inbox messages={[]} user={{ name: "me", lastLogin: new Date() }} />
    </div>
  </I18nProvider>
);

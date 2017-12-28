import * as React from "react";
import { unpackCatalog } from "lingui-i18n";
const { i18n } = require('lingui-i18n');
i18n.load({
  fr: unpackCatalog(require("../locale/fr/messages.js")),
});
i18n.activate('fr');
export default () => {
  return (
      <div>
        <span>{i18n.t`Hello World.`}</span>
      </div>
  );
};

// @ts-ignore
import { unpackCatalog } from "lingui-i18n";
// tslint:disable-next-line no-var-requires
const { i18n } = require("lingui-i18n");
import * as React from "react";

import { Nav } from "../components/Nav";

i18n.load({
    de: unpackCatalog(require("../locale/de/messages.js")),
    en: unpackCatalog(require("../locale/en/messages.js")),
    fr: unpackCatalog(require("../locale/fr/messages.js")),
});

i18n.activate("de");

export default () => (
    <div>
        <Nav />
        <h1>{i18n.t`About`}</h1>
    </div>
);

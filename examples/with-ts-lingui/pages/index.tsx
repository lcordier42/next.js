// @ts-ignore
import { unpackCatalog } from "lingui-i18n";
import * as React from "react";
// tslint:disable-next-line no-var-requires
const { i18n } = require("lingui-i18n");

import { Nav } from "../components/Nav";

// @ts-ignore
import * as deCatalog from "../locale/de/messages";
// @ts-ignore
import * as enCatalog from "../locale/en/messages";
// @ts-ignore
import * as frCatalog from "../locale/fr/messages";

i18n.load({
    de: unpackCatalog(deCatalog),
    en: unpackCatalog(enCatalog),
    fr: unpackCatalog(frCatalog),
});

i18n.activate("fr");

// const Trans=()=>

export default () => {
    console.log("i18n.language", i18n.language, i18n.messages);
    console.log("_______", i18n.t`Welcome`);
    return (
        <div>
            <Nav />

            <h1>{i18n.t`Welcome`}</h1>
            <h1>{i18n.t`Welcome` ${<small>{i18n.t`You`}</small>}</h1>
            <h1>{i18n.t`Welcome` ${<small>You</small>}</h1>
            <h2>{i18n._(<b>Welcome</b>)}</h2>
            <h3>{i18n.t`Hello and ${<b>Welcome</b>}`}</h3>
        </div>
    );
};

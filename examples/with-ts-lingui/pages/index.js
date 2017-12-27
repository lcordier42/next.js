"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _linguiReact = require("lingui-react");

var _linguiI18n = require("lingui-i18n");

var _messages = require("../locale/fr/messages.js");

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = () => {
    return React.createElement(
        _linguiReact.I18nProvider,
        { language: "fr", catalogs: {
                fr: (0, _linguiI18n.unpackCatalog)(_messages2.default)
            } },
        React.createElement(
            "div",
            null,
            React.createElement(
                _linguiReact.Trans,
                null,
                "Hello World."
            )
        ),
        React.createElement(
            "div",
            null,
            "TEST"
        )
    );
};

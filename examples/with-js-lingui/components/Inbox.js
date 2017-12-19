// Inbox.js
import Link from "next/link";
import React from "react";
import { Trans, Plural, DateFormat } from "lingui-react";

export const Inbox = ({ messages, markAsRead, user}) => {
  const messagesCount = messages.length;
  const { name, lastLogin } = user;

  return (
    <div>
      <h1>
        <Trans>Message Inbox</Trans>
      </h1>
      <p>
        <Trans>
          See all <Link to="/unread">unread messages </Link>
          {" or "}
          <a onClick={markAsRead}>mark them</a> as read.
        </Trans>
      </p>
      <p>
        <Plural
          value={messagesCount}
          zero="There're no messages"
          one="There's # message in your inbox."
          other="There're # messages in your inbox."
        />
      </p>

      <Trans>
        Last login on <DateFormat value={lastLogin} />.
      </Trans>
    </div>
  );
};

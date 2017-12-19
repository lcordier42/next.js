module.exports = {
  l: {
    p: function(n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    }
  },
  m: {
    "Message Inbox": "Mensaje Inbo",
    "See all <0>unread messages </0>or <1>mark them</1> as read.":
      "Ver todos <0>mensajes no le\xEDdos </0> o <1>m\xE1rquelos como</1> le\xEDdos.",
    "{messagesCount, plural, zero {There're no messages} one {There's # message in your inbox.} other {There're # messages in your inbox.}}": function(
      a
    ) {
      return [
        a("messagesCount", "plural", {
          zero: "No hay mensajes",
          one: ["Hay un mensaje ", "#", " en tu bandeja de entrada."],
          other: ["Hay ", "#", " mensajes en tu bandeja de entrada."]
        })
      ];
    },
    "Last login on {lastLogin,date}.": function(a) {
      return ["\xDAltimo acceso en ", a("lastLogin", "date"), "."];
    }
  }
};

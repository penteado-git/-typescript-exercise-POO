interface Messenger {
  originAdress: string;
  destinyAdress: string;
  subject: string;
  content: string;

  sendMessage(): void;
  reciveMessage(): void;
}

class Message implements Messenger {
  originAdress: string;
  destinyAdress: string;
  subject: string;
  content: string;

  constructor(
    originAdress: string,
    destinyAdress: string,
    subject: string,
    content: string
  ) {
    this.originAdress = originAdress;
    this.destinyAdress = destinyAdress;
    this.subject = subject;
    this.content = content;
  }
  sendMessage() {
    this.sendMessage = String;
    return console.log(
      "Enviar mensagem de " +
        this.originAdress +
        " para " +
        this.destinyAdress +
        " com assunto " +
        this.subject +
        " e conteudo de " +
        this.content
    );
  }
  reciveMessage() {
    this.originAdress, this.subject, this.content;
    return alert("Mensagem recebida");
  }
}

class MessageWhatsapp implements Messenger {
  originAdress: string;
  destinyAdress: string;
  subject: string;
  content: string;

  constructor(
    originAdress: string,
    destinyAdress: string,
    subject: string,
    content: string
  ) {
    this.originAdress = originAdress;
    this.destinyAdress = destinyAdress;
    this.subject = subject;
    this.content = content;
  }
  sendMessage() {
    this.sendMessage = String;
    return console.log(
      "Enviar mensagem de" +
        this.originAdress +
        " para " +
        this.destinyAdress +
        " com " +
        this.subject
    );
  }
  reciveMessage() {
    this.originAdress;
    this.subject;
    this.content;
    return alert("Mensagem recebida");
  }
}

class MenssageSMS implements Messenger {
  originAdress: string;
  destinyAdress: string;
  subject: string;
  content: string;

  constructor(
    originAdress: string,
    destinyAdress: string,
    subject: string,
    content: string
  ) {
    this.originAdress = originAdress;
    this.destinyAdress = destinyAdress;
    this.subject = subject;
    this.content = content;
  }
  sendMessage(): void {}
  reciveMessage(): void {}
}

let newMessage = new Message("123", "321", "urgente", "prova");
newMessage.sendMessage();
newMessage.reciveMessage();

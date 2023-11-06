"use strict";
class Message {
    constructor(originAdress, destinyAdress, subject, content) {
        this.originAdress = originAdress;
        this.destinyAdress = destinyAdress;
        this.subject = subject;
        this.content = content;
    }
    sendMessage() {
        this.sendMessage = String;
        return console.log("Enviar mensagem de " +
            this.originAdress +
            " para " +
            this.destinyAdress +
            " com assunto " +
            this.subject +
            " e conteudo de " +
            this.content);
    }
    reciveMessage() {
        this.originAdress, this.subject, this.content;
        return alert("Mensagem recebida");
    }
}
class MessageWhatsapp {
    constructor(originAdress, destinyAdress, subject, content) {
        this.originAdress = originAdress;
        this.destinyAdress = destinyAdress;
        this.subject = subject;
        this.content = content;
    }
    sendMessage() {
        this.sendMessage = String;
        return console.log("Enviar mensagem de" +
            this.originAdress +
            " para " +
            this.destinyAdress +
            " com " +
            this.subject);
    }
    reciveMessage() {
        this.originAdress;
        this.subject;
        this.content;
        return alert("Mensagem recebida");
    }
}
class MenssageSMS {
    constructor(originAdress, destinyAdress, subject, content) {
        this.originAdress = originAdress;
        this.destinyAdress = destinyAdress;
        this.subject = subject;
        this.content = content;
    }
    sendMessage() { }
    reciveMessage() { }
}
let newMessage = new Message("123", "321", "urgente", "prova");
newMessage.sendMessage();
newMessage.reciveMessage();

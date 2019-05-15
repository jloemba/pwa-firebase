import { LitElement, html } from 'lit-element';

class ChatApp extends LitElement {

    constructor(){
        super();
    }

    static get properties(){
        return{
            unresolved: {type:Boolean,reflect:true}
        };
    }

    firstUpdated(){
        this.unresolved = false;
    }

    render() {
        return html``;
    }
}
customElements.define('chat-app', ChatApp);
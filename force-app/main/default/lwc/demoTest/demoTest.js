import { LightningElement } from 'lwc';

export default class DemoTest extends LightningElement {
    firstname;
    handleclick(event){
        this.firstname = event.target.value;
        // Hello Mr.
    }
}
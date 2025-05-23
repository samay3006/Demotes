import { LightningElement } from 'lwc';

export default class DemoTest extends LightningElement {
    firstne;
    handleclick(event){
        this.firstne = event.target.value;
        
    }
}
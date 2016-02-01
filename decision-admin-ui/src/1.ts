export class ClassA extends AbstractEntity {
    name:string;
    description:string;
    constructor(){
        super();
    }
}

export class AbstractEntity {
    id:number;
    idSpecified:boolean;

}
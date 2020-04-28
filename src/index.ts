export class HelloWorld {
    name: string

    constructor(name: string){
        this.name = name;
    }

    hello(): string {
        return `hello ${name}!!`;
    }
}
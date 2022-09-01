export class Suma {
    edad1:string;
    edad2:string;
    promedio:number;
    suma:number;

    constructor()
    {
        this.edad1 = "";
        this.edad2 = "";
        this.promedio = 0;
        this.suma = 0;
    }

    calcularResultado():void
    {
        this.suma = parseInt(this.edad1) + parseInt(this.edad2);
        this.promedio = this.suma / 2;
    }
}

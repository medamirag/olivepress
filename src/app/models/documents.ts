export interface Documents {
    code: string,
    type: string,
    idClient: number,
    contenaire:number[],
    quantiteHuile: number,
    uniteHuile: string,
    quantiteOlive: number,
    quantiteFitoura: number,
    uniteFitoura: string,
    uniteOlive: string,
    quantiteMarjine: number,
    uniteMarjine: string,
    dateReception: Date,
    dateExtraction: Date,
    dateFacturation: Date,
    fraisExtraction: number,
    TVA: number,
    modePayement: string,

    status:boolean
}

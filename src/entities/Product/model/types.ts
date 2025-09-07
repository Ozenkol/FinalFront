export interface Field {
    
    id: string,
    name: string,
    value: string

}

export interface Product {
    id: string,
    title: string,
    description: string,
    fields: Field[]
}

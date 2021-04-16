
export interface FormState {
    account: string,
    password: string;
}
export interface getStoreInterface {
     (key: string | number ) : any 
}
export interface setStoreInterface {
    (key: string | number, value: string | number | object): any
}

export interface clearItemInterface {
    (key: string | number | object): void
}

export interface clearAllInterface {
    (): void
}
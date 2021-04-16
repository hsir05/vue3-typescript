import { config } from "@/config/config"

const KEY = `${config.key}-`

export const getStore = (key: any):any => {
    return sessionStorage.getItem(key)
}

export const setStore = (key: any, value: any): any => {
    return sessionStorage.setItem(KEY + key, value)
}
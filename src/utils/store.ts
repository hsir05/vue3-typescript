import { config } from "@/config/config"
import { setStoreInterface, getStoreInterface, clearItemInterface, clearAllInterface } from "@/types/interface"


const KEY = `${config.key}-`

export const getStore: getStoreInterface = (key) => {
    return sessionStorage.getItem(KEY + key)
}
export const setStore: setStoreInterface = (key: any, value: any) => {
    return sessionStorage.setItem(KEY + key, value)
} 
export const clearItem: clearItemInterface = (key: any) => {
    return sessionStorage.removeItem(KEY + key)
}
export const clearAll: clearAllInterface = () => {
    return sessionStorage.clear()
}

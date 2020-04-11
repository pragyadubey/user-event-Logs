import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    /**
     * This method is for storing the data in local storage
     * @param key
     * @param value
     */
    write(key:string, value:any) {
        console.log("saving " + key + ":" + value);
        if (value) {
            value = JSON.stringify(value);

        }
        sessionStorage.setItem(key, value);
    }

    /**
     * This method is for reading the data from local storage
     * @param key
     */
    read<T>(key:string):T {
        let value:string = sessionStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }
}
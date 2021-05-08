import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class Apiservice{

    constructor(
        private http: HttpClient
    ){}

    public getComic(numComic:string){
        return this.http.get(`https://xkcd.com/${numComic}/info.0.json`)
    }
    
}
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable()
export class Helper {
 
    private marvelPublicKey;
    ts = '457067012';
    public privateKey = "rfrea3b4566299402c0bdwee01add4450e59c03f4"   
    constructor() {
        this.flightPublicKey = environment.flightPublicKey;
    }
 
    public api($url) {
        let hash = Md5.hashStr(this.ts + this.privateKey + this.flightPublicKey);
 
        return $url + `?apikey=${this.flightPublicKey}&ts=${this.ts}&hash=${hash}` ;
    }
 
}

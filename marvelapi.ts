import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable()
export class Helper {
 
    private marvelPublicKey;
    ts = '45709012';
    public privateKey = "rfrea3b4444a299402c0bdwee01add4450e59c03f4"   
    constructor() {
        this.marvelPublicKey = environment.marvelPublicKey;
    }
 
    public api($url) {
        let hash = Md5.hashStr(this.ts + this.privateKey + this.marvelPublicKey);
 
        return $url + `?apikey=${this.marvelPublicKey}&ts=${this.ts}&hash=${hash}` ;
    }
 
}

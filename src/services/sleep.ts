
import { Injectable } from '@angular/core';

@Injectable()
export class sleep {

    sleepF(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  loadShoppingList() {
    console.log('TEST');
    const jsonFile = `assets/data/shopping-list.json`;
    return this.http.get(jsonFile);
    // return new Promise<void>((resolve, reject) => {
    //   this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
    //     ConfigService.settings = response as IAppConfig;
    //     resolve();
    //   }).catch((response: any) => {
    //     reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
    //   });
    // });
  }

}

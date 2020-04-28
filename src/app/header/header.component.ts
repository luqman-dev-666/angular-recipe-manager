import {Component} from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    // dropdown = false;

    constructor(private dataStorageService: DataStorageService){}

    // dropdownToggle(){
    //   this.dropdown = !this.dropdown;
    // }

    onSaveData(){
      this.dataStorageService.storeRecipes();
    }

    onFetchData(){
      this.dataStorageService.fetchRecipes().subscribe();
    }

}
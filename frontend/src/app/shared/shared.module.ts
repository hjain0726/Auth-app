import { NgModule } from "@angular/core";
import { DropDownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        DropDownDirective,
    ],
    exports:[
        DropDownDirective,
        CommonModule
    ]
})
export class SharedModule{

}
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "../auth/auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports: [
        HeaderComponent,
        AppRoutingModule
    ],
    providers: [
        AuthService
    ]
})
export class CoreModule {

}
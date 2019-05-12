import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "./auth-guard.service";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AuthRoutingModule
    ],
    providers: [AuthGuard]
})
export class AuthModule {

}
import { Directive, HostBinding, HostListener } from "../../../node_modules/@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isopen = false;
    @HostListener('click') toggleOpen() {
        this.isopen = !this.isopen;
    }
}
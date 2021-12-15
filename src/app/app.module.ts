import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TemplateReferenceVarComponent } from './components/template-reference-var/template-reference-var.component';
import { WaysToBindingComponent } from './components/ways-to-binding/ways-to-binding.component';
import { NgifDirectiveComponent } from './components/ngif-directive/ngif-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVarComponent,
    WaysToBindingComponent,
    NgifDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

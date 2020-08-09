import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MyReteEditorModule } from "./rete/rete.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyReteEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

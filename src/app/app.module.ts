import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemsService } from './services/items.service';
import { CampaignsService } from './services/campaings.service';
import { OptimizationsComponent } from './components/optimizations/optimizations.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    NavBarComponent,
    OptimizationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ItemsService,
    CampaignsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

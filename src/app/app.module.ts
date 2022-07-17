import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { QuemSouComponent } from './components/quem-sou/quem-sou.component';
import { OQueFacoComponent } from './components/o-que-faco/o-que-faco.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { VlogComponent } from './components/vlog/vlog.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    QuemSouComponent,
    OQueFacoComponent,
    PortfolioComponent,
    VlogComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

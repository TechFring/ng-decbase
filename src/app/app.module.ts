// Angular Modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// App Modules
import { AppRoutingModule } from './app-routing.module';

// App Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectComponent } from './components/project/project.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectComponent,
    ServicesComponent,
    AboutComponent,
    FooterComponent,
    BlogComponent,
    ShopComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

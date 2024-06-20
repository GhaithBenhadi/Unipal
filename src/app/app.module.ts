import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { PostsComponent } from './Pages/posts/posts.component';
import { QuestionsComponent } from './Pages/questions/questions.component';
import { RegisterComponent } from './Pages/register/register.component';
import { RouterOutlet } from '@angular/router';
import { ImagehomeComponent } from './Pages/home/imagehome/imagehome.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CategoriesComponent,
    FooterComponent,
    ContactComponent,
    FaqComponent,
    HomeComponent,
    LoginComponent,
    PostsComponent,
    QuestionsComponent,
    RegisterComponent,
    ImagehomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NavBarComponent,
    RouterOutlet,  
    

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: 'services', component: CategoriesComponent},
  { path: '', component: HomeComponent},
  { path: 'a-propos', component: AboutUsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

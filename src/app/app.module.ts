import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { PersonalLineComponent } from './personal-line/personal-line.component';
import { ProfessionalLineComponent } from './professional-line/professional-line.component';
import { CommercialLineComponent } from './commercial-line/commercial-line.component';
import { DataService } from './data.service';
import { MatCheckboxModule, MatSort, MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PersonalLineComponent,
    ProfessionalLineComponent,
    CommercialLineComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

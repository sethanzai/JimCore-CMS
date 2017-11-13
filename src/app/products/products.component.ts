//Import common CRUD service
import { DataService } from '../data.service'

//For Anuglar Material
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { PersonalLineComponent } from '../personal-line/personal-line.component'
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductDetailComponent } from './../product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private dataService:DataService, public dialog: MatDialog) {
  }
  
  ngOnInit() {
  }

  //Code block for table
  displayedColumns = ['id', 'name', 'productLineId', 'isNew'];
  dataSource = new MatTableDataSource(this.dataService.Read());
  @ViewChild(MatSort) sort: MatSort;  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  create(newData) {
    this.dataService.Create(newData);
  }

  update(updateData) {
    this.dataService.Update(updateData);
  }

  delete(id) {
    this.dataService.Delele(id);
  }

  viewDetails(id){
   this.openDialog();
  } 
MatDialog;
  openDialog(): void {
    let dialogRef = this.dialog.open(ProductDetailComponent, {
      width: '250px',
      data: { name: "a", animal: "b" }
    });
  }
}

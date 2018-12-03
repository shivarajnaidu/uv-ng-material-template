import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataLength: any;
  data: any;
  searchCtrl = new FormControl('');
  categoryList: MatTableDataSource<any>;
  displayedColumns: string[] = ['sno', 'title', 'caseType', 'caseSeverity', 'action'];

  async getCategories() {
    try {
      this.data = await this.profileServ.getUser();
      this.categoryList = new MatTableDataSource(this.data);
      this.categoryList.paginator = this.paginator;
      this.categoryList.sort = this.sort;
      this.dataLength = this.categoryList.data.length;
    } catch (error) {
      console.error(error);
    }
  }

  constructor(
    private profileServ: ProfileService,
  ) {

    this.searchCtrl.valueChanges.subscribe(this.applyFilter.bind(this));
    this.getCategories();

  }

  applyFilter(value = '') {
    const filterValue = value.trim().toLowerCase();
    this.categoryList.filter = filterValue;
  }

  async deleteUser(inputEle) {
    const id = inputEle._id;
    const isOk = await Swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (!isOk.value) {
      return;
    }
    // await this.ticketlistServ.deleteCategory(id);
    const index = this.categoryList.data.indexOf(inputEle);
    this.categoryList.data.splice(index, 1);
    this.categoryList = new MatTableDataSource<any>(this.categoryList.filteredData);
    this.categoryList.paginator = this.paginator;
  }

  ngOnInit() {

  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService, address } from '../../../shared/services/api.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-godown-master-view',
  templateUrl: './godown-master-view.component.html',
  styleUrls: ['./godown-master-view.component.scss']
})
export class GodownMasterViewComponent implements OnInit {
  rows:any
  address:any
  constructor(
    private apiService:ApiService,
    private router:Router
  ) { 
    apiService.get('admin/getGodowns').then(data=>{
      let l_data :any = data
      if(l_data.status)
      {
        this.rows =(l_data.data);   
        console.log(l_data.data)                                      
      }
    })
  }

  ngOnInit() {
  }
  toNext()
  {
    this.router.navigateByUrl('dashboard/godown-master/create');
  }
}

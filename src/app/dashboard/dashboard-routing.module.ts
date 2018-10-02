import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChartofaccountsComponent } from './chartofaccounts/chartofaccounts.component';
import { RawproductComponent } from './rawproduct/rawproduct.component';
import { ChargemasterComponent } from './chargemaster/chargemaster.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import {BillofmaterialComponent} from './billofmaterial/billofmaterial.component';
import { BranchMasterViewComponent } from './branch-master/branch-master-view/branch-master-view.component'
import { BranchMasterCreateComponent } from './branch-master/branch-master-create/branch-master-create.component';
import { UnitofmeasurementViewComponent } from './unitofmeasurement/unitofmeasurement-view/unitofmeasurement-view.component';
import { UnitofmeasurementCreateComponent } from './unitofmeasurement/unitofmeasurement-create/unitofmeasurement-create.component';
import { GodownMasterCreateComponent } from './godown-master/godown-master-create/godown-master-create.component';
import { GodownMasterViewComponent } from './godown-master/godown-master-view/godown-master-view.component';



const routes:Routes= [
  {
    path:'',
    component:MainComponent,
    data:{
      'title':'Dashboard'
    }
  },
  {
    path:'chart-of-accounts',
    component:ChartofaccountsComponent,
    data:{
      'title':'Chart Of Accounts'
    }
  },
  {
    path:'uom',
    component:UnitofmeasurementViewComponent
  },
  {
    path:'uom/create',
    component:UnitofmeasurementCreateComponent
  },
  
  {
    path:'raw-products',
    component:RawproductComponent
  },
  {
    path:'charges-master',
    component:ChargemasterComponent
  },
  {
    path:'branch-master',
    component:BranchMasterViewComponent,
  },
  {
    path:'branch-master/create',
    component:BranchMasterCreateComponent
  },
  {
    path:'godown-master',
    component:GodownMasterViewComponent
  },
  {
    path:'godown-master/create',
    component:GodownMasterCreateComponent
  },
  {
    path:'view-raw-product-master',
    component:ViewProductsComponent
  },
  {
    path:'bill-of-material',
    component:BillofmaterialComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardRoutingModule { }

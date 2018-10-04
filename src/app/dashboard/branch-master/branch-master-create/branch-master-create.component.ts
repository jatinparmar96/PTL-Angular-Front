import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { FormDataService } from '../../../shared/services/form-data.service';

@Component({
  selector: 'app-branch-master-create',
  templateUrl: './branch-master-create.component.html',
  styleUrls: ['./branch-master-create.component.scss']
})
export class BranchMasterCreateComponent implements OnInit {

  branch_data :FormGroup
  banks:any;
  isProcessing:boolean
  constructor(
    private fb:FormBuilder,
    private apiService: ApiService,
    private formService:FormDataService
  ) { 
    apiService.get('admin/getBanks').then(data=>{
      let buffer:any = data
      if(buffer.status)
      {
        this.banks = buffer.banks
      }
    })
    this.branch_data = fb.group({
      "branch_name":["Demo Branch Name",Validators.required],
      "branch_code":["BC001",Validators.required],
      "branch_gst_number":["GST7ZXY123IWX",Validators.required],
      "branch_address_building":["Sample Building Name",Validators.required],
      "branch_address_road_name":["Sample Road Name",Validators.required],
      "branch_address_landmark":["Sample Landmark Name",Validators.required],
      "branch_address_pincode":["415465",Validators.required],
      "branch_address_country":["India",Validators.required],
      "branch_address_state":["Maharashtra",Validators.required],
      "branch_address_city":["Mumbai",Validators.required],
      "branch_bank":["BOI",Validators.required],
    
    })
  }
  ngOnInit() {
  }
  onSubmit(branch_data)
  {
    this.isProcessing = true
    this.formService.storeData('admin/addBranch',branch_data.value).then(data=>{
        let status:any = data
        if(status.status)
        {
          alertFunctions.typeSuccess(status.message);
        }
        else{
          alertFunctions.typeError('Cannot add Branch');
        }
    }).catch(error=>{
      console.log(error)
      this.isProcessing = false;
    })
  }
}

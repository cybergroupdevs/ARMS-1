import { JdModalComponent } from '../jd-modal/jd-modal.component';
import { Component, OnInit,EventEmitter, Output, Input} from "@angular/core";
import { AppServicesService } from "src/app/services/app-services.service";
import { NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import { Router, ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
// import {jobDescription} from '../../models/jobDescription.interface'
// import{AppServicesService} from '../../services/app-services.service'


@Component({
  selector: "app-jd-list",
  templateUrl: "./jd-list.component.html",
  styleUrls: ["./jd-list.component.scss"],
})



export class JdListComponent implements OnInit {
  jobsList: any;
  jdObject: any;

  constructor(private _service: AppServicesService, private router: Router, 
    private modalService:NgbModal) {}

  ngOnInit() {
    this.loadJds();
  }

  loadJds() {
    return this._service.getAllJobs().subscribe((response: any) => {
      return (this.jobsList = response.payload.data);
    });
  }

  jdUpdateModal(id:string){
    const modalRef: NgbModalRef =this.modalService.open(JdModalComponent)
    modalRef.componentInstance.jdUpdateId = id;
    modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
      modalRef.close();
    })
  };


  deleteJd(jobObjId: string) {
    this._service.deleteJd(jobObjId).subscribe((res) => {
      this.loadJds();
    });
  }


  
  downloadPdf(jdId) {
   this.router.navigate(["/jd-pdf", jdId]);
  }

  datecheck(closingDate) {
    let currentDate = new Date().toISOString();
    if (closingDate <= currentDate)
      return 1;
    else return 0;
  }

 
}

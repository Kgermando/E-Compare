import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompareService } from 'src/app/services/compare.service';
import { Router } from '@angular/router';
import { Compare } from 'src/app/models/compare.model';

@Component({
  selector: 'app-forms-compare',
  templateUrl: './forms-compare.page.html',
  styleUrls: ['./forms-compare.page.scss'],
})
export class FormsComparePage implements OnInit {

  compareForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formbuilder: FormBuilder, private compareService: CompareService, private router: Router) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.compareForm = this.formbuilder.group({
      market: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required]

    });
  }

  onSaveCompare() {
    const market = this.compareForm.get('market').value;
    const name = this.compareForm.get('name').value;
    const price = this.compareForm.get('price').value;
    const newCompare = new Compare(market, name, price);
    if (this.fileUrl && this.fileUrl !== '') {
      newCompare.photo = this.fileUrl;
    }
    this.compareService.createNewCompare(newCompare);
    this.router.navigate(['/home']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.compareService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}

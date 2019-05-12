import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Liberte } from 'src/app/models/liberte.model';
import { LiberteService } from 'src/app/services/liberte.service';

@Component({
  selector: 'app-forms-liberte',
  templateUrl: './forms-liberte.page.html',
  styleUrls: ['./forms-liberte.page.scss'],
})
export class FormsLibertePage implements OnInit {

  liberteForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formbuilder: FormBuilder, private liberteService: LiberteService, private router: Router) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.liberteForm = this.formbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]

    });
  }

  onSaveLiberte() {
    const name = this.liberteForm.get('name').value;
    const price = this.liberteForm.get('price').value;
    const newLiberte = new Liberte(name, price);
    if (this.fileUrl && this.fileUrl !== '') {
      newLiberte.photo = this.fileUrl;
    }
    this.liberteService.createNewLiberte(newLiberte);
    this.router.navigate(['/home']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.liberteService.uploadFile(file).then(
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

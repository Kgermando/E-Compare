import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZandoService } from 'src/app/services/zando.service';
import { Zando } from 'src/app/models/zando.models';

@Component({
  selector: 'app-forms-zando',
  templateUrl: './forms-zando.page.html',
  styleUrls: ['./forms-zando.page.scss'],
})
export class FormsZandoPage implements OnInit {

  zandoForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formbuilder: FormBuilder, private zandoService: ZandoService, private router: Router) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.zandoForm = this.formbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]

    });
  }

  onSaveZando() {
    const name = this.zandoForm.get('name').value;
    const price = this.zandoForm.get('price').value;
    const newZAndo = new Zando(name, price);
    if (this.fileUrl && this.fileUrl !== '') {
      newZAndo.photo = this.fileUrl;
    }
    this.zandoService.createNewZando(newZAndo);
    this.router.navigate(['/home']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.zandoService.uploadFileZando(file).then(
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

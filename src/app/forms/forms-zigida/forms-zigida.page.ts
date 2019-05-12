import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ZigidaService } from 'src/app/services/zigida.service';
import { Router } from '@angular/router';
import { Zigida } from 'src/app/models/zigida.model';

@Component({
  selector: 'app-forms-zigida',
  templateUrl: './forms-zigida.page.html',
  styleUrls: ['./forms-zigida.page.scss'],
})
export class FormsZigidaPage implements OnInit {

  zigidaForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formbuilder: FormBuilder, private zigidaService: ZigidaService, private router: Router) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.zigidaForm = this.formbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]

    });
  }

  onSaveZigida() {
    const name = this.zigidaForm.get('name').value;
    const price = this.zigidaForm.get('price').value;
    const newZigida = new Zigida(name, price);
    if (this.fileUrl && this.fileUrl !== '') {
      newZigida.photo = this.fileUrl;
    }
    this.zigidaService.createNewZigida(newZigida);
    this.router.navigate(['/home']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.zigidaService.uploadFile(file).then(
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

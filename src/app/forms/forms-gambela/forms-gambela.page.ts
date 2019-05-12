import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GambelaService } from 'src/app/services/gambela.service';
import { Gambela } from 'src/app/models/gambela.model';

@Component({
  selector: 'app-forms-gambela',
  templateUrl: './forms-gambela.page.html',
  styleUrls: ['./forms-gambela.page.scss'],
})
export class FormsGambelaPage implements OnInit {

  gambelaForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formbuilder: FormBuilder, private gambelaService: GambelaService, private router: Router) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.gambelaForm = this.formbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]

    });
  }

  onSaveGambela() {
    const name = this.gambelaForm.get('name').value;
    const price = this.gambelaForm.get('price').value;
    const newGambela = new Gambela(name, price);
    if (this.fileUrl && this.fileUrl !== '') {
      newGambela.photo = this.fileUrl;
    }
    this.gambelaService.createNewGambela(newGambela);
    this.router.navigate(['/home']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.gambelaService.uploadFile(file).then(
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

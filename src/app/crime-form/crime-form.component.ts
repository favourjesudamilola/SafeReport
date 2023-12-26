import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crime-form',
  templateUrl: './crime-form.component.html',
  styleUrls: ['./crime-form.component.css'],
})
export class CrimeFormComponent implements OnInit {
  uploadNumbers: any[] = ['image1', 'image2', 'image3', 'image4'];
  images: any[] = [];
  imageFile: File[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  reportDetails: FormGroup = this.fb.group({
    time: new FormControl(null, [Validators.required]),
    date: new FormControl('', Validators.required),
    product_file: new FormControl(this.images, Validators.required),
    crimeType: new FormControl('', [Validators.required]),
    fullName: new FormControl(null, [Validators.required]),
    socials: new FormControl('', Validators.required),
    handle: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),
    phoneNumber: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),

    file: new FormControl(this.images, Validators.required),
  });

  uploadFile($event: Event, index: number) {
    const target = $event.target as HTMLInputElement;
    const files: any = target.files;

    this.imageFile[index] = files[0];

    console.log('Current images length:', this.images.length);

    if (this.images.length >= 4) {
      alert('Not more than 4 uploads');
      return;
    } else {
      const processFile = (fileIndex: number): Promise<void> => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            const uploaded_image = reader.result;
            // Append to the array instead of replacing
            this.images.push(uploaded_image);

            console.log('Updated images length:', this.images.length);

            resolve();
          });

          reader.readAsDataURL(files[fileIndex]);
        });
      };

      const processFilesSequentially = async () => {
        for (let i = 0; i < files.length; i++) {
          await processFile(i);
        }

        this.reportDetails.patchValue({
          files: this.images,
        });

        return this.images;
      };

      processFilesSequentially();
    }
  }

  deleteImg(index: number) {
    this.images.splice(index, 1);
  }
}
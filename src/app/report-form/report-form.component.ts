import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent implements OnInit {
  selectedCrimeType!: string;
  defaultDate: string;
  
  constructor() {
    this.selectedCrimeType = this.crimeTypes[0];
    const today = new Date();
    const formattedDate = this.formatDate(today);
    this.defaultDate = formattedDate;
  }

  crimeTypes: string[] = [
    'Phishing',
    'Malware',
    'Identity Theft',
    'Ransomware',
    'Other',
  ];
  data: any = [
    {
      iD: '200',
      crime: 'phising',
      date: '23-10-2023',
      time: '9:20am',
    },
    {
      iD: '200',
      crime: 'phising',
      date: '23-10-2023',
      time: '9:20am',
    },
  ];
  ngOnInit(): void {}
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// Interface for appointment data
export interface AppointmentData {
  id: number;
  patientName: string;
  patientId: string;
  appointmentDate: Date;
  appointmentTime: string;
  doctor: string;
  department: string;
  status: string;
}

const APPOINTMENT_DATA: AppointmentData[] = [
  { id: 1, patientName: 'John Smith', patientId: 'PT10001', appointmentDate: new Date('2025-04-20'), appointmentTime: '09:00 AM', doctor: 'Dr. Maria Johnson', department: 'Cardiology', status: 'Scheduled' },
  { id: 2, patientName: 'Emma Wilson', patientId: 'PT10002', appointmentDate: new Date('2025-04-20'), appointmentTime: '10:30 AM', doctor: 'Dr. Robert Chen', department: 'Neurology', status: 'Confirmed' },
  { id: 3, patientName: 'Michael Brown', patientId: 'PT10003', appointmentDate: new Date('2025-04-21'), appointmentTime: '11:00 AM', doctor: 'Dr. Sarah Lee', department: 'Orthopedics', status: 'Scheduled' },
  { id: 4, patientName: 'Sophia Davis', patientId: 'PT10004', appointmentDate: new Date('2025-04-21'), appointmentTime: '02:15 PM', doctor: 'Dr. James Miller', department: 'Dermatology', status: 'Confirmed' },
  { id: 5, patientName: 'William Taylor', patientId: 'PT10005', appointmentDate: new Date('2025-04-22'), appointmentTime: '09:45 AM', doctor: 'Dr. Jennifer Adams', department: 'Ophthalmology', status: 'Rescheduled' },
  { id: 6, patientName: 'Olivia Martinez', patientId: 'PT10006', appointmentDate: new Date('2025-04-22'), appointmentTime: '01:30 PM', doctor: 'Dr. David Wilson', department: 'Gastroenterology', status: 'Confirmed' },
  { id: 7, patientName: 'James Johnson', patientId: 'PT10007', appointmentDate: new Date('2025-04-23'), appointmentTime: '10:00 AM', doctor: 'Dr. Elizabeth Taylor', department: 'Pulmonology', status: 'Scheduled' },
  { id: 8, patientName: 'Charlotte Garcia', patientId: 'PT10008', appointmentDate: new Date('2025-04-23'), appointmentTime: '03:45 PM', doctor: 'Dr. Thomas Brown', department: 'Endocrinology', status: 'Confirmed' },
  { id: 9, patientName: 'Benjamin Lee', patientId: 'PT10009', appointmentDate: new Date('2025-04-24'), appointmentTime: '11:30 AM', doctor: 'Dr. Patricia Scott', department: 'Rheumatology', status: 'Rescheduled' },
];

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'patientName', 'patientId', 'appointmentDate', 'appointmentTime', 'doctor', 'department', 'status'];
  dataSource!: MatTableDataSource<AppointmentData>;

  @ViewChild(MatTable) table!: MatTable<AppointmentData>;
  ngOnInit() {
    // Initialize the data source with the patient data
    this.dataSource = new MatTableDataSource(APPOINTMENT_DATA);
  }
}



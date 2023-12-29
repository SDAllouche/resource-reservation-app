import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../models/reservation.model";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ReservationService} from "../../services/reservation.service";
import {Resource} from "../../models/ressource.model";
import {CommonModule, DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{

  reservations: Reservation[] = [];
  newReservation: Reservation = { id: 0, nom: '', contexte: '', date: new Date(), duree:0,
    ressource: { id: 0, nom: '', type: '' },ressource_id:0,
    personne: { id: 0, nom: '', email: '', fonction: '', reservation : []  } };
  selectedReservationId: number | null = null;
  searchReservationFormGroup!: FormGroup;
  errorMessage!: string;

  constructor(private reservationService: ReservationService, private formBuilder: FormBuilder,
              private route : Router,private fb :FormBuilder) {

  }

  ngOnInit(): void {
    this.searchReservationFormGroup=this.fb.group({
      keyword : this.fb.control(null)
    })
    this.fetchReservations();
  }

  fetchReservations(): void {
    this.reservationService.getReservations().subscribe(data => {
      this.reservations = data;
    });
  }

  createReservation() {
    this.reservationService.createReservation(this.newReservation).subscribe(() => {
      this.fetchReservations();
      this.resetForm();
    });
  }

  updateReservation() {
    if (this.selectedReservationId !== null) {
      this.reservationService.updateReservation(this.selectedReservationId, this.newReservation).subscribe(() => {
        this.fetchReservations();
        this.resetForm();
      });
    }
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.fetchReservations();
    });
  }

  selectReservation(reservation: Reservation) {
    this.selectedReservationId = reservation.id;
    this.newReservation = { ...reservation };
  }

  resetForm(): void {
    this.selectedReservationId = null;
    this.newReservation={ id: 0, nom: '', contexte: '', date: new Date(), duree:0,
      ressource: { id: 0, nom: '', type: '' },ressource_id:0,
      personne: { id: 0, nom: '', email: '', fonction: '', reservation : []  } };
  }

  searchReservation() {

    let keyword=this.searchReservationFormGroup.value.keyword;

    if (keyword==''){
      this.fetchReservations();
    }
    this.reservationService.searchReservations(keyword).subscribe({
      next :data=>{
        this.reservations=data
      }
    })
  }

  getDetail(reservation : Reservation) {
    //this.route.navigateByUrl("/reservationDetail/"+reservation.id)
  }
}

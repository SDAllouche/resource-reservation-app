import { Injectable } from '@angular/core';
import {Resource} from "../models/ressource.model";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private apiUrl = 'http://localhost:8888/RESSOURCE-SERVICE/ressources';

  ressources!: Resource [];

  constructor(private http: HttpClient) {
    this.getResources().subscribe({
      next: data=>{
        this.ressources = data;
      }
    });
  }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }

  getResourceById(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.apiUrl}/${id}`);
  }

  createResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(this.apiUrl, resource);
  }

  updateResource(id: number, resource: Resource): Observable<Resource> {
    return this.http.put<Resource>(`${this.apiUrl}/${id}`, resource);
  }

  deleteResource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchResources(keyword: string) {
    let ressourceList =this.ressources.filter(r=>`${r.nom}`.includes(keyword));
    return of(ressourceList);
  }
}

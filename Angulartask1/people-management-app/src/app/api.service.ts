import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://your-api-url/';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(this.apiUrl + 'people');
  }

  getPerson(id: number) {
    return this.http.get(this.apiUrl + 'people/' + id);
  }

  updatePerson(person: any) {
    return this.http.put(this.apiUrl + 'people/' + person.id, person);
  }

  deletePerson(id: number) {
    return this.http.delete(this.apiUrl + 'people/' + id);
  }
}

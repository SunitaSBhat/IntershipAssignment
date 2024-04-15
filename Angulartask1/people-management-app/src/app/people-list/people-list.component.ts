import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: any[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getPeople().subscribe((data: any[]) => {
      this.people = data;
    });
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    if (confirm('Are you sure you want to delete this person?')) {
      this.apiService.deletePerson(id).subscribe(() => {
        this.people = this.people.filter(person => person.id !== id);
      });
    }
  }
}


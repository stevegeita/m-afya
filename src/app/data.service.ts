import { Injectable } from "@angular/core";
import { IdeaService, Idea} from '../app/idea.service'

@Injectable({
  providedIn: "root"
})
export class DataService {
  public items: any = [];

  constructor(private ideaService: IdeaService) {
  this.items = this.ideaService.getIdeas();
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
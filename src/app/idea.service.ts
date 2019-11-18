import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface Idea {
  id?: string,
  name: string,
  address: string,
  aon: string,
  uap: string,
  dental: string,
  surgery: string,
  opentime: string,
  closetime:string
}
 
@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  private chemCollection: AngularFirestoreCollection<Idea>;
  private chems: Observable<Idea[]>;
  steve: AngularFirestoreCollection;
  hosilist: any;
 
  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('hospital');
    this.chemCollection = this.afs.collection<Idea>('chemist');
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
    this.chems = this.chemCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }
 
  getIdeas(): Observable<Idea[]> {
    return this.ideas;
  }
  
 
  getIdea(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }
  getChems(): Observable<Idea[]> {
    return this.chems;
  }
  
 
  getchem(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }
 
  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea);
  }
 
  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.address });
  }
 
  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }
}
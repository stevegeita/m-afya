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
 export interface Steve{
  id?: string,
  name: string,
  address: string,
 }
 export interface Profile{
   id?: string,
   firstname: string,
   lastname: string,
   gender: string,
   age: string,
   insurance: string,
   contact: string,
   allergies: string,
   blood: string,
   drug: string
 }
@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  private chemCollection: AngularFirestoreCollection<Steve>;
  private chems: Observable<Steve[]>;

  private profile: Observable<Profile[]>
  private profileCollection: AngularFirestoreCollection<Profile>;

  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('hospital');
    this.chemCollection = this.afs.collection<Steve>('chemist');
    this.profileCollection = this.afs.collection<Profile>('users');
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
    this.profile = this.profileCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    )
  }
  getProfile(id: string): Observable<Profile> {
    return this.profileCollection.doc<Profile>(id).valueChanges().pipe(
      take(1),
      map(profile=>{
        profile.id=id;
        return profile
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
  getChems(): Observable<Steve[]> {
    return this.chems;
  }
  
 
  getchem(id: string): Observable<Steve> {
    return this.chemCollection.doc<Steve>(id).valueChanges().pipe(
      take(1),
      map(chem => {
        chem.id = id;
        return chem
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
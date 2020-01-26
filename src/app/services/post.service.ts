import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private firestore: AngularFirestore) {
    // firestore.collection('posts').get<Post>().subscribe(res=>{
    //   res.
    // })
  }

  getPosts() {
    return this.firestore.collection<Post>('posts').snapshotChanges();
  }

  createPost(post: Post) {
    return this.firestore.collection('posts').add(post);
  }

  updatePost(post: Post) {
    this.firestore.doc('posts/' + post.id).update(post);
  }

  deletePost(postId: string){
    this.firestore.doc('posts/' + postId).delete();
  }
}

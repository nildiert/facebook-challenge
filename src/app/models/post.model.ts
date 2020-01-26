export class Post {
  id?: string;
  text: string;
  img?: string;
  creationDate?: { toDate(): Date } | Date;
}

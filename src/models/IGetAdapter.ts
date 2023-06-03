import { Book } from '.'

export interface GetAdapterInterface {
  bookListResponse(book: Book[]): Book[]
  bookResponse(book: Book[]): Book
}

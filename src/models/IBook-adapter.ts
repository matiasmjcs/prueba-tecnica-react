import { Book } from '.'

export interface BookAdapterInterface {
  bookListResponse(book: Book[]): Book[]
  bookResponse(book: Book[]): Book
}

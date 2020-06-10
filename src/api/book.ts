import { AxiosPromise } from "axios";
import client from "./client";
import { Book } from '../models/book';

// Book[] を受け取ることを明示
export const fetchBooks = (): AxiosPromise<Book[]> => client.get('/book/list');
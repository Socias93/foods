import { JSX } from "react";
import { Food } from "../services/fakeFoodService";

export function range(startNumber: number, endNumber: number): number[] {
  let pages: number[] = [];

  for (let count = startNumber; count <= endNumber; count++) pages.push(count);
  return pages;
}

export function paginate<T>(
  items: T[],
  pageSize: number,
  selectedPage: number
) {
  const startNumber = pageSize * (selectedPage - 1);
  const endNumber = pageSize * selectedPage;

  return items.slice(startNumber, endNumber);
}

export interface TextColumn {
  path: string;
  label: string;
}

export interface ContentColumn {
  key: string;
  content: (food: Food) => JSX.Element;
}

export type Columns = TextColumn | ContentColumn;

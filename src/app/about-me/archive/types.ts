import { ReactElement } from "react";

export interface ImageItem {
  id: number;
  url: string;
  title: string;
  width: number;
  height: number;
  date: Date;
  description: ReactElement;
}

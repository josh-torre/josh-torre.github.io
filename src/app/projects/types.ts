import { ReactElement } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: ReactElement;
  titleIcon?: ReactElement;
}

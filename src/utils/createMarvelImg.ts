import type {  ExtensionT } from "../domain/models/Base";

export const createMarvelImg = ({ path, extension }: {path:string, extension: ExtensionT}) => {
  return `${path}.${extension}`;
}
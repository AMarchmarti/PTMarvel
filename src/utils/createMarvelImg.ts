import { Extension } from "../domain/models/Base";

export const createMarvelImg = ({path, extension}: {path:string, extension: Extension}) => {
  return `${path}.${extension}`;
}
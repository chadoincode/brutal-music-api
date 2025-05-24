import { Request, Response } from "express";
import { Song } from "../types/song";
import songs from "../data/songs.json";

export const getAllSongs = (req: Request, res: Response): void => {
  res.status(200).json(songs)
}

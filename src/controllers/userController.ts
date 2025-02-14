import { Request, Response } from "express";
import User from "../models/User";

export const searchUser = async (req: Request, res: Response) => {
  const { query } = req.params;
  try {
    const user = await User.findOne({
      $or: [{ username: query }, { email: query }],
    }).select("-password");

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

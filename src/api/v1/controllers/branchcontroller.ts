import { Request, Response } from "express";
import * as branchService from "../services/branchservices";

export const getAllBranches = (req: Request, res: Response): void => {
  res.status(200).json({
    message: "Get all branches",
    data: branchService.getAllBranches(),
  });
};

export const getBranchById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const branch = branchService.getBranchById(id);

  if (!branch) {
    res.status(404).json({ message: `Branch with ID ${id} not found` });
    return;
  }

  res.status(200).json({ message: "Get branch by id", data: branch });
};

export const createBranch = (req: Request, res: Response): void => {
  const newBranch = branchService.createBranch(req.body);
  res.status(201).json({ message: "Branch created", data: newBranch });
};

export const updateBranch = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const branch = branchService.updateBranch(id, req.body);

  if (!branch) {
    res.status(404).json({ message: `Branch with ID ${id} not found` });
    return;
  }

  res.status(200).json({ message: "Branch updated", data: branch });
};

export const deleteBranch = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const deleted = branchService.deleteBranch(id);

  if (!deleted) {
    res.status(404).json({ message: `Branch with ID ${id} not found` });
    return;
  }

  res.status(200).json({ message: "Branch deleted" });
};

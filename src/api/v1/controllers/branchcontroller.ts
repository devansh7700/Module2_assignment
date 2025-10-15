import { Request, Response } from "express";
import * as branchService from "../services/branchservices";
import { Branch } from "../models/branchModel";
import { ApiResponse } from "../models/responseModel";

export const getAllBranches = (req: Request, res: Response<ApiResponse<Branch[]>>): void => {
  const branches = branchService.getAllBranches();
  res.status(200).json({success: true, message: "Get all branches",data: branches,});
};

export const getBranchById = (req: Request, res: Response<ApiResponse<Branch>>): void => {
  const id = Number(req.params.id);
  const branch = branchService.getBranchById(id);

  if (!branch) {
    res.status(404).json({success: false, message: `Branch with ID ${id} not found`, data: null });
    return;
  }

  res.status(200).json({success: true, message: "Get branch by id", data: branch });
};

export const createBranch = (req: Request, res: Response<ApiResponse<Branch>>): void => {
  const { name, address, phone } = req.body;

  if (!name || !address || !phone) {
    res.status(400).json({success: false, message: "Missing required fields", data: null });
    return;
  }

  const newBranch = branchService.createBranch({ name, address, phone });
  res.status(201).json({ message: "Branch created", data: newBranch });
};

export const updateBranch = (req: Request, res: Response<ApiResponse<Branch>>): void => {
  const id = Number(req.params.id);
  const updatedBranch = branchService.updateBranch(id, req.body);

  if (!updatedBranch) {
    res.status(404).json({success: false, message: `Branch with ID ${id} not found`, data: null });
    return;
  }

  res.status(200).json({success: true, message: "Branch updated", data: branch });
};

export const deleteBranch = (req: Request, res: Response<ApiResponse<null>>): void => {
  const id = Number(req.params.id);
  const deleted = branchService.deleteBranch(id);

  if (!deleted) {
    res.status(404).json({success: false, message: `Branch with ID ${id} not found`, data: null });
    return;
  }

  res.status(200).json({success: true, message: "Branch deleted", data:null });
};

import { branches, Branch } from "../../../data/branches";

export const getAllBranches = (): Branch[] => branches;

export const getBranchById = (id: number): Branch | undefined =>
  branches.find((branch) => branch.id === id);

export const createBranch = (branch: Branch): Branch => {
  const newBranch = { ...branch, id: branches.length + 1 };
  branches.push(newBranch);
  return newBranch;
};

export const updateBranch = (id: number, updates: Partial<Branch>): Branch | undefined => {
  const branch = branches.find((b) => b.id === id);
  if (!branch) return undefined;

  Object.assign(branch, updates);
  return branch;
};

export const deleteBranch = (id: number): boolean => {
  const index = branches.findIndex((b) => b.id === id);
  if (index === -1) return false;

  branches.splice(index, 1);
  return true;
};

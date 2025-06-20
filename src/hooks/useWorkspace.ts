import { create } from 'zustand';

interface WorkspaceItemPosition {
  x: number;
  y: number;
}

interface WorkspaceItem {
  id: number;
  atomicNumber: number;
  amount: number;
  position: WorkspaceItemPosition;
}

interface WorkspaceStore {
  workspaceItems: WorkspaceItem[];
  addWorkspaceItem: (item: Omit<WorkspaceItem, 'id'>) => void;
  removeWorkspaceItem: (itemId: WorkspaceItem['id']) => void;
  updatePosition: (
    itemId: WorkspaceItem['id'],
    position: WorkspaceItemPosition
  ) => void;
}

export const useWorkspace = create<WorkspaceStore>(set => ({
  workspaceItems: [],
  addWorkspaceItem: item =>
    set(state => ({
      ...state,
      workspaceItems: [...state.workspaceItems, { ...item, id: Date.now() }],
    })),
  removeWorkspaceItem: itemId =>
    set(state => ({
      ...state,
      workspaceItems: state.workspaceItems.filter(item => item.id !== itemId),
    })),

  updatePosition: (itemId, position) =>
    set(state => ({
      ...state,
      workspaceItems: state.workspaceItems.map(item =>
        item.id === itemId ? { ...item, position } : item
      ),
    })),
}));

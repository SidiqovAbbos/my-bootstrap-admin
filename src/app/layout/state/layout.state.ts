import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MenuItem } from '../model/menu-item';
import { Injectable } from '@angular/core';
import { ToggleSidebar } from './toggle.actiom';
import { patch } from '@ngxs/store/operators';

const defaultTasks: MenuItem[] = [
  { title: 'Dashboard', icon: 'bi bi-speedometer', active: true },
  { title: 'Categories', icon: 'bi bi-bookmark', active: false },
  { title: 'Products', icon: 'bi bi-view-stacked', active: false },
];

export interface LayoutStateModel {
  menuItems: MenuItem[];
  sidebarOpened: boolean;
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    menuItems: defaultTasks,
    sidebarOpened: true,
  },
})
@Injectable()
export class LayoutState {
  @Selector()
  static getMenuItems(state: LayoutStateModel): MenuItem[] {
    return state.menuItems;
  }

  @Selector()
  static isSidebarOpened(state: LayoutStateModel): boolean {
    return state.sidebarOpened;
  }

  // Triggers the PinTask action, similar to redux
  //   @Action(ToggleSidebar)
  //   pinTask(
  //     { getState, setState }: StateContext<LayoutStateModel>,
  //     { opened }: ToggleSidebar
  //   ) {
  //     const task = getState().tasks.find(task => task.id === payload);

  //     if (task) {
  //       const updatedTask: Task = {
  //         ...task,
  //         state: 'TASK_PINNED',
  //       };
  //       setState(
  //         patch({
  //           tasks: updateItem<Task>(
  //             pinnedTask => pinnedTask?.id === payload,
  //             updatedTask
  //           ),
  //         })
  //       );
  //     }
  //   }

  @Action(ToggleSidebar)
  toggleSidebar({ getState, setState }: StateContext<LayoutStateModel>) {
    const state = getState();
    setState(
      patch({
        sidebarOpened: !state.sidebarOpened,
      })
    );
  }

  // Function to handle how the state should be updated when the action is triggered
  //   @Action(AppError)
  //   setAppError(
  //     { patchState, getState }: StateContext<TaskStateModel>,
  //     { payload }: AppError
  //   ) {
  //     const state = getState();
  //     patchState({
  //       error: !state.error,
  //     });
  //   }
}

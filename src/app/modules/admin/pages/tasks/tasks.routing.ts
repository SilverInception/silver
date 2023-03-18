import { Route } from '@angular/router';
import { CanDeactivateTasksDetails } from 'app/modules/admin/pages/tasks/tasks.guards';
import { TasksResolver, TasksTagsResolver, TasksTaskResolver } from 'app/modules/admin/pages/tasks/tasks.resolvers';
import { TasksComponent } from 'app/modules/admin/pages/tasks/tasks.component';
import { TasksListComponent } from 'app/modules/admin/pages/tasks/list/list.component';
import { TasksDetailsComponent } from 'app/modules/admin/pages/tasks/details/details.component';

export const tasksRoutes: Route[] = [
    {
        path     : '',
        component: TasksComponent,
        resolve  : {
            tags: TasksTagsResolver
        },
        children : [
            {
                path     : '',
                component: TasksListComponent,
                resolve  : {
                    tasks: TasksResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : TasksDetailsComponent,
                        resolve      : {
                            task: TasksTaskResolver
                        },
                        canDeactivate: [CanDeactivateTasksDetails]
                    }
                ]
            }
        ]
    }
];

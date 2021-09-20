import { ActionsModel } from './actions.models';
export interface ItemsModel {
    _id: number;
    name: string;
    sortOrder: number;
    creationDate: string;
    lastUpdate: string;
    status: string;
    itemVariants: any;
    categories: any;
    goals: any;
    actions: ActionsModel[];
}
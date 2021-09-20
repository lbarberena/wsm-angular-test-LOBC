import { ActionVariantsModel } from './action-variants.models';
export interface ActionsModel {
    _id: number;
    name: string;
    actionVariants: ActionVariantsModel[];
    checked: boolean;
}
import { IngresoPersona } from "src/app/ingresoPersona";


export interface ItemsState {
    loading: boolean,
    items: ReadonlyArray<IngresoPersona>;
}
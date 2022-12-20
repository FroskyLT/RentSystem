export interface IData {
    users: IUser[];
    bikes: IBike[];
    rent?: IRent;
    history?: IRent[];
}

export interface IUser {
    id: number;
    email: string;
    password: string;
    admin: boolean;
}

export interface IBike {
    bikeId: number;
    name: string;
    type: string;
    status: string;
    price: number;
};

export interface IRent {
    startTime: Date;
    bikeId: number;
    endTime?: Date;
    price?: number;
}
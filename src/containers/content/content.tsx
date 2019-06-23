import React, { Component } from 'react';
import './style.css';
import { IUser } from '../../store/reducers/users.reducer';

export interface IFields {
    search: string;
    users: IUser[];
}

export interface IDispatcher {
    getUsers(): void;
}

export interface IProps extends IFields, IDispatcher {

}

export class Content extends Component<IProps> {

    public componentDidMount(): void {
        this.props.getUsers();
    }

    public render(): JSX.Element {
        const {search, users} = this.props;
        return <div className='container-fluid'>
            {
                users
                    .filter((user: IUser) =>
                        `${user.firstName} ${user.surname}`.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((user: IUser, index: number) => (
                        <div className='card' key={index}>
                            <img className='card-img-top' src={user.photo}/>
                            <div className='card-body'>
                                <p className='card-text'>{user.firstName} {user.surname}</p>
                            </div>
                        </div>
                    ))
            }
        </div>;
    }
}

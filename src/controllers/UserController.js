import React from "react";
const {Provider, Consumer} = React.createContext();

class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _users: [],
            _ages: [],
            _topColours: [],
            _usersMap: {},
            _coloursMap: {}
        };
        this.setData = this.setData.bind(this);
        this.hasData = this.hasData.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getTopColours = this.getTopColours.bind(this);
    }

    getUser(id) {
        return this.state._usersMap[id];
    }

    setData(data) {
        let _usersMap = {};
        let _coloursMap = {};

        data.users.forEach(user => {
            _usersMap[user.id] = {user: user};
        });

        data.ages.forEach(user => {
            _usersMap[user.userId].agePlusTwenty = user;
        });

        data.topColours.forEach(topColour => {
            _coloursMap[topColour.colour] = topColour;
        })

        this.setState({
            _users: data.users,
            _ages: data.ages,
            _topColours: data.topColours,
            _usersMap: _usersMap,
            _coloursMap: _coloursMap
        })
    }

    hasData() {
        return this.state._users.length > 0;
    }

    getUsers(offset, limit) {
        // https://stackoverflow.com/a/67025002/5094640 //
        return {
            users: this.state._users.slice((offset * limit), (offset * limit) + limit),
            anyMore: (offset + 1) * limit < this.state._users.length
        }
    }

    getTopColours(offset, limit) {
        // https://stackoverflow.com/a/67025002/5094640 //
        return {
            topColours: this.state._topColours.slice((offset * limit), (offset * limit) + limit),
            anyMore: (offset + 1) * limit < this.state._topColours.length
        }
    }

    render() {
        return (
            <Provider
                value={{
                    getUser: this.getUser,
                    getUsers: this.getUsers,
                    setData: this.setData,
                    hasData: this.hasData,
                    getTopColours: this.getTopColours
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

export {UserProvider, Consumer as UserConsumer}
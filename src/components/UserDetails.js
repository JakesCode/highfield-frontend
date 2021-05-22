import React, { useEffect, useState } from 'react';
import moment from 'moment';

function UserDetails(props) {
    const [userInformation, setUserInformation] = useState(null);

    const formatDOB = (dob) => {
        let convertedDate = moment(dob);
        return convertedDate.format("LL");
    }

    useEffect(() => {
        setUserInformation(props.context.getUser(props.match.params.id));
    }, [props.match.params.id, props.context]);

    return (
        userInformation ? <>
            <div className="user-details">
                <h1>{userInformation.user.firstName} {userInformation.user.lastName}</h1>
                <p>ID: {userInformation.user.id}</p>
                <p>Email: {userInformation.user.email}</p>
                <p>DOB: {formatDOB(userInformation.user.dob)}</p>
                <p>Favourite Colour: {userInformation.user.favouriteColour}</p>
            </div>

            <div className="user-age mt-5">
                <h3>Age Plus Twenty (connected by foreign ID)</h3>
                <p>Age: {userInformation.agePlusTwenty.originalAge}</p>
                <p>Age Plus Twenty: {userInformation.agePlusTwenty.agePlusTwenty}</p>
            </div>
        </> : userInformation === null ? <></> : <h1>Could not find this user.</h1>
    );
}

export default UserDetails;
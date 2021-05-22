# This is the React Frontend to my Highfield Technical Test.

Important: Ensure you run `npm install` to install the required dependencies upon first run.
This frontend assumes the backend is running on port **44399**, as this is the port that was always selected automatically when making the API.

If a different port is required, it only needs to be changed once, in Main.js, on line 9.

## What I've done
I have created an MVC application using React, styled using Bootstrap and SASS. There are two routes - the default route (`/`) displays two tables; the users and the top colours table.

As the data differs each time the Highfields API is accessed, I decided to create a class which can store a single API response and then perform additional functions on the data set.

I decided to use a React Context, as it allows me to implement state to store the API response, as well as add different functions to call. This means that when I access the Highfields API, I update the context which forces a re-render on all components using any of the user data.

Since the *AgePlusTwenty* DTO contained a `userId` foreign ID, I decided to add this functionality in by creating a JavaScript object of the user IDs when the information is first received. It uses the user IDs as the unique key, and then the original User object *plus* the AgePlusTwenty object are both appended to a corresponding object. This means that just by knowing a user's ID, I can now access both their User DTO and their corresponding AgePlusTwenty DTO.

I display the users in a table and added a Link to each User ID. Clicking any of the IDs will take you to a user details route (`/{id}`), and will display both the user's information as well as their corresponding AgePlusTwenty information.

I also decided to implement pagination on the two tables - each page is 10 items long.
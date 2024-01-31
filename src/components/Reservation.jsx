/* TODO - Import the React components to authorize the log in and displays all the books reserved. Fetch the Books data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

/*This route returns a list of books the current user has checked out. You must pass a valid token with this request, or it will be rejected.*/

/*There are no Return Parameters*/

import React from 'react'
import React from './Login'
import React from './Account'
 

//GET RESERVATION - Luana
fetch ('/api/reservations',{
    headers:{
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer${}'
    },
}).then(response)=> response.json())
.then(result=> {
    console.log(result)
} )
.catch(console.error);


//DELETE RESERVATION - Luana




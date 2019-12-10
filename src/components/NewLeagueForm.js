import React, { useState } from 'react';

const NewLeagueForm = () => {
    return (
    <form>
        <label>league id:</label>
        <input type="text" required/>
        <input type="submit" value="add league"/>
    </form>
    );
}


export default NewLeagueForm;
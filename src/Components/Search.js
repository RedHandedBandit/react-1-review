import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super()

        // state is just the object that we are storing all the data that this class needs
        this.state = {
            names: ['Liam', 'Noah', 'William', 'James', 'Logan', 'Benjamin', 'Mason', 'Elijah', 'Oliver', 'Jacob', 'Lucas', 'Michael', 'Alexander', 'Ethan', 'Daniel', 'Matthew', 'Aiden', 'Henry', 'Joseph', 'Jackson', 'Samuel', 'Sebastian', 'David', 'Carter', 'Wyatt', 'Jayden', 'John', 'Owen', 'Dylan', 'Luke', 'Gabriel', 'Anthony', 'Isaac', 'Grayson', 'Jack', 'Julian', 'Levi', 'Christopher', 'Joshua', 'Andrew', 'Lincoln', 'Mateo', 'Ryan', 'Jaxon', 'Nathan', 'Aaron', 'Isaiah', 'Thomas', 'Charles', 'Caleb', 'Josiah', 'Christian', 'Hunter', 'Eli', 'Jonathan', 'Connor', 'Landon', 'Adrian', 'Asher', 'Cameron', 'Leo', 'Theodore', 'Jeremiah', 'Hudson', 'Robert', 'Easton', 'Nolan', 'Nicholas', 'Ezra', 'Colton', 'Angel', 'Brayden', 'Jordan', 'Dominic', 'Austin', 'Ian'],
            searchTerm: '',

        }
    }

    // this method will take in some text from the input box as a parameter 
    updateSearchTerm(text) {
        // this.setState is a method that lets us edit state while also letting React know that something might have changed
        // so it should re-render anything that is different 
        this.setState({
            searchTerm: text,
        })
    }

    render() {

        // inside the render method is Javascript land


        // this is where we make a new array with just the filtered names coming from state 
        const filteredNames = this.state.names.filter((name) => {
            // we are going to de-structure searchTerm just to keep the code shorter in the future
            const { searchTerm } = this.state

            // here I am grabbing the length of the search term
            let searchLen = searchTerm.length

            // here we compare the search term to the same number of letters from each word
            if (searchTerm.toUpperCase() === name.slice(0, searchLen).toUpperCase()) {
                return name
            }
        })

        // here we are taking the array of filtered names and building a little tile for each name
        const nameTiles = filteredNames.map((name, i) => {
            return (
                // remember that a key is just a way for React to remember what everything is in a list
                // so that it does not have to re-render every item just the ones that have been changed
                <div key={i} className='wordTiles' >
                    <h3>{name}</h3>
                </div>
            )

        })




        // this is what we are returning from the render function to be displayed
        return (
            <div>
                <input 
                // this onChange is waiting for an event to happen and then it will invoke the callback that we gave it
                onChange={(e) => this.updateSearchTerm(e.target.value)} 
                />

                {/* This is where we display the array of JSX that we built with .map() */}
                {nameTiles}

            </div>
        )
    }
}

// dont forget to export default the class that we just built so that other components can access this goodness
export default Search
// Import necessary modules
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Header} from "./components/header/Header.tsx";
// import Header from '/components/header/Header.tsx'
// Define the component
// import Header from '/com'

function App() {
    // State to store the JSON data
    const [jsonData, setJsonData] = useState(null);

    // Function to fetch JSON data from the file
    useEffect(() => {
        // Use axios to fetch data from the file
        axios.get('../data.json') // Assuming file.json is in the same directory
            .then(response => {
                // Set the JSON data in state
                setJsonData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Render the component
    return (
        <>
            <Header />
        </>
        // <div>
        //     <h1>JSON Data G</h1>
        //     {/* Render the JSON data */}
        //     {jsonData && (
        //         <pre>{JSON.stringify(jsonData[0], null, 2)}</pre>
        //     )}
        // </div>

    );
}
export default App


import Head from "next/head"
import Header from "../components/Header"
import SearchResults from "../components/SearchResults";

import { API_KEY, CX_KEY } from '../keys';

import Response from '../Response';



function search({ results }) {

  

    return (
        <div>

            <Head>
                <title>{results.queries.request[0].searchTerms} - Search Results</title>
            </Head>

            <Header />
            
            <SearchResults results={results }/>
            
        </div>
    )
}

export default search


export async function getServerSideProps(context) {
    
    const demodata = true;
 

    

    const data = demodata ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_KEY}&q=${context.query.q}`)
    .then((response) => response.json() );




    return {
        props: {
            results: data,
        }
    };
    
}

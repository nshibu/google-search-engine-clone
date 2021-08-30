
function SearchResults({ results }) {
    results.items.map(item => {
        console.log(item.title);
    })
    return (
        <div className="mx-auto py-2 w-full px-3 sm:pl-24  md:pl-36 lg:pl-52">
            <p className="text-sm text-gray-600 mb-4">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
            </p>

             {results.items?.map(result => (
                 <div key={result.link} className="max-w-xl mb-4 ">
                     <div className="group">
                         <a href={result.link} className="truncate text-sm ">{ result.link.length > 15 ? result.link.substring(0, 60) + '...' : result.link }</a>
                         <a href={result.link} ><h2 className="truncate text-xl font-medium text-blue-800 group-hover:underline">{result.title }</h2></a>
                     </div>
                     <p>{result.snippet}</p>
                     
                </div>
             ))}
            
        </div>
    )
}

export default SearchResults

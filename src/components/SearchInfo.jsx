/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState } from 'react';

import { SearchContext } from '../pages/SearchResult/SearchResult.jsx';

/* --------------------------------Component--------------------------------*/

const SearchInfo = () => {

    const { address, siteDetails } = useContext(SearchContext)

    const [loading, setLoading] = useState(true)
    const [pageAddress, setPageAddress] = useState('no address yet')
    const [pageDetails, setPageDetails] = useState('')

    useEffect(() => {

        if (address) setPageAddress(address)
        if (siteDetails) {
            setPageDetails(siteDetails)
            setLoading(false)
        }

    }, [address, siteDetails])

    return (
        <div id="div-search-info">
            <h2>Address: {pageAddress}</h2>
            <div id="div-search-info-details" className="bg-darkColor text-textAlterColor">
                { loading ? (<p>No information available yet</p>) : (
                    <ul>
                        <li>hi</li>
                    </ul>
                )}
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default SearchInfo
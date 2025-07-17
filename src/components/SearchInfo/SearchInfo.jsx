/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState } from 'react';

import "./SearchInfo.css"

// import { SearchContext } from '../../pages/SearchResult/SearchResult.jsx';

/* --------------------------------Component--------------------------------*/

// data.UsableSqFt – Los Angeles County portal

const SearchInfo = ({ siteDetails, address}) => {

    // const { address, siteDetails } = useContext(SearchContext)

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
        <div id="div-search-info h-[100%]">
            <h2>full address: <span className="italic">{pageAddress}</span></h2>
            <div id="div-search-info-details" className="bg-darkColor text-textAlterColor p-2 rounded-xl">
                { loading ? (<p>No information available yet</p>) : (
                    <ul>
                        <li className="div-search-li">city: <span className="div-search-span">{pageDetails?.city}</span></li>
                        <li className="div-search-li">jurisdiction: <span className="div-search-span">{pageDetails?.jurisdiction}</span></li>
                        <li className="div-search-li">zoning: <span className="div-search-span">{pageDetails?.zoning}</span></li>
                        <li className="div-search-li">year built: <span className="div-search-span">{pageDetails?.data.YearBuilt}</span></li>
                        <li className="div-search-li">lot width: <span className="div-search-span">{pageDetails?.data.LandWidth}</span></li>
                        <li className="div-search-li">lot depth: <span className="div-search-span">{pageDetails?.data.LandDepth}</span></li>
                        <li className="div-search-li">land area (sq. ft): <span className="div-search-span">{pageDetails?.data.UsableSqftLot}</span></li>
                        <li className="div-search-li">building area (sq. ft): <span className="div-search-span">{pageDetails?.data.SqftMain}</span></li>
                    </ul>
                )}
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default SearchInfo
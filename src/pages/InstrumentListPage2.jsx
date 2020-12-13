import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function InstrumentListPage() {
    const [marketObject, setMarketObject] = useState({})
    let { nameOfMarket } = useParams();



    function fetchInstrumentList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setMarketObject(data["markets"][nameOfMarket]) )

    }

    useEffect(()=> {
        fetchInstrumentList()
    }, [])
    

    console.log(marketObject)
    
    let marketList = Object.keys(marketObject)

    return (
    <>
    <h1>Market List Page 2</h1>
    <div className="container">
    <div className="row row-cols-3"> 
        {marketList.map( marketListItem => {
            return <div className="card col"><p>< Link to={"/markets/" + nameOfMarket + "/" + marketListItem}>{marketListItem}</Link></p></div>
        })}
    </div>
    </div>
    </>
    )
}

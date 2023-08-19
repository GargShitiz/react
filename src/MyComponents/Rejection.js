import React, { useState } from 'react'
import '../Main2/Rejection.scss';
import '../Images/Graph.png'
import '../Images/Table.png'
import BreakupTable from './BreakupTable'
import Graph2 from './Graph2'
import Table2 from './Table2'

export default function Rejection() {
    const [showtable, setshowtable] = useState(false);
    const [showgraph, setshowgraph] = useState(true);
    const [buttontext, setbuttontext] = useState({
        text: 'Table',
        image: '../Images/Table.png'
    });
    const handleClick = () => {
        setshowtable(!showtable);
        setshowgraph(!showgraph);
        setbuttontext({
            text: showgraph ? 'Graph' : 'Table',
            image: showgraph ? '../Images/Graph.png' : '../Images/Table.png'
        });
    };
    return (
        <>
            <div class="contain text-start">
                <div class="row">
                    <div class=" col-lg-5 col-xs-12 col-sm-12 col-md-12" style={{ marginTop: '15px' }}>
                        <div className="column1rejection" style={{ minHeight: '446px', paddingLeft: '15px', paddingTop: '10px', paddingRight: '15px', paddingBottom: '6px' }}>
                            <h6>Rejection Stats</h6>
                            <button type="button" class="btn btn-primary" onClick={(e) => handleClick(e)} style={{ float: 'right', position: 'relative', marginTop: '-2rem', width: '72px', height: '30px', justifyContent: 'space-between' }}> {buttontext.text} </button>
                            {showgraph && <Graph2 />}
                            {showtable && <Table2 />}

                            <div>

                            </div>
                        </div>
                    </div>


                    <div class="col-lg-7 col-xs-12 col-sm-12 col-md-12 " style={{ marginTop: '15px' }}>
                        <div className="column2rejection" style={{ minHeight: '446px', paddingLeft: '8px', paddingTop: '10px', paddingRight: '20px', paddingBottom: '10px' }} >
                            <h6 style={{ paddingLeft: '10px' }}>Leads Breakup</h6>

                            <BreakupTable />


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

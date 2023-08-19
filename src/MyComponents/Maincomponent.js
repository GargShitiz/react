import React from 'react'
import DateFilter from './DateFilter'
import Leads from './Leads'
import Graphs from './Graphs'
import Budget from './Budget'
import Rejection from './Rejection'
import Stats from './Stats'
import LeadsParticular from './LeadsParticular'

export default function Maincomponent() {
    return (
        <>
            <div className="container text-center">
                <div className="container text-center" >
                    <div className="col">
                        <div className="row align-self-start" >
                            <DateFilter />
                        </div>

                        <hr class="border  border-1 opacity-100" style={{backgroundColor:'rgba(0, 0, 0, 0.15)'}}></hr>


                         <div classNameName="row align-self-start">
                            <Leads/>
                        </div>
                        
                        <div className="row align-self-start">
                            <Graphs/>
                        </div>
                        
                        <div className="row align-self-start">
                            <Budget />
                        </div> 
                       
                        <div className="row align-self-start">
                           <Rejection />
                        </div>
                        
                        <div className="row align-self-start">
                            <Stats />
                        </div>
                         
                        <div className="row align-self-start">
                            <LeadsParticular/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
// import icons
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
// import css
import './Transactions.css'

function Transactions() {
    return (
        <div>
            <section className='header-three-box'>
                <div className='box'>
                    <h3 className='net-flow'>Net Flow</h3>
                    <h1 className='nine'>+$9,300.40</h1>
                    <h3 className='last'><FaArrowTrendUp />12.5% vs last month</h3>
                </div>

                <div className='box'>
                    <h3 className='net-flow'>Total Expenses</h3>
                    <h1 className='nine'>-$3,200.00</h1>
                    <h3 className='lasts'><FaArrowTrendDown />0.8% decrease</h3>
                </div>

                <div className='box'>
                    <h3 className='net-flow'>Total Expenses</h3>
                    <h1 className='nine'>-$3,200.00</h1>
                    <div className='btn-icons'>
                        <button className='pro'>Pro Tier</button>
                        <CiBank className='bank'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Transactions

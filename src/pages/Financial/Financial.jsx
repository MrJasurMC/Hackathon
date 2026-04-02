import React from 'react'
import "./Financial.css"
import { FaMoneyBills } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import { CiBank } from "react-icons/ci";

function Financial() {
  return (
    <section className="dash">
        <div className="text-dash">
            <h1>Financial Overview</h1>
            <p>Welcome back, your portfolio is up 4.2% this month.</p>
        </div>

        <div className="totals-dash">
            <div className="box-dash">
                <div className="name-box"><div className="icon-total"><FaMoneyBills /> </div>Total Income</div>
                <div className="price-box">$15,000.00</div>
                <div className="month-box"><FaArrowUp /> 12.5% vs last month</div>
            </div>
            <div className="box-dash">
                <div className="name-box"><div className="icon-total"><LuShoppingCart /></div> Total Expenses</div>
                <div className="price-box">$8,500.00</div>
                <div className="month-box"><FaArrowUp /> 3.2% vs last month</div>
            </div>
            <div className="box-dash">
                <div className="name-box"><div className="icon-total"><CiBank /></div> Current Balance</div>
                <div className="price-box">$6,500.00</div>
                <div className="month-box kok-box" ><CiCircleCheck /> 12.5% vs last month</div>
            </div>
        </div>
        <div className="expenses-dash">
            <div className="chart-side">
              <div className="text-chart">
              <h2>Income vs Expenses</h2>
              <div className="text-icon-chart">
                <div className="circle"></div>
                <p>Income</p>
                <div className="circle-2"></div>
                <p>Expenses</p>
              </div>
              </div>
              <div className="real-chart">
                 <div className="jan"></div>
                 <div className="feb"></div>
                 <div className="mar"></div>
                 <div className="apr"></div>
                 <div className="may"></div>
                 <div className="jun"></div>
              </div>
            </div>
            <div className="recent-side">

            </div>
        </div>
    </section>
  )
}

export default Financial

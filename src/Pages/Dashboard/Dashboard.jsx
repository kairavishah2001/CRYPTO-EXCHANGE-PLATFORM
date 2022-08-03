import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { GiBodyBalance, GiCityCar } from "react-icons/gi";
import { IoIosWallet } from "react-icons/io";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { Analytics } from "../../Components/Analytics";
import InfoCard from "../../Components/infoCard";
import MonthlySpend from "../../Components/MonthlySpend";
import SectorExpance from "../../Components/SectorExpance";

import './Home.css';
import {RiBankFill} from "react-icons/ri";
import {RiWallet3Fill} from "react-icons/ri";
import {RiAddBoxFill} from "react-icons/ri";
import {BiDollar} from "react-icons/bi"
import {BiBitcoin} from "react-icons/bi"
import BTCTracker from './Bitcoinprice';
function Dashboard({ balance, income, expance, currency }) {
  return (
    <div className='home'>
        <div className='text-center'>
              <h1>Home > </h1>
            </div>
              <label htmlFor="Home">Home > </label>
                <div className='link'> Link </div>
                <div className='box1'>
                 <div className='line1'>
                 </div>
                 <div className='bank'>
                 <RiBankFill size="200" />
                 </div>
                 <div className='sub1'> Link Your Bank Account
                 </div>
                 <div className='line2'>
                  </div>
                  <div className='wallet'>
                   <RiWallet3Fill size="200" />
                  </div>
                  <div className='sub2'> Link Your E-Wallet </div>

                <div className='more'>
                           <RiAddBoxFill size="70" />
                          </div>
                 <div className='sub3'> More </div>
             </div>
              <div className='balance'> Balance </div>

              <div className='box2'>
              </div>
              <div className='dollar'>US Dollars</div>
              <div className='sign1'>
              <BiDollar />
              </div>
              <div className='box3'></div>
               <div className='bitcoin'>Bitcoin</div>
               <div className='sign2'>
                     <BiBitcoin />
                     </div>
               <div className='rightsideBar'>
               </div>
                      <div className='graphBar'>
                      </div>
                      <div className='stats'> Statistics </div>

                      <div className='price'> Current Bitcoin Price </div>
                      <div className='line3'> </div>
                      <div className='bitcoinPrice'>
                      <BTCTracker />
                      </div>
            </div>
  );
}
export default Dashboard;

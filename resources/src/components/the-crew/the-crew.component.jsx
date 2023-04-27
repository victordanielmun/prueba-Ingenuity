import React from 'react';

import './index.scss'

export default function TheCrew() {

  return (
<div className='the-crew-background'>
<div className='the-crew'>
      <div className='the-crew-content'>  
        <div className='the-crew-content-text'>
        <p className='title'>The <span>crew.</span></p>
        <p className='text-content'>The Catholic community at Trinity participates in the sacramental life of the church and serves actively as a partner in community building and interreligious dialogue to promote understanding and tolerance on campus.<br /><br />Roman Catholic Campus Ministry is sponsored by the Archdiocese of Hartford Campus Ministry Office and Trinity College’s Office of Spiritual and Religious Life. It brings a vitally important dimension to life at Trinity College.</p>
        </div>
        <button class="the-crew-content-button">LEARN MORE</button>
      </div>
      <div className='the-crew-content-img'>
          <img src="/assets/thecrew/1.png" alt="" />
        </div>
      <div className='the-crew-footer'>
        <div className='the-crew-footer-social'>
        <img src='/assets/thecrew/carafeliz.svg' alt='icon1'/>
        <p className='the-crew-social-number'>165</p>
        <p className='the-crew-social-text'>Happy freshman members</p>
        </div>
        <div className='the-crew-footer-social'>
        <img src='/assets/thecrew/grupo2.svg' alt='icon2'/>
        <p className='the-crew-social-number'>13</p>
        <p className='the-crew-social-text'>Wise Senior members</p>
        </div>
        <div className='the-crew-footer-social'>
        <img src='/assets/thecrew/grupo3.svg' alt='icon3'/>
        <p className='the-crew-social-number'>173</p>
        <p className='the-crew-social-text'>The whole crew</p>
        </div>
      </div>      
    </div>
</div>
  );
}
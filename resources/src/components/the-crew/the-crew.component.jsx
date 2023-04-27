import React from 'react';

import './index.scss'

export default function TheCrew() {

  return (
    <div className='the-crew-background'>
      <div className='the-crew'>
        <div className='the-crew-border'></div>

        <div className='the-crew-body'>
          <div className='the-crew-content'>
            <div className='the-crew-content-text'>
              <p className='title'>The <span>crew.</span></p>
              <p className='text-content'>
                The Catholic community at Trinity participates in the sacramental life of the church and serves actively as a partner in community building and interreligious dialogue to promote understanding and tolerance on campus.
              </p>
              <br />
              <p className='text-content'>
                Roman Catholic Campus Ministry is sponsored by the Archdiocese of Hartford Campus Ministry Office and Trinity College’s Office of Spiritual and Religious Life. It brings a vitally important dimension to life at Trinity College.
              </p>
              <div className="center-icons">
                <button className='the-crew-body-btn-read-more'>LEARN MORE</button>
              </div>
            </div>
          </div>
          <div className='the-crew-content-img'>
            <img src="/assets/thecrew/1.png" alt="" />
          </div>
        </div>

        <div className='the-crew-footer-content'>
          <div className='the-crew-footer'>
            <div className='the-crew-footer-social'>
              <div className='center-icons'>
                <img src='/assets/the-crew/icon-1.svg' alt='icon1' />
              </div>
              <div>
                <p className='the-crew-social-number'>165</p>
                <p className='the-crew-social-text'>Happy freshman <br />members</p>
              </div>
            </div>
            <div className="border-the-crew-icon"></div>
            <div className='the-crew-footer-social'>
              <div className='center-icons'>
                <img src='/assets/the-crew/icon-2.svg' alt='icon2' />
              </div>
              <div>
                <p className='the-crew-social-number'>13</p>
                <p className='the-crew-social-text'>Wise Senior <br />members</p>
              </div>
            </div>
            <div className="border-the-crew-icon"></div>
            <div className='the-crew-footer-social'>
              <div className='center-icons'>
                <img src='/assets/the-crew/icon-3.svg' alt='icon3' />
              </div>
              <div>
                <p className='the-crew-social-number'>173</p>
                <p className='the-crew-social-text'>The whole crew</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
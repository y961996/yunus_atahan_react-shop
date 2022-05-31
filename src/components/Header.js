import React, { Component } from 'react';
import '../styles/Header.css';
import { ReactComponent as Logo } from '../images/logo_transparent.svg';
import { ReactComponent as EmptyCart } from '../images/Icon_EmptyCart.svg';
import { ReactComponent as Arrow } from '../images/Vector.svg';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo className='a-logo' />
        <nav>
          <div className='header_navigation'>
            <div className='header_element'>
              <div className='padding_left'></div>
              <div className='label'>
                <div className='label_text active_header_element'>WOMEN</div>
                <div className='label_border'></div>
              </div>
              <div className='padding_right'></div>
            </div>
            <div className='header_element'>
              <div className='padding_left'></div>
              <div className='label'>
                <div className='label_text'>MEN</div>
                <div className='label_border'></div>
              </div>
              <div className='padding_right'></div>
            </div>
            <div className='header_element'>
              <div className='padding_left'></div>
              <div className='label'>
                <div className='label_text'>KIDS</div>
                <div className='label_border'></div>
              </div>
              <div className='padding_right'></div>
            </div>
          </div>
        </nav>
        <div className='actions'>
          {/* TODO: Make this component*/}
          <div className='layout_spacer'>
            <div className='spacer_xl'></div>
          </div>
          <div className='layout_spacer2'>
          </div>
          <div className='currency_group'>
            <div className='currency_frame'>
              <div className='currency_symbol_text'>$</div>
            </div>
            <Arrow className='currency_arrow_icon'/>
          </div>
          <div className='icon_empty_cart'>
            <EmptyCart className='cart_icon'/>
          </div>
        </div>
      </header>  
    )
  }
}

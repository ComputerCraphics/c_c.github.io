'use strict';

import React, { Component, PropTypes } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: true,
      menuType: ''
    };
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  toggleMenu(type) {
    let menuTypeState = this.state.menuType;
    if (type === menuTypeState) {
      this.setState({
        menuOpened: false,
        menuType: ''
      })
    } else if (type !== menuTypeState && menuTypeState) {
      this.setState({
        menuOpened: true,
        menuType: type
      });
    } else {
      this.setState(prevState => ({
        menuOpened: !prevState.menuOpened,
        menuType: type
      }));
    }
  }

  render() {
    return (
      <div>
        <div className="menu-bar">
          <div className="menu-bar-actions">
            <div className="actions-left">
              <div className="menu-bar-start" onClick={::this.toggleMenu.bind(this, 'projects')}><img src='./public/menu-bar/c-c-start.svg' /></div>
              <div className="menu-shop-start" onClick={::this.toggleMenu.bind(this, 'shop')}><img src='./public/menu-bar/c-c-head.svg' /></div>
            </div>
            <div className="actions-right">
              <div className="actions-right-block">
                <img src='./public/menu-bar/globe-icon.svg' />
                <img src='./public/icons/menu-smile.svg' />
                <span>Last Upd 4/20/2018</span>
              </div>
            </div>
          </div>
        </div>
          <div className={`menu-popup ${this.state.menuOpened === true ? 'active' : ''}`}>
            { this.state.menuOpened === true
              &&
                <div className="menu-popup-content">
                  <div className="menu-popup-items">
                    <ul className="items-list">
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                      <li className="item">
                        <div className="item-image"><img src="" /></div>
                        <span>Safety Shit for Bird App</span>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-popup-actions">

                  </div>
                </div>
            }
          </div>
      </div>
    );
  }
}

export default Menu;

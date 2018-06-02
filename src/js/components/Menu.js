'use strict';

import React, { Component, PropTypes } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: this.props.menuOpened,
      menuType: this.props.menuType,
      menuData: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ menuOpened: nextProps.menuOpened, menuType: nextProps.menuType, menuData: this.props.shopItemsData });
  }

  toggleMenu(type) {
    let menuTypeState = this.state.menuType;
    if (type === 'projects' && type !== menuTypeState) {
      this.setState({
        menuOpened: true,
        menuType: 'projects',
        menuData: this.props.projectsData
      })
    } else if (type === 'shopItems' && type !== menuTypeState) {
      this.setState({
        menuOpened: true,
        menuType: 'shopItems',
        menuData: this.props.shopItemsData
      })
    } else if (type === menuTypeState) {
      this.setState({
        menuOpened: false,
        menuType: '',
        menuData: []
      })
    } else {
      this.setState({
        menuOpened: false,
        menuType: '',
        menuData: []
      })
    }
  }

  render() {
    let imgsIconsArr = Array.from(Array(24).keys());
    return (
      <div>
        <div className="menu-bar">
          <div className="menu-bar-actions">
            <div className="actions-left">
              <div className="menu-bar-start" onClick={::this.toggleMenu.bind(this, 'projects')}><img src='./public/menu-bar/c-c-start.svg' /></div>
              <div className="menu-shop-start"><a href="mailto:contact@computercraphics.com"><img src='./public/icons/mailto_icon.svg' /></a></div>
            </div>
            <div className="actions-right">
              <div className="actions-right-block">
                <a id="location" href="https://www.google.com/maps/place/61+Wyckoff+Ave,+Brooklyn,+NY+11237/@40.705741,-73.9222193,18z/data=!4m5!3m4!1s0x89c25c1d9e5d7723:0x3b89051fdd2b5d1b!8m2!3d40.705741!4d-73.921125" target="_blank"><img src='./public/menu-bar/globe-icon.svg' /></a>
                <img src='./public/icons/menu-smile.svg' />
                <span>Last Upd {this.props.lastUpd}</span>
              </div>
            </div>
          </div>
        </div>
          <div className={`menu-popup ${this.state.menuOpened === true ? 'active' : ''}`}>
            { this.state.menuOpened === true
              &&
                <div className="menu-popup-content">
                  <div className="menu-popup-items">
                    <div className="menu-close" onClick={::this.toggleMenu.bind(this, 'close')}>CLOSE</div>
                    <ul className="items-list">
                      { this.state.menuData.map((item, key) => {
                          if ( item.url !== '' && item.url !== 'about') {
                            return (
                              <li className="item" key={key}>
                                <div className="item-image">
                                  { item.url ? <a href={"?"+item.url}><img src={item.menu_image} /></a> : <img src={item.menu_image} />}
                                </div>
                                  { item.price ? <span>{item.menu_description} – {item.price} – <a href={item.link} target="_blank">Buy</a></span> : <span>{item.menu_description}</span>}
                              </li>
                            )
                          }
                        })
                      }
                    </ul>
                  </div>
                  <div className="menu-popup-actions">
                    <div className="actions-logo"><img src="./public/menu-bar/c-c-actions-logo.svg" alt="" /></div>
                    <div className="update-date">Last Upd {this.props.lastUpd}</div>
                    <div className="actions-icons">
                      <div className="left-col"><img src="./public/menu-bar/actions-icons-left-col.svg" alt="" /></div>
                      <div className="center-col">
                        { imgsIconsArr.map((item, key) => {
                            return (
                              <div className="mini-action" key={key}>
                                { this.props.miniActionsLinks[key]
                                    ?
                                      <a href={this.props.miniActionsLinks[key]}>
                                        <img src={`./public/menu-bar/actions/${item+1}.svg`} alt="" />
                                      </a>
                                    :
                                      <img src={`./public/menu-bar/actions/${item+1}.svg`} alt="" />
                                }
                              </div>
                            )
                          }
                        )}
                      </div>
                      <div className="right-col"><img src="./public/menu-bar/actions-icons-right-col.svg" alt="" /></div>
                    </div>
                    <div className="random-pic"><a target="_blank" href="https://www.instagram.com/dwayne2020/"><img src="./public/menu-bar/random-pic.png" alt="" /></a></div>
                  </div>
                </div>
            }
          </div>
      </div>
    );
  }
}

export default Menu;

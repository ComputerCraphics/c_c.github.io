'use strict';

import React, { Component, PropTypes } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      menuType: '',
      menuData: []
    };
  }

  componentDidMount() {

  }

  componentWillMount() {

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
              <div className="menu-shop-start" onClick={::this.toggleMenu.bind(this, 'shopItems')}><img src='./public/menu-bar/c-c-head.svg' /></div>
            </div>
            <div className="actions-right">
              <div className="actions-right-block">
                <img src='./public/menu-bar/globe-icon.svg' />
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
                    <div className="random-pic"><img src="./public/menu-bar/random-pic.png" alt="" /></div>
                  </div>
                </div>
            }
          </div>
      </div>
    );
  }
}

export default Menu;

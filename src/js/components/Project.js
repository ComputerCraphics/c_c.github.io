'use strict';

import React, { Component, PropTypes } from 'react';

import { posterScrollFunc } from '../vanila.js';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomSticker: Number(this.getCookie('randomSticker'))
    }
  }

  componentDidMount() {
    posterScrollFunc();

    if (this.getCookie('randomSticker')) {
      this.setCookie('randomSticker', Number(this.state.randomSticker) + 1, 30)
    } else {
      this.setCookie('randomSticker', 0, 30)
      this.setState({randomSticker: 0})
    }
  }

  componentWillReceiveProps() {
    posterScrollFunc();
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    if (Number(this.state.randomSticker) >= Number(this.props.stickers.length) - 1) {
      document.cookie = cname + "=" + 0 + ";" + expires + ";path=/";
    } else {
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  }

  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  render() {
    return (
      <div className={"project" + " " + this.props.project.type}>
        { this.props.project.type === 'homepage'
          ?
            <div>
              <div className="video-line">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="videoWrapper">
                <div dangerouslySetInnerHTML={{__html: this.props.project.assets[0]}}></div>
                <div className="video-logo">
                  { typeof(this.props.stickers[Number(this.state.randomSticker)]) === 'object'
                    ?
                      <div className="images-container">
                        <img className="outer" src={this.props.stickers[Number(this.state.randomSticker)][0]} alt="" />
                        <img className="inner" src={this.props.stickers[Number(this.state.randomSticker)][1]} alt="" />
                        <img className="center" src={this.props.stickers[Number(this.state.randomSticker)][2]} alt="" />
                      </div>
                    :
                      <div className="images-container">
                        <img src={this.props.stickers[this.state.randomSticker]} alt="" />
                      </div>
                  }
                </div>
              </div>
              <div className="scroll-text" onClick={::this.props.projectSwitcher.bind(this, 'next')}>
                <p>CLICK FOR MORE</p>
                <img src="./public/icons/arrow-long.svg" alt="" />
              </div>
              <div className="video-logo-mobile">
                { typeof(this.props.stickers[Number(this.state.randomSticker)]) === 'object'
                  ?
                    <div className="images-container">
                      <img className="outer" src={this.props.stickers[Number(this.state.randomSticker)][0]} alt="" />
                      <img className="inner" src={this.props.stickers[Number(this.state.randomSticker)][1]} alt="" />
                      <img className="center" src={this.props.stickers[Number(this.state.randomSticker)][2]} alt="" />
                    </div>
                  :
                    <div className="images-container">
                      <img src={this.props.stickers[this.state.randomSticker]} alt="" />
                    </div>
                }
              </div>
            </div>
          :
          <div>
            <div className="text-wrapper">
              <div className="description" dangerouslySetInnerHTML={{__html: this.props.project.description}}>
              </div>
              <div className="tags">{this.props.project.tags}</div>
              { this.props.project.project_link !== ''
                ?
                  <div className="project-link">
                    <a href={this.props.project.project_link}>{this.props.project.link_name}</a>
                  </div>
                :
                  <div></div>
              }
            </div>
            <div className={"poster-wrapper" + " " + this.props.project.centered}>
              <div className="poster">
                { this.props.project.assets.map((asset, key) =>
                  asset.includes('iframe') ? <div className="poster-video" dangerouslySetInnerHTML={{__html: asset}} key={key}></div> : <img src={asset} key={key} alt="" />
                )}
              </div>
              <div className="poster-scroll">
                <div className="poster-scroll-top"><img src="./public/icons/arrow-top.svg" alt="" /></div>
                <div className="poster-scroll-bottom"><img src="./public/icons/arrow-bottom.svg" alt="" /></div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Project;

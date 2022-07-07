import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg'
import {FormattedMessage} from 'react-intl'
// import a1 from '../../assets/133537-khamchuyenkhoa.png'

import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';
const cx = classNames.bind(styles);

//         <div className={cx('')}></div>


class HomeHeader extends Component {

    render() {
        return (
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('nav')}>

                        <div className={cx('logo-menu')}>
                            <i className="fas fa-list-ul"></i>
                            <div className={cx('logo-nav')}></div>
                            <img src={logo} alt=""/>
                        </div>

                        <div className={cx('content-nav')}>
                            <a href="#/" className={cx('text-nav')}>
                                <h4><FormattedMessage id="home-nav.specialist"/></h4>
                                <span><FormattedMessage id="home-nav.search-docter"/></span>
                            </a>

                            <a href="#/" className={cx('text-nav')}>
                                <h4><FormattedMessage id="home-nav.package"/></h4>
                                <span><FormattedMessage id="home-nav.generality"/></span>
                            </a>

                            <a href="#/" className={cx('text-nav')}>
                                <h4><FormattedMessage id="home-nav.health-facilities"/></h4>
                                <span><FormattedMessage id="home-nav.search-specialist"/></span>
                            </a>

                            <a href="#/" className={cx('text-nav')}>
                                <h4><FormattedMessage id="home-nav.doctor"/></h4>
                                <span><FormattedMessage id="home-nav.find-docter"/></span>
                            </a>

                            
                        </div>

                        <div className={cx('help')}>
                            <div className={cx('language')}>
                                <a href="#/">ENG</a>
                                <span>|</span>
                                <a className={cx('active')} href="#/">VIE</a>
                            </div>
                            
                        
                            <div className={cx('list-help')}>
                                <i className="far fa-question-circle"></i>
                                <a href="#/" className={cx('help')}>Hỗ trợ</a>
                            </div>
                        </div>

                    </div> 
                </div>

                <div className={cx('banner')}>
                    <div className={cx('content-banner')}>
                        <h4><FormattedMessage id="banner.title-one"/></h4>
                        <h3><FormattedMessage id="banner.title-tow"/></h3>

                        <form action="" className={cx('search-banner')}>
                            <button type="submit">
                                <i className="fas fa-search"></i>
                            </button>

                            <input type="text" placeholder="Đặt lịch khám bệnh..." className={cx('input')}/>
                        </form>
                    </div>

                    <div className={cx('list-options')}>
                        <div className={cx('content-options')}>

                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.special"/></p>
                            </a>

                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.remote"/></p>
                            </a>

                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.general"/></p>
                            </a>

                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.medical"/></p>
                            </a>


                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.mental"/></p>
                            </a>


                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.dental"/></p>
                            </a>


                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.surgery"/></p>
                            </a>


                            <a href="/" className={cx('options-item')}>
                                <div className={cx('img')}></div>
                                <p><FormattedMessage id="banner.medical-products"/></p>
                            </a>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

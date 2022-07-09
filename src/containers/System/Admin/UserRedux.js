
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { default as useServices} from '../../../services/useServices'
import  * as actions  from '../../../store/actions'
import { languages } from '../../../utils/constant';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

import classNames from 'classnames/bind';
import styles from './UserRedux.module.scss';
const cx = classNames.bind(styles);

//         <div className={cx('')}></div>


class UserRedux extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImage: '',
            isOpen: false
        }
    }

    async componentDidMount(){
        this.props.getGenderStart('gender')
        this.props.getPositionStart('position')
        this.props.getRoleStart('role')
    }


    // Hàm này sẽ check hiện tại và quá khứ mỗi lần componet đc render hàm này đc gọi
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps.genderRedux)  // Quá khứ của genderRedux
        console.log(this.props.genderRedux) // Hiệjn tại của genderRedux
        
        if(prevProps.genderRedux !== this.props.genderRedux){
            this.setState({
                genderArr: this.props.genderRedux
            })
        }

        if(prevProps.positionRedux !== this.props.positionRedux){
            this.setState({
                positionArr: this.props.positionRedux
            })
        }

        if(prevProps.roleRedux !== this.props.roleRedux){
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    handleOnchaneImage = (e) => {
        let file = e.target.files[0]
        if(file){
            file.src = URL.createObjectURL(file) 
            this.setState({
                previewImage: file.src
            })
        }
    }


    handleClickShowImg (e) {
        e.preventDefault()
        this.setState({
            isOpen: true
        })
    }
  
    render() {
        let genders = this.state.genderArr
        let language = this.props.language
        let isLoadingGender = this.props.isLoadingGender
        let roles =  this.state.roleArr
        let positions = this.state.positionArr
        let isOpen = this.state.isOpen

        return (
            <>
                <div className={cx('container')}>
                    <div className={cx('title')}>
                        <FormattedMessage id="manage-user.manage-redux"/>
                    </div>

                    <h3>{isLoadingGender === true ? 'Loading Gender' : ''}</h3>
                    <div className={cx('body')}>
                        <h5><FormattedMessage id="manage-user.add"/></h5>
                            <div className={cx('row')}>
                                <div className={cx('col-12')}>
                                    <form  className={cx('form')} action="/post-crud" method="post">

                                        <div className={cx('item-input')}>
                                            <div className={cx('form-group col-md-5')}>
                                                <label> <FormattedMessage id="manage-user.email"/></label>
                                                <input type="email" name="email" className={cx("form-control")} placeholder="Email"/>
                                            </div>

                                            <div className={cx("form-group col-md-6")}>
                                                <label> <FormattedMessage id="manage-user.password"/></label>
                                                <input type="password" name="password" className={cx('form-control')} placeholder="Password"/>
                                            </div>
                                        </div>

                                        <div className={cx("item-input")}>
                                            <div className={cx("form-group col-md-5")}>
                                                <label> <FormattedMessage id="manage-user.fristName"/></label>
                                                <input type="text" name="firstName" className={cx('form-control')} placeholder="First Name"/>
                                            </div>

                                            <div className={cx("form-group col-md-6")}>
                                                <label> <FormattedMessage id="manage-user.lastName"/></label>
                                                <input type="text" name="lastName" className={cx('form-control')} placeholder="Last Name"/>
                                            </div>
                                        </div>

                                        <div className={cx('item-input')}>
                                            <div className={cx('form-group col-md-5')}>
                                                <label> <FormattedMessage id="manage-user.address"/></label>
                                                <input type="address" name="address"className={cx('form-control')} placeholder="Address"/>
                                            </div>

                                            <div className={cx('form-group col-md-6')}>
                                                <label> <FormattedMessage id="manage-user.positionld"/></label>
                                                <select name="positionld" className={cx('form-control')}>
                                                    {positions && positions.length > 0 &&
                                                        positions.map((item, index)=> {
                                                            return (<option key={index} value={item.key}>
                                                                        {language === languages.VI ? item.valueVi : item.valueEn}
                                                                    </option>                                                               
                                                            )
                                                        })
                                                    }   
                                                </select>
                                            </div>
                                        </div>

                                        <div className={cx('item-input')}>
                                            <div className={cx("form-group col-md-5")}>
                                                <label> <FormattedMessage id="manage-user.role"/></label>
                                                <select name="roleId" className={cx('form-control')}>
                                                    {roles && roles.length > 0 &&
                                                        roles.map((item, index)=> {
                                                            return (<option key={index} value={item.key}>
                                                                        {language === languages.VI ? item.valueVi : item.valueEn}
                                                                    </option>                                                               
                                                            )
                                                        })
                                                    }   
                                                </select>
                                            </div>

                                            <div className={cx('form-group col-md-6')}>
                                                <label> <FormattedMessage id="manage-user.phone"/></label>
                                                <input type="text" name="phoneNumber"className={cx('form-control')} placeholder="Phone Number"/>
                                            </div>
                                        </div>

                                        <div className={cx("item-input")}>
                                            <div className={cx("form-group col-md-5")}>
                                                <label> <FormattedMessage id="manage-user.gender"/></label>
                                                <select name="gender" className={cx('form-control')}>
                                                    {genders && genders.length > 0 &&
                                                        genders.map((item, index)=> {
                                                            return (<option key={index} value={item.key}>
                                                                        {language === languages.VI ? item.valueVi : item.valueEn}
                                                                    </option>                                                               
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div className={cx("form-group col-md-6")}>
                                                <label> <FormattedMessage id="manage-user.avata"/></label>
                                                <input type="file" name="file"className={cx('form-control')} placeholder="Avata"
                                                    onChange={(e) => this.handleOnchaneImage(e)}
                                                />
                                                <div className={cx("preview-image")} >
                                                    {this.state.previewImage ? <img  onClick={(e) => this.handleClickShowImg(e)} src={this.state.previewImage} alt="Preview"/> : ''}
                                                </div>
                                            </div>

                                        </div>

                                        <br></br>
                                        <button type="submit" className={cx("btn btn-primary")}><FormattedMessage id="manage-user.save"/></button>
                                    </form>
                                </div>
                            </div>
                        
                    </div>

                    {isOpen === true && (
                        <Lightbox
                            mainSrc={this.state.previewImage}
                            onCloseRequest={() => this.setState({ isOpen: false })}
    
                        />
                    )}
                </div>
            </>
        )
    }
}


// Nhận dl trả về từ redux
const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.position,
        roleRedux: state.admin.roleId,
        isLoadingGender:  state.admin.isLoadingGender
    };
};


// Gửi action đi
const mapDispatchToProps = dispatch => {
    return {
        // Tạo 1 hàm gọi đến actions có tên là fetchGenderStart ta đã định nghĩa
        getGenderStart: (inputGender) =>  dispatch(actions.fetchGenderStart(inputGender)),
        getPositionStart: (inputPosition) =>  dispatch(actions.fetchPositionStart(inputPosition)),
        getRoleStart: (inputRole) =>  dispatch(actions.fetchRoleStart(inputRole))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

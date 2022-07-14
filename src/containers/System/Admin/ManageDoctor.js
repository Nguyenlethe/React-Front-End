


import React, { Component } from 'react';
import { connect } from 'react-redux';
import  * as actions  from '../../../store/actions'
import { languages} from '../../../utils/constant';
import {CRUD_ACTIONS} from '../../../utils/constant'
// import { toast } from 'react-toastify';


import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite'; 
import 'react-markdown-editor-lite/lib/index.css';
// import {getDetailInfoDoctor} from '../../../services/useServices'
import {default as useServices} from '../../../services/useServices'


import Select from 'react-select';


import classNames from 'classnames/bind';
import styles from './TabelManageUsers.module.scss';
const cx = classNames.bind(styles);



// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

  


class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            contentMarkdown: '',
            contentHtml: '',
            selectedDoctor: '',
            description: '',
            listDoctors: [],
            hasOldData: false
        }
    }


    // Hàm của thư viện markdown
    handleEditorChange = ({ html, text }) => {
        // console.log('handleEditorChange', html, text);
        this.setState({ 
            contentMarkdown:text,
            contentHtml: html
        })
    }


    // Hàm của thư viện react-select
    handleChange = async (selectedDoctor) => {
        let res = await useServices.getDetailInfoDoctor(selectedDoctor.value)
        console.log(res.data.data.Markdown)
        if(res.data.errCode === 0 && res.data.data.Markdown && res.data.data.Markdown.contentHtml !== null){
            let markdown = res.data.data.Markdown
            this.setState({
                selectedDoctor: selectedDoctor,
                id: selectedDoctor.value,
                contentHtml: markdown.contentHtml,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description === null ? '' : markdown.description,
                hasOldData: true
            })
        }else{
            this.setState({
                selectedDoctor: selectedDoctor,
                id: selectedDoctor.value,
                contentHtml: '',
                contentMarkdown:'',
                description: '',
                hasOldData: false
            })
        }
      
    };


    saveContentMarkDown = () => {
        let {hasOldData} = this.state
        this.props.createDetailDoctor({
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
            ...this.state
        })

        this.setState({
            id: '',
            contentMarkdown: '',
            contentHtml: '',
            selectedDoctor: '',
            description: '',
            hasOldData: false
        })
    }


    handleOnchaneDesc = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    componentDidMount() {
        this.props.fetchAllDoctor()
    }

    handleEditBuildData = () => {
        let doctorsData = []
        let listDoctors = this.props.allDoctor
        listDoctors.forEach((item, index) => {
            let doctor = {}
            let fullNameVi = `${item.firstName} ${item.lastName}`
            let fullNameEn = `${item.lastName} ${item.firstName}`
            doctor.label = this.props.language === languages.EN ? fullNameEn : fullNameVi
            doctor.value = item.id
            doctorsData.push(doctor)
        })
        return doctorsData
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.allDoctor !== this.props.allDoctor){
            let dataSelect = this.handleEditBuildData()
            this.setState({
                listDoctors: dataSelect
            })
        }
        if (prevProps.language !== this.props.language){
            let dataSelect = this.handleEditBuildData()
            this.setState({
                listDoctors: dataSelect
            })
        }
    }
   

    render() {

        const { selectedDoctor, hasOldData } = this.state;

        let {listDoctors} = this.state

        // console.log(listDoctors)

        return (
            <div className={cx('markdown')}>
                <br></br>
                <h2>Tạo Thêm Thông Tin Doctor</h2>
                <br></br>

                <div className={cx('markdown-from')}>
                    <div>
                        <p>Thông Tin Giới Thiệu</p>
                        <textarea className={cx('markdown-from-textarea')} 
                            onChange={(e) => this.handleOnchaneDesc(e)}
                            value={this.state.description}
                        >
                        </textarea>
                    </div>


                    <div style={{marginBottom: '12px'}}>
                        <p>Chọn Bác Sĩ</p>
                        <Select
                            value={selectedDoctor}
                            onChange={this.handleChange}
                            options={listDoctors}
                        />
                    </div>
                </div>

                <MdEditor
                    style={{ height: '500px' }} 
                    renderHTML={text => mdParser.render(text)} 
                    onChange={this.handleEditorChange} 
                    value={this.state.contentMarkdown}
                />

                <br></br>
                <button 
                    type="button" 
                    className={hasOldData === true ? 'btn btn-warning' : 'btn btn-primary'}
                    onClick={(e) => this.saveContentMarkDown()}>
                    {hasOldData === true ? 'Cập Nhật Thông Tin' : 'Thêm Thông Tin'}
                </button>
            </div>
        )
    }
}
           

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctor: state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctorStart()),
        createDetailDoctor: (data) =>  dispatch(actions.createDetailDoctorStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor)
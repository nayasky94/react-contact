import React from 'react';

export default class ContactDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEdit:false,
            name:'',
            phone:''
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleToggle(){
        if(this.state.isEdit){
            this.props.onEdit(this.state.name, this.state.phone);
        }else{
            if(!this.props.isSelected){
                return;
            }
        }
        this.setState({
            isEdit:!this.state.isEdit,
            name:this.props.contact.name,
            phone:this.props.contact.phone
        })
    }

    handleChange(e){
        const nextState = {};
        nextState[e.target.name] = e.target.value;

        this.setState(nextState);
    }

    handleKeyPress(e){
        if(e.charCode === 13){
            this.handleToggle();
        }
    }

    render(){
        const detail = (
                    <div>
                        <p>{this.props.contact.name}</p>
                        <p>{this.props.contact.phone}</p>
                    </div>
                    );
        const edit = (
            <div>
            <p>
                <input
                    type="test"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
            </p>
            <p>
                <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
            </p>
        </div>
        )
        const view = this.state.isEdit ? edit : detail;
        const blank = (<div>not selected</div>);

        return(
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <button onClick={this.handleToggle}>{this.state.isEdit ? "OK" : "Edit"}</button>
                <button onClick={this.props.onRemove}>Remove</button>
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contact:{
        name:'',
        phone:''
    }
}
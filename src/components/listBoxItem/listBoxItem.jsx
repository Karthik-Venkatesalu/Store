import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./listBoxItem.css";
import { ListBoxItemData } from "./ListBoxItemData";

export class ListBoxItem extends Component {
    
    constructor(props){
        super(props);

        this.resetListBoxSelectedItemStyle = this.resetListBoxSelectedItemStyle.bind(this);
        this.onListBoxItemClicked = this.onListBoxItemClicked.bind(this);
    }

    state = {
        className: "list-box-item-container"      
    };

    onListBoxItemClicked(data){
        this.props.onClick(data);
        // this.resetListBoxSelectedItemStyle();

        // let currentItem = document.getElementById(this.props.data.id);
        // currentItem.className = 'list-box-item-selected';
    }

    resetListBoxSelectedItemStyle(){
        let selectedItems = document.getElementsByClassName('list-box-item-selected');

        if(selectedItems.length > 0){
            console.log("reset style");
            selectedItems[0].className = 'list-box-item-container';
        }
    }

    render(){
        
        const { data, selectedItem } = this.props;

        return (
            <div 
                id={data.id}
                key={data.key}
                className={selectedItem && data.key === selectedItem.key ? 'list-box-item-selected' : 'list-box-item-container'}
                onClick = {e => this.onListBoxItemClicked(data)}
                >
                <span className="list-box-item-text">{data.text}</span>
            </div>
        );
    }
}

ListBoxItem.propTypes = {
    data: PropTypes.instanceOf(ListBoxItemData),
  };
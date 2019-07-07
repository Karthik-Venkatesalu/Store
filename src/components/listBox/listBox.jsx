import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./listBox.css";
import { ListBoxItem } from '../listBoxItem/listBoxItem';

export default class CustomListBox extends Component {

    render(){
        
        const { listBoxItems, onListBoxItemClicked, selectedItem } = this.props;

        return (
            <div className="list-box-container">
                {
                    listBoxItems.map(listBoxItem => {
                        return (
                            <ListBoxItem selectedItem={selectedItem} data={listBoxItem} onClick={onListBoxItemClicked}/>
                        );
                    })
                }    
            </div>
        );
    }
}

CustomListBox.propTypes = {
    listBoxItems: PropTypes.array.isRequired,
  };
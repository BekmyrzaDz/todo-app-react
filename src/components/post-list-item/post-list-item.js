import React, { Component } from "react";
import "./post-list-items.sass";

export default class PostListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //     like: false,
  //   };
  //   this.onImportant = this.onImportant.bind(this);
  //   this.onLike = this.onLike.bind(this);
  // }

  // onImportant() {
  //   this.setState(({ important }) => ({
  //     important: !important,
  //   }));
  // }

  // onLike() {
  //   this.setState(({ like }) => ({
  //     like: !like,
  //   }));
  // }

  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props;
    // const { important, like } = this.state;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-star btn-sm"
            type="button"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router';

class Head extends Component {

  static propTypes = {
    logout: PropTypes.func,
  }

  remove(e) {
    e.preventDefault();
  }

  render() {
    const { blob, params } = this.props;
    return (
      <div className="leaf-post-head">
        <Row>
          <Col span="7" >
            <Link to={`_posts/`} className="back">
              <Icon type="left" />
            </Link>
          </Col>
          <Col span="10" className="loading">
            <h1 className="title">
              {params.name}
            </h1>
          </Col>
          <Col span="7" className="action">
            <div className="action-list">
              <div className="action-list-toggle">
                <Icon type="ellipsis" />
              </div>
              <ul className="action-list-dropdown">
                <li className="item"><a onClick={this.remove.bind(this)}><Icon type="delete" /> 删除</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Head;
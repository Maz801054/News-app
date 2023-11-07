import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl } = this.props;
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> {title}... </h5>
                <p className="card-text"> {discription}...</p>
                <a
                  rel="noreferrer"
                  href={newsUrl}
                  target={"_blank"}
                  className="btn btn-dark btn-sm"
                >
                  Rede more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

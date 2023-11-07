import React, { Component } from "react";
import NewsItem from "../Componants/NewsItem";

export class News extends Component {
  // articles = [
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  constructor() {
    super();
    console.log("hello i am a consturctor from news componants");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3f3b436a3c54f84bbbd9dfb456d3733&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  hendlePreClick = async () => {
    console.log("hendle preview click is on ");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3f3b436a3c54f84bbbd9dfb456d3733&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  hendleNextClick = async () => {
    console.log("hendle Next click is on ");

    if (this.state.page + 1 > this.props.pageSize) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3f3b436a3c54f84bbbd9dfb456d3733&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize} `;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="text-center mt-2">Letest news</h1>
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    discription={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="contaienr d-flex justify-content-between mt-5">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.hendlePreClick}
              disabled={this.state.page <= 1}
            >
              &larr; Prview
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.hendleNextClick}
              disabled={this.state.page >= this.props.pageSize}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

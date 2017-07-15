import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

let qs = [
  'Why did you start this session?',
  'What are you craving with right now?',
  'On a scale of 1-3, with 3 being strongest, how strong is this craving?',
  'Think about how your body is feeling. Focus in on each feeling as it comes, and put it into words. Continue until the craving weakens enough for you to put it aside. Separate phrases with a comma.'
];

class ResultsPage extends Component {
  constructor() {
    super();
    this.renderCsvData = this.renderCsvData.bind(this);
    this.renderSession = this.renderSession.bind(this);
  }

  renderCsvData() {
    let responseData = [
      this.props.responses[0],
      this.props.responses[1],
      this.props.responses[2],
      this.props.responses[3]
    ];
    return [qs, responseData];
  }

  renderSession() {
    return this.props.responses.map((data, i) => {
      if (i === 3) {
        return (
          <div key={i} className="card card-outline-primary text-xs-center">
            <div className="card-block">
              <blockquote className="card-blockquote">
                <h3>{this.props.questions[i].step}</h3>
                <h6><em>{this.props.questions[i].text}</em></h6>
                {data.map((feeling, i) => (
                  <span key={i} className="badge badge-success">{feeling}</span>
                ))}
              </blockquote>
            </div>
          </div>
        )
      } else {
        return (
          <div key={i} className="card card-outline-primary text-xs-center">
            <div className="card-block">
              <blockquote className="card-blockquote">
                <h3>{this.props.questions[i].step}</h3>
                <h6><em>{this.props.questions[i].text}</em></h6>
                <p>{data}</p>
              </blockquote>
            </div>
          </div>
        )
      }
    });
  }

  render() {
    return (
      <div>
        {this.props.name ?
            (
              <div className="content container block-center">
                <h3 className="text-center">Congratulations, {this.props.name}!</h3>
                <p className="text-center">You made it through your craving.</p>
                <p className="text-center">See a summary of your session below.</p>
                <div className="text-center">
                  <CSVLink
                    data={this.renderCsvData()}
                    filename={"session-log.csv"}
                    className="btn btn-primary"
                    target="_blank">
                      Download Session Log
                  </CSVLink>
                </div>
                {this.renderSession()}
              </div>
            )
          :
            (
              <div className="content container text-center">
                <h3>Oops!</h3>
                <p>It looks like we don't have any session data for you.</p>
                <a href="/user" className="btn btn-large btn-primary">Start Session</a>
              </div>
            )
        }
      </div>
    );
  }
}

export default ResultsPage;

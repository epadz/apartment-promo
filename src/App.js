import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: {
        val: '',
        changed: false,
      },
      lname: {
        val: '',
        changed: false,
      },
      email: {
        val: '',
        changed: false,
      },
      isStudent: false,
      isOldEnough: false,
      isSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleCB = this.handleToggleCB.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: {...this.state[e.target.name], val: e.target.value}});
  }

  handleBlur(e) {
    this.setState({[e.target.name]: {...this.state[e.target.name], changed: true}});
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  handleToggleCB(cb) {
    this.setState({[cb]: !this.state[cb]});
  }

  render() {
    let now = new Date();
    let startDate = new Date("March 1, 2018");
    let endDate = new Date("June 1, 2018");
    return (
        <div className="App">
          <div className="content">
            <div className="first">
              <div className="mainTitle">
                The Year Without Rent Sweepstakes
              </div>
              <div className="subTitle">
                By E.Z. Properties
              </div>
            </div>
            <div className="section">
              <p>
                For the past twenty five years, E.Z. Properties has been a cornerstone of the community. Since our
                founding,
                Wash U students have been some of our best and most reliable customers. That's why we decided to hold
                our first Year Without Rent Sweepstakes.
                One lucky winner will receive free rent for a year for one of our 250 apartments in the St. Louis area.
                All you need to enter is a valid Wash U email address so we can make sure you're a student!
                There's no catch - we promise! Just fill out the form below to enter.
              </p>
            </div>
            {
              now < startDate
                  ? <div className="first">
                    <div className="mainTitle">
                      You're a bit early!
                    </div>
                    <div className="subTitle">
                      The entry period begins April 1st
                    </div>
                    <div className="social">
                      <div className="socialIcon">
                        <svg id="ei-sc-facebook-icon" viewBox="0 0 50 50" width="100%" height="100%"><path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path></svg>
                      </div>
                      <div className="socialIcon">
                        <svg id="ei-sc-twitter-icon" viewBox="0 0 50 50" width="100%" height="100%"><path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"></path></svg>
                      </div>
                      <div className="socialIcon">
                        <svg id="ei-envelope-icon" viewBox="0 0 50 50" width="100%" height="100%"><path opacity=".9" d="M31.796 24.244l9.97 9.97-1.415 1.414-9.97-9.97z"></path><path opacity=".9" d="M18.278 24.287l1.414 1.414-9.9 9.9-1.414-1.41z"></path><path d="M25 29.9c-1.5 0-3.1-.6-4.2-1.8L8.3 15.7l1.4-1.4 12.5 12.5c1.6 1.6 4.1 1.6 5.7 0l12.5-12.5 1.4 1.4-12.6 12.5c-1.1 1.1-2.7 1.7-4.2 1.7z"></path><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path></svg>
                      </div>
                    </div>
                  </div>
                  : now > endDate
                  ? <div className="first">
                    <div className="mainTitle">
                      Sorry!
                    </div>
                    <div className="subTitle">
                      The entry period ended June 1st
                    </div>
                    <div className="social">
                      <div className="socialIcon">
                        <svg id="ei-sc-facebook-icon" viewBox="0 0 50 50" width="100%" height="100%"><path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path></svg>
                      </div>
                      <div className="socialIcon">
                        <svg id="ei-sc-twitter-icon" viewBox="0 0 50 50" width="100%" height="100%"><path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"></path></svg>
                      </div>
                      <div className="socialIcon">
                        <svg id="ei-envelope-icon" viewBox="0 0 50 50" width="100%" height="100%"><path opacity=".9" d="M31.796 24.244l9.97 9.97-1.415 1.414-9.97-9.97z"></path><path opacity=".9" d="M18.278 24.287l1.414 1.414-9.9 9.9-1.414-1.41z"></path><path d="M25 29.9c-1.5 0-3.1-.6-4.2-1.8L8.3 15.7l1.4-1.4 12.5 12.5c1.6 1.6 4.1 1.6 5.7 0l12.5-12.5 1.4 1.4-12.6 12.5c-1.1 1.1-2.7 1.7-4.2 1.7z"></path><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path></svg>
                      </div>
                    </div>
                  </div>
                  : this.state.isSubmitted ?
                  <div className="first">
                    <div className="mainTitle">
                      Thanks!
                    </div>
                    <div className="subTitle">
                      We'll announce the winner June 15th
                    </div>
                    <div className="social">
                      <div className="socialIcon">
                        <svg id="ei-sc-facebook-icon" viewBox="0 0 50 50" width="100%" height="100%"><path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path></svg>
                      </div>
                      <div className="socialIcon">
                        <svg id="ei-sc-twitter-icon" viewBox="0 0 50 50" width="100%" height="100%"><path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"></path></svg>
                      </div>
                      <div className="socialIcon">
                        <svg id="ei-envelope-icon" viewBox="0 0 50 50" width="100%" height="100%"><path opacity=".9" d="M31.796 24.244l9.97 9.97-1.415 1.414-9.97-9.97z"></path><path opacity=".9" d="M18.278 24.287l1.414 1.414-9.9 9.9-1.414-1.41z"></path><path d="M25 29.9c-1.5 0-3.1-.6-4.2-1.8L8.3 15.7l1.4-1.4 12.5 12.5c1.6 1.6 4.1 1.6 5.7 0l12.5-12.5 1.4 1.4-12.6 12.5c-1.1 1.1-2.7 1.7-4.2 1.7z"></path><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path></svg>
                      </div>
                    </div>
                  </div> :
                  <div className="signup">
                    <div className="mainTitle">
                      Sign Up
                    </div>
                    <div className="form">

                      <div className="formRow">
                        <div className="input">
                          <div className="inputLabel">First Name</div>
                          <input name="fname" onChange={this.handleChange} onBlur={this.handleBlur}
                                 value={this.state.fname.val} className="inputMain"/>
                          {
                            this.state.fname.changed && this.state.fname.val === "" &&
                            <div className="helpText">this field is required</div>
                          }
                        </div>
                        <div className="input">
                          <div className="inputLabel">Last Name</div>
                          <input name="lname" onChange={this.handleChange} onBlur={this.handleBlur}
                                 value={this.state.lname.val} className="inputMain"/>
                          {
                            this.state.lname.changed && this.state.lname.val === "" &&
                            <div className="helpText">this field is required</div>
                          }
                        </div>
                      </div>

                      <div className="formRow">
                        <div className="input">
                          <div className="inputLabel">Email</div>
                          <input name="email" onChange={this.handleChange} onBlur={this.handleBlur}
                                 value={this.state.email.val} className="inputMain"/>
                          {
                            this.state.email.changed && (
                                this.state.email.val === ""
                                    ? <div className="helpText">this field is required</div>
                                    : !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@wustl.edu$/.exec(this.state.email.val)
                                    && <div className="helpText">you must have a valid @wustl.edu email address</div>
                            )
                          }
                        </div>
                      </div>

                      <div className="formRow">
                        <div className="checkbox" onClick={() => this.handleToggleCB('isStudent')}>
                          <div className="cbBox">{this.state.isStudent && <div className="cbBoxCheck"/>}</div>
                          <div className="cbText">I am a current student at Washington University</div>
                        </div>
                      </div>

                      <div className="formRow">
                        <div className="checkbox" onClick={() => this.handleToggleCB('isOldEnough')}>
                          <div className="cbBox">{this.state.isOldEnough && <div className="cbBoxCheck"/>}</div>
                          <div className="cbText">I am over the age of 18</div>
                        </div>
                      </div>

                      <div className="formRow" style={{justifyContent: 'center'}}>
                        <div className={
                          this.state.isStudent &&
                          this.state.isOldEnough &&
                          this.state.fname.val !== "" &&
                          this.state.lname.val !== "" &&
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@wustl.edu$/.exec(this.state.email.val)
                              ? "button" : "buttonDisabled"
                        } onClick={
                          this.state.isStudent &&
                          this.state.isOldEnough &&
                          this.state.fname.val !== "" &&
                          this.state.lname.val !== "" &&
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@wustl.edu$/.exec(this.state.email.val) ?
                              this.handleSubmit : () => {
                              }}>
                          Submit
                        </div>
                      </div>

                    </div>
                  </div>
            }
            <div className="section">
              <h1>Rules</h1>
              <p>
                The The Year Without Rent Sweepstakes is only open to current students at Washington University in St.
                Louis over the age of 18.
                Entries will be accepted between 4/1/2018 and 6/1/2018. Limit one entry per person.
                The drawing will be held 6/7/2018 and the winner will be announced 6/15/2018.
                <br/><br/>
                <span>&copy; 2018, E.Z. Properties, inc.</span>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import homekey from '../etc/images/homekey.svg';
import peopleIcon from '../etc/images/Peopleicon.svg';
import '../etc/css/dashboard.css';
import Chart from "react-apexcharts";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
          
      series: [40,33,50],
      
      options: {
        labels: ['APPROVED', 'DECLINED', 'PENDING'],
        chart: {
          width: '1vw',
          type: 'donut',
        },
        colors:['#5EC1DD','#4489BA','#496B84'],
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient",
          colors:['#5EC1DD','#4489BA','#496B84'],
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 320,
          options: {
            chart: {
              width: 240
            },
            legend: {
              position: 'bottom'
            }
          }
        },{
          breakpoint: 400,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        },
        {
          breakpoint: 1300,
          options: {
            chart: {
              width: 300
            }
          }
        }]
      },
    
    
    };
  }
  
  render() {
   
    return (
      <div className="dignity-routeritem">
        <div className="dignity-dashboard-heading">
          <img src={homekey} alt ="Dashboard" />
          <span>Dashboard</span>
        </div>
        <div className="dashboard-item-outer">
          <div className="dashboard-item">
            <div className="dashboard-item-inner ">
              <div className="dashboard-item-graph-heading-section bg-fill-white inner-box-box-shadow">
                <div className="dashboard-item-graph-heading">
                  <div className="dashboard-item-graph-heading-numeric">
                    <div className="img-container">
                      <img src={peopleIcon} alt = "Number of Early responders"/>
                    </div>

                    <div className="no-font">
                      <span className="dashboard-item-graph-heading-numeric-val">
                        57
															</span>
                    </div>
                  </div>
                </div>
                <div className="dashboard-item-graph-heading-subtext">
                  Number of Early responders
												</div>
              </div>
              <div className="dashboard-item-graph-body-section bg-fill-white">
              <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="donut" width={380} />
              </div>
              <div className = "dashboard-graph-underheading">
                  Number of Applications
              </div>
              </div>
            </div>
          </div>
          <div className="dashboard-item">
            <div className="dashboard-item-inner bg-fill-white inner-box-box-shadow">
              <div className="dashboard-profession-heading-second">
                <span className="dashboard-profession-heading-number">3</span>
                <span className="dashboard-profession-heading-title">PROFESSIONS</span>
              </div>
              <div className="dashboard-seperator-outer">
                <div className="dashboard-seperator-inner">
                </div>
              </div>
              <div className="dashboard-question-outer">
              			<div className="dashboard-question-items-row">
               
													<div className="dashboard-question-item-headings-row-outer">
														<div className="dashboard-question-item-heading">
                      LAWYER
														</div>
														<div className="dashboard-question-item-heading">
                      DOCTOR
														</div>
                    <div className="dashboard-question-item-heading">
                      REAL ESTATE AGENT
														</div>

                  </div>
													<div className="dashboard-question-item-numeric-row">
														<div className="dashboard-question-numeric-item">
                      <div className="dashboard-question-item-circle">
                        <div className="dashboard-question-circle-text-table">
                          <div className="dashboard-question-circle-text-table-cell">
                            <div className="dashboard-circle-numeric">
                              28
																		</div>
                            <div className="dashboard-circle-question-value">
                              QUESTIONS
																		</div>
                          </div>
                        </div>
                      </div>
                    </div>
														<div className="dashboard-question-numeric-item">
                      <div className="dashboard-question-item-circle">
                        <div className="dashboard-question-circle-text-table">
                          <div className="dashboard-question-circle-text-table-cell">
                            <div className="dashboard-circle-numeric">
                              37
																		</div>
                            <div className="dashboard-circle-question-value">
                              QUESTIONS
																		</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-question-numeric-item">
                      <div className="dashboard-question-item-circle">
                        <div className="dashboard-question-circle-text-table">
                          <div className="dashboard-question-circle-text-table-cell">
                            <div className="dashboard-circle-numeric">
                              43
																		</div>
                            <div className="dashboard-circle-question-value">
                              QUESTIONS
																		</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
												</div>

              </div>
              <div className="dashboard-question-forms">
                Question Forms
											</div>
            </div>
          </div>
          <div className="dashboard-item">
            <div className="dashboard-item-inner inner-box-box-shadow bg-fill-white  dashboard-application-detail-outer">
              <div className="dashboard-profession-heading-third dashboard-application-detail-heading">
                <span className="dashboard-profession-heading-title">DAILY UPDATE</span>
              </div>
              <div className="dashboard-button-update-outer">
                <button className="dashboard-update-btn dsh-btn-1">
                  <span>5 </span>
                  <span>NEW Registrations</span>
                </button>
                <button className="dashboard-update-btn dsh-btn-2">
                  <span>8 </span>
                  <span>NEW Applications</span>
                </button>
                <button className="dashboard-update-btn dsh-btn-3">
                  <span>3 </span>
                  <span>Notifications</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}
export default Dashboard;

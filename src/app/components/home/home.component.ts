import { Component, OnInit, ViewChild } from '@angular/core';
import { UserLogModel } from 'src/app/models/user-log.model';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  userLogModel: UserLogModel;
  userLogs: Array<UserLogModel> = [];
  activeUsers: Array<UserLogModel> = [];
  isValid = true;
  groupByHour: any;
groupHourKeys = [];
  constructor(private  datePipe: DatePipe) {
    this.userLogModel = new UserLogModel();
   }

  ngOnInit() {
  }

  /**
   * @params userLogModel
   * This method is called on submit button click for adding the User Event.
   * User data is pushed into an array 'userLogs' for displaying it in a table
   */
  submitLog(userLogModel: UserLogModel) {
    console.log('u', userLogModel);
    userLogModel.timeStamp = Date.now(); 
    this.userLogs.push(userLogModel);
    this.userLogModel = new UserLogModel();
  }

  /**
   * This method is called on countActiveUsers button click.
   * This maintains the unique user's log by grouping them according to hour(time) event is captured
   */
  countActiveUsers() {
    let obj = {};
    this.userLogs.forEach(data => {
     data.hour = this.datePipe.transform(data.timeStamp, 'hh a');
    });
     this.groupByHour = _.groupBy(this.userLogs, 'hour');
     this.groupHourKeys = Object.keys( this.groupByHour );
    for (var key of this.groupHourKeys) {
    this.groupByHour[key] = this.removeDuplicates( this.groupByHour [key], 'userId');
  }
}

/**
 * This method removes the duplicate user and returns the unique array of users
 * @param arr 
 * @param key 
 */
 removeDuplicates(arr: Array<UserLogModel>, key: string) {
 const users = arr.filter((obj, index) => {
  return arr.map(obj => obj[key]).indexOf(obj[key]) === index;
});
return users;
}

  }

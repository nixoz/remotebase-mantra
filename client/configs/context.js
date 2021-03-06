import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import _ from 'lodash';
import {DocHead} from 'meteor/kadira:dochead';
import {Counts} from 'meteor/tmeasday:publish-counts';
import Case from 'case';
import {Accounts} from 'meteor/accounts-base';
import {setCompanyMeta} from '/client/modules/core/libs/seo_helpers';

export default function () {
  return {
    Meteor,
    Accounts,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    _,
    DocHead,
    Case,
    Counts,
    setCompanyMeta
  };
}

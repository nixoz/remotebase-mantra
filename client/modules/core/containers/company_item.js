import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CompanyItem from '../components/company_item.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  navToCompany: actions.companies.navToCompany
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CompanyItem);

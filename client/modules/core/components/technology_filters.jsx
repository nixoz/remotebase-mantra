import React from 'react';
import classnames from 'classnames';

import Filter from './filter.jsx';


const TechnologyFilters = ({updateFilter, technologyFilters}) => {
  function handleUpdate(key, val) {
    updateFilter(key, val);
  }

  return (
    <div className={classnames('filter-context-group')}>
      <h3 className="filter-definition">Technologies</h3>

      <div className="hidden-sm-up">
        <div className="filter-group">
          <div className="filter-row">
            <Filter label="Node.js"
              isSelected={technologyFilters['Node.js']}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.["Node.js"]' />
            <Filter label="MySQL"
              isSelected={technologyFilters.MySQL}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.MySQL' />
            <Filter label="MongoDB"
              isSelected={technologyFilters.MongoDB}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.MongoDB' />
            <Filter label="Javascript"
              isSelected={technologyFilters.Javascript}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.Javascript' />
          </div>
          <div className="filter-row">
            <Filter label="Ruby on Rails"
              isSelected={technologyFilters['Ruby on Rails']}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.["Ruby on Rails"]' />
            <Filter label="Java"
              isSelected={technologyFilters.Java}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.Java' />
            <Filter label="Python"
              isSelected={technologyFilters.Python}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.Python' />
            <Filter label="PHP"
              isSelected={technologyFilters.PHP}
              updateFilter={handleUpdate.bind(this)}
              filterKey='technologies.PHP' />
          </div>
        </div>
      </div>

      <div className="hidden-sm-down">
        <div className="filter-group">
          <Filter label="Node.js"
            isSelected={technologyFilters['Node.js']}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.["Node.js"]' />
          <Filter label="MySQL"
            isSelected={technologyFilters.MySQL}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.MySQL' />
          <Filter label="MongoDB"
            isSelected={technologyFilters.MongoDB}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.MongoDB' />
          <Filter label="Javascript"
            isSelected={technologyFilters.Javascript}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.Javascript' />
          <Filter label="Ruby on Rails"
            isSelected={technologyFilters['Ruby on Rails']}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.["Ruby on Rails"]' />
          <Filter label="Java"
            isSelected={technologyFilters.Java}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.Java' />
          <Filter label="Python"
            isSelected={technologyFilters.Python}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.Python' />
          <Filter label="PHP"
            isSelected={technologyFilters.PHP}
            updateFilter={handleUpdate.bind(this)}
            filterKey='technologies.PHP' />
        </div>
      </div>
    </div>
  );
};

export default TechnologyFilters;

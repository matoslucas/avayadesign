

const NeoTable = () => {
  return (
    <div className="component-container__example">
      <div style="position: relative;">
        <div className="neo-table__actions">
          <div className="neo-table__actions--left">
            <div className="neo-dropdown neo-dropdown--onhover">
              <button className="neo-btn neo-btn-primary neo-btn-primary--primary neo-dropdown__link-header">
                Action
              </button>
              <div className="neo-dropdown__content">
                <div className="neo-dropdown__item neo-dropdown--onhover">
                  <a tabindex="0" className="neo-dropdown__link">
                    Something else
                  </a>
                  <div className="neo-dropdown__content">
                    <a tabindex="0" className="neo-dropdown__link">
                      Action
                    </a>
                    <a
                      tabindex="0"
                      className="neo-dropdown__link neo-icon-error-filled"
                    >
                      Another action
                    </a>
                    <div className="neo-dropdown__item">
                      <a tabindex="0" className="neo-dropdown__link">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <a className="neo-dropdown__link neo-dropdown--disabled">
                  Disabled action
                </a>
                <a tabindex="0" className="neo-dropdown__link">
                  Separator link
                </a>
                <hr className="neo-dropdown__separator" />
                <a tabindex="0" className="neo-dropdown__link">
                  <figure
                    className="neo-avatar neo-avatar--small"
                    data-initials="SM"
                  ></figure>
                  Another action
                </a>
              </div>
            </div>
          </div>
          <div className="neo-table__actions--right">
            <form className="neo-form">
              <div className="neo-form-control neo-input-icon">
                <div className="neo-input-group">
                  <div className="neo-input-icon__wrapper neo-input-editable__wrapper">
                    <span className="neo-icon-search"></span>
                    <input className="neo-input" placeholder="Smart search" />
                    <button
                      aria-label="clear search"
                      className="neo-input-editable__close neo-icon-end"
                      tabindex="-1"
                    ></button>
                  </div>
                </div>
              </div>
            </form>
            <button
              className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-filter"
              aria-label="filter"
            ></button>
            <button
              className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-refresh"
              aria-label="refresh"
            ></button>
            <button
              className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-more"

              aria-label="more"
            ></button>
          </div>
        </div>
        <div
          className="neo-table__filters hide"
          style="transition: max-height 0.9s ease 0s;"
        >
          <form className="neo-form neo-form--inline">
            <div className="neo-form-control">
              <div className="neo-input-group">
                <label for="input-name-grid3" aria-label="name">
                  Choose one
                </label>
                <div className="neo-multiselect" tabindex="-1" role="listbox">
                  <div className="neo-multiselect__header">Select one</div>
                  <div className="neo-multiselect__content">
                    <ul>
                      <li disabled="">Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                      <li>Option 4</li>
                      <li>Option 5</li>
                      <li>Option 6</li>
                      <li>Option 7</li>
                      <li>Option 8</li>
                      <li>Option 9</li>
                      <li>Option 10</li>
                      <li>Option 11</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="neo-form-control">
              <div className="neo-input-group">
                <label for="input-name-grid3" aria-label="name">
                  Choose one
                </label>
                <div className="neo-multiselect" tabindex="-1" role="listbox">
                  <div className="neo-multiselect__header">Select one</div>
                  <div className="neo-multiselect__content">
                    <ul>
                      <li disabled="">Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                      <li>Option 4</li>
                      <li>Option 5</li>
                      <li>Option 6</li>
                      <li>Option 7</li>
                      <li>Option 8</li>
                      <li>Option 9</li>
                      <li>Option 10</li>
                      <li>Option 11</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="neo-form-control">
              <div className="neo-input-group">
                <label for="input-name-grid3" aria-label="name">
                  Choose one
                </label>
                <div className="neo-multiselect" tabindex="-1" role="listbox">
                  <div className="neo-multiselect__header">Select one</div>
                  <div className="neo-multiselect__content">
                    <ul>
                      <li disabled="">Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                      <li>Option 4</li>
                      <li>Option 5</li>
                      <li>Option 6</li>
                      <li>Option 7</li>
                      <li>Option 8</li>
                      <li>Option 9</li>
                      <li>Option 10</li>
                      <li>Option 11</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="neo-form-control">
              <div className="neo-input-group">
                <label for="input-name-grid3" aria-label="name">
                  Choose one
                </label>
                <div className="neo-multiselect" tabindex="-1" role="listbox">
                  <div className="neo-multiselect__header">Select one</div>
                  <div className="neo-multiselect__content">
                    <ul>
                      <li disabled="">Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                      <li>Option 4</li>
                      <li>Option 5</li>
                      <li>Option 6</li>
                      <li>Option 7</li>
                      <li>Option 8</li>
                      <li>Option 9</li>
                      <li>Option 10</li>
                      <li>Option 11</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="neo-form-control">
              <div className="neo-input-group">
                <label for="input-name-grid3" aria-label="name">
                  Choose one
                </label>
                <div className="neo-multiselect" tabindex="-1" role="listbox">
                  <div className="neo-multiselect__header">Select one</div>
                  <div className="neo-multiselect__content">
                    <ul>
                      <li disabled="">Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                      <li>Option 4</li>
                      <li>Option 5</li>
                      <li>Option 6</li>
                      <li>Option 7</li>
                      <li>Option 8</li>
                      <li>Option 9</li>
                      <li>Option 10</li>
                      <li>Option 11</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <table className="neo-table">
          <thead>
            <tr>
              <th className="check">
                <input
                  className="neo-check"
                  type="checkbox"
                  id="checkAll"
                  role="checkbox"
                  aria-checked="false"
                  value="checkAll"
                />
                <label for="checkAll"></label>
              </th>
              <th></th>
              <th className="filters">
                <div
                  className="neo-multiselect"
                  tabindex="0"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  First Name<span className="neo-icon-chevron-down"></span>
                  <div className="neo-multiselect__content">
                    <ul role="menu">
                      <li role="menuitemcheckbox" aria-checked="false" className="">
                        A - Z
                      </li>
                      <li role="menuitemcheckbox" aria-checked="false" className="">
                        Z - A
                      </li>
                      <li role="menuitemcheckbox" aria-checked="false" className="">
                        Filter By
                      </li>
                    </ul>
                  </div>
                </div>
              </th>
              <th>Number</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Chip</th>
              <th>Icon</th>
              <th>Button</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  className="neo-check"
                  type="checkbox"
                  id="fullTableCheck1"
                  role="checkbox"
                  aria-checked="false"
                  value="fullTableCheck1"
                />
                <label for="fullTableCheck1"></label>
              </td>
              <td></td>
              <td>
                <a>Thomas</a>
              </td>
              <td className="number">12345</td>
              <td>thomas@shelby.ltd</td>
              <td>
                <figure className="neo-avatar" data-initials="TA"></figure>
              </td>
              <td>
                <div
                  className="neo-chip neo-chip--default"
                  aria-label="Placeholder"
                >
                  Placeholder
                </div>
              </td>
              <td>
                <span className="neo-icon-error" aria-label="error"></span>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-refresh"
                  aria-label="refresh"
                ></button>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-more"
                  aria-label="more"
                ></button>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="neo-check"
                  type="checkbox"
                  id="fullTableCheck2"
                  role="checkbox"
                  aria-checked="false"
                  value="fullTableCheck2"
                />
                <label for="fullTableCheck2"></label>
              </td>
              <td>
                <button
                  aria-expanded="false"
                  aria-label="Expand Michael"
                  className="expand neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-chevron-right"
                ></button>
              </td>
              <td>Michael</td>
              <td className="number">12345</td>
              <td>michael@shelby.ltd</td>
              <td>
                <figure className="neo-avatar" data-initials="MD"></figure>
              </td>
              <td>
                <div
                  className="neo-chip neo-chip--default"
                  aria-label="Placeholder"
                >
                  Placeholder
                </div>
              </td>
              <td>
                <span className="neo-icon-error" aria-label="error"></span>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-refresh"
                  aria-label="refresh"
                ></button>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-more"
                  aria-label="more"
                ></button>
              </td>
            </tr>
            <tr className="neo-table__nested--wrapper">
              <td colspan="100">
                <div className="neo-table__nested">
                  <table className="neo-table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Chip</th>
                        <th>Icon</th>
                        <th>Button</th>
                        <th>More</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Thomas</td>
                        <td className="number">12345</td>
                        <td>thomas@shelby.ltd</td>
                        <td>
                          <figure
                            className="neo-avatar"
                            data-initials="TA"
                          ></figure>
                        </td>
                        <td>
                          <div
                            className="neo-chip neo-chip--default"
                            aria-label="Placeholder"
                          >
                            Placeholder
                          </div>
                        </td>
                        <td>
                          <span
                            className="neo-icon-error"
                            aria-label="error"
                          ></span>
                        </td>
                        <td>
                          <button
                            className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-refresh"
                            aria-label="refresh"
                          ></button>
                        </td>
                        <td>
                          <button
                            className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-more"
                            aria-label="more"
                          ></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="neo-check"
                  type="checkbox"
                  id="fullTableCheck4"
                  role="checkbox"
                  aria-checked="false"
                  value="fullTableCheck4"
                />
                <label for="fullTableCheck4"></label>
              </td>
              <td></td>
              <td>
                <a>Martin</a>
              </td>
              <td className="number">12345</td>
              <td>martin@shelby.ltd</td>
              <td>
                <figure className="neo-avatar" data-initials="MD"></figure>
              </td>
              <td>
                <div
                  className="neo-chip neo-chip--default"
                  aria-label="Placeholder"
                >
                  Placeholder
                </div>
              </td>
              <td>
                <span className="neo-icon-error" aria-label="error"></span>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-refresh"
                  aria-label="refresh"
                ></button>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-more"
                  aria-label="more"
                ></button>
              </td>
            </tr>
            <tr className="disabled">
              <td>
                <input
                  className="neo-check"
                  type="checkbox"
                  id="tablecheckbox6"
                  role="checkbox"
                  aria-checked="false"
                  value="tablecheckbox6"
                />
                <label for="tablecheckbox6"></label>
              </td>
              <td></td>
              <td>Claire</td>
              <td className="number">12345</td>
              <td>claire@shelby.ltd</td>
              <td>
                <figure className="neo-avatar" data-initials="CM"></figure>
              </td>
              <td>
                <div
                  className="neo-chip neo-chip--default"
                  aria-label="Placeholder"
                >
                  Placeholder
                </div>
              </td>
              <td>
                <span className="neo-icon-error" aria-label="error"></span>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-refresh"
                  aria-label="refresh"
                ></button>
              </td>
              <td>
                <button
                  className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info neo-icon-more"
                  aria-label="more"
                ></button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="sheet-hide neo-slide neo-sheet neo-table__filters--sheet">
          <div className="neo-sheet__header">
            <div className="neo-sheet__header--left">
              <h4>Filter By</h4>
            </div>
            <div className="neo-sheet__header--right">
              <button
                className="neo-btn neo-btn-secondary neo-btn-secondary--primary"
                role="button"
                title="Cancel"
              >
                Cancel
              </button>
              <button
                className="neo-btn neo-btn-primary neo-btn-primary--primary"
                role="button"
                title="Apply"
              >
                Apply
              </button>
            </div>
          </div>
          <form className="neo-form">
            <div className="neo-form-control">
              <div className="neo-input-group">
                <label for="checkGroupExample" aria-label="Addon on the right">
                  Content
                </label>
                <input
                  className="neo-check"
                  type="checkbox"
                  id="expandable"
                  role="checkbox"
                  aria-checked="false"
                  value="expandable"
                />
                <label for="expandable">Expandable</label>
              </div>
            </div>
          </form>
          <div className="neo-table__filters--sheet__footer">
            <button
              className="neo-btn neo-btn--wide neo-btn-tertiary neo-btn-tertiary--alert"
              role="button"
              title="Apply"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      <div className="neo-pagination__row">
        <div>
          <p>500-510</p>
        </div>
        <nav className="neo-pagination" role="navigation" aria-label="pagination">
          <button
            className="neo-btn-square neo-pagination__arrow-btn neo-icon-arrow-left"
            role="button"
          ></button>
          <ul className="neo-pagination__list">
            <li>
              <button
                className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info"
                role="button"
              >
                1
              </button>
            </li>
            <li>
              <span className="neo-pagination__dots">…</span>
            </li>
            <li>
              <button
                className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info"
                role="button"
              >
                49
              </button>
            </li>
            <li>
              <button
                className="neo-btn-square neo-btn-square-secondary neo-btn-square-secondary--info"
                role="button"
              >
                50
              </button>
            </li>
            <li>
              <button
                className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info"
                role="button"
              >
                51
              </button>
            </li>
            <li>
              <span className="neo-pagination__dots">…</span>
            </li>
            <li>
              <button
                className="neo-btn-square neo-btn-square-tertiary neo-btn-square-tertiary--info"
                role="button"
              >
                99
              </button>
            </li>
          </ul>
          <button
            className="neo-btn-square neo-pagination__arrow-btn neo-icon-arrow-right"
            role="button"
          ></button>
        </nav>
        <div>
          <form className="neo-form neo-form--inline">
            <label>Show:</label>
            <div className="neo-form-control">
              <div className="neo-multiselect" tabindex="0" role="listbox">
                <div className="neo-multiselect__header">10</div>
                <div className="neo-multiselect__content">
                  <ul>
                    <li disabled="">Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                    <li>Option 5</li>
                    <li>Option 6</li>
                    <li>Option 7</li>
                    <li>Option 8</li>
                    <li>Option 9</li>
                    <li>Option 10</li>
                    <li>Option 11</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NeoTable;
      
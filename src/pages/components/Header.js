import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-microchip" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Chip Carnes</h1>
        <p>
          I create engaging applications that connect companies to audiences and
          users, using story-driven data applications to aid business decisions.
          I am passionate about assimilating and connecting technical concepts,
          and I focus on building applications that communicate them to broad
          audiences in an easily consumable and implementable manner.
        </p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

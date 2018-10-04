import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/chipcarnes/"
            className="icon fa-linkedin"
            target="_blank"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/musicionary"
            className="icon fa-github"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Musicionary"
            className="icon fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer

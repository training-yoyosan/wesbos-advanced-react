import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <Nav />
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

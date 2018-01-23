'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _renderIf = require('render-if');

var _renderIf2 = _interopRequireDefault(_renderIf);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/samundra/projects/simple-forum/src/components/Navbar.js';


var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;
var Navbar = function Navbar(_ref) {
  var user = _ref.user,
      handleMenuClick = _ref.handleMenuClick;
  return _react2.default.createElement(_antd.Menu, {
    onClick: handleMenuClick,
    theme: 'dark',
    mode: 'horizontal',
    style: { lineHeight: '64px' },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Home'))), (0, _renderIf2.default)(!user.email)(_react2.default.createElement(_antd.Menu.Item, { key: '2', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_link2.default, { href: '/login', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Login')))), (0, _renderIf2.default)(!user.email)(_react2.default.createElement(_antd.Menu.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_link2.default, { href: '/register', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Register')))), (0, _renderIf2.default)(user.email)(_react2.default.createElement(_antd.Menu.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_link2.default, { href: '/add-post', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, '+ Add Post')))), (0, _renderIf2.default)(user.email)(_react2.default.createElement(SubMenu, {
    title: _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, _react2.default.createElement(_antd.Icon, { type: 'setting', __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }), user.first_name, ' ', user.last_name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(MenuItemGroup, { title: 'Options', __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: 'setting:1', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'Logout')))));
};
Navbar.propTypes = {
  user: _propTypes2.default.object.isRequired,
  handleMenuClick: _propTypes2.default.func.isRequired
};
exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInJlbmRlcklmIiwiUHJvcFR5cGVzIiwiTWVudSIsIkljb24iLCJMaW5rIiwiU3ViTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJOYXZiYXIiLCJ1c2VyIiwiaGFuZGxlTWVudUNsaWNrIiwibGluZUhlaWdodCIsImVtYWlsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU07O0FBQ2YsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxVQUFVLFdBQWhCLEFBQXFCO0FBQ3JCLElBQU0sZ0JBQWdCLFdBQXRCLEFBQTJCO0FBQzNCLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO01BQUgsQUFBUyx1QkFBVCxBQUFTO3lCQUN0QixBQUFDO2FBQUQsQUFDVyxBQUNUO1dBRkYsQUFFUSxBQUNOO1VBSEYsQUFHTyxBQUNMO1dBQU8sRUFBRSxZQUpYLEFBSVMsQUFBYzs7Z0JBSnZCO2tCQUFBLEFBTUU7QUFORjtBQUNFLEdBREYsa0JBTUcsY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FSTixBQU1FLEFBQ0UsQUFDRSxBQUdILG1DQUFTLENBQUMsS0FBVixBQUFlLHVCQUNiLGNBQUQsV0FBQSxBQUFNLFFBQUssS0FBWCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FkUixBQVdHLEFBQ0MsQUFDRSxBQUNFLEFBSUwscUNBQVMsQ0FBQyxLQUFWLEFBQWUsdUJBQ2IsY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQXJCUixBQWtCRyxBQUNDLEFBQ0UsQUFDRSxBQUlMLHdDQUFTLEtBQVQsQUFBYyx1QkFDWixjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBNUJSLEFBeUJHLEFBQ0MsQUFDRSxBQUNFLEFBSUwsMENBQVMsS0FBVCxBQUFjLHVCQUNaLGNBQUQ7MkJBRUksY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSxrQkFDRSxBQUFDLDRCQUFLLE1BQU4sQUFBVztrQkFBWDtvQkFERixBQUNFLEFBQ0M7QUFERDthQURGLEFBRVEsWUFBYSxVQUp6QixBQUVJLEFBRTBCOztnQkFKOUI7a0JBQUEsQUFRRTtBQVJGO0FBQ0UsR0FERixrQkFRRyxjQUFELGlCQUFlLE9BQWYsQUFBcUI7Z0JBQXJCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRyxjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtnQkFBZjtrQkFBQTtBQUFBO0tBM0NLLEFBQ2IsQUFnQ0csQUFDQyxBQVFFLEFBQ0U7QUEzQ1Y7QUFpREEsT0FBQSxBQUFPO1FBQ0Msb0JBQUEsQUFBVSxPQURDLEFBQ00sQUFDdkI7bUJBQWlCLG9CQUFBLEFBQVUsS0FGN0IsQUFBbUIsQUFFZSxBQUVsQztBQUptQixBQUNqQjtrQkFHRixBQUFlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zYW11bmRyYS9wcm9qZWN0cy9zaW1wbGUtZm9ydW0ifQ==
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
  var user = _ref.user;
  return _react2.default.createElement(_antd.Menu, { theme: 'dark', mode: 'horizontal', style: { lineHeight: '64px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Home'))), (0, _renderIf2.default)(!user.email)(_react2.default.createElement(_antd.Menu.Item, { key: '2', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_link2.default, { href: '/login', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Login')))), (0, _renderIf2.default)(!user.email)(_react2.default.createElement(_antd.Menu.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_link2.default, { href: '/register', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Register')))), (0, _renderIf2.default)(user.email)(_react2.default.createElement(_antd.Menu.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_link2.default, { href: '/add-post', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, '+ Add Post')))), (0, _renderIf2.default)(user.email)(_react2.default.createElement(SubMenu, {
    title: _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, _react2.default.createElement(_antd.Icon, { type: 'setting', __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }), user.first_name, ' ', user.last_name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(MenuItemGroup, { title: 'Options', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: 'setting:1', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, 'Logout')))));
};
Navbar.propTypes = {
  user: _propTypes2.default.object.isRequired
};
exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwicmVuZGVySWYiLCJQcm9wVHlwZXMiLCJNZW51IiwiSWNvbiIsIkxpbmsiLCJTdWJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsIk5hdmJhciIsInVzZXIiLCJsaW5lSGVpZ2h0IiwiZW1haWwiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNOztBQUNmLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sVUFBVSxXQUFoQixBQUFxQjtBQUNyQixJQUFNLGdCQUFnQixXQUF0QixBQUEyQjtBQUMzQixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLFlBQUgsQUFBRzt5QkFDaEIsQUFBQyw0QkFBSyxPQUFOLEFBQVksUUFBTyxNQUFuQixBQUF3QixjQUFhLE9BQU8sRUFBRSxZQUE5QyxBQUE0QyxBQUFjO2dCQUExRDtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRyxjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhOLEFBQ0UsQUFDRSxBQUNFLEFBR0gsbUNBQVMsQ0FBQyxLQUFWLEFBQWUsdUJBQ2IsY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVRSLEFBTUcsQUFDQyxBQUNFLEFBQ0UsQUFJTCxxQ0FBUyxDQUFDLEtBQVYsQUFBZSx1QkFDYixjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBaEJSLEFBYUcsQUFDQyxBQUNFLEFBQ0UsQUFJTCx3Q0FBUyxLQUFULEFBQWMsdUJBQ1osY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQXZCUixBQW9CRyxBQUNDLEFBQ0UsQUFDRSxBQUlMLDBDQUFTLEtBQVQsQUFBYyx1QkFDWixjQUFEOzJCQUVJLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLEtBQUEsa0JBQ0UsQUFBQyw0QkFBSyxNQUFOLEFBQVc7a0JBQVg7b0JBREYsQUFDRSxBQUNDO0FBREQ7YUFERixBQUVRLFlBQWEsVUFKekIsQUFFSSxBQUUwQjs7Z0JBSjlCO2tCQUFBLEFBUUU7QUFSRjtBQUNFLEdBREYsa0JBUUcsY0FBRCxpQkFBZSxPQUFmLEFBQXFCO2dCQUFyQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUE7QUFBQTtLQXRDSyxBQUNiLEFBMkJHLEFBQ0MsQUFRRSxBQUNFO0FBdENWO0FBNENBLE9BQUEsQUFBTztRQUNDLG9CQUFBLEFBQVUsT0FEbEIsQUFBbUIsQUFDTSxBQUV6QjtBQUhtQixBQUNqQjtrQkFFRixBQUFlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zYW11bmRyYS9wcm9qZWN0cy9zaW1wbGUtZm9ydW0ifQ==
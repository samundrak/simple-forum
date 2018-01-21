'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _RegisterForm = require('../components/forms/RegisterForm');

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/samundrak/projects/simple-forum/src/pages/register.js?entry';


var Register = function (_React$Component) {
  (0, _inherits3.default)(Register, _React$Component);

  function Register() {
    (0, _classCallCheck3.default)(this, Register);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).call(this));

    _this.state = {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Register, [{
    key: 'handleSubmit',
    value: function handleSubmit(validateFields) {
      return function (event) {
        event.preventDefault();
        validateFields(function (err, values) {
          console.log(err, values);
        });
        console.log(event);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Register')), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_antd.Col, { span: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_antd.Col, { span: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_antd.Card, { title: 'Register', style: { width: 300 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_RegisterForm2.default, { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))), _react2.default.createElement(_antd.Col, { span: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }))));
    }
  }]);

  return Register;
}(_react2.default.Component);

exports.default = Register;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiUm93IiwiQ29sIiwiQ2FyZCIsIkhlYWQiLCJMYXlvdXQiLCJSZWdpc3RlckZvcm0iLCJSZWdpc3RlciIsInN0YXRlIiwiZm9ybSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsaWRhdGVGaWVsZHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGFuZGxlU3VibWl0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQUssQUFBSzs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWtCOzs7Ozs7Ozs7SUFFbkIsQTtvQ0FDSjs7c0JBQWM7d0NBQUE7O29JQUVaOztVQUFBLEFBQUs7O29CQUNHLEFBQ1EsQUFDWjttQkFGSSxBQUVPLEFBQ1g7ZUFISSxBQUdHLEFBQ1A7a0JBUFEsQUFFWixBQUFhLEFBQ0wsQUFJTTtBQUpOLEFBQ0o7QUFGUyxBQUNYO1dBT0g7Ozs7O2lDLEFBQ1ksZ0JBQWdCLEFBQzNCO2FBQU8sVUFBQSxBQUFDLE9BQVUsQUFDaEI7Y0FBQSxBQUFNLEFBQ047dUJBQWUsVUFBQSxBQUFDLEtBQUQsQUFBTSxRQUFXLEFBQzlCO2tCQUFBLEFBQVEsSUFBUixBQUFZLEtBQVosQUFBaUIsQUFDbEI7QUFGRCxBQUdBO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFORCxBQU9EOzs7OzZCQUNRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiw4QkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDJCQUFJLE1BQUwsQUFBVztvQkFBWDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLDJCQUFJLE1BQUwsQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw0QkFBSyxPQUFOLEFBQVksWUFBVyxPQUFPLEVBQUUsT0FBaEMsQUFBOEIsQUFBUztvQkFBdkM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQWEsVUFBVSxLQUF4QixBQUE2QjtvQkFBN0I7c0JBSk4sQUFFRSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLEFBQUMsMkJBQUksTUFBTCxBQUFXO29CQUFYO3NCQWJSLEFBQ0UsQUFDRSxBQUlFLEFBT0UsQUFLVDtBQUxTOzs7Ozs7RUFuQ1csZ0JBQU0sQSxBQTJDN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVnaXN0ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2FtdW5kcmFrL3Byb2plY3RzL3NpbXBsZS1mb3J1bSJ9
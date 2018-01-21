'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/samundrak/projects/simple-forum/src/components/forms/RegisterForm.js';


var FormItem = _antd.Form.Item;

var RegisterForm = function RegisterForm(_ref) {
  var onSubmit = _ref.onSubmit,
      _ref$form = _ref.form,
      getFieldDecorator = _ref$form.getFieldDecorator,
      validateFields = _ref$form.validateFields;
  return _react2.default.createElement(_antd.Form, { className: 'register-form', onSubmit: onSubmit(validateFields), __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, getFieldDecorator('first_name', {
    rules: [{ required: true, message: 'Please input your firstname!' }]
  })(_react2.default.createElement(_antd.Input, { placeholder: 'First Name', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }))), _react2.default.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, getFieldDecorator('last_name', {
    rules: [{ required: true, message: 'Please input your lastname!' }]
  })(_react2.default.createElement(_antd.Input, { placeholder: 'Last Name', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }))), _react2.default.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, getFieldDecorator('email', {
    rules: [{ required: true, message: 'Please input your email!' }]
  })(_react2.default.createElement(_antd.Input, { placeholder: 'email', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))), _react2.default.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, getFieldDecorator('password', {
    rules: [{ required: true, message: 'Please input your Password!' }]
  })(_react2.default.createElement(_antd.Input, {
    prefix: _react2.default.createElement(_antd.Icon, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }),
    type: 'password',
    placeholder: 'Password',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))), _react2.default.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(_antd.Button, { type: 'primary', htmlType: 'submit', className: 'register-form-button', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'Register'), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement(_link2.default, { href: '/login', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Have Account, Login Now!'))));
};

RegisterForm.propTypes = {
  form: _propTypes2.default.object.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};
var WrappedRegisterForm = _antd.Form.create()(RegisterForm);
exports.default = WrappedRegisterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2Zvcm1zL1JlZ2lzdGVyRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxpbmsiLCJGb3JtIiwiSWNvbiIsIklucHV0IiwiQnV0dG9uIiwiRm9ybUl0ZW0iLCJJdGVtIiwiUmVnaXN0ZXJGb3JtIiwib25TdWJtaXQiLCJmb3JtIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJ2YWxpZGF0ZUZpZWxkcyIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIldyYXBwZWRSZWdpc3RlckZvcm0iLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFNLEFBQU87Ozs7Ozs7QUFFNUIsSUFBTSxXQUFXLFdBQWpCLEFBQXNCOztBQUV0QixJQUFNLGVBQWUsU0FBZixBQUFlLG1CQUFBO01BQUEsQUFDbkIsZ0JBRG1CLEFBQ25CO3VCQURtQixBQUVuQjtNQUZtQixBQUVYLDhCQUZXLEFBRVg7TUFGVyxBQUVRLDJCQUZSLEFBRVE7eUJBRTNCLEFBQUMsNEJBQUssV0FBTixBQUFnQixpQkFBZ0IsVUFBVSxTQUExQyxBQUEwQyxBQUFTO2dCQUFuRDtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSx1QkFDRyxBQUFrQjtXQUNWLENBQUMsRUFBRSxVQUFGLEFBQVksTUFBTSxTQUQzQixBQUFnQyxBQUN4QixBQUFDLEFBQTJCO0FBREosQUFDL0IscUJBQ0MsQUFBQyw2QkFBTSxhQUFQLEFBQW1CO2dCQUFuQjtrQkFKUCxBQUNFLEFBQ0csQUFFRSxBQUVMO0FBRks7R0FBQSxxQkFFSixjQUFEOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSx1QkFDRyxBQUFrQjtXQUNWLENBQUMsRUFBRSxVQUFGLEFBQVksTUFBTSxTQUQzQixBQUErQixBQUN2QixBQUFDLEFBQTJCO0FBREwsQUFDOUIscUJBQ0MsQUFBQyw2QkFBTSxhQUFQLEFBQW1CO2dCQUFuQjtrQkFUUCxBQU1FLEFBQ0csQUFFRSxBQUVMO0FBRks7R0FBQSxxQkFFSixjQUFEOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSx1QkFDRyxBQUFrQjtXQUNWLENBQUMsRUFBRSxVQUFGLEFBQVksTUFBTSxTQUQzQixBQUEyQixBQUNuQixBQUFDLEFBQTJCO0FBRFQsQUFDMUIscUJBQ0MsQUFBQyw2QkFBTSxhQUFQLEFBQW1CO2dCQUFuQjtrQkFkUCxBQVdFLEFBQ0csQUFFRSxBQUVMO0FBRks7R0FBQSxxQkFFSixjQUFEOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSx1QkFDRyxBQUFrQjtXQUNWLENBQUMsRUFBRSxVQUFGLEFBQVksTUFBTSxTQUQzQixBQUE4QixBQUN0QixBQUFDLEFBQTJCO0FBRE4sQUFDN0IscUJBRUEsQUFBQzs0QkFDUyxBQUFDLDRCQUFLLE1BQU4sQUFBVyxRQUFPLE9BQU8sRUFBRSxPQUEzQixBQUF5QixBQUFTO2tCQUFsQztvQkFEVixBQUNVLEFBQ1I7QUFEUTtLQUFBO1VBRFYsQUFFTyxBQUNMO2lCQUhGLEFBR2M7O2dCQUhkO2tCQXBCTixBQWdCRSxBQUNHLEFBR0MsQUFPSjtBQVBJO0FBQ0UsR0FERixxQkFPSCxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLDhCQUFPLE1BQVIsQUFBYSxXQUFVLFVBQXZCLEFBQWdDLFVBQVMsV0FBekMsQUFBbUQ7Z0JBQW5EO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBR0E7O2dCQUFBO2tCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQXJDYSxBQUluQixBQTJCRSxBQUtFLEFBQ0U7QUFyQ1I7O0FBMkNBLGFBQUEsQUFBYTtRQUNMLG9CQUFBLEFBQVUsT0FETyxBQUNBLEFBQ3ZCO1lBQVUsb0JBQUEsQUFBVSxLQUZ0QixBQUF5QixBQUVFO0FBRkYsQUFDdkI7QUFHRixJQUFNLHNCQUFzQixXQUFBLEFBQUssU0FBakMsQUFBNEIsQUFBYyxBQUMxQztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlZ2lzdGVyRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zYW11bmRyYWsvcHJvamVjdHMvc2ltcGxlLWZvcnVtIn0=
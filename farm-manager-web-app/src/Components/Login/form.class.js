import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import AuthService from '../../Common/Services/AuthService'

export default class LoginFormClass extends Form {
  plugins() {
    return {
      dvr: dvr({
        package: validatorjs,
        extend: ({ validator, form }) => {
          const messages = validator.getMessages('en')
          messages.required = "This field can't be empty!"
          messages.integer = 'This field must be a number!'
          validator.setMessages('en', messages)
        }
      })
    };
  }

  setup() {
    return {
      fields: [
        {
          name: "email",
          type: "text",
          rules: "required|string",
          label: "Email",
        },
        {
          name: "password",
          type: "password",
          rules: "required|string",
          label: "Password",
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        AuthService.login(form.values())
        console.log("Form Values!", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}
import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import AnimalService from '../../../Common/Services/AnimalService'

export default class AddAnimalForm extends Form {
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
          name: "name",
          type: "text",
          rules: "required|string",
          label: "Name",
        },
        {
          name: "type",
          type: "text",
          rules: "required|string",
          label: "Type",
        },
        {
          name: "description",
          type: "text",
          rules: "required|string",
          label: "Description",
        },
        {
          name: "product",
          type: "text",
          rules: "required|string",
          label: "Product",
        },
        {
          name: "cost",
          rules: "required|integer",
          label: "Cost",
        },
        {
          name: "quantity",
          rules: "required|integer",
          label: "Quantity",
        },
        {
          name: "profit",
          rules: "required|integer",
          label: "Profit",
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        AnimalService.newAnimal(form.values())
        console.log("Form Values!", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}
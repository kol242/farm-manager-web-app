import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import FieldService from '../../../Common/Services/FieldService'
import Units from '../../../Stores/Units'

export default class AddFieldForm extends Form {
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
          name: "treatment",
          type: "text",
          rules: "required|string",
          label: "Crop Treatment",
        },
        {
          name: "crop",
          type: "text",
          rules: "required|string",
          label: "Crop",
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
          name: "size",
          rules: "required|integer",
          label: "Size",
        },
        {
          name: "profit",
          rules: "required|integer",
          label: "Profit",
        },
        {
          name: "sizeUnit",
          label: "Size Unit",
          extra: Units.size
        },
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        FieldService.newField(form.values())
        console.log("Form Values!", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}
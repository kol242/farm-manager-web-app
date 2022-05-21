import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import CropService from '../../../Common/Services/CropService'
import Units from '../../../Stores/Units'

export default class AddCropForm extends Form {
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
        },
        {
          name: "harvested",
          label: "Harvested",
          extra: Units.harvested
        },
        {
          name: "state",
          type: "text",
          rules: "required|string",
          label: "State",
        },
        {
          name: "weight",
          label: "Weight Unit",
          extra: Units.weight
        },
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        CropService.newCrop(form.values())
        console.log("Form Values!", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}
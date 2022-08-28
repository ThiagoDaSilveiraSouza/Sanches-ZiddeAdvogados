// interface
import {
  IFieldsStatus,
  IFormValues,
  IValidateFormValuesResponse,
} from "../interface";

const validadeFieldIsNull = (
  formValues: IFormValues,
  response: IValidateFormValuesResponse
) => {
  const formValuesEntries = Object.entries(formValues);
  formValuesEntries.forEach(([key, entrie]) => {
    response.fields[key as keyof IFieldsStatus].fieldIsNull = !!entrie;
  });
};

const updateResponseStatus = (response: IValidateFormValuesResponse) => {
  const { fields } = response;
  const fieldsData = Object.entries(fields);

  fieldsData.forEach(([fieldsKey, fieldEntrie]) => {
    const values = Object.values(fieldEntrie);
    response.status = values.reduce(
      (status, currentStatus) => status && currentStatus,
      true
    );
  });
};

export const validateFormValues = (
  formValues: IFormValues
): IValidateFormValuesResponse => {
  const fieldsStatus = Object.keys(formValues).reduce(
    (fieldsStatus, currentField) => {
      fieldsStatus[currentField as keyof IFieldsStatus] = {
        fieldIsNull: false,
      };
      return fieldsStatus;
    },
    {} as IFieldsStatus
  );

  const response = {
    fields: fieldsStatus,
    status: false,
    alertIsOn: true,
  };

  validadeFieldIsNull(formValues, response);
  updateResponseStatus(response);

  return response;
};

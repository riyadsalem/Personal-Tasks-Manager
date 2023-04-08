import { IDisabled } from './IDisabled';

export default interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

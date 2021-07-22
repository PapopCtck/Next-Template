import dynamic from 'next/dynamic';

//components
const Alert = dynamic(() => import('./Alert'),{ ssr: false });
const Avatar = dynamic(() => import('./Avatar'),{ ssr: false });
const Button = dynamic(() => import('./Button'),{ ssr: false });
const Card = dynamic(() => import('./Card'),{ ssr: false });
const Checkbox = dynamic(() => import('./Checkbox'),{ ssr: false });
const Collapse = dynamic(() => import('./Collapse'),{ ssr: false });
const DatePicker = dynamic(() => import('./DatePicker'),{ ssr: false });
const DynamicForm = dynamic(() => import('./DynamicForm'),{ ssr: false });
const Form = dynamic(() => import('./Form'),{ ssr: false });
const Header = dynamic(() => import('./Header'),{ ssr: false });
const Input = dynamic(() => import('./Input'),{ ssr: false });
const InputWithLength = dynamic(() => import('./InputWithLength'),{ ssr: false });
const LegacyDatepicker = dynamic(() => import('./LegacyDatePicker'),{ ssr: false });
const LegacyTimePicker = dynamic(() => import('./LegacyTimePicker'),{ ssr: false });
const Modal = dynamic(() => import('./Modal'),{ ssr: false });
const OTPInput = dynamic(() => import('./OTPInput'),{ ssr: false });
const Pagination = dynamic(() => import('./Pagination'),{ ssr: false });
const ProgressBar = dynamic(() => import('./ProgressBar'),{ ssr: false });
const ReduxAlerts = dynamic(() => import('./ReduxAlerts'),{ ssr: false });
const Select = dynamic(() => import('./Select'),{ ssr: false });
const Skeleton = dynamic(() => import('./Skeleton'),{ ssr: false });
const StoryAvatar = dynamic(() => import('./StoryAvatar'),{ ssr: false });
const Table = dynamic(() => import('./Table'),{ ssr: false });
const TextArea = dynamic(() => import('./TextArea'),{ ssr: false });
const TextGradient = dynamic(() => import('./TextGradient'),{ ssr: false });
const UploadInput = dynamic(() => import('./UploadInput'),{ ssr: false });

//interfaces
export type { IAlert } from './Alert/Alert.interfaces';
export type { IAvatar } from './Avatar/Avatar.interfaces';
export type { IButton } from './Button/Button.interfaces';
export type { ICheckbox } from './Checkbox/Checkbox.interfaces';
export type { ICollapse } from './Collapse/Collapse.interfaces';
export type { IDatePicker } from './DatePicker/DatePicker.interfaces';
export type { IDynamicForm,IDynamicFormTemplate } from './DynamicForm/DynamicForm.interfaces';
export type { IForm } from './Form/Form.interfaces';
export type { IHeader } from './Header/Header.interfaces';
export type { IInputWithLength } from './Input/Input.interfaces';
export type { ILegacyDatepicker } from './DatePicker/DatePicker.interfaces';
export type { ILegacyTimepicker } from './DatePicker/DatePicker.interfaces';
export type { IModal } from './Modal/Modal.interfaces';
export type { IOTPInput } from './OTPInput/OTPInput.interfaces';
export type { IPagination } from './Pagination/Pagination.interfaces';
export type { IProgressBar } from './ProgressBar/ProgressBar.interfaces';
export type { IReduxAlerts } from './Alert/Alert.interfaces';
export type { ISelect, ICustomSelectProps } from './Select/Select.interfaces';
export type { ISkeleton } from './Skeleton/Skeleton.interfaces';
export type { IStoryAvatar } from './Avatar/Avatar.interfaces';
export type { ITextArea } from './TextArea/TextArea.interfaces';
export type { ITextGradient } from './TextGradient/TextGradient.interfaces';
export type { IUploadInput } from './UploadInput/UploadInput.interfaces';

export {
  //components
  Alert,
  Avatar,
  Button,
  Card,
  Checkbox,
  Collapse,
  DatePicker,
  DynamicForm,
  Form,
  Header,
  Input,
  InputWithLength,
  LegacyDatepicker,
  LegacyTimePicker,
  Modal,
  OTPInput,
  Pagination,
  ProgressBar,
  ReduxAlerts,
  Select,
  Skeleton,
  StoryAvatar,
  Table,
  TextArea,
  TextGradient,
  UploadInput,
};

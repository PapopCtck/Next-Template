import React, { ReactElement, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import { ChevronDown } from 'react-feather';

import commonConstant from '@/common/commonConstant';
import { IDatePicker, ILegacyDatepicker, IMONTHS, IDATE, IMONTH, IYEAR, ILegacyTimepicker } from './DatePicker.interfaces';
import { StyledDatePickerContainer, StyledLegacyDatePickerContainer, InlinePicker, LDSelect, StyledLegacyTimePickerContainer, LTTInlinePicker, LTSelect } from './DatePicker.styles';

import 'react-datepicker/dist/react-datepicker.css';

/**
 * Custom Datepicker using react-datepicker
 * @param {string} dateFormat react-datepicker format
 * @param {string} valueFormat return format using dayjs https://day.js.org/docs/en/display/format
 */
export const CustomDatePicker = ({
  label,
  className,
  block, suffix,
  errorMessage, customValidate,
  customValidateMessage, disabled,
  onChange, id, value, 
  dateFormat = 'dd/MM/yyyy',
  valueFormat = 'DD/MM/YYYY',
  ...rest
}: IDatePicker): ReactElement => {
  const [val, setVal] = useState<Date | null>(null);

  const handleChange = (date: Date | [Date, Date] | /* for selectsRange */ null) => {
    if (onChange) {
      if (date instanceof Date){
        onChange({ target: { id, value: dayjs(date).format(valueFormat) } },date);
      } else {
        onChange({ target: { id, value: date } },date);
      }
    } else {
      if (date instanceof Date || date === null){
        setVal(date);
      }
    }
  };

  return (
    <StyledDatePickerContainer block={block}>
      {
        label && <div className="label">{label}</div>
      }
      <DatePicker
        className={`date-picker ${className} ${customValidate ? 'showcustom' : ''}`}
        dateFormat={dateFormat}
        disabled={disabled}
        selected={value ? new Date(value) : val}
        onChange={handleChange}
        onChangeRaw={e => e.preventDefault()}
        {...rest}
      />
      {
        suffix && <span className={`suffix-icon ${disabled && 'disabled'}`}>
          {suffix}
        </span>
      }
      {
        errorMessage && <div className="error-message">{customValidate ? customValidateMessage : errorMessage}</div>
      }
    </StyledDatePickerContainer>
  );
};

export const LegacyDatepicker = (props: ILegacyDatepicker): ReactElement => {
  const { onChange, id , name , maxYear, minYear, value, showDate = true, showMonth = true, showYear = true, zeroFill = false, language = 'th' } = props;
  const date = new Date(value);
  const [day,setDay] = useState(date.getDate());
  const [month,setMonth] = useState(date.getMonth() + 1);
  const [year,setYear] = useState(date.getFullYear() + 543);

  const boolToInt = (bool: boolean) => bool ? 1 : 0;

  const inputCount = boolToInt(showDate) + boolToInt(showMonth) + boolToInt(showYear);

  const templateColumn = () => {
    const template = [];
    for (let i = 0; i < inputCount; i++){
      template.push('auto');
    }
    return template.join(' ');
  };

  useEffect(() => {
    const monthWithZero = month <= 9 ? `0${month}` : month;
    const dayWithZero = day <= 9 ? `0${day}` : day;
    let dayFomatted = '';
    const checkValid = (p: boolean,q: string | number) => !p || q; //material conditional
    const isValueValid = checkValid(showDate,dayWithZero) && checkValid(showMonth,monthWithZero) && checkValid(showYear,year);
    if (isValueValid){
      if (showYear && year){
        dayFomatted = dayFomatted.concat(year.toString());
      } else if (zeroFill){
        dayFomatted = dayFomatted.concat('0000');
      }
      if (showMonth && monthWithZero){
        if (dayFomatted === ''){
          dayFomatted = dayFomatted.concat(monthWithZero.toString());
        } else {
          dayFomatted = dayFomatted.concat('-',monthWithZero.toString());
        }
      } else if (zeroFill){
        if (dayFomatted === ''){
          dayFomatted = dayFomatted.concat('00');
        } else {
          dayFomatted = dayFomatted.concat('-00');
        }
      }
      if (showDate && dayWithZero){
        if (dayFomatted === ''){
          dayFomatted = dayFomatted.concat(dayWithZero.toString());
        } else {
          dayFomatted = dayFomatted.concat('-',dayWithZero.toString());
        }
      } else if (zeroFill){
        if (dayFomatted === ''){
          dayFomatted = dayFomatted.concat('00');
        } else {
          dayFomatted = dayFomatted.concat('-00');
        }
      }
      // const dayFomatted = year && monthWithZero && dayWithZero ? `${year}-${monthWithZero}-${dayWithZero}` : '';
      if (onChange){
        onChange({ 'target':{ name, id, 'value': dayFomatted } });
      }
    }
  },[day, id, month, name, onChange, year]);  

  const renderDayOptions = () => {
    const returnArr = [];
    for (let i = 1; i <= 31; i++){
      returnArr.push(
        <option value={i}>{i}</option>,
      );
    }
    return returnArr;
  };

  const renderMonthOptions = () => {
    const returnArr = [];
    const MONTHS = commonConstant.MONTHS as IMONTHS;
    for (let i = 0; i <= 11; i++){
      returnArr.push(
        <option value={i + 1}>{MONTHS[language][i]}</option>,
      );
    }
    return returnArr;
  };

  // const daysInMonth = (month, year) => new Date(year, month, 0).getDate(); 

  const renderYearOptions = () => {
    const returnArr = [];
    for (let i = maxYear; i >= minYear; i--){
      returnArr.push(
        <option value={i}>{language === 'th' ? i : i - 543 }</option>,
      );
    }
    return returnArr;
  };

  const DATE = commonConstant.date as IDATE;

  const MONTH = commonConstant.month as IMONTH;

  const YEAR = commonConstant.year as IYEAR;

  return (
    <StyledLegacyDatePickerContainer className="datepicker-container" style={{ 'gridTemplateColumns': templateColumn() }}>
      {
        showDate && <InlinePicker className="date">
          <LDSelect id="day" className={day ? '' : 'placeholder'} value={day ? day : ''} onChange={e => setDay(parseInt(e.target.value))}>
            <option value="" disabled>{DATE[language]}</option>
            {
              renderDayOptions()
            }
          </LDSelect>
          <div className="select_arrow">
            <ChevronDown />
          </div>
        </InlinePicker>
      }
      {
        showMonth && <InlinePicker className="month">
          <LDSelect className={month ? '' : 'placeholder'} value={month ? month : ''} onChange={e => setMonth(parseInt(e.target.value))}>
            <option value="" disabled>{MONTH[language]}</option>
            {
              renderMonthOptions()
            }
          </LDSelect>
          <div className="select_arrow">
            <ChevronDown />
          </div>
        </InlinePicker>    
      }
      {
        showYear && <InlinePicker className="year">
          <LDSelect className={year ? '' : 'placeholder'} value={year ? year : ''} onChange={e => setYear(parseInt(e.target.value))}>
            <option value="" disabled>{YEAR[language]}</option>
            {
              renderYearOptions()
            }
          </LDSelect>
          <div className="select_arrow">
            <ChevronDown />
          </div>
        </InlinePicker>
      }
    </StyledLegacyDatePickerContainer>
  );
};

export const LegacyTimePicker = (props: ILegacyTimepicker): ReactElement => {
  const { onChange, id , name, value } = props;
  const [hour,setHour] = useState(value ? parseInt(value.split(':')[0]) : 0);
  const [minute,setMinute] = useState(value ? parseInt(value.split(':')[1]) : 0);

  useEffect(() => {
    const isValueValid = minute >= 0 && hour >= 0;
    const minWithZero = minute <= 9 ? `0${minute}` : minute;
    const hrWithZero = hour <= 9 ? `0${hour}` : hour;
    let timeFomatted = '';
    if (isValueValid){
      timeFomatted = `${hrWithZero}:${minWithZero}`;
      if (onChange){
        onChange({ 'target':{ name, id, 'value': timeFomatted } });
      }
    }
  },[minute, hour]);  

  const renderHourOptions = () => {
    const returnArr = [];
    for (let i = 0; i <= 23; i++){
      const hrWithZero = i <= 9 ? `0${i}` : i;
      returnArr.push(
        <option value={i}>{hrWithZero}</option>,
      );
    }
    return returnArr;
  };

  const renderMinuteOptions = () => {
    const returnArr = [];
    for (let i = 0; i <= 59; i++){
      const minWithZero = i <= 9 ? `0${i}` : i;
      returnArr.push(
        <option value={i}>{minWithZero}</option>,
      );
    }
    return returnArr;
  };

  return (
    <StyledLegacyTimePickerContainer className="datepicker-container">
      <LTTInlinePicker className="hour">
        <LTSelect id="hour" className={hour || minute ? '' : 'placeholder'} value={hour} onChange={e => setHour(parseInt(e.target.value))}>
          <option value="" disabled>--</option>
          {
            renderHourOptions()
          }
        </LTSelect>
      </LTTInlinePicker>
      <LTTInlinePicker>:</LTTInlinePicker>
      <LTTInlinePicker className="minute">
        <LTSelect id="minute" value={minute} className={hour || minute ? '' : 'placeholder'} onChange={e => setMinute(parseInt(e.target.value))}>
          <option value="" disabled>--</option>
          {
            renderMinuteOptions()
          }
        </LTSelect>
      </LTTInlinePicker>    
    </StyledLegacyTimePickerContainer>
  );
};

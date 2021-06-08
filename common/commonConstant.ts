export default {
  // path
  pathLogin: '/',
  pathHome: '/',
  pathNotification: '/notification',
  pathError500: '/500',
  //path name
  Dashboard: 'ภาพรวม',
  //name
  AppName: 'NextApp',
  //word
  Logout: 'ออกจากระบบ',
  // image
  // action
  // - language
  SET_LANGUAGE_SUCCESS: 'SET_LANGUAGE_SUCCESS',
  // env
  envDomainApi: process.env.NEXT_PUBLIC_DOMAIN_API,
  envCookie: process.env.NEXT_PUBLIC_DOMAIN_COOKIE,
  // default value
  defaultLanguage: 'th',
  languageTH: 'th',
  languageEN: 'en',
  // language
  thai: 'ไทย',
  eng: 'EN',
  //cookie name
  cookieToken: 'next_token',
  // error
  // label
  DAYS: {
    'th': ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัส', 'วันศุกร์', 'วันเสาร์'],
    'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  SHORTDAYS: {
    'th': ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    'en': ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
  },
  MONTHS: {
    'th': ['ม.ค.', 'ก.พ.', 'ม.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
  'date': {
    'th': 'วันที่',
    'en': 'date',
  },
  'month': {
    'th': 'เดือน',
    'en': 'month',
  },
  'year': {
    'th': 'ปี พ.ศ.',
    'en': 'year',
  },
};

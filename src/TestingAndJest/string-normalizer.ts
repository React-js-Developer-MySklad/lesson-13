import {compose} from "../utils/compose";


const getOnlyDigits = (v: string) => v.replace(/[^\d-.]/g, '');
const removeMinus = (v: string) => v.replace(/-/g, '');
const removeWhiteSpaces = (v: string) => v.replace(/\s/g, '');

// https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-the-difference-between-imperative-and-declarative-in-react
// Imperative
// Мы говорим, что нужно сделать шаг за шагом

// Declarative
// Мы описываем то, что хотим получить

// Верни номер телефона с цифрами, без минуса
export const normalizePhone = compose(getOnlyDigits, removeMinus);

// Верни номер телефона с цифрами, без минуса
export const normalizePhoneImperative = (v: string) => {
  // Сохрание строку только с числами в result переменной
  const result = getOnlyDigits(v);
  // Верни нам строку без минусов
  return removeMinus(result);
};

// Верни номер телефона с цифрами, без минуса
export const normalizePhoneImperativeV2 = (v: string) => {
  // сохрани функции обработки строк  в массиве
  const functions = [getOnlyDigits, removeMinus];
  // создай строковую переменну result и присвой значение параметра v
  let result = v;
  // пройди по всему массиву функций
  for (const func of functions) {
    // выполни функцию обркботки строк и сохрани в переменной result
    result = func(result);
    // result = func(v)
  }

  // Верни переменную result
  return result;
};

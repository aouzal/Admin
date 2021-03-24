
//import numeral from 'numeral';
import { throwError } from 'rxjs';
// import { ORIGINS } from '../../shared/util/settings';
import {environment} from '../../../environments/environment';
//export const ServerUrl: string = environment.ServerUrl;
//export const ServerManar: string = environment.ServerManar;

export function format(value: number, options: any = {}): string {
    return new Intl.NumberFormat('ma-MA', {
        style: options.style || 'decimal',
        currency: options.currency || 'MAD',
        minimumFractionDigits: !isNaN(options.minimumFractionDigits) ? options.minimumFractionDigits : 2,
        maximumFractionDigits: !!options.maximumFractionDigits ? options.maximumFractionDigits : 2,
    }).format(value);
}

export function toggleAttribute(e: Element, name: string): void {
    if (!!e) {
        if (!e.hasAttribute(name)) {
            const attribute = document.createAttribute(name);
            e.setAttributeNode(attribute);
        } else {
            e.removeAttribute(name);
        }
    }
}

export function toggleClass(e: Element, name: string): void {
    if (!e.classList.contains(name)) {
      e.classList.add(name);
    } else {
      e.classList.remove(name);
    }
}

export function getDate(dateStr?: string): Date {
    if (!!dateStr) {
        const dateParts = dateStr.split('/');
        return new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    }
    return new Date();
}

// export function _n(number): string {
//     return !!number ? numeral(number).format('0.0a') : '0';
// }

export function getChartFormedData(data: any, total: number) {
  const array: Array <any> = [];
  Object.keys(data).forEach(key => {
    array.push({
      value: (data[key] / total) * 100,
      name: key,
    });
  });
  return array;
}

export function getChartFormedData2(data: any, total: number) {
  const array: Array<any> = [];
  let dev = 1;

  if (total < Math.pow(10, 6)) {
    dev = Math.pow(10, 4);
  } else if (Math.pow(10, 6) <= total && total < Math.pow(10, 9)) {
    dev = Math.pow(10, 6);
  } else if (Math.pow(10, 9) <= total) {
    dev = Math.pow(10, 9);
  }

  Object.keys(data).forEach((key) => {
    array.push({
      value: (data[key] / dev).toFixed(2),
      name: key,
    });
  });

  return array;
}





export function getChartFormedDataDevise(data: any, kname: string) {
  const array: Array <any> = [];
  Object.keys(data).forEach(key => {
    array.push({
      value: data[key][kname],
      name: key,
      devise: data[key]['devise'],
    });
  });
  return array;
}
export function getMinMax(data: Array <any>): any {
  return {
    min: Math.min.apply(Math, data.map(o => o.value)),
    max: Math.max.apply(Math, data.map(o => o.value)),
  };
}

   // Error handling
   export  function handleError(error) {
 let errorMessage = '';
 if (error.error instanceof ErrorEvent) {
   // Get client-side error
   errorMessage = error.error.message;
 } else {
   // Get server-side error
   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 }
 console.error(errorMessage);
 return throwError(errorMessage);
}



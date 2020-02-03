import { FormGroup, AbstractControl } from '@angular/forms';
import { isObject } from 'util';
import { Type } from '@angular/core';

export class Utils {

    public static str2null(s: string): string {
        if (!s) {
            return null;
        }
        s = s.trim();
        if (!s) {
            return null;
        }
        return s;
    }

    public static fullNameByFirstLast(first: string, last: string): string {
        first = first ? first.trim() : "";
        last = last ? last.trim() : "";

        if (!first && !last) {
            return "[No name provided]";
        };

        let space: string = first && last ? " " : "";

        return first + space + last;
    }

    public static timeFromStr(value: string): Date {
        if (!value) {
            return null;
        }

        if (!/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
            throw new Error("Wrong time format");
        }

        const year = 1970;
        const month = 0;
        const date = 1;
        const hours = parseInt(value.substr(0, 2));
        const minutes = parseInt(value.substr(3, 2));
        const result: Date = new Date(year, month, date, hours, minutes);

        return result;
    }

    public static timeFromDate(value: Date): Date {
        if (!value) {
            return null;
        }

        const year = 1970;
        const month = 0;
        const date = 1;
        const hours = value.getHours();
        const minutes = value.getMinutes();
        const result: Date = new Date(year, month, date, hours, minutes);

        return result;
    }

    public static b64toBlob(b64Data: string, contentType: string = "", sliceSize: number = 512): Blob {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    public static b64toArrayBuffer(base64: string): ArrayBuffer {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return <ArrayBuffer>bytes.buffer;
    }

    public static isDate(value: any) {
        //const result: boolean = !isNaN(Date.parse(value)) ? true : false;
        const regExp = new RegExp('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$');
        const result: boolean = regExp.test(value);
        return result;
    };

    public static isDateObject(value: any) {
        const result: boolean = Object.prototype.toString.call(value) === "[object Date]"
        return result;
    };

    public static formGroup2Model(fg: FormGroup, model: any): void {

        const names: string[] = Object.getOwnPropertyNames(model);

        names.forEach((name: string) => {
            if (!fg.contains(name)) {
                return;
            }
            model[name] = fg.get(name).value;
        })

    }
    public static model2FormGroup(model: any, fg: FormGroup, exclude?: string[]): void {

        const names: string[] = Object.getOwnPropertyNames(model);

        names.forEach((name: string) => {
            if (!fg.contains(name) || (exclude && exclude.find(x => x === name))) {
                return;
            }
            fg.get(name).setValue(model[name]);
        })
    }


    public static isNumeric(n: any): boolean {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    public static compareCaseInsensitive(s1: string, s2: string): boolean {
        if (!s1 && !s2) {
            return true;
        }
        if (!s1 || !s2) {
            return false;
        }
        return s1.toLowerCase() === s2.toLowerCase();
    }

    public static formChangesExist(model: any, form: FormGroup): boolean {

        if (!model || !form) {
            return false;
        }

        const keys: string[] = Object.keys(form.controls);
        const props: string[] = Object.getOwnPropertyNames(model);

        for (let i: number = 0; i < keys.length; i++) {
            const control: AbstractControl = form.get(keys[i]);
            const prop: string = props.find(x => x == keys[i]);
            // if (!prop) {
            //     throw new Error(`Property ${keys[i]} not found`);
            // }

            if (prop && model[prop] !== control.value) {
                return true;
            }
        }
        return false;
    }

    public static empty2Null(form: FormGroup, value: any) {
        Object.getOwnPropertyNames(value).forEach((a: any) => {
            if (typeof value[a] !== 'string') {
                return;
            }
            let s: string = value[a];
            if (s === '') {
                s = null;
            }
            if (s !== value[a]) {
                form.get(a).setValue(s);
            }
        })
    }

    public static isCompositeFilter(filter: any): boolean {
        const result: boolean =
            !!(filter &&
                filter.hasOwnProperty('logic') &&
                ['or', 'and'].find(x => x == filter['logic']) &&
                filter.hasOwnProperty('filters') &&
                Array.isArray(filter['filters'])
            );

        return result;
    }

    public static isSingleFilter(filter: any): boolean {
        const result: boolean =

            !!(filter &&
                filter.hasOwnProperty('field') &&
                filter.hasOwnProperty('operator') &&
                [
                    "eq",
                    "neq",
                    "isnull",
                    "isnotnull",
                    "lt",
                    "lte",
                    "gt",
                    "gte",
                    "startswith",
                    "endswith",
                    "contains",
                    "doesnotcontain",
                    "isempty",
                    "isnotempty"
                ].find(x => filter.operator) &&
                filter.hasOwnProperty('value'));
        return result;
    }

    public static propExists(obj: any, prop: string): boolean {
        if (!obj || !isObject(obj) || !prop) {
            return false;
        }

        const props = Object.getOwnPropertyNames(obj);

        for (let i: number = 0; i < props.length; i++) {
            if (props[i] === prop) {
                return true;
            }
        }

        return false;
    }

    public static copyProps(obj: Object, otherObj: Object, exclude?: string[]): void {
        if (!obj || !otherObj || !isObject(obj) || !isObject(otherObj)) {
            throw new Error("Invalid object passed to Utils.copyProps(...)");
        }

        let names: string[] = Object.getOwnPropertyNames(obj);

        if (exclude) {
            names = names.filter(x => !exclude.find(y => y === x));
        }

        for (let i = 0; i < names.length; i++) {
            const name: string = names[i];
            if (!otherObj.hasOwnProperty(name)) {
                throw new Error(`Other object does not have a property ${name}`);
            }

            obj[name] = otherObj[name];
        }

    }

    public static isObjectOfType(obj: any, type: Type<any>): boolean {
        if (!obj || !isObject(obj)) {
            return false;
        }
        const o: any = new type();
        const names: string[] = Object.getOwnPropertyNames(o);
        for (let i = 0; i < names.length; i++) {
            const prop: string = names[i];
            if (!obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    }


    public static convertDates(obj: any, dateFieldNames: string[]): void {
        if (!obj || !dateFieldNames) {
            return;
        }

        dateFieldNames.forEach(x => {
            obj[x] = obj[x] ? new Date(obj[x]) : obj[x];
        })

    }



    public static utc2local(date: Date): Date {
        const n: number = date.getTime() - date.getTimezoneOffset() * 60000;
        const result: Date = new Date(n);
        return result;
    }

}
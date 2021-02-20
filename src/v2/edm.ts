/*
https://www.odata.org/documentation/odata-version-2-0/overview/
https://www.odata.org/documentation/odata-version-2-0/json-format/
*/

import { DateTime as LuxonDateTime } from "luxon";
import { EdmType, ODataVersion, PrimitiveDataTypes } from "../base";

abstract class PrimitiveDataTypesV2 extends PrimitiveDataTypes {
  get version(): ODataVersion { return 'v2'; }
  get literal(): string { return `${this.value}`; }
  get jsonValue(): any { return this.value; };
}

class Null extends PrimitiveDataTypesV2 {
  constructor() { super(null); }
  get type(): EdmType { return 'Null'; }
}


class Binary extends PrimitiveDataTypesV2 {
  get type(): EdmType { return 'Edm.Binary'; }
  get literal(): string { return `binary'${this.value}'`; }
}

class Boolean extends PrimitiveDataTypesV2 {
  constructor(value: boolean) {
    super(value);
  }
  get type(): EdmType { return 'Edm.Boolean'; }
}

class Byte extends PrimitiveDataTypesV2 {
  constructor(value: number) { super(value); }
  get type(): EdmType { return 'Edm.Byte'; }
}

class SByte extends PrimitiveDataTypesV2 {
  constructor(value: number) { super(value); }
  get type(): EdmType { return 'Edm.SByte'; }
}


class DateTime extends PrimitiveDataTypesV2 {
  constructor(value: Date) {
    super(value);
  }
  get type(): EdmType { return 'Edm.DateTime'; }
  get literal(): string {
    return `datetime'${LuxonDateTime.fromJSDate(this.value).toFormat("yyyy-MM-ddTHH:mm:ss")}'`;
  }
  get jsonValue(): any {
    return `/Date(${this.value.getTime()})/`;
  }
}

class DateTimeOffset extends PrimitiveDataTypesV2 {
  constructor(value: Date) {
    super(value);
  }
  get type(): EdmType { return 'Edm.DateTimeOffset'; }
  get literal(): string {
    return `datetimeoffset'${LuxonDateTime.fromJSDate(this.value).toFormat("yyyy-MM-ddTHH:mm:ss")}'`;
  }
  get jsonValue(): any { return this.literal; }

}

abstract class NumericPrimitiveDataTypesV2 extends PrimitiveDataTypesV2 {
  constructor(value: number) { super(value); }
}

class Single extends NumericPrimitiveDataTypesV2 {
  get type(): EdmType { return 'Edm.Single'; }
  get literal(): string { return `${this.value}f`; }
  get jsonValue(): any { return this.literal; }
}

class Decimal extends NumericPrimitiveDataTypesV2 {
  get type(): EdmType { return 'Edm.Decimal'; }
  get literal(): string { return `${this.value}M`; }
  get jsonValue(): any { return this.literal; }
}

class Double extends NumericPrimitiveDataTypesV2 {
  get type(): EdmType { return 'Edm.Double'; }
  get literal(): string { return `${this.value}d`; }
  get jsonValue(): any { return this.literal; }
}


class Int16 extends NumericPrimitiveDataTypesV2 {
  get type(): EdmType { return 'Edm.Int16'; }
}

class Int32 extends NumericPrimitiveDataTypesV2 {
  get type(): EdmType { return 'Edm.Int32'; }
}

class Int64 extends NumericPrimitiveDataTypesV2 {
  get type(): EdmType { return 'Edm.Int64'; }
  get literal(): string { return `${this.value}L`; }
  get jsonValue(): any { return this.literal; }
}

class String extends PrimitiveDataTypesV2 {
  constructor(value: string) { super(value); }
  get type(): EdmType { return 'Edm.String'; }
}

class Guid extends String {
  get type(): EdmType { return 'Edm.Guid'; }
  get literal(): string { return `guid'${this.value}'`; }
  get jsonValue(): any { return this.literal; }
}


export const Edm = {
  Null,
  Binary,
  Boolean,
  Byte,
  SByte,
  DateTime,
  DateTimeOffset,
  Double,
  Single,
  Decimal,
  Int16,
  Int32,
  Int64,
  Guid,
  String,
};
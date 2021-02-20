/**

NullValue eq null
TrueValue eq true
FalseValue eq false
Custom.Base64UrlDecode(binary'T0RhdGE') eq 'OData'
IntegerValue lt -128
DoubleValue ge 0.31415926535897931e1
SingleValue eq INF
DecimalValue eq 34.95
StringValue eq 'Say Hello,then go'
DateValue eq 2012-12-03
DateTimeOffsetValue eq 2012-12-03T07:16:23Z
DurationValue eq duration'P12DT23H59M59.999999999999S'
DurationValue eq 'P12DT23H59M59.999999999999S'
TimeOfDayValue eq 07:59:59.999
GuidValue eq 01234567-89ab-cdef-0123-456789abcdef
Int64Value eq 0
ColorEnumValue eq Sales.Pattern'Yellow',
ColorEnumValue eq 'Yellow',
geo.distance(Location,geography'SRID=0;Point(142.1 64.1)')

{
  "NullValue": null,
  "TrueValue": true,
  "FalseValue": false,
  "BinaryValue": "T0RhdGE",
  "IntegerValue": -128,
  "DoubleValue": 3.1415926535897931,
  "SingleValue": "INF",
  "DecimalValue": 34.95,
  "StringValue": "Say \"Hello\",\nthen go",
  "DateValue": "2012-12-03",
  "DateTimeOffsetValue": "2012-12-03T07:16:23Z",
  "DurationValue": "P12DT23H59M59.999999999999S",
  "TimeOfDayValue": "07:59:59.999",
  "GuidValue": "01234567-89ab-cdef-0123-456789abcdef",
  "Int64Value": 0,
  "ColorEnumValue": "Yellow",
  "GeographyPoint": {"type": "point","coordinates":[142.1,64.1]}
}

*/

import { EdmType, ODataVersion, PrimitiveDataTypes } from "../base";

abstract class PrimitiveDataTypesV4 extends PrimitiveDataTypes {
  get version(): ODataVersion { return 'v2'; }
  get literal(): string { return `${this.value}`; }
  get jsonValue(): any { return this.value; };
}

class Null extends PrimitiveDataTypesV4 {
  constructor() { super(null); }
  get type(): EdmType { return 'Null'; }
}

class Binary extends PrimitiveDataTypesV4 {
  get type(): EdmType { return 'Edm.Binary'; }
  get literal(): string { return `binary'${this.value}'`; }
}

class Boolean extends PrimitiveDataTypesV4 {
  constructor(value: boolean) {
    super(value);
  }
  get type(): EdmType { return 'Edm.Boolean'; }
}

class Byte extends PrimitiveDataTypesV4 {
  constructor(value: number) { super(value); }
  get type(): EdmType { return 'Edm.Byte'; }
}

class SByte extends PrimitiveDataTypesV4 {
  constructor(value: number) { super(value); }
  get type(): EdmType { return 'Edm.SByte'; }
}

class DateTime extends PrimitiveDataTypesV4 {
  constructor(value: Date) { super(value); }
  get type(): EdmType { return 'Edm.DateTime'; }
  get literal(): string { return this.value.toISOString(); }
}

class DateTimeOffset extends PrimitiveDataTypesV4 {
  constructor(value: Date) { super(value); }
  get type(): EdmType { return 'Edm.DateTimeOffset'; }
  get literal(): string { return this.value.toISOString(); }
}

abstract class NumericPrimitiveDataTypesV4 extends PrimitiveDataTypesV4 {
  constructor(value: number) { super(value); }
}

class Single extends NumericPrimitiveDataTypesV4 {
  get type(): EdmType { return 'Edm.Single'; }
}

class Decimal extends NumericPrimitiveDataTypesV4 {
  get type(): EdmType { return 'Edm.Decimal'; }
}

class Double extends NumericPrimitiveDataTypesV4 {
  get type(): EdmType { return 'Edm.Double'; }
}


class Int16 extends NumericPrimitiveDataTypesV4 {
  get type(): EdmType { return 'Edm.Int16'; }
}

class Int32 extends NumericPrimitiveDataTypesV4 {
  get type(): EdmType { return 'Edm.Int32'; }
}

class Int64 extends NumericPrimitiveDataTypesV4 {
  get type(): EdmType { return 'Edm.Int64'; }
}

class String extends PrimitiveDataTypesV4 {
  constructor(value: string) { super(value); }
  get type(): EdmType { return 'Edm.String'; }
}

class Guid extends String {
  get type(): EdmType { return 'Edm.Guid'; }
}

class Date extends String {
  get type(): EdmType { return 'Edm.Date'; }
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
  Date,
};
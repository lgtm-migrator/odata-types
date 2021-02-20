
export type ODataVersion = 'v2' | 'v4'

export type EdmType =
  'Null' |
  'Edm.Binary' |
  'Edm.Boolean' |
  'Edm.Byte' |
  'Edm.DateTime' |
  'Edm.Decimal' |
  'Edm.Double' |
  'Edm.Single' |
  'Edm.Guid' |
  'Edm.Int16' |
  'Edm.Int32' |
  'Edm.Int64' |
  'Edm.SByte' |
  'Edm.String' |
  'Edm.Time' |
  'Edm.DateTimeOffset' |
  'Edm.Date';

export abstract class PrimitiveDataTypes {

  constructor(value: any) {
    this.value = value;
  }

  public value: any;

  abstract get version(): ODataVersion;

  abstract get type(): EdmType;

  abstract get literal(): string;

  abstract get jsonValue(): any;

}
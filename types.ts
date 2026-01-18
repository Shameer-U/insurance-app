export interface PolicyHolder {
  name: string;
  address: Address;
  contact: Contact;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Contact {
  phone: string;
  email: string;
}

export interface PolicyLimits {
  bodilyInjuryPerPerson: string;
  bodilyInjuryPerAccident: string;
  propertyDamagePerAccident: string;
  combinedSingleLimit: string;
}

export interface Vehicle {
  vehicleId: string;
  make: string;
  model: string;
  year: number | string;
  VIN: string;
  usage: string;
  coverage: Coverage;
}

export interface Coverage {
  collision: boolean;
  comprehensive: boolean;
  deductible: Deductible;
}

export interface Deductible {
  collision: string;
  comprehensive: string;
}

export interface Driver {
  driverId: string;
  name: string;
  licenseNumber: string;
  dateOfBirth: string;
  dateOfHire: string;
}

export interface Endorsement {
  endorsementId: string;
  description: string;
  effectiveDate: string;
  expirationDate: string;
}

export interface Premiums {
  annualPremium: string;
  paymentPlan: string;
  nextPaymentDue: string;
  paymentAmount: string;
}

export interface InsurancePolicy {
  id?: number;
  policyNumber: string;
  policyHolder: PolicyHolder;
  effectiveDate: string;
  expirationDate: string;
  policyLimits: PolicyLimits;
  vehicles: Vehicle[];
  drivers: Driver[];
  endorsements: Endorsement[];
  premiums: Premiums;
}
